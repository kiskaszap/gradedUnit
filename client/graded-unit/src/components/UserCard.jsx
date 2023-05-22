import React from 'react'
import UserAvatar from '../assets/userAvatar.png'
import {AiOutlineDownload, AiOutlineUserAdd, AiOutlineUserDelete} from 'react-icons/ai'


import axios from 'axios'

const UserCard = (props) => {
 // const disclosure=props.disclosure
 const downloadDisclosure= async()=>{
  try {
   
        
        const response = await axios.post('http://localhost:5000/downloadDisclosure', {email:props.email});
        console.log(response);
        window.open(`http://localhost:5000/${response.data.data}`);
      } catch (err) {
        console.error('Error:', err);
      }
     }
  
 
  return (
    <div className=' flex-col my-5  md:flex bg-yellow-300 p-10 gap-6 rounded-lg relative'>
     <div className=' w-10 h-10 rounded-full bg-white flex items-center justify-center absolute top-5 right-5 cursor-pointer'>
     <AiOutlineUserAdd className=' w-8 h-8 text-green-500'/>
     </div>
     <div className='  w-10 h-10 rounded-full bg-white flex items-center justify-center absolute bottom-5 right-5 cursor-pointer'>

     <AiOutlineUserDelete className=' w-8 h-8 text-red-500'/>
     </div>

     <div className=' flex items-center justify-center'>
     <img className='  h-36 w-36 rounded-full flex items-center ' src={props.profilePicture ?`http://localhost:5000${props.profilePicture}`:UserAvatar} alt={props.name} />
     </div>
     <div>
     <p className=' text-gray-800  font-poppins font-semibold'><span className=' font-anton  font-bold'>Name: </span> {props.name}</p>
     <p className=' text-gray-800 font-poppins font-semibold'><span className=' font-anton font-bold'>Email: </span>{props.email}</p>
     <p className=' text-gray-800 poppins font-semibold'><span className=' font-anton font-bold'>Phone: </span>{props.phone}</p>
     <p className=' text-gray-800 poppins font-semibold'><span className=' font-anton font-bold'>Address: </span>{props.address}</p>
     {props.completedTraining.map((item)=>{
      return <p className=' text-gray-800 poppins font-semibold'><span className=' font-anton font-bold'>Completed Training: </span>{item}</p>
     })}
     <p className=' text-gray-800 poppins font-semibold'><span className=' font-anton font-bold'>Availability: </span>{props.availability}</p>
     <p className=' text-gray-800 flex poppins font-semibold'><span className=' font-anton font-bold'>Download disclosure: </span><AiOutlineDownload onClick={downloadDisclosure} className=' items-center text-2xl font-extrabold ml-5 cursor-pointer' /></p>
     
     </div>

    </div>
  )
}

export default UserCard