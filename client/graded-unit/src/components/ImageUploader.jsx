import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'

const ImageUploader = () => {
const [image,setImage]= useState(null)
const [fileName,setFileName]= useState('No selected file')

  return (
    <section className=' w-full px-auto  flex flex-col justify-center items-center'>
      <form onClick={() =>
        document.querySelector(".input-field").click()
      } className='flex flex-col justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md  w-72' action=''>
        <input onChange={({target:{files}})=>{
         files[0]&& setFileName(files[0].name)
         if(files){
          setImage(URL.createObjectURL(files[0]))
         }
        }} className="input-field" type='file' accept='image/*' hidden/>
        {image?<img width={150} height={150} src={image} alt={fileName}/>:<><MdCloudUpload className=' text-[#0FCE7E]' size={40}/>
        <p>Click to upload profile pic</p>
        </>}
      </form>
      <div className='flex items-center my-2  py-15 '>
       <AiFillFileImage  className=' text-[#0FCE7E]'/>
       <span className=' flex items-center '>
        {fileName}
        <MdDelete className=' text-red-600 cursor-pointer' onClick={()=>{
         setFileName('No selected image')
         setImage(null)
        }}/>
       </span>
      </div>
    </section>
  )
}

export default ImageUploader
