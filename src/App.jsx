import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Services from "./component/services";
import Product from "./component/SignUp";
import About from "./component/About";
import Nav from "./component/Nav";
import Data from "./Data";
import Four04 from "./component/Login";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

function App() {
  const four04 = "error 404";
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
