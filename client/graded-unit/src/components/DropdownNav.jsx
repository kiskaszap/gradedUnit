import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'

const DropdownNav = () => {
 const { toggleNav } = useContext(AppContext);
  return (
    <div className='navDiv__2  absolute top-full left-0 flex-col inline-flex  bg-white text-[#535353] list-none justify-center items-center z-50  p-3' style={{ marginTop: "10px" ,marginLeft:"-1rem" }}>
 {/* max-sm:hidden max-md:hidden lg1077:hidden  md:hidden */}
          
            <li key={'home'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/'>Home</Link>
            </li>
            <li key={'activities'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/activities'>Activities</Link>
            </li>
            <li key={'badges'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/badges'>Badges</Link>
            </li>
            <li key={'games'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/games'>Games</Link>
            </li>
            <li key={'gallery'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li key={'about'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/about-us'>About</Link>
            </li>
            <li key={'contact'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' onClick={toggleNav}>
              <Link to='/contact-us'>Contact</Link>
            </li>
            <li key={'login'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E] md:hidden' onClick={toggleNav}>
              <Link to='/login'>Login</Link>
            </li>
            <li key={'register'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E] md:hidden' onClick={toggleNav}>
              <Link to='/register'>Register</Link>
            </li>
          </div>
  )
}

export default DropdownNav