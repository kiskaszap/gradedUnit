import React, { useContext, useEffect } from 'react';
import GalleryUploader from './GalleryUploader';
import { BsFillCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';

const Upload = () => {
  const { userData, pendingPictures, setPendingPictures, isUpdated } = useContext(AppContext);

  useEffect(() => {
    // Fetch pending pictures when isUpdated changes or userData.email changes
    axios
      .post('http://localhost:5000/pendingPictures', { email: userData.email })
      .then((response) => {
        setPendingPictures(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isUpdated, userData.email]);

  return (
    <div className='my-5 mx-5 '>
      <GalleryUploader />
      <p className='flex items-center mx-5'>
        <BsFillCircleFill className='text-yellow-400' />
        Pending images
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-5'>
        {pendingPictures &&
          pendingPictures
            .filter((item) => item.status === 'pending')
            .map((item) => (
              <div className='col-span-1' key={item._id}>
                <img className='h-64' src={`http://localhost:5000${item.filePath.substring(1)}`} alt='' />
              </div>
            ))}
      </div>
      <div className=' my-5'>
        <p className='flex items-center mx-5'>
          <BsFillCheckCircleFill className='text-green-400' />
          Approved images
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center mx-5'>
        {pendingPictures &&
          pendingPictures
            .filter((item) => item.status === 'approved')
            .map((item) => (
              <div className='col-span-1' key={item._id}>
                <img className='h-64' src={`http://localhost:5000${item.filePath.substring(1)}`} alt='' />
              </div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default Upload;
