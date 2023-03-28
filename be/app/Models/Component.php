<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends MasterModel
{
    use HasFactory;
    protected $table = 'component';
}
