<?php

namespace Database\Seeders;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::insert([
            [
                
                'code'        => 'FG-20-0065',
                'name'        => 'VIETNAMESE LONG GRAIN WHITE RICE 25 KLS',
                'brand'       => 'MASTERCHEF - BLUE',
                'sku'         => 25,
                'group'       => 'MANILA', 
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                
                'code'        => 'FG-10-0001',
                'name'        => 'ALUMINUM SULFATE',
                'brand'       => null,
                'sku'         => 50,
                'group'       => 'MANILA', 
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                
                'code'        => 'FG-10-0020',
                'name'        => 'SAPONIFICATION POWDER 50 KLS',
                'brand'       => 'CHINA',
                'sku'         => 50,
                'group'       => 'MANILA', 
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                
                'code'        => 'FG-10-0020',
                'name'        => 'SAPONIFICATION POWDER 50 KLS',
                'brand'       => 'CHONGQING',
                'sku'         => 50,
                'group'       => 'MANILA', 
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
        ]);
    }
}
