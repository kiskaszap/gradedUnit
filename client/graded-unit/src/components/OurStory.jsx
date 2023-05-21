import React from 'react'
import { Link } from 'react-router-dom'
import Scouthelp from '../assets/scout help.jpg'

const OurStory = () => {
  return (
    <div className='homeOurStory grid grid-cols-1 md:grid-cols-2  mt-24 gap-20 '>
            <div className='homeOurStory--description   flex  justify-center flex-col h-full '>
              <h2 className='text-[#0FCE7E] text-lg font-semibold font-poppins'>
                Our Story
              </h2>
              <h1 className='text-[#303030] text-[1.8rem] font-extrabold font-anton'>
                We help people to make their life better
              </h1>
              <p className=' font-poppins'>
                Our Cub Scouts are committed to making a difference in our
                communities. From volunteering at local food banks to organizing
                charity fundraisers, we're dedicated to helping those in need.
                Join us on our mission to make the world a better place, one
                good deed at a time.
              </p>
              <button className='flex w-36 mt-6 px-5 py-2 rounded-xl border border-[#000]  transition-all duration-1000 hover:border-[#0FCE7E] hover:text-[#0FCE7E] justify-center items-center'>
                <Link className=' font-poppins ' to='/about-us'>Read more</Link>
              </button>
            </div>
            <div className='homeOurStory--picture flex-1 flex h-full  items-center '>
              <img
                className='rounded-xl'
                src={Scouthelp}
                alt='help'
              />
            </div>
          </div>
  )
}

export default OurStory