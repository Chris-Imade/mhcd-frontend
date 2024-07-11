import React from 'react';
import Hero from './Hero';
import AboutUs from './About/AboutUs';
import Subjects from './Subjects/Subjects';
import Course from '../Courses/Course';
import SignUp from './SignUp/SignUp';
import Partners from './Partners/Partners';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import NavigationContainer from './Nav/NavigationContainer';
import Projects from './Projects/Projects';

const Root = () => {
  return (
    <div>
        <NavigationContainer />
        <Hero />
        <AboutUs />
        <Subjects />
        <Projects />
        <Course />
        <SignUp />
        <Partners />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Root;