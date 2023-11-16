import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import NavigationContainer from "./components/Nav/NavigationContainer";
import Hero from "./components/Hero";
import AboutUs from "./components/About/AboutUs";
import Subjects from "./components/Subjects/Subjects";
import Course from "./Courses/Course";
import SignUp from "./components/SignUp/SignUp";
import Partners from "./components/Partners/Partners";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import Register from "./Screens/Auth/Register";
import Login from "./Screens/Auth/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Root from "./components/Root";


function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
      const toggleShow = setTimeout(() => {
          setShowLoader(false);
      }, 2000);

      return  () =>clearTimeout(toggleShow);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Root />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
