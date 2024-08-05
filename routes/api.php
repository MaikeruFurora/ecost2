<?php
use App\Http\Controllers\Api\AuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/logout', [AuthController::class, 'logout']);
// Route::apiResource('auth', AuthController::class);

Route::get('/products/searchProductFromSAP', [ProductController::class, 'searchProductFromSAP']);
Route::apiResource('/products', ProductController::class);

Route::get('/warehouses/getAllWwarehouses', [WarehouseController::class,'getAllWwarehouses']);
Route::apiResource('/warehouses', WarehouseController::class);

Route::get('/taxcodes/getAllTaxCodes', [TaxCodeController::class,'getAllTaxCodes']);
Route::apiResource('/taxcodes', TaxCodeController::class);