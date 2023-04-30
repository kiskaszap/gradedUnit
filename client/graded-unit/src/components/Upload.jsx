import React from 'react'
import GalleryUploader from './GalleryUploader'
import {BsFillCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'

const Upload = () => {
  return (
    <div className='my-4'>
      <GalleryUploader/>
      <p className=' flex  items-center'><BsFillCircleFill className=' text-yellow-400'/>Pending images</p>
      <p className=' flex  items-center'><BsFillCheckCircleFill className=' text-green-400'/>Approved images</p>
    </div>
    
  )
}

export default Upload