import React from 'react';
import NavTop from './Nav/NavTop';
import NavBottom from './Nav/NavBottom';
import Hero from './Hero';
import AboutUs from './About/AboutUs';
import Subjects from './Subjects/Subjects';
import Course from '../Courses/Course';
import SignUp from './SignUp/SignUp';
import Partners from './Partners/Partners';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
        <NavTop />
        <NavBottom />
        <Hero />
        <AboutUs />
        <Subjects />
        <Course />
        <SignUp />
        <Partners />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Root;