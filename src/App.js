import Header from "./Components/Header";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import Footer from "./Components/Footer";
import Placeholder1 from "./Components/Placeholder";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Placeholder from "./Components/Placeholder";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Booking" element={<BookingPage></BookingPage>} />
          <Route path="/about" element={<Placeholder1></Placeholder1>} />
          <Route path="/menu" element={<Placeholder1></Placeholder1>} />
          <Route path="/reservations" element={<Placeholder1></Placeholder1>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
