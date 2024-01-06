import React from "react";
import Login from './components/Login'
import Register from './components/Register'
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
