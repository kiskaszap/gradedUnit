import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import Testimonial from '../assets/testimonial.jpg';
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';

const Testimonials = () => {
  return (
    <section className=' h-screen w-full  relative'>
          <div
            className='header__sub1  h-full bg-cover bg-center relative'
            style={{ backgroundImage: `url(${Testimonial})` }}
          >
            <div className='header__sub2   bg-black  h-full w-full  opacity-60 absolute top-0 left-0 overflow-hidden z-10 '>
              <div
                className='header__sub3 absolute  top-52 left-0 h-full w-full bg-center bg-no-repeat '
                style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
              ></div>
            </div>
          </div>
          <div className='header__sub2--content   opacity-100 absolute top-0 left-0 flex flex-col h-full w-full justify-center items-center gap-5'>
            <h3 className=' opacity-100 z-50 text-3xl text-[#0FCE7E] font-poppins text-center'>Testimonials</h3>
            <h2 className=' opacity-100 z-50 text-5xl text-white font-anton text-center'>What our community say`s?</h2>
            <div className=' opacity-100 z-50 flex px-9 gap-4 '>
              
              <p className=' opacity-100 z-50 text-lg text-white font-poppins text-center'><span className=' inline-block'> <ImQuotesLeft className=' opacity-100 z-50 text-3xl  text-[#0FCE7E] '/></span> As a parent, I highly recommend the Cub Scouts program. My son has grown in confidence and learned valuable life skills such as leadership and teamwork, all while having fun in a supportive environment. The Cub Scouts have given him a sense of community and belonging that I am grateful for. <span className=' inline-block'> <ImQuotesRight className=' opacity-100 z-50 text-3xl  text-[#0FCE7E] '/></span></p>
              
            </div>

          </div>
        </section>
  )
}

export default Testimonials