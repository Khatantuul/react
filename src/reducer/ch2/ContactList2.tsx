import { useReducer, useState } from "react";
import { initialState, reducer, ReducerAction } from "./messengerReducer2";

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
export default function Messenger2() {
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
      
      }}
    >
      <ContactList contacts={contacts} 
      dispatch={dispatch}
     
      />
      <Chat key={selected && selected.id} toWhom={selected} message={message} 
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
        <button onClick={()=>{
          alert(`Sending ${message} to ${toWhom?.email}`)
          dispatch({type: 'EDIT MESSAGE', message: ''})
        }}>Send to {toWhom?.email}</button>
      </div>
    </div>
  );
}
