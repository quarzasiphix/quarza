<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\productController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/products', [productController::class], 'index');
Route::prefix('/items')->group( function() {
    Route::post('/product', [productController::class], 'store');
});

/*route::prefix('/products')->group( function() {
    Route::get('/products', [productController::class], 'index');
    //Route::get('/{id}', [productController::class, 'get']);
    //});*/




Route::get('/items', [ItemController::class, 'index']);
Route::prefix('/item')->group( function() {
    Route::post('/store', [ItemController::class, 'store']);
    Route::put('/{id}', [ItemController::class, 'update']);
});
