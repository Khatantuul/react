import { useState } from 'react';
import {organizationData} from './data';

export default function EmployeeList(){
    const [employees, setEmployeers] = useState<Employee>(organizationData);  

    function handleDelete(id: number){
        function recur(employee: Employee){
            if(employee.id === id){
                return null;
            }
            const updatedChildren = employee.directReports
                .map(recur)
                .filter(Boolean) as Employee[];
            return {...employee, directReports: updatedChildren}
        }
        const updatedEmployees = recur(employees);
        if(updatedEmployees) setEmployeers(updatedEmployees);
    }
    
    return (
        <>
        <h2>Employees</h2>
        <ol>
            <Employee employee={employees} onDelete={handleDelete}/>
         
        </ol>
        </>
    );
}

type Employee = {
    id: number;
    name: string;
    title: string;
    directReports: Employee[];
  };
  
function Employee({employee, onDelete} : {employee: Employee, onDelete: (id: number)=>void}){
    return (
        <>
     <div style={{display: 'flex', gap:'10px', padding: '10px'}}>
     <li>{employee.name} - {employee.title}</li>
     <button onClick={()=>onDelete(employee.id)}>Delete</button>
     </div>
       <ol>
            {employee.directReports.map((child)=>{
                return <Employee key={child.id} employee={child} onDelete={onDelete}/>
            })}
       </ol>
       </>
    );  
}