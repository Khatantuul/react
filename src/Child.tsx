import { PropsWithChildren, useState } from "react";
interface ChildProps{
    name: string,
    count?: number;
}

type User = {
    sessionId: string,
    name: 'string'
}
//since its Guest, no registration so no name would be known
//but would want to get the sessionid
type Guest = Omit<User,'name'>;

export default function Child({name, count, children} : PropsWithChildren<ChildProps>){
    const [age, setAge] = useState(30);

    const returnValue =  (
        <div>
            <p>Hello, this is Child {age}</p>
            <button onClick={()=> setAge(prev=>prev +1)}>Change age</button>
            {children}
        </div>
    );
    // console.log(returnValue);
    
    return returnValue;
}