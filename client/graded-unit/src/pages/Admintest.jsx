import React from 'react'
import DashboardButton from '../components/DashboardButton'
import Profile from '../components/Profile'
import Calendar from '../components/Calendar'
import Upload from '../components/Upload'
import Disclosure from '../components/Disclosure'
import Users from '../components/Users'



import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'

import TestProfile from '../assets/testProfile.jpg'
import {FaUser, FaUsers} from 'react-icons/fa'
import {BiUpload} from 'react-icons/bi'
import {BsCalendar2DateFill} from 'react-icons/bs'
import {HiDocumentCheck} from 'react-icons/hi2'




const Admintest = () => {
 const {component } = useContext(AppContext);
 const {userData} = useContext(AppContext)
  return (
    <div className=' grid  md:grid-cols-7 md:grid-rows-6'>
     <div className='   md:col-span-3  md:row-span-2 bg-[#C3C3C3] inline-flex  flex-col rounded-md my-5 m-10'>

      <div className=' flex p-9 justify-center items-center gap-3'>
       <div className='    '>
        <img className='w-24 h-24 rounded-full justify-center items-center' src={TestProfile} alt="profilPic" />
       </div>
       <div>
        <h2 className=' font-poppins font-semibold'>
         Robert Cameron
        </h2>
        <p className=' font-poppins '>
         Admin
        </p>
        </div>
      </div>
      <div className='  mx-4 my-6'>
       <DashboardButton component={<Profile/>} icon={<FaUser/>} name={'Profile'}/>
       <DashboardButton component={<Calendar/>} icon={<BsCalendar2DateFill/>} name={'Calendar'}/>
       <DashboardButton component={<Disclosure/>} icon={<HiDocumentCheck/>} name={'Disclosure'}/>
       <DashboardButton component={<Upload/>} icon={<BiUpload/>} name={'Upload'}/>
       <DashboardButton component={<Users/>} icon={<FaUsers/>} name={'Users'}/>
       </div>
      
     </div>
     <div className='  md:col-span-4 md:row-span-4  pr-5'>
     {component}
     </div>
    </div>
  )
}

export default Admintest