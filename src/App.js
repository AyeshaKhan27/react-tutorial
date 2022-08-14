import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./App.css";
import Navbar from "./components/Layout/NavBar";
import { About, Home } from "./pages";
import { NavBar } from "./components/Layout";

function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlerts] = useState("null");
  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlerts(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundcolor = "#2f4d78";
      showAlert("Dark mode has been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundcolor = "white";
      showAlert("light mode has been Enabled", "Success");
    }
  };
  return (
    <>
      {/* <Navbar title="Learn" about="About" mode={mode} toggleMode={toggleMode} /> */}
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={<Home mode={mode} showAlert={showAlert} alerts={alerts} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
