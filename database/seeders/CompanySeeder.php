<?php

namespace Database\Seeders;

use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return Company::insert([
            [
                'name' => 'ARVIN - MAIN',
                'code' => 'ARVIN',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'RH - OTHER COMPANY',
                'code' => 'RH',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
