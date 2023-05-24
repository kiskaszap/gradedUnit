import React, {useContext} from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import { AppContext } from '../components/AppWrapper';
 

const UserPicture = (props) => {
 const { isUserPictureUpdated,setIsUserPictureUpdated } = useContext(AppContext);
  const deletePicture = () => {
    axios
      .post('http://localhost:5000/deleteUserPicture', { id: props.id })
      .then((response) => {
        if(response.data.data==='deleted'){
         setIsUserPictureUpdated(!isUserPictureUpdated)
        }
      })
      .catch((error) => {
        console.log(error);
      });
     }
 const approvePicture = () => {
    axios
      .post('http://localhost:5000/approveUserPicture', { id: props.id })
      .then((response) => {
        if(response.data.data==='approved'){
         setIsUserPictureUpdated(!isUserPictureUpdated)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=' relative'>
      <img
        src={`http://localhost:5000${props.imagePath}`}
        alt={props._id}
      />
      <p className=' absolute left-3 bottom-2 z-50 text-white'>
        {props.username}
      </p>
      <div className=' absolute top-5 right-5 bg-white rounded-full'>
        <AiOutlineCheckCircle onClick={approvePicture} className=' text-green-500 w-10 h-10 cursor-pointer ' />
      </div>
      <div className=' absolute bottom-5 right-5 bg-white rounded-full'>
        <MdOutlineCancel
          onClick={deletePicture}
          className=' text-red-500  w-10 h-10  cursor-pointer'
        />
      </div>
    </div>
  );
};

export default UserPicture;
