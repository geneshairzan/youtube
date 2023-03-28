<?php

namespace App\Http\Controllers;

use App\Models\Cage;
use Illuminate\Http\Request;

class CageController extends ResoureContoller
{
    public function __construct(Cage $cage)
    {
        $this->model = $cage;
    }

}
