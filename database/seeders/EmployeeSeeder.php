<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Employee::create([
            'department_id' => '1',
            'name' => 'Abhishek',
            'salary' => '15000',
        ]);
        Employee::create([
            'department_id' => '1',
            'name' => 'Ashish',
            'salary' => '12000',
        ]);
        Employee::create([
            'department_id' => '2',
            'name' => 'Alok',
            'salary' => '10000',
        ]);
        Employee::create([
            'department_id' => '2',
            'name' => 'Ajit',
            'salary' => '8000',
        ]);
    }
}
