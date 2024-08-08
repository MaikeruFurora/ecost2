<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    protected $product;
    public function __construct() {
        $this->product = new Product();
        $this->middleware('auth:sanctum');
    }

      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'selected_product' => 'required',
            'selected_warehouses' => 'required',
            'pickup_price' => 'required|not_in:0',
        ]);

        $selectedWarehouse =  array_values(array_unique($request->selected_warehouses ?? []));
        $selectedProduct   = $request->selected_product;
        $prodcutData = [];
        foreach ($selectedWarehouse as $key => $value) {
            $prodcutData[] = [
                'warehouse_id' => $value,
                'text_code_id' => $request->tax_code,
                'company_id'   => $request->company,
                'pickup_price' => $request->pickup_price ?? 0,
                'volume_price' => $request->volume_price ?? 0,
                'code'         => $selectedProduct['code'],
                'code'         => $selectedProduct['code'],
                'sku'          => $selectedProduct['sku'],
                'brand'        => $selectedProduct['brand'],
                'created_by'   => auth()->user()->id,
            ];
        }

        return $prodcutData;


        $this->product->create($prodcutData);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function searchProductFromSAP(Request $request){
        
        $query = $request->get('q'); // Default to empty string if 'query' is not provided
        $page = $request->get('p'); // Default to empty string if 'query' is not provided

        // Perform search on the 'vw_products' view
        $results = DB::table('vw_products')
            ->where('itemname', 'LIKE', "%{$query}%")
            ->orwhere('itemname', 'LIKE', "%{$query}%")
            ->orwhere('brand', 'LIKE', "%{$query}%")
            ->paginate(10, ['*'], 'page', $page);
        
        // Return the paginated results in JSON format
       $data = array_map(function ($item,$key) {
            return [
                'id' => ++$key,
                'code' => $item->itemcode,
                'name' => $item->itemname,
                'sku' => $item->sku,
                'brand' => $item->brand,
                'branch' => $item->branch,
                'groups' => $item->groups,
            ];
        }, $results->items(), array_keys($results->items()));
        // $data = array_map(function ($item, $key) {
        //     $item->id = $key + 1;
           
        // }, $results->items(), array_keys($results->items()));
       

        return response()->json([
            'current_page'   => $results->currentPage(),
            'dataList'       => $data,
            'first_page_url' => $results->url(1),
            'from'           => $results->firstItem(),
            'last_page'      => $results->lastPage(),
            'last_page_url'  => $results->url($results->lastPage()),
            'next_page_url'  => $results->nextPageUrl(),
            'per_page'       => $results->perPage(),
            'prev_page_url'  => $results->previousPageUrl(),
            'to'             => $results->lastItem(),
            'total'          => $results->total(),
            'links'          => [
                'first' => $results->url(1),
                'last'  => $results->url($results->lastPage()),
                'prev'  => $results->previousPageUrl(),
                'next'  => $results->nextPageUrl(),
            ],
        ]);
        
    }
}
