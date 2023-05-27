import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const OtherUsers = () => {
 const [displayUsers, setDisplayUsers]=useState()
useEffect(() => {
    axios.post('http://localhost:5000/otherUsers')
      .then(response => {
        setDisplayUsers(response.data)
        
      })
      .catch(error => {
        
        console.error(error);
      });
  }, []);
  return (
    <div>
     {displayUsers && displayUsers.map((item)=>{
      const {name, email, phone, profilePicture, availability}=item
      const imagePath=profilePicture.slice(1)
      return <div key={name} className='  bg-green-400 rounded-2xl p-5 m-5 flex flex-col items-center justify-center'>
       <img className=' w-20 h-20 rounded-full' src={`http://localhost:5000${imagePath}`} alt={name} />
       <p>{name}</p>
       <p>{email}</p>
       <p>{phone}</p>
       <p>{availability}</p>

      </div>
     })}
    </div>
  )
}

export default OtherUsers