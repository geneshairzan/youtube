<?php

namespace App\Models;

class Animals extends MasterModel
{

    protected $with = ['cage'];

    public function cage()
    {
        return $this->BelongsTo(Cage::class, 'cage_id', 'id');
        # code...
    }

}
