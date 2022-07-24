import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="bg-[#01073a]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
