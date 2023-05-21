import React, { useState,useContext  } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';

const FileUploader = () => {
  const [file,setFile]= useState(null)
const [disclosureName,setDisclosureName]= useState('No selected file')
const { userData, setIsUpdated } = useContext(AppContext);
const handleSave = async () => {
  if (file) {
    const disclosureForm = new FormData();
    disclosureForm.append('disclosure', file,disclosureName);
    disclosureForm.append('email', userData.email);

    try {
      const uploadResponse = await axios.post(`http://localhost:5000/uploadDisclosure?email=${userData.email}`, disclosureForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', uploadResponse.data);
      setIsUpdated(prevState=>!prevState)
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  }
};


  return (
    <section className=' w-full  flex flex-col '>
      <p className=' font-poppins font-semibold'>Click <a className=' text-[#0FCE7E] font-anton' href='https://basic.apply.disclosure.scot/' target="_blank" rel="noreferrer">here</a> to apply for disclosure </p>
      <form onClick={() =>
        document.querySelector(".input-field1").click()
      } className='flex flex-col justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md  w-full' action=''>
        <input onChange={({target:{files}})=>{
    files[0] && setDisclosureName(files[0].name)
    if(files){
        setFile(files[0])  // Store the actual file, not the object URL.
    }
}} className="input-field1" type='file' name='file'  accept='image/*,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'   hidden/>
        {file?<img width={150} height={150} src={file} alt={disclosureName}/>:<><MdCloudUpload className=' text-[#0FCE7E]' size={40}/>
        <p>Click to upload disclosure</p>
        </>}
      </form>
      <div className='flex items-center my-2  py-15 '>
       <AiFillFileImage  className=' text-[#0FCE7E]'/>
       <span className=' flex items-center '>
        {disclosureName}
        <MdDelete className=' text-red-600 cursor-pointer' onClick={()=>{
         setDisclosureName('No selected file')
         setFile(null)
        }}/>
       </span>
       <button className=' bg-[#0FCE7E] text-white px-5 py-2 rounded-lg' onClick={handleSave}>Upload</button>
      </div>
    </section>
  )
}

export default FileUploader

