<?php

namespace App\Models;

class SellingDetail extends MasterModel
{
    protected $table = 'selling_detail';
    protected $with = [];

    public function selling()
    {
        return $this->belongsTo(Selling::class, 'selling_id', 'id');

    }
}
