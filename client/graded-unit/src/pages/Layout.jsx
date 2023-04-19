import { Outlet, Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import Logo from '../components/Logo';

const Layout = () => {
  return (
    <>
      <nav>
       <ul className=' flex justify-between my-5 mx-20 items-center font-poppins' > 
       <Logo/>
        
          <div className='navDiv__2 flex  gap-x-10 text-[#535353
]'>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/'>Home</Link>
            </li>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/activities'>Activities</Link>
            </li>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/badges'>Badges</Link>
            </li>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/about-us'>About us</Link>
            </li>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
              <Link to='/contact-us'>Contact us</Link>
            </li>
          </div>
          <div className='navDiv__3 flex gap-x-3 '>
            <li className='flex  items-center gap-x-3'>
             <FaRegUserCircle className='  text-[#0FCE7E]  w-6 h-6'/>
              <Link className=' border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]' to='/login'>Login</Link>
            </li>
            <li className='border-b-2 border-transparent transition-all duration-1000 hover:border-[#0FCE7E]'>
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
