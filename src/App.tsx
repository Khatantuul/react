// import Game from "./tictactoe/Game";
import CommentList from "./commentStructure/Comments";
import ContextChallengeMain, { ImageSizeContextProvider } from "./context/Main";
import TaskAppWithContextReducer, { TasksContextProvider } from "./contextWithReducer/TaskAppWithContextReducer";
import EmployeeList from "./employees/Employees";
import Form from "./form/Form";
import FormWithReducer from "./form/FormWithReducer";
import GoalContextProvider from "./mockInterview/context";
import FitnessTracker from "./mockInterview/Fitness";
import Counter from "./reducer/basic/Counter";
import Messenger from "./reducer/ch1/ContactList";
import Messenger2 from "./reducer/ch2/ContactList2";
import Messenger3 from "./reducer/ch3/ContactList3";
import TaskApp from "./reducer/TaskApp";
import CakeContainer from "./redux/react-redux/CakeContainer";
import { store } from "./redux/react-redux/cakeStore";
import {
  LocationContext,
  LocationContextProvider,
} from "./testInterview/LocationContextProvider";
import MainInterview from "./testInterview/MainInterview";
import TravelPlan from "./travelPlan/TravelPlan";
import { Provider } from "react-redux";
function App() {
  return (
    // <LocationContextProvider>
    //   <MainInterview />
    // </LocationContextProvider>
    // <TaskApp />
    // <Messenger3 />
    // <Form />
    
    // <FormWithReducer />
 
    // <ImageSizeContextProvider>
    //   <ContextChallengeMain />
    // </ImageSizeContextProvider>
    // <TasksContextProvider>

    //   <TaskAppWithContextReducer />
    // </TasksContextProvider>
    // <>
    // <Messenger />
    // <Messenger2 />
    // <Messenger3 />
    // </>
    // <GoalContextProvider>

    //   <FitnessTracker/>
    // </GoalContextProvider>
    <Provider store={store}>
      <CakeContainer isSpecial={true}/>
    </Provider>
  );
}

export default App;
