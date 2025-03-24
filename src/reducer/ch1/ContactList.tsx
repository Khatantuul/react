import { useReducer, useState } from "react";
import { initialState, reducer, ReducerAction } from "./messengerReducer";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

type Contact = {
  id: number;
  name: string;
  email: string;
};
export default function Messenger() {
  // const [toSelectedId, setToSelectedId] = useState(contacts[0].id);
  // const selected = contacts.find((contact)=> {
  //   return contact.id === toSelectedId
  // })

  const [state, dispatch] = useReducer(reducer, initialState);
  const selected = contacts.find((contact)=> {
    return contact.id === state.selectedId
  })
  const message = state.message;

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        border: "1px solid red",
      }}
    >
      <ContactList contacts={contacts} 
      // onSelect={(contactId: number)=>{
      //   dispatch({type: 'CHANGE SELECTION', contactId})
      // }}
      //or simply we can pass the dispatch 
      dispatch={dispatch}
     
      />
      <Chat key={selected && selected.id} toWhom={selected} message={message} 
      //  onEdit={(message: string)=>dispatch({type: 'EDIT MESSAGE', message})}
      dispatch={dispatch}
      />
    </div>
  );
}

function ContactList({ contacts, dispatch }: { contacts: Contact[], 
  dispatch: (action: ReducerAction)=>void ,
}) {
  return (
    <ul style={{ listStyle: "none" }}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <button onClick={()=>dispatch({type: 'CHANGE SELECTION', contactId: contact.id})}>{contact.name}</button>
          </li>
        );
      })}
    </ul>
  );
}

interface ChatProps{
  toWhom?: Contact,
  message: string,
  // onEdit: (message: string) => void
  dispatch: (action: ReducerAction) =>void;
}

function Chat({ toWhom, message, dispatch }: ChatProps) {
  return (
    <div>
      <textarea style={{ padding: "20px", marginTop: "15px"}} value={message} 
      placeholder={`Chat to ${toWhom?.name}`}
      onChange={(e)=>{
       dispatch({type: 'EDIT MESSAGE', message: e.target.value})
      }}
      />

      <div>
        <button>Send to {toWhom?.name}</button>
      </div>
    </div>
  );
}
