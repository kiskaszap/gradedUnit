import React, { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'

const FileUploader = () => {
  const [file,setFile]= useState(null)
const [fileName,setFileName]= useState('No selected file')

  return (
    <section className=' w-full  flex flex-col '>
      <p className=' font-poppins font-semibold'>Click <a className=' text-[#0FCE7E] font-anton' href='https://basic.apply.disclosure.scot/' target="_blank" rel="noreferrer">here</a> to apply for disclosure </p>
      <form onClick={() =>
        document.querySelector(".input-field1").click()
      } className='flex flex-col justify-center items-center border-2 border-dashed border-[#0FCE7E] cursor-pointer h-44 rounded-md  w-full' action=''>
        <input onChange={({target:{files}})=>{
         files[0]&& setFileName(files[0].name)
         if(files){
          setFile(URL.createObjectURL(files[0]))
         }
        }} className="input-field1" type='file' accept='.pdf,.doc,.docx' hidden/>
        {file?<img width={150} height={150} src={file} alt={fileName}/>:<><MdCloudUpload className=' text-[#0FCE7E]' size={40}/>
        <p>Click to upload disclosure</p>
        </>}
      </form>
      <div className='flex items-center my-2  py-15 '>
       <AiFillFileImage  className=' text-[#0FCE7E]'/>
       <span className=' flex items-center '>
        {fileName}
        <MdDelete className=' text-red-600 cursor-pointer' onClick={()=>{
         setFileName('No selected file')
         setFile(null)
        }}/>
       </span>
      </div>
    </section>
  )
}

export default FileUploader

