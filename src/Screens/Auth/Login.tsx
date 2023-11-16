import React from 'react';
// @ts-ignore
import styles from './Styles.module.css';
// @ts-ignore
import AuthLogo from '../../images/auth-logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#EF6330] flex justify-center items-center'>
        <img className='hidden lg:flex' width={469} height={583} src={AuthLogo} alt="AuthLogo" />
        <div className={`text-center flex flex-col bg-white lg:w-[596px] h-[583px] justify-center items-center ${styles.form} mt-[-1rem] px-12 lg:px-0`}>
            <p className='text-[30.91px] font-bold'>Login</p>
            <input type="text" placeholder='Name' className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 outline-none mt-[47px] w-full ${styles.input}`} />
            <input type="email" placeholder='Email' className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 outline-none w-full ${styles.input}`} />
            <input type="password" placeholder='Password' className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 w-full outline-none ${styles.input}`} />
            <button className={`my-6 bg-[#44425A] lg:w-[448.19px] hover:bg-black transition-all duration-500 ease-in-out h-[50px] text-white text-[17px] w-full ${styles.button} mb-8`}>Login</button>
            <div className='flex items-center justify-between'>
                <hr className='bg-slate-600' />
                    <p>OR</p>
                <hr className='bg-slate-600' />
            </div>
            <button className={`my-6 bg-white lg:w-[448.19px] hover:bg-black hover:text-white transition-all duration-500 ease-in-out h-[50px] text-black border-[1px] border-black text-[17px] w-full ${styles.button} mb-8`}>Google</button>
            <p className=''>Don't have an account? <Link to={'/register'} className='text-[#0F1FB5]'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login;