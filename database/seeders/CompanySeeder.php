<?php

namespace Database\Seeders;

use App\Models\Company;
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
            ['name' => 'ARVIN - MAIN'],
            ['name' => 'RH - OTHER COMPANY'],
        ]);
    }
}
