import React from 'react'
import GalleryCarousel from '../components/GalleryCarousel'
import Footer from '../components/Footer';

//assets
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';
import GalleryHeader from '../assets/galleryHeader.jpg'



const Gallery = () => {
  return (
    <>
     <header className=' h-[calc(70vh-4.5rem)] relative mb-32'>
        <div
          className='header__sub1  h-full bg-cover bg-top relative'
          style={{ backgroundImage: `url(${GalleryHeader})` }}
        >
          <div className='header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden'>
            <div
              className='header__sub3 absolute  -bottom-10 left-0 top-60 xl:bg-cover h-full w-full bg-center bg-no-repeat opacity-80 '
              style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
            ></div>
          </div>
        </div>

        <div className='header__sub2--content text-white  opacity-100 absolute top-0 left-0 flex h-full w-full  items-center  pl-[5rem] '>
          <div className='w-full items-center justify-center'>
            <h2 className='z-50 text-3xl text-center'>Gallery</h2>
            <h1 className='text-[2.6rem] font-extrabold text-center'>
              Explore our adventures of memorable moments with cub scouts
            </h1>
          </div>
        </div>
      </header>
     <GalleryCarousel/>
     <Footer/>
     
    </>
  )
}

export default Gallery
