<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public static function manilaGroup()
    {
        return Static::where('group', 'Manila');
    }

    public static function provinceGroup()
    {
        return Static::where('group', 'Province');
    }
}
