<?php

namespace Database\Seeders;

use App\Models\TaxCode;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TaxCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return TaxCode::insert([
            [
                'name' => 'OVAT-C',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'OVAT-E',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
