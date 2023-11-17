import React, { useState } from "react";
// @ts-ignore
import styles from "./Styles.module.css";
// @ts-ignore
import AuthLogo from "../../images/auth-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_BACKEND_BASE_URL } from "../../config";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();



  // const handleGoogleAuth = async () => {
  //     window.location.href = `${REACT_APP_BACKEND_BASE_URL}/api/v1/auth/google`;
  // };

  const handleRegisterUser = async () => {
    const bodyToPost = {
        username: name,
        email,
        password,
        courses: course,
    }
    try {
      // Set loading to true before the fetch request
      setLoading(true);

      const response = await fetch(
        `${REACT_APP_BACKEND_BASE_URL}/api/v1/auth/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Add your user registration data here
          body: JSON.stringify(bodyToPost),
        }
      );

      const data = await response.json();

      // Check for errors in the response
      if (!response.ok) {
        setError(data.message || "An error occurred");
      } else {
          setError(data.message);
          if(data.message === 'Success') {
            navigate('/login');
          }
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setError("An error occurred");
    } finally {
      // Set loading back to false after the fetch request
      setLoading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#EF6330] flex justify-center items-center">
      <img
        className="hidden lg:flex"
        width={469}
        height={583}
        src={AuthLogo}
        alt="AuthLogo"
      />
      <div
        className={`text-center flex flex-col bg-white lg:w-[596px] h-[583px] justify-center items-center ${styles.form} mt-[-1rem] px-12 lg:px-0`}
      >
        <p className="text-[30.91px] font-bold mt-4">Sign Up</p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 outline-none mt-[17px] w-full ${styles.input}`}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 outline-none w-full ${styles.input}`}
        />
        <select
          className={`my-[10px] lg:w-[448.19px] h-[50px] outline-none pl-3 w-full ${styles.input}`}
          defaultValue={"Course"}
          onChange={(e) => setCourse(e.target.value)}
          name="course"
          id="course"
        >
          <option id="course" value="Web Development">
            Web Development
          </option>
          <option id="course" value="Cyber Security">
            Cyber Security
          </option>
          <option id="course" value="Data Analytics">
            Data Analytics
          </option>
          <option id="course" value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option id="course" value="UI/UX Design">
            UI/UX Design
          </option>
        </select>
        <input
          type="password"
          placeholder="Password"
          className={`lg:w-[448.19px] h-[50px] mb-[12px] pl-4 w-full outline-none ${styles.input}`}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegisterUser} disabled={loading}
          className={`my-6 bg-[#44425A] lg:w-[448.19px] hover:bg-black transition-all duration-500 ease-in-out h-[50px] text-white text-[17px] w-full ${styles.button} mb-8`}
        >
          {loading ? 'Loading...' : 'Sign Up Now'}
        </button>
        {/* <div className='flex items-center justify-between'>
                <hr className='bg-slate-600' />
                    <p>OR</p>
                <hr className='bg-slate-600' />
            </div> */}
        {/* <button onClick={handleGoogleAuth} className={`my-6 bg-white lg:w-[448.19px] hover:bg-black hover:text-white transition-all duration-500 ease-in-out h-[50px] text-black border-[1px] border-black text-[17px] w-full flex items-center justify-center ${styles.button} mb-8`}>Google</button> */}
        <p className="mb-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#0F1FB5]">
            Login
          </Link>
        </p>
        {error && <p className="bg-orange-400 text-white text-[14px] font-medium p-1 rounded-md">Info: {error}</p>}
      </div>
    </div>
  );
};

export default Register;
