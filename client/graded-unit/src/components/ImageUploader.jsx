import React, { useState, useContext } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  const { userData, setUserData,profilePicture, setProfilePicture } = useContext(AppContext);
 

 

  const handleImageChange = ({ target: { files } }) => {
    if (files[0]) {
      setFileName(files[0].name);
      setProfilePicture(URL.createObjectURL(files[0]));
      setImage(files[0]); // Save the File object
    } else {
      setFileName('No selected file');
      setProfilePicture('');
      setImage(null);
    }
  
  };

  const handleSave = async () => {
    setUserData(prevUser => ({
      ...prevUser,
      profilePicture: profilePicture
    }));

    if (image) {
      const profileForm = new FormData();
      profileForm.append('profilePicture', image, fileName);
      
      profileForm.append('email', userData.email)
      
      
      try {
      const uploadResponse = await axios.post(`http://localhost:5000/uploadProfilePicture?email=${userData.email}`, profileForm,  {headers: {
        "Content-Type": "multipart/form-data",
      },});
      console.log("Image uploaded successfully:", uploadResponse.data);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  }
  };

  return (
    <section className='w-full px-auto flex flex-col justify-center items-center'>
      <form
        onClick={() => document.querySelector('.input-field').click()}
        className='flex  justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md w-72'
      >
        <input className='input-field' type='file' accept='image/*' hidden onChange={handleImageChange} />
        {profilePicture ? (
          <img width={150} height={150} src={profilePicture} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload className='text-[#0FCE7E]' size={40} />
            <p>Click to select profile pic</p>
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
              setProfilePicture('');
              handleSave();
            }}
            
          />
          
        </span>
      </div>
      <button className=' bg-[#0FCE7E] text-white px-5 py-2 rounded-lg' onClick={handleSave}>Upload</button>
    </section>
  );
};

export default ImageUploader;
