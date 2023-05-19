import React, { useState,useContext, useEffect  } from 'react'
import FileUploader from './FileUploader'
import { AppContext } from '../components/AppWrapper';
import axios from 'axios';
import {BsCircleFill} from 'react-icons/bs'

const Disclosure = () => {
  const { userData, isUpdated } = useContext(AppContext);
  const [isDisclosure, setIsDisclosure]=useState(null)

  useEffect(() => {
    console.log(isUpdated, 'In UseEffect');
    
    
      // update the count value
      axios.post('http://localhost:5000/dislosureFetch', {email:userData.email})
        .then( response => {
          console.log(response.data.status);
          
          if(response.data.data==='Uploaded'&& response.data.status==='pending'){
            setIsDisclosure(<h1 className=' flex gap-2  items-center'><BsCircleFill className=' text-yellow-400'/>Pending</h1>)
          }
         else if (response.data.data==='Uploaded'&& response.data.status==='approved') {
            setIsDisclosure(<h1 className=' flex gap-2  items-center'><BsCircleFill className=' text-green-400'/>Approved</h1>)
          } else {
            setIsDisclosure(<h1 className=' flex gap-2  items-center'><BsCircleFill className=' text-red-400'/>No data/rejected</h1>)
          }
        })
        .catch(error => {
          console.log(error);
        });
       
        console.log(isDisclosure);
  },[isUpdated,userData.email]); 
  return (<div>
    <FileUploader />
    <div><h2>{isDisclosure}</h2></div>
    
    </div>
    
  )
}

export default Disclosure