<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends MasterModel
{
    use HasFactory;
    protected $table = 'product';

    protected $with = ['category', 'component'];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'category_id', 'id');

    }

    public function component()
    {
        return $this->hasMany(ProductComponent::class, 'product_id', 'id');

    }

    public function sellingdetail()
    {
        return $this->belongsTo(SellingDetail::class, 'id', 'product_id');

    }
}
