<?php

namespace Database\Seeders;

use App\Models\ProductPriceType;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductPriceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductPriceType::insert([
            [
                'name' => 'PICKUP PRICE',
                'code' => 'pickup_price',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'VOLUME PRICE',
                'code' => 'volume_price',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'RETAIL PRICE',
                'code' => 'retail_price',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
