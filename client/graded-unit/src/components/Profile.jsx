import React,{useState} from 'react'
import ImageUploader from './ImageUploader'
import ProfileForm from './ProfileForm'
import AdminProfileForm from './AdminProfileForm'


const Profile = () => {
const [isAdmin,setIsAdmin]=useState(false)
  return (
    <div className='my-6 w-full px-auto  flex flex-col justify-center items-center'>
     <ImageUploader />
      {isAdmin?<AdminProfileForm/>:<ProfileForm/>}
    
    </div>
  )
}

export default Profile