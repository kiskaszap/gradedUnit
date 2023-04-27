import React from 'react';

//components

import Testimonials from '../components/Testimonials';
import FindOutMoreBtn from '../components/FindOutMoreBtn';


//react icons


//components

import ActivitiesMain from '../components/ActivitiesMain';
import Leader from '../components/Leader';
import OurStory from '../components/OurStory';


//assets

import HomeHeader from '../assets/homeHeader.jpg';
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';
import Footer from '../components/Footer';

//data 


import { leaders } from '../data/leader';

const Home = () => {
  return (
    <>
      <div>
        <header className=' h-[calc(100vh-4.5rem)] relative'>
          <div
            className='header__sub1  h-full w-full bg-cover bg-center relative'
            style={{ backgroundImage: `url(${HomeHeader})` }}
          >
            <div className='header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden'>
              <div
                className='header__sub3 absolute w-screen  top-96 left-0 h-full xl:bg-cover  bg-center bg-no-repeat '
                style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
              ></div>
            </div>
          </div>

          <div className='header__sub2--content text-white  opacity-100 absolute top-0 left-0 flex h-full  items-center  pl-[1rem] md:pl-[5rem] w-full md:w-1/2 '>
            
            <div className=' flex flex-col'>
              <h2 className='z-50 text-3xl  font-poppins'>Welcome to</h2>
              <h1 className='text-[3rem] font-extrabold  font-anton'>
                Obanshire Cub Scouts
              </h1>
              <p className=' font-poppins'>
                We're thrilled to have you aboard as we embark on thrilling
                adventures exploring the wonders of nature. Join us as we dive
                into the unknown, discovering hidden gems in forests, exploring
                scenic beaches, and more. Let's create unforgettable memories
                and make new friends along the way. Let the adventure begin!
              </p>
              <FindOutMoreBtn/>
            </div>
          </div>
        </header>
        <main className='mx-20 my-40  '>
          <OurStory/>
          <div className='homeActivities flex flex-col  mt-24 gap-20 '>
            <div className='homeOurStory--description   flex  justify-center flex-col h-full '>
              <h2 className='text-[#0FCE7E] text-lg font-semibold  font-poppins'>
                Activities
              </h2>
              <h1 className='text-[#303030] text-[1.8rem] font-extrabold font-anton'>
                Explore our trending activities
              </h1>
            </div>
            <ActivitiesMain/>
          </div>
        </main>
        <Testimonials />
        <section className=' teamSection   mx-20 my-40'>
          <p className='text-[#0FCE7E] text-lg font-semibold font-poppins'>Our Team</p>
          <h4 className='text-[#303030] text-[1.8rem] font-extrabold mb-20 font-anton'>
            Meet our scout leaders
          </h4>
          <div className='teamSectionPerson grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  h-auto  w-full gap-5'>
            
            {leaders.map((item)=>{
              return <Leader key={item} name={item.name} pic={item.pic} picPosition={item.picPosition} role={item.role}/>
            })}
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
