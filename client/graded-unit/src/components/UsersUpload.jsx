import React, {useEffect, useContext} from 'react'
import axios from 'axios';
import { AppContext } from '../components/AppWrapper';
import UserPicture from './UserPicture';
import { BsFillCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

const UsersUpload = () => {
 const { collectingPictures,setCollectingPictures, isUserPictureUpdated, setIsUserPictureUpdated } = useContext(AppContext);
 useEffect(() => {
      // update the count value
      axios.post('http://localhost:5000/collectingPictures')
        .then( response => {
         console.log(response.data.collectedPictures);
          
          setCollectingPictures(response.data.collectedPictures)
        })
        .catch(error => {
          console.log(error);
        });
       
  },[isUserPictureUpdated]); 
  return (
    <div>
     <p className=' flex  items-center'>
        <BsFillCircleFill className=' text-yellow-400' />
        Pending pictures
      </p>
       {/* {userFetch && userFetch.filter(item => item.status === 'pending').map((item) => {
        const newProfilePicture=item.profilePicture.slice(1)
        const newDisclosure=item.disclosure.slice(1)
        
    return <UserCard key={item.name} color={'bg-yellow-300'} name={item.name} profilePicture={newProfilePicture} email={item.email} availability={item.availability} phone={item.phone} completedTraining={item.completedTraining} address={item.address} disclosure={newDisclosure}/>
    
})} */}
     {collectingPictures &&collectingPictures.filter(item=>item.status==='pending').map((item)=>{
      const {filePath,username,_id}=item
      const imagePath=filePath.slice(1)
      console.log(imagePath);
      return <UserPicture imagePath={imagePath} username={username} id={_id}/>
     })}
     <p className=' flex  items-center'>
        <BsFillCheckCircleFill className=' text-green-400' />
        Approved pictures
      </p>
      {collectingPictures &&collectingPictures.filter(item=>item.status==='approved').map((item)=>{
      const {filePath,username,_id}=item
      const imagePath=filePath.slice(1)
      console.log(imagePath);
      return <UserPicture imagePath={imagePath} username={username} id={_id}/>
     })}
    </div>
  )
}

export default UsersUpload