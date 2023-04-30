import React from 'react'
import FileUploader from './FileUploader'

const AdminProfileForm = () => {
  return (
    <section>
      <form>
        <p className=' font-poppins font-semibold'>Profile details</p>
        <section>
          <form
            action=''
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            <div className='flex flex-col'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none '
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='phone'
                id='phone'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                id='address'
                className='border-[1px] border-[#0FCE7E] focus:border-blue-800 focus:border-1 outline-none'
              />
            </div>
            <FileUploader/>
            <div className='flex flex-col'>
              <label className=' font-poppins font-semibold' htmlFor='training'>Completed training</label>
              <div className='grid gird-cols-1 md:grid-cols-2'>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='personal-learning-plan'
                  />
                  Personal Learning 
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='essential-information'
                  />
                  Essential Information
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='Safety'
                  />
                  Safety
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='safeguarding'
                  />
                  Safeguarding
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='tools-for-the-role'
                  />
                  Tools for the Role
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='general-data-protection-regulations'
                  />
                  GDPR
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='trustee-introduction'
                  />
                  Trustee Introduction
                </label>
                <label>
                  <input className=' mr-2'
                    type='checkbox'
                    name='training'
                    value='none'
                  />
                  None
                </label>
              </div>
            </div>
            <div className='flex justify-center items-center md:justify-start md:items-end'>
            <button type="submit" className=" w-32 h-12 text-white bg-[#0FCE7E]  focus:ring-4 focus:outline-none focus:ring-[#0FCE7E] font-medium rounded-lg text-sm px-5 py-2.5 text-center font-anton justify-end items-end">Submit</button>
            </div>
          </form>
          
          
        </section>
      </form>
    </section>
  )
}

export default AdminProfileForm