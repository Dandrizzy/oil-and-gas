import { MdHome, MdMail } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa6';
import { scrollToSection } from '../Hooks/ScrollToSection';


const Nav = () => {

 return (
  <div className=" hidden items-center md:grid grid-cols-2 p-4 bg-neutral-100 text-red-600">
   <img src="hLogo.png" alt="logo" style={{ height: '4rem', }} className=' bg-red-200/20 rounded-full p-2' />


   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li className='hover:animate-bounce hover:bg-red-200/20 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => scrollToSection('home')}><MdHome />Home</li>

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-red-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

    {/* <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-red-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('project')}><MdDashboard />Projects</li> */}

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-red-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('investors')}><FaChartLine />Investors</li>
   </ul>
  </div>
 );
};

export default Nav;