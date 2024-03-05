/* eslint-disable no-unused-vars */
// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateRide from "./components/CreateRideForm";
import ListRides from "./components/ListRides";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alert";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          {/* <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route
            exact
            path="/home"
            element={<Dashboard showAlert={showAlert} />}
          />
          <Route
            exact
            path="/login"
            element={<Login showAlert={showAlert} />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup showAlert={showAlert} />}
          /> */}
          {/* <Route exact path="/create-ride" element={<CreateRide showAlert={showAlert} />} /> */}
          <Route exact path="/" element={<Home showAlert={showAlert}  />} />
          <Route exact path="/home" element={<Dashboard showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}  />} />
          <Route exact path="/create-ride" element={<CreateRide showAlert={showAlert} />} />
          {/* <Route exact path="/list-rides" element={<ListRides showAlert={showAlert}  />} /> */}
          <Route exact path="*" element={<>yaha pe kuch nhi hai</>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
