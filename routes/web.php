<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CostingController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['guest:web', 'preventBackHistory'])->name('auth.')->group(function () {
    Artisan::call('view:clear');
    Route::get('/', function () {  return view('auth/login'); })->name('login');
    Route::post('/post', [AuthController::class, 'loginPost'])->name('login.post');
});

Route::middleware(['auth:web','preventBackHistory','auth.user'])->name('auth.')->group(function(){
    Artisan::call('view:clear');
    /**
     * auth.item.index
     * auth.item.store
     * auth.item.create
     * auth.item.show
     * auth.item.update
     * auth.item.desctory
     */
    Route::resource('item',ItemController::class);
});