import React from 'react';
import { useParams } from 'react-router-dom';
import { allBadges } from '../data/badges';
import { AiFillPrinter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import Footer from '../components/Footer';

const SingleBadges = () => {
  const { id } = useParams();
  const printPage = () => {
    window.print();
  };

  // Filter the badges array based on the ID parameter
  const filteredBadges = allBadges.filter((badge) => badge.name === id);

  // Map the filtered badges to an array of JSX elements
  const badgeElements = filteredBadges.map((badge) => (
    <div key={badge.name}>
      <h1 className=' text-3xl text-center font-poppins  mt-14 mb-14'>
        {badge.name}
      </h1>
      <img
        className='  w-32 h-32 block  mx-auto  mb-20'
        src={badge.src}
        alt={badge.name}
      />
      <div
        className=' font-anton pl-[5rem]'
        dangerouslySetInnerHTML={{ __html: badge.earn }}
      ></div>
    </div>
  ));

  return (
    <div className=' '>
      <AiFillPrinter
        className=' w-12 h-12  mt-14 block mx-auto text-[#0FCE7E] cursor-pointer'
        onClick={printPage}
      />
      {badgeElements}
      <div className=' w-full flex items-center justify-center  pt-11'>
        <button className='  bg-[#fff] px-5  rounded-lg flex items-center  transition-all duration-1000 h-10 hover:bg-green-600 hover:scale-110 font-semibold'>
          <Link
            className='flex gap-4 items-center font-poppins'
            to='/badges'
          >
            Back to badges <HiArrowLongRight className='w-6 h-auto' />
          </Link>
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleBadges;
