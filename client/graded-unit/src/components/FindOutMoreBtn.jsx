import React from 'react'
import { Link } from 'react-router-dom'
import ButtonArrow from './ButtonArrow'

const FindOutMoreBtn = () => {
  return (
    <div className='flex mt-5 gap-4'>
                <ButtonArrow />
                <button className=' px-5 py-2 rounded-xl border-2 transition-all duration-1000 hover:border-[#0FCE7E] hover:text-[#0FCE7E]'>
                  <Link className=' font-poppins' to='/about-us'>Find out more</Link>
                </button>
              </div>
  )
}

export default FindOutMoreBtn