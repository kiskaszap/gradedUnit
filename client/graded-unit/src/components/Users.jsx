import React, { useEffect, useState } from 'react';
import { BsFillCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import UserCard from './UserCard';
import axios from 'axios';
import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'


const Users = () => {
  const [userFetch, setUserFetch] = useState(null);
  const { isStatusUpdated } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-endpoint' and the user data with your actual endpoint and user data
        const response = await axios.post('http://localhost:5000/fetchUsers');

        setUserFetch(response.data);

        // setFetchedPicture(imageUrl);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, [isStatusUpdated]);
  console.log(userFetch);
  return (
    <div className='my-4'>
      <p className=' flex  items-center'>
        <BsFillCircleFill className=' text-yellow-400' />
        Pending users
      </p>
      <div className=''>
      {userFetch && userFetch.filter(item => item.status === 'pending').map((item) => {
        const newProfilePicture=item.profilePicture.slice(1)
        const newDisclosure=item.disclosure.slice(1)
        
    return <UserCard key={item.name} color={'bg-yellow-300'} name={item.name} profilePicture={newProfilePicture} email={item.email} availability={item.availability} phone={item.phone} completedTraining={item.completedTraining} address={item.address} disclosure={newDisclosure}/>
    
})}
</div>
      <p className=' flex  items-center'>
        <BsFillCheckCircleFill className=' text-green-400' />
        Approved users
      </p>
      <div className=''>
      {userFetch && userFetch.filter(item => item.status === 'approved').map((item) => {
        const newProfilePicture=item.profilePicture.slice(1)
        const newDisclosure=item.disclosure.slice(1)
        
    return <UserCard key={item.name} color={'bg-green-300'} name={item.name} profilePicture={newProfilePicture} email={item.email} availability={item.availability} phone={item.phone} completedTraining={item.completedTraining} address={item.address} disclosure={newDisclosure}/>
    
})}
</div>
      <div className=' grid grid-cols-1 md:grid-cols-2'></div>
    </div>
  );
};

export default Users;
