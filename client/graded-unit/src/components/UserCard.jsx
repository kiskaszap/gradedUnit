import React from 'react'
import UserAvatar from '../assets/userAvatar.png'
import {AiOutlineDownload} from 'react-icons/ai'
import axios from 'axios'

const UserCard = (props) => {
 // const disclosure=props.disclosure
 const downloadDisclosure = async () => {
  try {
    // make a GET request and pass email as a query parameter
    window.open(`http://localhost:5000/downloadDisclosure?email=${props.email}`);
  } catch (err) {
    console.error('Error:', err);
  }
}
  
 
  return (
    <div className=' flex my-5 bg-yellow-300 p-10 gap-6 rounded-lg   '>
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