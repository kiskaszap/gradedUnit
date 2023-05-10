import React,{useState} from 'react'
import ImageUploader from './ImageUploader'
import ProfileForm from './ProfileForm'
import AdminProfileForm from './AdminProfileForm'
import { useContext } from 'react'
import { AppContext} from './AppWrapper'


const Profile = () => {
  const {isAdmin } = useContext(AppContext)

  return (
    <div className='my-6 w-full px-auto  flex flex-col justify-center items-center sm:justify-start sm:items-start'>
     <ImageUploader />
      {isAdmin?<AdminProfileForm/>:<ProfileForm/>}
    
    </div>
  )
}

export default Profile