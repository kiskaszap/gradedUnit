import React from 'react';
import { Link } from 'react-router-dom';

//components

import Testimonials from '../components/Testimonials';
import ButtonArrow from '../components/ButtonArrow';


//react icons

import { MdOutlineLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';


//assets
import Scouthelp from '../assets/scout help.jpg';
import HomeHeader from '../assets/homeHeader.jpg';
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';
import King from '../assets/king.jpg';
import Camping from '../assets/camping.jpg';
import Hiking from '../assets/hiking.jpg';
import Leader1 from '../assets/leader1.png';
import Leader2 from '../assets/leader2.jpg';
import Leader3 from '../assets/leader3.jpg';
import Leader4 from '../assets/leader4.jpg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div>
        <header className=' h-[calc(100vh-4.5rem)] relative'>
          <div
            className='header__sub1  h-full bg-cover bg-center relative'
            style={{ backgroundImage: `url(${HomeHeader})` }}
          >
            <div className='header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden'>
              <div
                className='header__sub3 absolute  top-52 left-0 h-full w-full bg-center bg-no-repeat '
                style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
              ></div>
            </div>
          </div>

          <div className='header__sub2--content text-white  opacity-100 absolute top-0 left-0 flex h-full  items-center  pl-[5rem] w-1/2'>
            <div className=''>
              <h2 className='z-50 text-3xl'>Welcome to</h2>
              <h1 className='text-[3rem] font-extrabold'>
                Obanshire Cub Scouts
              </h1>
              <p>
                We're thrilled to have you aboard as we embark on thrilling
                adventures exploring the wonders of nature. Join us as we dive
                into the unknown, discovering hidden gems in forests, exploring
                scenic beaches, and more. Let's create unforgettable memories
                and make new friends along the way. Let the adventure begin!
              </p>
              <div className='flex mt-5 gap-4'>
                <ButtonArrow />
                <button className=' px-5 py-2 rounded-xl border-2 transition-all duration-1000 hover:border-[#0FCE7E] hover:text-[#0FCE7E]'>
                  <Link to='/about-us'>Find out more</Link>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className='mx-20 my-40  '>
          <div className='homeOurStory flex h-80 mt-24 gap-20 '>
            <div className='homeOurStory--description  flex-1 flex  justify-center flex-col h-full '>
              <h2 className='text-[#0FCE7E] text-lg font-semibold'>
                Our Story
              </h2>
              <h1 className='text-[#303030] text-[1.8rem] font-extrabold'>
                We help people to make their life better
              </h1>
              <p>
                Our Cub Scouts are committed to making a difference in our
                communities. From volunteering at local food banks to organizing
                charity fundraisers, we're dedicated to helping those in need.
                Join us on our mission to make the world a better place, one
                good deed at a time.
              </p>
              <button className='inline-flex w-32 mt-6 px-5 py-2 rounded-xl border border-[#000]  transition-all duration-1000 hover:border-[#0FCE7E] hover:text-[#0FCE7E]'>
                <Link to='/about-us'>Read more</Link>
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
          <div className='homeActivities flex flex-col h-80 mt-24 gap-20 '>
            <div className='homeOurStory--description   flex  justify-center flex-col h-full '>
              <h2 className='text-[#0FCE7E] text-lg font-semibold'>
                Activities
              </h2>
              <h1 className='text-[#303030] text-[1.8rem] font-extrabold'>
                Explore our trending activities
              </h1>
            </div>
            <div className='homeActivities__cards flex gap-5'>
              <div className='homeActivities__card flex-1  rounded-t-xl  '>
                <div className='homeActivities__card--picture  '>
                  <img
                    className='rounded-t-xl'
                    src={King}
                    alt='promise'
                  />
                </div>
                <div className='homeActivities__card--description'>
                  <h2 className='text-xl  font-semibold my-3'>
                    Renewing your promise
                  </h2>
                  <p>
                    Renew your promise with your fellow Scouts and join us in
                    celebrating the historic occasion of HM The King's
                    Coronation, as we come together to honor our commitment to
                    Scouting values.
                  </p>
                </div>
                <div className='homeActivities__card--details w-full flex justify-between mt-5  '>
                  <p className='flex'>
                    <MdOutlineLocationOn className='w-6 h-6 text-[#0FCE7E]' />
                    123 Main St. Oban
                  </p>
                  <p className='flex items-center'>
                    <BiTimeFive className='w-6 h-6 text-[#0FCE7E]' /> 2 hrs
                  </p>
                </div>
              </div>
              <div className='homeActivities__card flex-1 relative'>
                <div className='homeActivities__card--picture'>
                  <img
                    className='rounded-xl'
                    src={Camping}
                    alt='camping'
                  />
                </div>
                <div className='homeActivities__card--description'>
                  <h2 className='text-xl  font-semibold my-3'>
                    Camping basics
                  </h2>
                  <p>
                    Discover the thrill of camping and outdoor exploration with
                    our programs that teach you essential survival skills and
                    take you on unforgettable adventures.
                  </p>
                </div>
                <div className='homeActivities__card--details flex w-full justify-between mt-5 absolute bottom-0 left-0'>
                  <p className='flex'>
                    <MdOutlineLocationOn className='w-6 h-6 text-[#0FCE7E]' />
                    123 Main St. Oban
                  </p>
                  <p className='flex items-center'>
                    <BiTimeFive className='w-6 h-6 text-[#0FCE7E]' /> 2 hrs
                  </p>
                </div>
              </div>
              <div className='homeActivities__card flex-1 relative'>
                <div className='homeActivities__card--picture'>
                  <img
                    className='rounded-xl'
                    src={Hiking}
                    alt=''
                  />
                </div>
                <div className='homeActivities__card--description'>
                  <h2 className='text-xl  font-semibold my-3'>
                    Hiking training
                  </h2>
                  <p>
                    Experience the breathtaking beauty of nature with the Scouts
                    and learn essential hiking skills as we guide you on
                    unforgettable outdoor adventures.
                  </p>
                </div>
                <div className='homeActivities__card--details w-full flex justify-between mt-5 absolute  bottom-0 left-0'>
                  <p className='flex'>
                    <MdOutlineLocationOn className='w-6 h-6 text-[#0FCE7E]' />
                    123 Main St. Oban
                  </p>
                  <p className='flex items-center'>
                    <BiTimeFive className='w-6 h-6  text-[#0FCE7E]' /> 2 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Testimonials />
        <section className=' teamSection   mx-20 my-40'>
          <p className='text-[#0FCE7E] text-lg font-semibold'>Our Team</p>
          <h4 className='text-[#303030] text-[1.8rem] font-extrabold mb-20'>
            Meet our scout leaders
          </h4>
          <div className='teamSectionPerson flex h-72 w-full gap-5'>
            <div
              className='  bg-cover bg-top flex-1 relative rounded-xl '
              style={{ backgroundImage: `url(${Leader1})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black flex rounded-xl '>
                <div className='  absolute bottom-4 left-3'>
                  <h4 className='text-white  text-xl font-extrabold'>
                    Aaron Mclean
                  </h4>
                  <p className='text-white'>Group Scout Leader</p>
                </div>
              </div>
            </div>
            <div
              className='  bg-cover relative bg-bottom flex-1 rounded-xl'
              style={{ backgroundImage: `url(${Leader2})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl'>
                <div className='  absolute bottom-4 left-3'>
                  <h4 className='text-white  text-xl font-extrabold'>
                    Robert Cameron
                  </h4>
                  <p className='text-white'>President</p>
                </div>
              </div>
            </div>
            <div
              className='  bg-cover bg-top flex-1 relative rounded-xl'
              style={{ backgroundImage: `url(${Leader3})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl'>
                <div className='  absolute bottom-4 left-3'>
                  <h4 className='text-white  text-xl font-extrabold'>
                    James Williams
                  </h4>
                  <p className='text-white'>Group Chair</p>
                </div>
              </div>
            </div>
            <div
              className=' bg-cover bg-center flex-1 relative rounded-xl'
              style={{ backgroundImage: `url(${Leader4})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl'>
                <div className='  absolute bottom-4 left-3'>
                  <h4 className='text-white  text-xl font-extrabold'>
                    Fraser Stark
                  </h4>
                  <p className='text-white'>Group Secretary</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
