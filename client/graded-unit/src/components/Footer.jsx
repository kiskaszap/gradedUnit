import React from 'react'
import { Link } from 'react-router-dom';


import HomeHeaderBottom from '../assets/homeHeaderBottom.png';

import { FaFacebook, FaMobileAlt } from 'react-icons/fa';
import { BsYoutube, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import {FiMapPin} from 'react-icons/fi'
import Logo2 from '../components/Logo2';
import { HiArrowLongRight } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className=' mt-20'>
          <div className='footer_sub w-full h-20 bg-[#0FCE7E] flex'>
            <div className=' w-full h-full flex justify-between items-center px-20'>
              <p className='text-white text-xl  font-bold'>
                Are you ready to join our journey?
              </p>
              <button className='  bg-[#fff] px-5  rounded-lg flex items-center  transition-all duration-1000 h-10 hover:bg-green-600 hover:scale-110 font-semibold'>
                <Link
                  className='flex gap-4 items-center'
                  to='/register'
                >
                  Join Scouts <HiArrowLongRight className='w-6 h-auto' />
                </Link>
              </button>
            </div>
          </div>
          <div className='footerMenu bg-black w-full h-96 relative flex justify-center items-center '>
            <div className='opacity-100  flex-1 ml-12 '>
              <Logo2 className='z-50 ' />
              <p className='text-[#D9DBE1]'>
                A place where young people learn valuable life skills, build
                lifelong friendships, and make a positive impact on their
                communities through outdoor adventures and service projects.
                Together, we strive to be prepared, curious, and kind.
              </p>
              <div className='flex gap-3'>
                <a
                  className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#27cbd1]'
                  href='https://twitter.com/ObanshireScouts'
                >
                  <BsTwitter className=' w-6 h-6' />{' '}
                </a>
                <a
                  className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#27cbd1]'
                  href='https://www.youtube.com/@UKScouts'
                >
                  <BsYoutube className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#ff3d3d]' />{' '}
                </a>
                <a
                  className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#27cbd1]'
                  href='https://www.facebook.com/scouts.scotland/'
                >
                  <FaFacebook className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50  hover:text-[#4267B2]' />{' '}
                </a>
                <a
                  className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#27cbd1]'
                  href='https://www.instagram.com/scoutsscotland/'
                >
                  <AiFillInstagram className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50 hover:text-[#E1306C]' />
                </a>
              </div>
            </div>
            <div className=' opacity-100 z-50 flex flex-col flex-1 gap-3  ml-16 '>
              <h1 className='text-white'>Quick Links</h1>
              <Link
                className='text-[#D9DBE1] hover:text-white z-50 cursor-pointer'
                to='/register'
              >
                Join scouts
              </Link>
              <Link
                className='text-[#D9DBE1] hover:text-white z-50 cursor-pointer'
                to='/activities'
              >
                Activities
              </Link>
              <Link
                className='text-[#D9DBE1] hover:text-white z-50 cursor-pointer'
                to='/badges'
              >
                Badges
              </Link>
              <Link
                className='text-[#D9DBE1] hover:text-white z-50 cursor-pointer'
                to='/contact-us'
              >
                Contact us
              </Link>
            </div>

            <div className=' opacity-100 z-50 flex flex-col flex-1 gap-5'>
              <h1 className='text-white'>Get in touch</h1>
              <p className='text-[#D9DBE1] flex'>
                <FaMobileAlt className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50' />{' '}
                01896 358 269
              </p>
              <p className='text-[#D9DBE1] flex'>
                <MdEmail className=' w-6 h-6 text-[#0FCE7E] cursor-pointer z-50' />
                obanscouts@goscouts.com
              </p>
              <p className='text-[#D9DBE1] flex'>
                <FiMapPin className=' w-6 h-6   cursor-pointer z-50 text-[#0FCE7E] ' />
                123 Main St. Oban PA34 3AB
              </p>
            </div>
            <div
              className='footerMenu--secondBackground w-full h-full absolute top-0 bg-cover opacity-10 z-10 bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${HomeHeaderBottom}) ` }}
            ></div>
          </div>
        </footer>
  )
}

export default Footer