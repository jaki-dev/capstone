import Header from "./Components/Header";
import Home from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
