<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CostingController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/csrf-token', function () {
    return response()->json([
        'csrf_token' => csrf_token()
    ],200);
});

Route::get('auth/forbidden', function () {
    return view('welcome');
})->name('not.authorized.page');