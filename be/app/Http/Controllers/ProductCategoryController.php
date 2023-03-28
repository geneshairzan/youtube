<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoryController extends ResoureContoller
{

    public function __construct(ProductCategory $model)
    {
        $this->model = $model;
    }

}
