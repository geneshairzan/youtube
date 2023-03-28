<?php

namespace App\Models;

class ProductComponent extends MasterModel
{
    protected $table = 'product_component';
    protected $with = ['component'];

    public function component()
    {
        return $this->belongsTo(Component::class, 'component_id', 'id');

    }
}
