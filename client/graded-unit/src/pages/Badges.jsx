import React from 'react'
import { allBadges } from '../data/badges'
import HomeHeaderBottom from '../assets/homeHeaderBottom.png'
import BadgesHeader from '../assets/badgesHeader.jpg'
import Footer from '../components/Footer'
import Input from '../components/Input'

import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'
import { useNavigate } from 'react-router-dom';




const Badges = () => {
   
const { badges, setBadges, searchValue,setSearchValue } = useContext(AppContext);
const navigate = useNavigate();


 
  return (
    <div>
      <header className=' h-[calc(70vh-4.5rem)] relative mb-32 '> 
      
        <div
          className='header__sub1  h-full bg-cover  bg-center relative'
          style={{ backgroundImage: `url(${BadgesHeader})` }}
         
        >
          <div className='header__sub2 bg-black  h-full w-full opacity-60 absolute top-0 left-0 overflow-hidden'>
            
            <div
              className='header__sub3 absolute  -bottom-10 left-0 h-full w-full bg-center bg-no-repeat opacity-80 '
              
              style={{ backgroundImage: `url(${HomeHeaderBottom})` }}
            ></div>
          </div>
        </div>

        <div className='header__sub2--content text-white  opacity-100 absolute top-0 left-0 flex h-full w-full  items-center  pl-[5rem] '>
          {/* width different */}
          <div className='w-full items-center justify-center'>
            <h2 className='z-50 text-3xl text-center font-poppins'>Badges</h2>
            <h1 className='text-[2.6rem] font-extrabold text-center font-anton'>
              Explore our activity badges
            </h1>
          </div>
        </div>
      </header>
      <Input name='Search' label='text' id='search' placeholder='Search ' searchValue={setSearchValue} setBadges={setBadges}/>
      <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto  '>
        { allBadges
      .filter((badge) =>
        badge.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((items) => {
        return (
          <div className="justify-center items-center flex flex-col cursor-pointer" key={items.name} onClick={(e)=>{
            const singleBadge=e.currentTarget.children[1].innerHTML
            navigate(`/badges/${singleBadge}`);
            
          
          }}>
            <img className="w-24 h-24 justify-center items-center" src={items.src} alt="" />
            <p className="text-center">{items.name}</p>
          </div>
        );
      })
  }
        
      </div>

      <Footer/>
    </div>
  )
}

export default Badges
