// import Game from "./tictactoe/Game";
import CommentList from "./commentStructure/Comments";
import EmployeeList from "./employees/Employees";
import {
  LocationContext,
  LocationContextProvider,
} from "./testInterview/LocationContextProvider";
import MainInterview from "./testInterview/MainInterview";
import TravelPlan from "./travelPlan/TravelPlan";

function App() {
  return (
    <LocationContextProvider>
      <MainInterview />
    </LocationContextProvider>
  );
}

export default App;
