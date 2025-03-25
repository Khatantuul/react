import { useReducer, useState } from "react";

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type ReducerActionType = 'ADD' | 'CHANGE' | 'DELETE';

type ReducerAction = {
  type: ReducerActionType;
  id?: number;
  task?: Task;
};

const reducer = (state: typeof initialTasks, action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      return action.task ? [...state, action.task]: state;
    case "CHANGE":
      return state.map((task)=> {
       return task.id === (action.task ? action.task.id : action.id) ? action.task ?? task: task;
      })
    case "DELETE":
      return action.id ? state.filter((task) => {
        return task.id !== action.id;
      }) : state;
  }
};

export default function TaskApp() {
//   const [tasks, setTasks] = useState(initialTasks);
  const handleAdd = (task: Task) => {
    dispatch({type: 'ADD', task})
  };
  const handleEdit = (nextTask: Task) => {
   dispatch({type: 'CHANGE', task: nextTask})
  };

  const handleDelete = (id: number) => {
   dispatch({type: 'DELETE', id})
  };

    const [state, dispatch] = useReducer(reducer, initialTasks);
  return (
    <>
      <h2>Prague itinerary</h2>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={state} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

function AddTask({ onAdd }: { onAdd: (task: Task) => void }) {
  const [text, setText] = useState("");
  return (
    <>
      <label>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            onAdd({ id: nextId++, text, done: false });
          }}
        >
          Add
        </button>
      </label>
    </>
  );
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (nextTask: Task) => void;
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />;
      })}
    </ul>
  );
}

interface TaskProps {
  task: Task;
  onEdit: (nextTask: Task) => void;
  onDelete: (id: number) => void;
}
function Task({ task, onEdit, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onEdit({ ...task, text: e.target.value });
          }}
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <li style={{ display: "flex", gap: "10px" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          onEdit({ ...task, done: !task.done });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
