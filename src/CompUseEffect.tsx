import { useEffect } from "react";

interface Todo{
    title: string,
    id: number,
    userId: number,
    completed: boolean
}

export default function CompUseEffect(){

    useEffect(()=>{
        // const fetchData = async () =>{
        //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //     const data : unknown = await response.json();
        //     //so now data here is of type "any" 
        //     //with unknown, better alternative, I cannot just start using it,
        //     //narrow it down before using
        //     if(typeof data === 'object' && data !== null && 'title' in data){
        //         console.log((data as {title: string}).title); 
        //         //this is still risky, if no title, runtime err
        //     }
        // }
        const fetchData = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data : Todo = await response.json();
            console.log(data.title);
        }
        fetchData();
    },[])

    return (
        <div>
            {/* {data} */}
        </div>
    );
}