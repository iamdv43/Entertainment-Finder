import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/register/register";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import "bootstrap/dist/css/bootstrap.css";
import Activation from "./components/register/form/Activation";
import ChatBot from "../src/components/ChatBot";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
