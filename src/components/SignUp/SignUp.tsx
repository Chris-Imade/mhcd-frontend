import React from 'react';
// @ts-ignore
import Tick from "../../images/tick.png";
// @ts-ignore
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';


const SignUp = () => {


  return (
    <div className='bg-[#120503] w-[100vw] py-[115px] lg:px-[165px] flex-col lg:flex-row flex justify-between pl-8'>
        <div className=''>
            <p className='text-[#EF6330] text-[16px] font-medium uppercase' style={{ letterSpacing: "6px" }}>never stop learning</p>
            <h3 className='text-white mt-[14px] font-semibold text-[28.74px]'>30% Off For New Students</h3>
            <p className='text-[#C0C0C0] text-[14px]'>don’t miss out on this exclusive offer for new and incoming students, we<br /> guaratee you an internet of educational assets. You might not even need<br /> to make payments in order to learn, in most cases you only make<br /> payments if you desire to get a certificate for the training taken.</p>
            <ul>
                <li className='flex items-center'>
                    <img className='mr-2' width={24} height={24} src={Tick} alt="Tick" />
                    <p className='text-white text-[12px]'>Educational technical support</p>
                </li>
                <li className='flex items-center'>
                    <img className='mr-2' width={24} height={24} src={Tick} alt="Tick" />
                    <p className='text-white text-[12px]'>Free and affordable campaign</p>
                </li>
                <li className='flex items-center'>
                    <img className='mr-2' width={24} height={24} src={Tick} alt="Tick" />
                    <p className='text-white text-[12px]'>Free and affordable courses</p>
                </li>
            </ul>
        </div>
        <div className={`flex flex-col items-center mx-8 lg:mx-0 bg-[#EF6330] ${styles.formContainer} mt-8 lg:mt-0`}>
            <div className='w-full lg:w-[410px] h-[74px] bg-white flex justify-center items-center mb-[10px]'>
                <p className='text-[28.74px] font-semibold'>Sign Up</p>
            </div>
            <div className='flex flex-col'>
                <input placeholder='Your Name' className={`my-[10px] w-[353px] h-[50px] outline-none pl-3 ${styles.inputShadow}`}type="text" />
                <input placeholder='Your Email' className={`my-[10px] w-[353px] h-[50px] outline-none pl-3 ${styles.inputShadow}`}type="text" />
                <select className={`my-[10px] w-[353px] h-[50px] outline-none pl-3 ${styles.inputShadow}`} defaultValue={"Course"}  name="course" id="course">
                    <option id='course' value="Web Development">Web Development</option>
                    <option id='course' value="Cyber Security">Cyber Security</option>
                    <option id='course' value="Data Analytics">Data Analytics</option>
                    <option id='course' value="Artificial Intelligence">Artificial Intelligence</option>
                    <option id='course' value="UI/UX Design">UI/UX Design</option>
                </select>
                <Link to={'/register'} className={`my-6 bg-[#44425A] w-[353px] hover:bg-black transition-all duration-500 ease-in-out h-[50px] text-white text-[17px] flex justify-center items-center ${styles.button} mb-8`}>Sign Up Now</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp;