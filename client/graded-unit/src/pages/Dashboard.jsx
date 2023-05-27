import React, { useEffect } from 'react'
import DashboardButton from '../components/DashboardButton'
import Profile from '../components/Profile'
import Calendar from '../components/Calendar'
import Upload from '../components/Upload'

import Disclosure from '../components/Disclosure'
import OtherUsers from '../components/OtherUsers'



import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'



import {FaUser, FaUsers} from 'react-icons/fa'
import { BiUpload} from 'react-icons/bi'
import {BsCalendar2DateFill,BsFillCircleFill} from 'react-icons/bs'
import {HiDocumentCheck} from 'react-icons/hi2'
import axios from 'axios'
import UserAvatar from '../assets/userAvatar.png'

const Dashboard = () => {
 
 
 const { userData, profilePicture, component, fetchedPicture,setFetchedPicture, isStatusPending, setIsStatusPending } = useContext(AppContext);
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.post('http://localhost:5000/fetchedData', {email:userData.email});
        console.log(response);

        setFetchedPicture(
          `http://localhost:5000${response.data.newPath}`
        )
        if (response.data.status==='approved') {
          
          setIsStatusPending(false)
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=' grid  md:grid-cols-7 md:grid-rows-6'>
     <div className='   md:col-span-3  md:row-span-2 bg-[#C3C3C3] inline-flex  flex-col rounded-md my-5 m-10'>

      <div className=' flex p-9 justify-center items-center gap-3'>
       <div className='    '>
        <img className='w-24 h-24 rounded-full justify-center items-center' src={profilePicture?profilePicture:fetchedPicture} alt="X" />
       </div>
       <div>
        <h2 className=' font-poppins font-semibold'>
         {userData.name?userData.name:'User name'}
        </h2>
        <p className=' font-poppins '>
         Status : {isStatusPending? <div className=' flex items-center justify-center gap-2'><BsFillCircleFill className=' text-yellow-500'/> <p>Pending Helper</p></div>:<div className=' flex items-center justify-center gap-2'><BsFillCircleFill className=' text-green-500 flex justify-center items-center'/> <p>Approved Helper</p></div>}
        </p>
        </div>
      </div>
      <div className='  mx-4 my-6'>
       <DashboardButton component={<Profile/>} icon={<FaUser/>} name={'Profile'} />
       {!isStatusPending ? (
  <DashboardButton component={<Calendar />} icon={<BsCalendar2DateFill />} name={'Calendar'} />
) : null}

       <DashboardButton component={<Disclosure/>} icon={<HiDocumentCheck/>} name={'Disclosure'}/>
       {!isStatusPending?(<DashboardButton component={<Upload/>} icon={<BiUpload/>} name={'Upload'}/>):null}
       {!isStatusPending?(<DashboardButton component={<OtherUsers/>} icon={<FaUsers/>} name={'Users'} />):null}
       
       
       </div>
      
     </div>
     <div className='  md:col-span-4 md:row-span-4  pr-5'>
     {component}
     </div>
    </div>
  )
}

export default Dashboard