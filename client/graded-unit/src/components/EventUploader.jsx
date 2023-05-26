import React, { useState, useContext, useEffect } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';
import EventCard from './EventCard';

//

const EventUploader = () => {
  const { isEventUpdated, setIsEventUpdated } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  const [eventPicture, setEventPicture] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [address, setAddress] = useState();
  const [descreption, setDescription] = useState();
  const [eventCollect, setEventCollect]=useState([])

  useEffect(() => {
    axios
      .post('http://localhost:5000/eventCollect')
      .then((res) => {
        setEventCollect(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isEventUpdated]);

  const dateHandler = (e) => {
    setDate(e.target.value);
    console.log(date);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const handleImageChange = ({ target: { files } }) => {
    if (files[0]) {
      setFileName(files[0].name);
      setEventPicture(URL.createObjectURL(files[0]));
      setImage(files[0]); // Save the File object
    } else {
      setFileName('No selected file');
      setImage(null);
    }
  };

  const handleSave = async () => {
    
      const eventForm = new FormData();
      eventForm.append('eventPicture', image, fileName);

      try {
        const eventResponse = await axios.post(
          `http://localhost:5000/createEvent?date=${date}&title=${title}&descreption=${descreption}&address=${address}&duration=${duration}`,
          eventForm,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(eventResponse.data.event);
        if (eventResponse.data.event === 'created') {
          setIsEventUpdated(!isEventUpdated);
        }
      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    
  };

  return (
    <section className='w-full px-auto flex flex-col justify-center items-center'>
      <form
        onClick={() => document.querySelector('.input-field').click()}
        className='flex  justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md w-72'
      >
        <input
          className='input-field'
          type='file'
          name='file'
          accept='image/*'
          hidden
          onChange={handleImageChange}
        />
        {eventPicture ? (
          <img
            width={150}
            height={150}
            src={eventPicture}
            alt={fileName}
          />
        ) : (
          <>
            <MdCloudUpload
              className='text-[#0FCE7E]'
              size={40}
            />
            <p>Click to select event picture</p>
          </>
        )}
      </form>
      <div className='flex items-center my-2 py-15 '>
        <AiFillFileImage className='text-[#0FCE7E]' />
        <span className='flex items-center '>
          {fileName}
          <MdDelete
            className='text-red-600 cursor-pointer'
            onClick={() => {
              setFileName('No selected image');
              setEventPicture('');
              handleSave();
            }}
          />
        </span>
      </div>
      <div className=' flex flex-col gap-3'>
        <label htmlFor='date'>Select date</label>
        <input
          className=' border-2 border-dashed border-[#0FCE7E] cursor-pointer   rounded-md   focus:border-green-500 focus:outline-green-500'
          id='date'
          onChange={dateHandler}
          type='date'
        />
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className=' border-2 border-dashed border-[#0FCE7E] cursor-pointer  h-8 rounded-md  w-72 focus:border-green-500 focus:outline-green-500'
          onChange={titleHandler}
        />
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          className=' border-2 border-dashed border-[#0FCE7E] cursor-pointer  h-8 rounded-md  w-72 focus:border-green-500 focus:outline-green-500'
          onChange={addressHandler}
        />
        <label htmlFor='duration'>Duration</label>
        <input
          type='text'
          className=' border-2 border-dashed border-[#0FCE7E] cursor-pointer  h-8 rounded-md  w-72 focus:border-green-500 focus:outline-green-500'
          onChange={durationHandler}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='textbox'
          className=' border-2 border-dashed border-[#0FCE7E] cursor-pointer  h-44 rounded-md  w-72 focus:border-green-500 focus:outline-green-500'
          onChange={descriptionHandler}
        />
      </div>
      <button
        className=' bg-[#0FCE7E] text-white px-5 py-2 rounded-lg mt-5'
        onClick={handleSave}
      >
        Upload
      </button>
     <p className=' flex  items-center mt-10'>
        <BsFillCheckCircleFill className=' text-green-400' />
        Uploaded events
      </p>
      <div>
       {eventCollect.map((item)=>{
        const {date, filePath, title, descreption, address, duration, _id}=item
        const imagePath=filePath.slice(1)
        const admin=true
        
        return <EventCard date={date} title={title} descreption={descreption} address={address} duration={duration} filePath={imagePath} _id={_id} admin={admin} />
       })}
      </div>

    </section>
  );
};

export default EventUploader;
