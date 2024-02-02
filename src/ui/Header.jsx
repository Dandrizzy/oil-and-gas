import { useState } from 'react';
import { FaChartLine } from 'react-icons/fa6';
import { MdClose, MdHome, MdMail, MdMenu } from 'react-icons/md';
import { scrollToSection } from '../Hooks/ScrollToSection';

const Header = () => {
 const [open, setOpen] = useState(false);
 return (
  <div className=' md:hidden block'>
   <div className=" items-center flex justify-between px-4 py-1 bg-blue-400 text-slate-100">

    <img src="hLogo.png" alt="logo" style={{ height: '4rem', }} />

    <div className=" text-lg" onClick={() => setOpen(isOpen => !isOpen)}>{open ? <MdClose /> : <MdMenu />}</div>
   </div>

   {open && <ul className=" px-4 bg-blue-400  text-slate-100 grid divide-y [&>*]:cursor-pointer ">

    <li className='flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => scrollToSection('home')}><MdHome />Home</li>

    <li className=' flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 ' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>
    {/* 
    <li className=' flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-21'><MdDashboard />Projects</li> */}

    <li className=' flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => scrollToSection('investors')}><FaChartLine />Investors</li>
   </ul>}
  </div>
 );
};

export default Header;