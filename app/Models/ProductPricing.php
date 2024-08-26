<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class ProductPricing extends Model
{
    use HasFactory;

    protected $table = 'product_pricing';

    protected $guarded=[];

    protected $casts = [
        'created_at' => 'datetime:M d, Y ~ h:i A',
        'updated_at' => 'datetime:M d, Y ~ h:i A',
    ];

    // public function setNameAttribute($value)
    // {
    //     $this->attributes['name'] = strtoupper($value);
    // }

    protected static function boot()
    {
        parent::boot();

        // Set created_by and modified_by during creation
        static::creating(function ($model) {
            $model->created_by = Auth::id();
            $model->modified_by = Auth::id();
        });

        // Set modified_by during update
        static::updating(function ($model) {
            $model->modified_by = Auth::id();
        });
    }

    // Example relationships in ProductPricing model
    public function product() {
        return $this->belongsTo(Product::class);
    }

    public function warehouse() {
        return $this->belongsTo(Warehouse::class);
    }

    public function taxCode() {
        return $this->belongsTo(TaxCode::class);
    }

    public function company() {
        return $this->belongsTo(Company::class);
    }

    public function form() {
        return $this->belongsTo(Form::class);
    }

}
