<?php

namespace App\Http\Controllers;

use App\Models\Selling;
use Illuminate\Http\Request;

class SellingController extends ResoureContoller
{
    public function __construct(Selling $model)
    {
        $this->model = $model;
    }

    public function store(Request $r)
    {
        $selling = Selling::updateOrCreate(
            [
                'id' => $r->id,
            ], $r->except(['product'])
        );

        foreach ($r->product as $p) {
            $selling->detail()->updateOrCreate(
                [
                    'id' => isset($p['id']) ? $p['id'] : null,
                ],
                [...$p]
            );
            # code...
        }

        return response()->json($selling);
        $this->model::updateOrCreate(
            ['id' => $r->id],
            $r->all());
        return response()->json($r);
    }
}
