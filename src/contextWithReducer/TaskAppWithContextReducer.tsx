import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

let nextId = 3;
const initialTasks = [
  { id: 0, title: "Philosopher’s Path", done: true },
  { id: 1, title: "Visit the temple", done: false },
  { id: 2, title: "Drink matcha", done: false },
];

type Task = {
  id: number;
  title: string;
  done: boolean;
};
type TaskAction =
  | { type: "TOGGLE_DONE"; id: number }
  | { type: "ADD_NEW"; task: Task }
  | { type: "EDIT_TASK"; task: Task }
  | { type: "DELETE"; id: number };

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

//context
const TasksContext = createContext<TasksContextType>({
  tasks: initialTasks,
  dispatch: () => {},
});

interface ReducerProps<S, A> {
  state: S;
  action: A;
}

const reducer = (state: Task[], action: TaskAction) => {
  switch (action.type) {
    case "TOGGLE_DONE":
      return state.map((item: Task) => {
        return item.id === action.id ? { ...item, done: !item.done } : item;
      });
    case "ADD_NEW":
      return [...state, action.task];
    case "EDIT_TASK":
      return state.map((item: Task) => {
        return item.id === action.task.id ? { ...item, ...action.task } : item;
      });
    case "DELETE":
      return state.filter((item: Task) => item.id !== action.id);
  }
};

export function TasksContextProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
function useTasksContext() {
  const context = useContext(TasksContext);
  if (context === undefined) throw new Error("Did you forget to wrap");
  return context;
}

export default function TaskAppWithContextReducer() {
  const { tasks } = useTasksContext();
  return (
    <>
      <h2>Day off in Kyoto</h2>
      <AddNew />
      <TaskList tasks={tasks} />
    </>
  );
}

function AddNew() {
  const [title, setTitle] = useState("");
  const { dispatch } = useTasksContext();
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_NEW",
            task: { id: nextId++, title, done: false },
          })
        }
      >
        Add
      </button>
    </>
  );
}

function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task: Task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

function Task({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useTasksContext();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.title}
          onChange={(e) =>
            dispatch({
              type: "EDIT_TASK",
              task: { ...task, title: e.target.value },
            })
          }
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
        <span>{task.title}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch({ type: "TOGGLE_DONE", id: task.id })}
      />
      {taskContent}
      <button onClick={() => dispatch({ type: "DELETE", id: task.id })}>
        Delete
      </button>
    </li>
  );
}
