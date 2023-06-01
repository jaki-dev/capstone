import Header from "./Components/Header";
import Home from "./Components/Home";

import BookingPage from "./Components/BookingPage";
import Footer from "./Components/Footer";
import Placeholder1 from "./Components/Placeholder";
import ThankYou from "./Components/ThankYou";
import "./App.css";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/////////////////////////////////API///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////API///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

/////////////////////////////////API///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////API///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////API///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // ...

  function timesReducer(state, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(action.date);
      default:
        return state;
    }
  }

  function updateTimes(date) {
    const dateArray = date.split("-");

    const selectedDate = new Date(dateArray[0], dateArray[1], dateArray[2]);
    return fetchAPI(selectedDate);
  }

  function initializeTimes() {
    // Format the date to match the API's expected format

    const currentDate = new Date();
    return fetchAPI(currentDate);
  }

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/Booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/about" element={<Placeholder1 />} />
          <Route path="/menu" element={<Placeholder1 />} />
          <Route path="/reservations" element={<Placeholder1 />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
