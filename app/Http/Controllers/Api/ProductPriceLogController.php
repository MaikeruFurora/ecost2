<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\ProductPriceLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Traits\FormatsPaginatedResponse;

class ProductPriceLogController extends Controller
{

    use FormatsPaginatedResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    protected $productPriceLog;
    public function __construct(){
        $this->productPriceLog = new ProductPriceLog();
    }

    public function index(Request $request)
    {
        $q = $request->get('q'); 
        $p  = $request->get('p'); 
        $i = $request->get('i'); 

        $results =  $this->productPriceLog->select(
                        'product_price_logs.created_at',
                        'product_price_logs.price as price',
                        'product_price_types.name as price_type_name',
                        'products.name as product_name',
                        'users.name as created_by')
                        ->join('products', 'product_price_logs.product_id', '=', 'products.id')
                        ->join('product_price_types', 'product_price_logs.product_price_type_id', '=', 'product_price_types.id')
                        ->join('users', 'product_price_logs.created_by', '=', 'users.id')
                    ->where([
                        ['product_id', $i],
                        ['product_price_logs.price', 'LIKE', "%{$q}%"],
                        ['product_price_types.name', 'LIKE', "%{$q}%"],
                    ])
                    ->orderBy('product_price_logs.created_at', 'desc')
                    ->paginate(10, ['*'], 'page', $p);

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
        $validatedData = $request->validate([
            'name'     => 'required',
            'price'    => 'required|not_in:0|gt:0',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductPriceLog  $productPriceLog
     * @return \Illuminate\Http\Response
     */
    public function show(ProductPriceLog $productPriceLog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductPriceLog  $productPriceLog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductPriceLog $productPriceLog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductPriceLog  $productPriceLog
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductPriceLog $productPriceLog)
    {
        //
    }
}
