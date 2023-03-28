<?php

namespace App\Http\Controllers;

use App\Models\Component;
use Illuminate\Http\Request;

class ComponentController extends ResoureContoller
{

    public function __construct(Component $model)
    {
        $this->model = $model;
    }

}
