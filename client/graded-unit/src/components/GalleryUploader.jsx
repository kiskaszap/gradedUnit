
import React, { useState, useContext } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'
import axios from 'axios'
import { AppContext } from '../components/AppWrapper';
const GalleryUploader = () => {
 
const [fileName,setFileName]= useState('No selected file')
const { userData, selectedImages,setSelectedImages,isUpdated, setIsUpdated } = useContext(AppContext);
 const handleSubmitGallery = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    selectedImages.forEach((file) => {
      formData.append('images', file);
      formData.append('email', userData.email);
    });

    try {
      await axios.post(`http://localhost:5000/uploadGallery?email=${userData.email}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully');
      setIsUpdated(prevState => !prevState)

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
    const handleFileChange = (event) => {
    setSelectedImages([...event.target.files]);
    
  };
  return (
    <section className=' w-full px-auto  flex flex-col justify-center items-center'>
      <form onClick={() =>
        document.querySelector(".input-field").click()
      } className='flex flex-col justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md  w-72' action=''>
        <input name='images' multiple onChange={handleFileChange} className="input-field" type='file' accept='image/*' hidden/>
        {selectedImages?<img width={150} height={150} src={selectedImages} alt={fileName}/>:<><MdCloudUpload className=' text-[#0FCE7E]' size={40}/>
        <p>Click to upload images</p>
        </>}
        

      </form>
      <div className='flex items-center my-2  py-15 '>
       <AiFillFileImage  className=' text-[#0FCE7E]'/>
       <span className=' flex items-center '>
        {fileName}
        <MdDelete className=' text-red-600 cursor-pointer' onClick={()=>{
         setFileName('No selected images')
         setSelectedImages(null)
        }}/>
       </span>
       <button className=' bg-[#0FCE7E] text-white px-5 py-2 rounded-lg' onClick={handleSubmitGallery}>Upload</button>
      </div>
    </section>
  )
}

export default GalleryUploader