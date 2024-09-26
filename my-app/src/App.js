// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MaintenanceRecords from "./components/MaintenanceRecords";
import AddMaintenance from "./components/AddMaintenance";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<MaintenanceRecords />} />
          <Route path="/add" element={<AddMaintenance />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
