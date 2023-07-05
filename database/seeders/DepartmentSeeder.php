<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::create([
            'name' => 'PHP',
        ]);
        Department::create([
            'name' => 'Dot Net',
        ]);
        Department::create([
            'name' => 'JavaScript',
        ]);
        Department::create([
            'name' => 'Python',
        ]);
        Department::create([
            'name' => 'GO',
        ]);
        Department::create([
            'name' => 'C',
        ]);
    }
}
