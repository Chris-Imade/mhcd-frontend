import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import NavigationContainer from "./components/Nav/NavigationContainer";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Root from "./components/Root";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register";


function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
      const toggleShow = setTimeout(() => {
          setShowLoader(false);
      }, 2000);

      return  () =>clearTimeout(toggleShow);
  }, [])

  return (
    <>
      {showLoader ? <Loader /> : (
      <Router>
        <Routes>
          <Route path="/*" element={<Root />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
      )}
    </>
  );
}

export default App;
