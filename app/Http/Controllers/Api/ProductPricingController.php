<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductPricingRequest;
use App\Models\Product;
use App\Models\ProductPriceLog;
use App\Models\ProductPricing;
use App\Models\Warehouse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductPricingController extends Controller
{

    protected $product;
    protected $timeStamped;
    protected $productPriceLog;
    protected $priceType;
    protected $productPricing;
    protected $warehouse;

    public function __construct() {
        $this->middleware('auth:sanctum');
        $this->timeStamped     = Carbon::now();
        $this->product         = new Product();
        $this->productPriceLog = new ProductPriceLog();
        $this->priceType       = new ProductPriceLog();
        $this->productPricing  = new ProductPricing();
        $this->warehouse       = new Warehouse();
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
            'company'             => 'required',
            'form'                => 'required',
            'tax_code'            => 'required',
            'selected_product'    => 'required',
            'selected_warehouses' => 'required',
            'pickup_price'        => 'required|not_in:0|gt:0',
        ]);

        $selectedWarehouse = array_values(array_unique($request->selected_warehouses ?? []));
        $selectedProduct = $request->selected_product;
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
     * @param  \App\Models\ProductPricing  $productPricing
     * @return \Illuminate\Http\Response
     */
    public function show(ProductPricing $productPricing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductPricing  $productPricing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $requestData = $this->validate($request, [
            'product_id'            => 'required',
            'product_price_type_id' => 'required',
            'price'                 => 'required|not_in:0|gt:0',
        ]);
    
        $requestData['created_by'] = auth()->user()->id;
        $priceLog = $this->productPriceLog->create($requestData);
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
        }
    
        return response()->json([
            'status' => $priceLog ? 'success' : 'error',
            'message' => $priceLog ? 'Successfully updated' : 'Something went wrong',
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductPricing  $productPricing
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductPricing $productPricing)
    {
        //
    }

    public function getAllPriceMatrix(ProductPricingRequest $request){

        $validatedData = $request->validated();

        $productPrice = $this->productPricing
            ->select('product_pricing.id',
                      'product_id', 
                      'warehouse_id',
                      'tax_code_id', 
                      'company_id', 
                      'form_id',
                      'pickup_price',
                      'volume_price',
                      'retail_price',
                      'warehouses.name as warehouse_name')
            ->join('warehouses', 'product_pricing.warehouse_id', '=', 'warehouses.id')
            ->where('product_id', $validatedData['product_id'])
            ->where('company_id', $validatedData['company_id'])
            ->where('form_id',    $validatedData['form_id'])
            ->where('tax_code_id',$validatedData['tax_code_id'])
            ->get();

        $warehouseList = $this->warehouse->where(['group' => $validatedData['group']])->get();

        $productPriceWarehouseIds = $productPrice->pluck('warehouse_id')->toArray();

        foreach ($warehouseList as $warehouse) {
            if (!in_array($warehouse->id, $productPriceWarehouseIds)) {
                $productPrice[] = [
                    'id'             => null,
                    'product_id'     => $validatedData['product_id'],
                    'warehouse_id'   => $warehouse->id,
                    'tax_code_id'    => $validatedData['tax_code_id'],
                    'company_id'     => $validatedData['company_id'],
                    'form_id'        => $validatedData['form_id'],
                    'warehouse_name' => $warehouse->name,
                    'pickup_price'   => 0,
                    'volume_price'   => 0,
                    'retail_price'   => 0,
                ];
            }
        }
        

        return response()->json([
            'dataList' => $productPrice,
            'dataListCount' => count($productPrice)
        ]);

        

    }
}
