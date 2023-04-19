import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

const ActivitiesComp = (props) => {
  return (
    <div className='homeActivities__card flex-1  rounded-t-xl  '>
                <div className='homeActivities__card--picture  '>
                  <img
                    className='rounded-t-xl'
                    src={props.pic}
                    alt='promise'
                  />
                </div>
                <div className='homeActivities__card--description'>
                  <h2 className='text-xl  font-semibold my-3 font-poppins'>
                    {props.name}
                  </h2>
                  <p className=' font-poppins'>
                    {props.description}
                  </p>
                </div>
                <div className='homeActivities__card--details w-full flex justify-between mt-5  '>
                  <p className='flex'>
                    <MdOutlineLocationOn className='w-6 h-6 text-[#0FCE7E] font-poppins' />
                    {props.address}
                  </p>
                  <p className='flex items-center'>
                    <BiTimeFive className='w-6 h-6 text-[#0FCE7E] font-poppins' /> {props.duration}
                  </p>
                </div>
              </div>
  )
}

export default ActivitiesComp