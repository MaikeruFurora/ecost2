<?php

namespace Database\Seeders;

use App\Models\Warehouse;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return Warehouse::insert([
            [
                'name' => 'BACOLOD',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'BATAAN',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'CALACA',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'CEBU',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'CAGAYAN',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'DAVAO',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'HARBOUR',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'MALABON',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'PAMPANGA',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'PNOC',
                'group' => 'MANILA',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'ZAMBOANGA',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'SURIGAO',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'ILOILO',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'GENSAN',
                'group' => 'PROVINCE',
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
        ]);
    }
}
