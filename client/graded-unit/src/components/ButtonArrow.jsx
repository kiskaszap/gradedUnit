import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';

const ButtonArrow = (props) => {
  return (
    <button className='  bg-[#0FCE7E] px-5 py-2 rounded-xl flex items-center  transition-all duration-1000 hover:bg-green-600 hover:scale-110 font-semibold'>
      <Link
        className='flex gap-4 items-center'
        to='/register'
      >
        Join Scouts <HiArrowLongRight className='w-6 h-auto' />
      </Link>
    </button>
  );
};

export default ButtonArrow;
