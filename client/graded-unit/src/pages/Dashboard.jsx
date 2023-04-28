import React from 'react'
import DashboardButton from '../components/DashboardButton'
import Profile from '../components/Profile'
import Calendar from '../components/Calendar'
import Upload from '../components/Upload'
import Messages from '../components/Messages'


import { useState } from 'react'
import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'

import TestProfile from '../assets/testProfile.jpg'
import {FaUser} from 'react-icons/fa'
import {BiMessageSquareDots, BiUpload} from 'react-icons/bi'
import {BsCalendar2DateFill} from 'react-icons/bs'

const Dashboard = () => {
 const {component } = useContext(AppContext);

  return (
    <div className=' grid md:grid-cols-5'>
     <div className='    col-span-2 bg-[#C3C3C3] inline-flex  flex-col rounded-md my-5 m-10'>

      <div className=' flex p-9 justify-center items-center gap-3'>
       <div className='    '>
        <img className='w-24 h-24 rounded-full justify-center items-center' src={TestProfile} alt="profilPic" />
       </div>
       <div>
        <h2 className=' font-poppins font-semibold'>
         Andrea Webb
        </h2>
        <p className=' font-poppins '>
         Registered helper
        </p>
        </div>
      </div>
      <div className='  mx-4 my-6'>
       <DashboardButton component={<Profile/>} icon={<FaUser/>} name={'Profile'}/>
       <DashboardButton component={<Calendar/>} icon={<BsCalendar2DateFill/>} name={'Calendar'}/>
       <DashboardButton component={<Messages/>} icon={<BiMessageSquareDots/>} name={'Messages'}/>
       <DashboardButton component={<Upload/>} icon={<BiUpload/>} name={'Upload'}/>
       </div>
      
     </div>
     <div className=' row-span-3'>
     {component}
     </div>
    </div>
  )
}

export default Dashboard