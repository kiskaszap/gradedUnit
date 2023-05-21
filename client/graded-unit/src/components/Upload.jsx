import React, {useContext, useEffect, useState} from 'react'
import GalleryUploader from './GalleryUploader'
import {BsFillCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';

const Upload = () => {
  const {  userData, pendingPictures, setPendingPictures, isUpdated } = useContext(AppContext);
  console.log(isUpdated);
  
  useEffect(() => {
    console.log(isUpdated, 'In UseEffect');
    
    
      // update the count value
      axios.post('http://localhost:5000/pendingPictures', {email:userData.email})
        .then( response => {
          
          setPendingPictures(response.data)
        })
        .catch(error => {
          console.log(error);
        });
       
  },[isUpdated,userData.email]); 
  
 
  return (
    <div className='my-4'>
      <GalleryUploader/>
      <p className=' flex  items-center'><BsFillCircleFill className=' text-yellow-400'/>Pending images</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
  {pendingPictures ? pendingPictures.map(item => {
    
    return (
      <div className='col-span-1' key={item._id}>
        <img className=' h-64' src={`http://localhost:5000${item.filePath.substring(1)}`} alt="" />
      </div>
    );
  }) : null}
</div>

      
      <p className=' flex  items-center'><BsFillCheckCircleFill className=' text-green-400'/>Approved images</p>
    </div>
    
  )
}

export default Upload