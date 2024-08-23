<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime:M d, Y ~ h:i A',
        'updated_at' => 'datetime:M d, Y ~ h:i A',
    ];

     protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_at = $model->created_at ?: now();
            $model->updated_at = $model->updated_at ?: now();
            $model->created_by = Auth::id();
            $model->modified_by = Auth::id();
        });

        static::updating(function ($model) {
            $model->updated_at = now();
            $model->modified_by = Auth::id();
        });
    }



    public function warehouses(){
        return $this->belongsTo(Warehouse::class);
    }

    public function tax_codes(){
        return $this->belongsTo(TaxCode::class);
    }

    public function companies(){
        return $this->belongsTo(Company::class);
    }
    
}
