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

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
      const toggleShow = setTimeout(() => {
          setShowLoader(false);
      }, 2000);

      return  () =>clearTimeout(toggleShow);
  }, [])

  return (
    <div className="transition-all duration-500 ease-in-out">
      {showLoader && <Loader />}
      <NavigationContainer />
      <Hero />
      <AboutUs />
      <Subjects />
      <Course/>
      <SignUp />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
