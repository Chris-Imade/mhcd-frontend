import React from 'react'
import Aside from './Aside';
import Main from './Main';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <div className='bg-[#F7F8FA] w-[100vw] h-[100vh] flex justify-between'>
        <Aside />
        <Main />
        <Profile />
    </div>
  )
}

export default Dashboard;