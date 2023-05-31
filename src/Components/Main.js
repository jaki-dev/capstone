import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import BookingPage from "./BookingPage";
import Home from "./Home";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/Booking" component={BookingPage} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
