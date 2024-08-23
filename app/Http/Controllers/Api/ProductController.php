<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductPriceLog;
use App\Models\ProductPriceType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\FormatsPaginatedResponse;
class ProductController extends Controller
{
    use FormatsPaginatedResponse;

    protected $product;
    protected $timeStamped;
    protected $productPriceLog;
    protected $priceType;
    public function __construct() {
        $this->product     = new Product();
        $this->timeStamped = Carbon::now();
        $this->middleware('auth:sanctum');
        $this->productPriceLog = new ProductPriceLog();
        $this->priceType   = new ProductPriceType();
    }

      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $query   = $request->get('query'); 
        $page    = $request->get('page'); 

        // $results =  Product::with(['warehouses','tax_codes','companies'])
        $results =  Product::select(['products.*', 'tax_codes.name as tax_code_name', 'companies.name as company_name', 'warehouses.name as warehouse_name', 'forms.name as form_name'])
                            ->join('tax_codes', 'products.tax_code_id', '=', 'tax_codes.id')
                            ->join('companies', 'products.company_id', '=', 'companies.id')
                            ->join('warehouses', 'products.warehouse_id', '=', 'warehouses.id')
                            ->join('forms', 'products.form_id', '=', 'forms.id')
                    ->where('code', 'LIKE', "%{$query}%")
                    ->orwhere('products.name', 'LIKE', "%{$query}%")
                    ->paginate(10, ['*'], 'page', $page);
                
        return response()->json($this->formatPaginatedResponse($results));
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
            'company'             => 'required',
            'form'                => 'required',
            'tax_code'            => 'required',
            'selected_product'    => 'required',
            'selected_warehouses' => 'required',
            'pickup_price'        => 'required|not_in:0|gt:0',
        ]);

        $selectedWarehouse =  array_values(array_unique($request->selected_warehouses ?? []));
        $selectedProduct   = $request->selected_product;
        $productData = [];
        foreach ($selectedWarehouse as $key => $value) {
            $productData[] = [
                'warehouse_id' => $value,
                'tax_code_id'  => $request->tax_code,
                'company_id'   => $request->company,
                'form_id'      => $request->form,
                'pickup_price' => $request->pickup_price ?? 0,
                'volume_price' => $request->volume_price ?? 0,
                'retail_price' => $request->retail_price ?? 0,
                'code'         => $selectedProduct['code'],
                'name'         => $selectedProduct['name'],
                'sku'          => $selectedProduct['sku'],
                'brand'        => $selectedProduct['brand'],
                'created_at'   => $this->timeStamped,
                'updated_at'   => $this->timeStamped,
            ];
        }

       
        
        
        foreach ($productData as $product) {
            $existing = $this->product
            ->where('code', $product['code'])
            ->where('form_id', $product['form_id'])
            ->where('brand', $product['brand'])
            ->where('sku', $product['sku'])
            ->where('warehouse_id', $product['warehouse_id'])
            ->first();
            
            if (!$existing) {
                DB::beginTransaction();
                $created = $this->product->create($product);

                $data = [
                    'product_id' => $created->id,
                ];

                foreach (['retail_price', 'pickup_price', 'volume_price'] as $priceType) {
                    if ($product[$priceType]) {
                        $data['price'] = $product[$priceType];
                        $data['product_price_type_id'] = $this->priceType->where('code', strtoupper($priceType))->value('id');
                        $this->productPriceLog->create($data);
                    }
                }
                DB::commit();
            }
        }
      
        return response()->json([
            'status' => 'success', 
            'message' => 'Product created successfully.'
        ], 200);
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
        
        $query = $request->get('q'); 
        $page = $request->get('p'); 

        // Perform search on the 'vw_products' view
        $results = DB::table('vw_products')
            ->where('itemname', 'LIKE', "%{$query}%")
            ->orwhere('itemname', 'LIKE', "%{$query}%")
            ->orwhere('brand', 'LIKE', "%{$query}%")
            ->paginate(10, ['*'], 'page', $page);
        
        // Return the paginated results in JSON format
       $data = array_map(function ($item,$key) {
            return [
                'id'     => ++$key,
                'code'   => $item->itemcode,
                'name'   => $item->itemname,
                'sku'    => $item->sku,
                'brand'  => $item->brand,
                'branch' => $item->branch,
                'groups' => $item->groups,
            ];
        }, $results->items(), array_keys($results->items()));

        return response()->json($this->formatPaginatedResponse($results,$data));
        
    }


    public function priceType(Request $request){
        
        return response()->json([
            'dataListCount'=> $this->priceType->all()->count(),
            'dataList'     => $this->priceType->orderBy('name','asc')->get(['id','name']),
        ]);
        
    }

    public function priceUpdate(Request $request){
        
        $requestData = $this->validate($request, [
            'product_id'            => 'required',
            'product_price_type_id' => 'required',
            'price'                 => 'required|not_in:0|gt:0',
        ]);
        $requestData['created_by'] = auth()->user()->id;
        $priceLog  = $this->productPriceLog->create($requestData);
        $priceType = $this->priceType->findOrFail($requestData['product_price_type_id']);

        switch ($priceType->code) {
            case 'pickup_price':
                $this->product::whereId($requestData['product_id'])->update(['pickup_price' => $requestData['price'], 'modified_by' => auth()->user()->id]);
                break;
            case 'volume_price':
                $this->product::whereId($requestData['product_id'])->update(['volume_price' => $requestData['price'], 'modified_by' => auth()->user()->id]);
                break;
            case 'retail_price':
                $this->product::whereId($requestData['product_id'])->update(['retail_price' => $requestData['price'], 'modified_by' => auth()->user()->id]);
                break;
            
            default:
                    return;
                break;
        }

        return response()->json([
            'status'  => $priceLog ? 'success' : 'error',
            'message' => $priceLog ? 'Successfully updated' : 'Something went wrong',
        ]);
      
    }
    
    
}
