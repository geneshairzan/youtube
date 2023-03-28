<?php

use App\Http\Controllers\AnimalsController;
use App\Http\Controllers\CageController;
use App\Http\Controllers\ComponentController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductComponentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SellingController;
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

Route::resource('animal', AnimalsController::class);
Route::resource('cage', CageController::class);
Route::resource('component', ComponentController::class);
Route::resource('productcategory', ProductCategoryController::class);
Route::resource('productcomponent', ProductComponentController::class);
Route::resource('product', ProductController::class);

Route::resource('selling', SellingController::class);
