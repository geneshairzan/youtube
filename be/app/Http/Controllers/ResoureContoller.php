<?php

namespace App\Http\Controllers;

use App\Models\Cage;
use Illuminate\Http\Request;

class ResoureContoller extends Controller
{
    protected $model;

    public function index()
    {
        //
        return response()->json($this->model::all());
    }

    public function create()
    {
        //
    }

    public function store(Request $r)
    {
        $this->model::updateOrCreate(
            ['id' => $r->id],
            $r->all());
        return response()->json($r);
    }

    public function show($id)
    {
        //
        return response()->json($this->model::find($id));

    }

    public function destroy(Cage $cage)
    {
        //
    }
}
