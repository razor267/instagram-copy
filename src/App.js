import React from "react";
import "./App.css";
import Home from "./components/screens/home/Home";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./components/screens/profile/Profile";
import { Direct } from "./components/screens/direct/Direct";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/accounts/edit/" element={<> 1231</>} />
        <Route path="/send" element={<Direct />} />
        <Route path="/send/:id" element={<Direct />} />
      </Routes>
    </div>
  );
};

export default App;
