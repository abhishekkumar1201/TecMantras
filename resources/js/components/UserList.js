import React from 'react';
import ReactDOM from 'react-dom';

function UserList() {
    return (
        <div className="container mt-3">
            <h1 className='text-center font-weight-bold'>User List</h1>
            <table className='table table-bordered table-hover mt-3'>
                <thead className='bg-secondary text-light font-weight-bold'>
                    <tr>
                        <td>Employee</td>
                        <td>Department</td>
                        <td>Salary</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>PHP</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>PHP</td>
                        <td>15000</td>
                    </tr>
                    <tr className='font-weight-bold bg-light'>
                        <td colSpan={2}>Total Salary Of PHP Department</td>
                        <td>25000</td>
                    </tr>

                    <tr>
                        <td>C</td>
                        <td>.Net</td>
                        <td>12000</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>.Net</td>
                        <td>17000</td>
                    </tr>
                    <tr className='font-weight-bold bg-light'>
                        <td colSpan={2}>Total Salary Of .Net Department</td>
                        <td>29000</td>
                    </tr>

                    <tr className='font-weight-bold bg-light'>
                        <td colSpan={2}>Total Salary Of All Department</td>
                        <td>54000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserList;