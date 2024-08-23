<?php

namespace Database\Seeders;

use App\Models\Truck;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TruckSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return Truck::insert([
            [
                'name' => '10 WHEELER',
                'capacity' => 25000,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'TRAILER',
                'capacity' => 50000,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'FORWARD TRUCK',
                'capacity' => 15000,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'ELF TRUCK',
                'capacity' => 2000,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'HOPPER',
                'capacity' => 10000,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
            [
                'name' => 'PUP - PICK-UP',
                'capacity' => 0,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
                'created_by' => 1,
                'modified_by' => 1,
            ],
        ]);
    }
}
