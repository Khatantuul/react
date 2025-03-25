// import Game from "./tictactoe/Game";
import CommentList from "./commentStructure/Comments";
import ContextChallengeMain, { ImageSizeContextProvider } from "./context/Main";
import EmployeeList from "./employees/Employees";
import Form from "./form/Form";
import FormWithReducer from "./form/FormWithReducer";
import Counter from "./reducer/basic/Counter";
import Messenger from "./reducer/ch1/ContactList";
import Messenger2 from "./reducer/ch2/ContactList2";
import Messenger3 from "./reducer/ch3/ContactList3";
import TaskApp from "./reducer/TaskApp";
import {
  LocationContext,
  LocationContextProvider,
} from "./testInterview/LocationContextProvider";
import MainInterview from "./testInterview/MainInterview";
import TravelPlan from "./travelPlan/TravelPlan";

function App() {
  return (
    // <LocationContextProvider>
    //   <MainInterview />
    // </LocationContextProvider>
    // <TaskApp />
    // <Messenger3 />
    // <Form />
    // <FormWithReducer />
    <ImageSizeContextProvider>

      <ContextChallengeMain />
    </ImageSizeContextProvider>
  
  );
}

export default App;
