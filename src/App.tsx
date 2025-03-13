import { useState, useRef, useEffect } from 'react'
import Child from './Child';
import Button from './Button';
import ButtonWithStyle from './ButtonWithStyle';

type User = {
  name: string
}

function App() {
  const [count, setCount] = useState(2)
  //correctly infers the primitive types so no need for useState<number>

  // const [user, setUser] = useState(null);
  //but here because we initialize null, it cannot know it will be object
  const [user, setUser] = useState<User | null>(null);
  const name = user?.name;
  //be careful when accessing

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ] as const;

  const buttonRef = useRef(null);

  useEffect(() => {
    console.log("Button element:", buttonRef.current); //no need for Child to accept it with forwardRef from React.19 
  }, []); 

  return (
    <>
      <h1>Hi</h1>
      {
        products.map((item)=>{
          console.log('item is ', item.title);
          
          return <p key={item.id} style={{color: item.isFruit ? 'green': 'orange'}}>{item.title} at {item.id}</p>
        })
      }
      <div>
        <Child count={20} name='Khatna'>
          <Button style={{
            fontSize: '32px'
          }}/>
          <ButtonWithStyle borderRadius={{
            topLeft: 10,
            topRight: 10,
            bottomRight: 10,
            bottomLeft: 10

          }}
          ref={buttonRef}
          />
          </Child>
      </div>
    </>
  )
}

export default App
