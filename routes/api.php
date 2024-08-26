<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\DestinationSubController;
use App\Http\Controllers\Api\DestinationRateController;
use App\Http\Controllers\Api\FormController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductPriceLogController;
use App\Http\Controllers\Api\ProductPricingController;
use App\Http\Controllers\Api\TaxCodeController;
use App\Http\Controllers\Api\WarehouseController;
use App\Http\Controllers\Api\TruckController;
use App\Models\DestinationHeader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/logout', [AuthController::class, 'logout']);
Route::get('auth/csrf-token', [AuthController::class, 'csrfToken']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::resource('/price-log', ProductPriceLogController::class);
    
    
    Route::get('/product/price-type', [ProductController::class, 'priceType']);
    Route::post('/product/price-update', [ProductController::class, 'priceUpdate']);
    Route::get('/product/search-product-from-SAP', [ProductController::class, 'searchProductFromSAP']);
    Route::resource('/product', ProductController::class);
    
    Route::get('/product-pricing/get-all-price-matix', [ProductPricingController::class, 'getAllPriceMatrix']);
    Route::resource('/product-pricing', ProductPricingController::class);
    
    Route::get('/warehouse/get-all-warehouse-group', [WarehouseController::class,'getAllWarehouseGroup']);
    Route::get('/warehouse/get-all-warehouses', [WarehouseController::class,'getAllWarehouses']);
    Route::resource('/warehouse', WarehouseController::class);
    
    Route::get('/taxcode/get-all-tax-codes', [TaxCodeController::class,'getAllTaxCodes']);
    Route::resource('/taxcode', TaxCodeController::class);
    
    Route::get('/company/get-all-companies', [CompanyController::class,'getAllTaxCompanies']);
    Route::resource('/company', CompanyController::class);
    
    Route::get('/form/get-all-forms', [FormController::class, 'getAllForms']);
    Route::resource('/form', FormController::class);

    Route::get('/truck/get-all-trucks', [TruckController::class, 'getAllTrucks']);
    Route::resource('/truck', TruckController::class);
    
    Route::get('/destination/trucking-matrix', [DestinationController::class, 'truckingMatrix']);
    Route::get('/destination/get-all', [DestinationController::class, 'getAllDestination']);
    Route::resource('/destination', DestinationController::class);
    
    Route::resource('/destinationrate', DestinationRateController::class);
    
    Route::get('/destinationdetail/get-all-destination-headers', [DestinationSubController::class, 'getAllDestinationHeaders']);
    Route::resource('/destinationdetail', DestinationSubController::class);
    
});
