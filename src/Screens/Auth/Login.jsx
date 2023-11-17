import React, { useState } from 'react';
import styles from './Styles.module.css';
import AuthLogo from '../../images/auth-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { REACT_APP_BACKEND_BASE_URL } from '../../config';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    try {
      // Set loading to true before the fetch request
      setLoading(true);

      // Your login endpoint URL
      const loginEndpoint = `${REACT_APP_BACKEND_BASE_URL}/api/v1/auth/login`;

      // Add your login credentials here
      const credentials = {
        // ... login credentials
        username,
        password
      };

      const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      // Check for errors in the response
      if (!response.ok) {
        setError(data.message || 'An error occurred');
      } else {
        setError(null);
        
        // Assuming your server sends a token upon successful login
        const { token, message } = data;

        // Store the token in local storage or wherever you prefer
        localStorage.setItem('token', token);
        setMsg(message);

        // Navigate to the desired path
        navigate('/dashboard'); // Replace with the desired path
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred');
    } finally {
      // Set loading back to false after the fetch request
      setLoading(false);
    }
  };


  return (
    <div className='w-[100vw] h-[100vh] bg-[#EF6330] flex justify-center items-center'>
        <img className='hidden lg:flex' width={469} height={583} src={AuthLogo} alt="AuthLogo" />
        <div className={`text-center flex flex-col bg-white lg:w-[596px] h-[583px] justify-center items-center ${styles.form} mt-[-1rem] px-12 lg:px-0`}>
            <p className='text-[30.91px] font-bold'>Login</p>
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Name' className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 outline-none mt-[47px] w-full ${styles.input}`} />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 w-full outline-none ${styles.input}`} />
            <button onClick={handleLogin} disabled={loading} className={`my-6 bg-[#44425A] lg:w-[448.19px] hover:bg-black transition-all duration-500 ease-in-out h-[50px] text-white text-[17px] w-full ${styles.button} mb-8`}>{loading ? "Loading..." : "Login"}</button>
            {/* <div className='flex items-center justify-between'>
                <hr className='bg-slate-600' />
                    <p>OR</p>
                <hr className='bg-slate-600' />
            </div> */}
            {/* <a  href={REACT_APP_BACKEND_BASE_URL + '/api/v1/auth/google'} className={`my-6 bg-white lg:w-[448.19px] hover:bg-black hover:text-white transition-all duration-500 ease-in-out h-[50px] text-black border-[1px] border-black text-[17px] w-full flex items-center justify-center ${styles.button} mb-8`}>Google</a> */}
            <p className=''>Don't have an account? <Link to={'/register'} className='text-[#0F1FB5]'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login;