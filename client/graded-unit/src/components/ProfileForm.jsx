import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useContext} from 'react'
import { AppContext} from '../components/AppWrapper'


const ProfileForm = () => {
//   const defaultUserData = {
//   name: "",
//   email: "",
//   phone: "",
//   address: "",
//   availability: "",
//   completedTraining: [],
// };
  const {userData,setUserData} = useContext(AppContext)
  console.log(userData);
  
  
  const handleSubmit= async (e)=>{
    e.preventDefault()
    
  axios
      .post('http://localhost:5000/userdetails', userData , )
      .then((response) => {
        console.log(response);
        if(response.status===404){
          console.log('error');
        }
      }

      )}
  const handleChange = async e => {
  const name = e.target.name;
  const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

  if (name === 'training') {
    if (value && !userData.completedTraining.includes(e.target.value)) {
      setUserData(prevUserData => ({
        ...prevUserData,
        completedTraining: [...prevUserData.completedTraining, e.target.value],
      }));
    } else {
      setUserData(prevUserData => ({
        ...prevUserData,
        completedTraining: prevUserData.completedTraining.filter(
          training => training !== e.target.value,
        ),
      }));
    }
  } else {
    await setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  }
};

  
  return (
    <section>
      
        <p className=' font-poppins font-semibold'>Profile details</p>
        <section>
          <form
            onSubmit={handleSubmit}
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            <div className='flex flex-col'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none '
                name='name'
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
                name='email'
                placeholder={userData.email}
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='phone'
                id='phone'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
                name='phone'
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                id='address'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
                name='address'
                value={userData.address}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className=' font-poppins font-semibold' htmlFor='availability'>Availability</label>
              <div className='grid gird-cols-1 md:grid-cols-2'>
                <label >
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='1-day-a-week'
                    onChange={handleChange}
                  />
                  One day a week
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='2-days-a-week'
                    onChange={handleChange}
                  />
                  Two days a week
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='3-days-a-week'
                    onChange={handleChange}

                  />
                  Three days a week
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='4-days-a-week'
                    onChange={handleChange}
                  />
                  Four days a week
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='5-days-a-week'
                    onChange={handleChange}
                  />
                  Five days a week
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='only-weekend'
                    onChange={handleChange}
                  />
                  Only weekend
                </label>
                <label>
                  <input className=' mr-2'
                    type='radio'
                    name='availability'
                    value='weekday-only-afternoon'
                    onChange={handleChange}
                  />
                  Only afternoons
                </label>
              </div>
            </div>
            {/* <FileUploader/> */}
            <div className='flex flex-col'>
              <label className=' font-poppins font-semibold' htmlFor='training'>Completed training</label>
              <div className='grid gird-cols-1 md:grid-cols-2'>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='personal-learning-plan'
                    onChange={handleChange}
                  />
                  Personal Learning 
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='essential-information'
                    onChange={handleChange}
                  />
                  Essential Information
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='Safety'
                    onChange={handleChange}
                  />
                  Safety
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='safeguarding'
                    onChange={handleChange}
                  />
                  Safeguarding
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='tools-for-the-role'
                    onChange={handleChange}
                  />
                  Tools for the Role
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='general-data-protection-regulations'
                    onChange={handleChange}
                  />
                  GDPR
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='trustee-introduction'
                    onChange={handleChange}
                  />
                  Trustee Introduction
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='none'
                    onChange={handleChange}
                  />
                  None
                </label>
              </div>
            </div>
            <div className='flex justify-center items-center md:justify-start md:items-end'>
            <button type="submit" className=" w-32 h-12 text-white bg-[#0FCE7E]  focus:ring-4 focus:outline-none focus:ring-[#0FCE7E] font-medium rounded-lg text-sm px-5 py-2.5 text-center font-anton justify-start items-start">Submit</button>
            </div>
          </form>
          
          
        </section>
      
    </section>
  );
};

export default ProfileForm;
