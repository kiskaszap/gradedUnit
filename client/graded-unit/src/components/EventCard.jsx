import React, { useContext } from 'react';
import { MdDelete, MdOutlineLocationOn } from 'react-icons/md';
import {BsCalendar3} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import axios from 'axios';
import { AppContext } from '../components/AppWrapper';

const EventCard = (props) => {
  const { isEventUpdated, setIsEventUpdated } = useContext(AppContext);

  const removeEvent = async () => {
    try {
      const response = await axios.post('http://localhost:5000/removeEvent', { _id: props._id });
      console.log(response);
      setIsEventUpdated(!isEventUpdated);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className={`flex-col my-5  md:flex  p-10 gap-6 rounded-lg relative`}>
      {props.admin?<div onClick={removeEvent} className='  w-10 h-10 rounded-full bg-white flex items-center justify-center absolute top-5 right-5 cursor-pointer'>
        <MdDelete className=' w-8 h-8 text-red-500' />
      </div>:null}

      <div className='homeActivities__card   rounded-t-xl  '>
        <div className='homeActivities__card--picture  '>
          <img className='rounded-t-xl' src={`http://localhost:5000${props.filePath}`} alt={props.title} />
        </div>
        <div className='homeActivities__card--description'>
          <h2 className='text-xl  font-semibold my-3 font-poppins'>{props.title}</h2>
          <p className=' font-poppins'>{props.descreption}</p>
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
    </div>
  );
};

export default EventCard;
