<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends ResoureContoller
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }
}
