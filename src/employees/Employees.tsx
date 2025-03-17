import { useState } from 'react';
import {organizationData} from './data';

export default function EmployeeList(){
    const [employees, setEmployeers] = useState<Employee>(organizationData);  
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
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

    function findEmployeeById(id: number): (Employee | null){
        function find(employee: Employee): (Employee | null){
            if(employee.id === id){
                return employee
            }
            for(const report of employee.directReports){
                const found: Employee | null = find(report);
                if(found) return found;
            }

            return null;
        }
        const employee = find(employees);
        setSelectedEmployee(employee);
        return employee;
    }

    function addEmployee(employee: Employee, reportToId: number){
        function add(emp: Employee): Employee{
            if(reportToId === emp.id){
       
                return {...emp, directReports: [...emp.directReports, employee]}
            }
            const updated = emp.directReports.map(add)
         return {...emp, directReports: updated}
        }

        const updated = add(employees);
        if(updated) setEmployeers(updated);

    }

    const newEmployee = {
        id: 99,
        name: 'Khatantuul Batbold',
        title: 'Software Engineer',
        directReports: []
    }
    
    return (
        <>
        <h2>Employees</h2>
        <ol>
            <Employee employee={employees} onDelete={handleDelete} 
            onSelect={findEmployeeById} onAdd={addEmployee}
            newEmployee={newEmployee}/>
         
        </ol>
        <div>
            <h4>Selected Employee</h4>
            {selectedEmployee?.name}
        </div>
        {/* <div>
            <button onClick={()=>addEmployee(newEmployee, )}>Add new</button>
        </div> */}

        </>
    );
}

type Employee = {
    id: number;
    name: string;
    title: string;
    directReports: Employee[];
  };
  
function Employee({employee, onDelete, onSelect, onAdd, newEmployee} : {employee: Employee, 
    onDelete: (id: number)=>void,
onSelect: (id: number)=>Employee | null, 
onAdd: (emp: Employee, reportToId: number)=>void, newEmployee: Employee}){
    return (
        <>
     <div style={{display: 'flex', gap:'10px', padding: '10px'}}>
     <li>{employee.name} - {employee.title}</li>
     <button onClick={()=>onDelete(employee.id)}>Delete</button>
     <button onClick={()=> onSelect(employee.id)}>Select</button>
     {employee.title.startsWith('C') && <button onClick={()=>onAdd(newEmployee,employee.id)}>Add New Under</button>}
     </div>
       <ol>
            {employee.directReports.map((child)=>{
                return <Employee key={child.id} employee={child} onDelete={onDelete} onSelect={onSelect} onAdd={onAdd} newEmployee={newEmployee}/>
            })}
       </ol>
       </>
    );  
}