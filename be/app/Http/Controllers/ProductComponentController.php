<?php

namespace App\Http\Controllers;

use App\Models\ProductComponent;
use Illuminate\Http\Request;

class ProductComponentController extends ResoureContoller
{

    public function __construct(ProductComponent $model)
    {
        $this->model = $model;
    }

}
