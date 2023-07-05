<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\Employee;

class APIController extends Controller
{
    public function getEmployeeSalary()
    {
        try{
            $data=Department::with('employees')->get();
            return response()->json(['status'=>200,'message'=>'Get Employee data successfully', 'data'=> $data]);
        }catch(\Exception $e)
        {
            return response()->json(['status'=>500,'message'=>$e->getMessage() ]);
        }
     
    }

    public function updateSalary(Request $request,$id)
    {
        try{
            $data=Employee::find($id);
            $data->salary = $request->salary;
            $data->save();
            return response()->json(['status'=>200,'message'=>'Employee record updated successfully']);
        }catch(\Exception $e)
        {
            return response()->json(['status'=>500,'message'=>$e->getMessage() ]);
        }
      
    }
}
