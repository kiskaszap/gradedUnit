import React from 'react';
import HomeHeader from '../assets/homeHeader.jpg';
import HomeHeaderBottom from '../assets/homeHeaderBottom.png';

const Home = () => {
  return (
    <div>
      <header className=' h-[calc(100vh-4.5rem)]' >
      <div className="header__sub1  h-full bg-cover bg-center relative" style={{backgroundImage:`url(${HomeHeader})`}}>
         <div className="header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden">
          <div className="header__sub3 absolute  top-52 left-0 h-full w-full bg-center bg-no-repeat " style={{backgroundImage:`url(${HomeHeaderBottom})`}}></div>
         </div>
      </div>
     
      
      </header>
    </div>
  );
};

export default Home;
