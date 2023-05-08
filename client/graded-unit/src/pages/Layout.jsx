import { Outlet, Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import Logo from '../components/Logo';
import {RxDropdownMenu} from 'react-icons/rx'
import DropdownNav from '../components/DropdownNav';
import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'


const Layout = () => {
  const { dropdownOpen,toggleNav, isLoggedIn, logOut, isAdmin } = useContext(AppContext);
  
  return (
    <>
      <nav className=''>
       <ul className=' flex  my-5 justify-around items-center font-poppins' > 
       <Logo/>
      <div className="relative">
  <RxDropdownMenu 
    className="w-8 h-8 text-[#0FCE7E] xl:hidden"
    onClick={toggleNav}
  />
  {dropdownOpen && <DropdownNav />}
</div>

       
        
          <div className='navDiv__2 flex  gap-x-10 text-[#535353
] max-sm:hidden max-md:hidden lg1077:hidden  md:hidden xl:flex  '>
          
            <li key={"home"} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/'>Home</Link>
            </li>
            <li key={'activities'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/activities'>Activities</Link>
            </li>
            <li key={'badges'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/badges'>Badges</Link>
            </li>
            <li key={'games'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/games'>Games</Link>
            </li>
            <li key={'gallery'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li key={'about'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/about-us'>About</Link>
            </li>
            <li key={'contact'} className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/contact-us'>Contact</Link>
            </li>
          </div>
          <div className={` navDiv__3  gap-x-3 hidden md:flex`}>
            <li className={`${isLoggedIn&&isAdmin ? 'flex': 'hidden'} border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]`}>
              <Link to='/admindashboard'>Dashboard</Link>
            </li>
            <li className={`${isLoggedIn&&!isAdmin ? 'flex': 'hidden'} border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]`}>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li onClick={logOut} className={` flex  items-center gap-x-3`}>
             <FaRegUserCircle className=  {`${!isLoggedIn ? 'hidden': 'flex'} text-[#0FCE7E]  w-6 h-6`}/>
              <Link className= {`${!isLoggedIn ? 'hidden': 'flex'} border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]`} to='/'>Logout</Link>
            </li>
            <li className={` flex  items-center gap-x-3`}>
             <FaRegUserCircle className=  {`${isLoggedIn ? 'hidden': 'flex'} text-[#0FCE7E]  w-6 h-6`}/>
              <Link className= {`${isLoggedIn ? 'hidden': 'flex'} border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]`} to='/login'>Login</Link>
            </li>
            <li className={`${isLoggedIn ? 'hidden': 'flex'} border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]`}>
              <Link to='/register'>Register</Link>
            </li>
          </div>
        </ul>
      </nav>
      

      <Outlet />
    </>
  );
};

export default Layout;
