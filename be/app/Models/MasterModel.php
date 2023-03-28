<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MasterModel extends Model
{
    use SoftDeletes;

    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

}
