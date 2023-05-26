import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import {BsCalendar3} from 'react-icons/bs'


const ActivitiesComp = (props) => {
  

  
  return (
    <div className='homeActivities__card   rounded-t-xl  '>
                <div className='homeActivities__card--picture  '>
                  <img
                    className='rounded-t-xl'
                    src={`http://localhost:5000${props.imagePath}`}
                    alt={props.title}
                  />
                </div>
                <div className='homeActivities__card--description'>
                  <h2 className='text-xl  font-semibold my-3 font-poppins'>
                    {props.title}
                  </h2>
                  <p className=' font-poppins'>
                    {props.descreption}
                  </p>
                </div>
                <div className='homeActivities__card--details w-full flex flex-col gap-4 xl:flex-row justify-between mt-5  '>
                  <p className='flex'>
                    <MdOutlineLocationOn className='w-6 h-6 text-[#0FCE7E] font-poppins' />
                    {props.address}
                  </p>
                  <p className='flex'>
                    <BsCalendar3 className='w-6 h-6 text-[#0FCE7E] font-poppins' />
                    {props.date}
                  </p>
                  <p className='flex items-center'>
                    <BiTimeFive className='w-6 h-6 text-[#0FCE7E] font-poppins' /> {props.duration}
                  </p>
                </div>
              </div>
  )
}

export default ActivitiesComp