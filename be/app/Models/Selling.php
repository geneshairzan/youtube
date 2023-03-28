<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Selling extends MasterModel
{
    protected $table = 'selling';
    protected $with = ['detail'];

    use HasFactory;

    public function detail()
    {
        return $this->hasMany(SellingDetail::class, 'selling_id', 'id');
    }
}
