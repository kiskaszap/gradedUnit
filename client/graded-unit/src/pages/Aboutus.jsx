import React from 'react';
import { Link } from 'react-router-dom';

//assets
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';
import AboutUsHeader from '../assets/aboutusHeader.jpg';
import Scouthelp from '../assets/scout help.jpg';
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'

//components
import Footer from '../components/Footer';
import OurStory from '../components/OurStory';


//react icons

import { MdOutlineGroups2 } from 'react-icons/md';
import { BsRocketTakeoff } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';

const Aboutus = () => {
  return (
    <div>
      <header className=' h-[calc(70vh-4.5rem)] relative'>
        <div
          className='header__sub1  h-full bg-cover bg-bottom relative'
          style={{ backgroundImage: `url(${AboutUsHeader})` }}
        >
          <div className='header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden'>
            <div
              className='header__sub3 absolute  -bottom-10 left-0 h-full w-full top-60 xl:bg-cover bg-center bg-no-repeat opacity-80 '
              style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
            ></div>
          </div>
        </div>

        <div className='header__sub2--content text-white  opacity-100 absolute top-0 left-0 flex h-full w-full  items-center  pl-[5rem] '>
          <div className='w-full items-center justify-center'>
            <h2 className='z-50 text-3xl text-center font-poppins'>About us</h2>
            <h1 className='text-[3rem] font-anton font-extrabold text-center'>
              We help to make people`s life better
            </h1>
          </div>
        </div>
      </header>
      <main className='mx-20 my-40'>
        <OurStory/>

        <section className='aboutUs__info mt-40 w-full '>
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
            <div className='flex-1 flex flex-col'>
              <MdOutlineGroups2 className=' w-20  h-20 text-[#0FCE7E]' />
              <div className=' border-l-4 border-[#0FCE7E] pl-2'>
                <p className=' font-anton text-2xl font-extrabold pb-4'>Great team work</p>
                <p className=' font-poppins'>
                  Great teamwork is the foundation of any successful scout
                  organization. Together, we strive to build a supportive and
                  inclusive community where every member is valued and has the
                  opportunity to grow. By working collaboratively towards common
                  goals, we can achieve incredible things and create a positive
                  impact on the world around us.
                </p>
              </div>
            </div>
            <div className='flex-1 flex flex-col'>
              <BsRocketTakeoff className=' w-20 h-20 text-[#0FCE7E]' />
              <div className=' border-l-4 border-[#0FCE7E] pl-2'>
                <p className=' font-anton text-2xl font-extrabold pb-4'>Our vision</p>
                <p className='font-poppins'>
                  Our mission is to develop the leaders of tomorrow by providing
                  young people with opportunities to grow, learn, experience,
                  and serve in their communities. We strive to instill values
                  such as honesty, respect, and responsibility, while fostering
                  a love of nature and a commitment to helping others. We
                  believe that by working together we can create a better world.
                </p>
              </div>
            </div>
            <div className='flex-1 flex flex-col'>
              <AiOutlineLineChart className=' w-20 h-20 text-[#0FCE7E]' />
              <div className=' border-l-4 border-[#0FCE7E] pl-2'>
                <p className=' font-anton text-2xl font-extrabold pb-4'>Our mission</p>
                <p className='font-poppins'>
                  Our vision is to create a better world by empowering young
                  people to become responsible citizens who are capable of
                  making positive contributions to their communities. Through
                  scouting, we aim to foster personal development, leadership
                  skills, and a strong sense of social responsibility. Our
                  vision is to build a future where young people make a positive
                  impact.
                </p>
              </div>
            </div>
          </div>
          <div className='gallery pt-20'>
            <p className='text-[#0FCE7E] text-lg font-semibold font-poppins'>Gallery</p>
            <p className='text-[#303030] text-[1.8rem] font-extrabold font-anton'>
              Explore our adventures
            </p>
            <button className='  block ml-auto w-32 mt-24 px-5 py-2 rounded-xl border border-[#000]  transition-all duration-1000 hover:border-[#0FCE7E] hover:text-[#0FCE7E]  mb-4'>
                <Link className='font-poppins' to='/gallery'>View more</Link>
              </button>
            <div className='gallery__pictures   grid grid-cols-3 grid-rows-2 gap-2 h-screen'>
              <div
                className='col-span-1 row-span-2 bg-cover bg-center'
                style={{ backgroundImage: `url(${Gallery1})` }}
              ></div>
              <div
                className='col-span-1 row-span-1 bg-cover bg-center'
                style={{ backgroundImage: `url(${Gallery2})` }}
              ></div>
              <div
                className='col-span-0 row-span-2 bg-cover bg-center'
                style={{ backgroundImage: `url(${Gallery3})` }}
              ></div>
              <div
                className='col-span-1 row-span-1 bg-cover bg-center'
                style={{ backgroundImage: `url(${Gallery4})` }}
              ></div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Aboutus;
