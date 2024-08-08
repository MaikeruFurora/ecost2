<?php
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TaxCodeController;
use App\Http\Controllers\Api\WarehouseController;
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
Route::get('auth/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::get('/products/searchProductFromSAP', [ProductController::class, 'searchProductFromSAP']);
    Route::resource('/products', ProductController::class);
    
    Route::get('/warehouses/getAllWwarehouses', [WarehouseController::class,'getAllWwarehouses']);
    Route::resource('/warehouses', WarehouseController::class);
    
    Route::get('/taxcodes/getAllTaxCodes', [TaxCodeController::class,'getAllTaxCodes']);
    Route::resource('/taxcodes', TaxCodeController::class);
    
    Route::get('/companies/getAllCompanies', [CompanyController::class,'getAllTaxCompanies']);
    Route::resource('/companies', CompanyController::class);
});
