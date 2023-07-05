import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { forEach } from 'lodash';

function UserList() {

    const [userList,setUserList] = useState([]);
    const [flag,setFlag] = useState(false);
    const [totalSalary,setTotalSalary] = useState(0);
    const temp = 0;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/employee-salary').then((response)=>{
            let filteredUsers = response.data.data.filter((value)=>{
                if(value.employees.length > 0){
                    return value;
                }
            });
            setUserList(filteredUsers);
        })
    },[userList]);

    const handleText = () => {
        setFlag(true);
    }

    const handleChangeSalary = (event,id) => {
        const newValue = event.target.value;
        axios.put(`http://localhost:8000/api/update-salary/${id}`, { salary: newValue })
        .then(response => {
            setFlag(false);
            console.log('Value updated successfully',response);
        })
        .catch(error => {
            console.error('Error updating value:', error);
        });
    };

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
                        {
                            userList.map((value,index)=>(
                                <>
                                {
                                    value.employees.map((value1,index1)=>(
                                        <tr key={index1}>
                                            <td>{value1.name}</td>
                                            <td>{value.name}</td>
                                            <td onClick={handleText}>
                                            {
                                            (flag)
                                            ? <input type="text" onChange={(e) => handleChangeSalary(e,value1.id)}/> 
                                            : <input type="text" defaultValue={value1.salary}/>
                                            }
                                            </td>
                                        </tr>
                                    ))
                                }

                                <tr style={{fontWeight:'bold'}}>
                                    <td colSpan={2}>Total Salary Of {userList[index].name} Department</td>
                                    <td className="px-2">
                                    {
                                       userList[index].employees.reduce((i,value)=>{
                                        return parseInt(i.salary)+parseInt(value.salary);
                                       })
                                    }
                                    </td>
                                </tr>
                                </>
                            ))
                        }

                            <tr style={{fontWeight:'bold'}}>
                                <td colSpan={2}>Total Salary Of All Department</td>
                                <td>
                                    {/* {
                                        userList.forEach((value6,index6)=>{
                                            value6.employees.forEach((value5,index5)=>{
                                                return parseInt(temp)+parseInt(value5.salary);
                                            })
                                        })
                                    } */}
                                    {/* {totalSalary} */}
                                </td>
                            </tr>

                        </tbody>
            </table>
        </div>
    );
}

export default UserList;