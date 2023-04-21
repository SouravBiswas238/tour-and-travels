import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
// react icon import links 
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg, BsTools } from "react-icons/bs";
import { MdDeveloperMode, MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useScrollPosition } from '../../hooks/useScrollPosition';
import logo from '../../asset/Img/logo.png'



const Navigation = () => {

    const [navSwitch, setNavSwitch] = useState(false);


    const closedNavbarAll = () => {
        setNavSwitch(false)  // user information navbar
    }
    const scrollPosition = useScrollPosition()
    console.log(scrollPosition)
    //navbar active or deActive color style 
    const active = "text-[#3878DF] font-semibold   rounded  text-white  text-white  rounded-[5px] p-2  text-[17px]  flex items-center "
    const deActive = " text-[#fff]  font-semibold flex items-center text-[17px]   p-2 "


    return (
        <nav className={`fixed container mx-auto z-50 duration-300 ${scrollPosition === 0 ? ' bg-transparent' : ' bg-[#0C1322]'} `}>
            <div className=' relative z-50'>
                <div className='flex justify-between items-center relative'>
                    {/* logo and navbar menu */}
                    <div className='logo flex items-center text-xl font-bold py-3 ml-3'>
                        <div className="hidden lg:block avatar placeholder">
                            <div className="bg-cover bg-center    rounded-full w-12">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        {/* navbar menu switch */}
                        <div onClick={() => setNavSwitch(!navSwitch)} className='mr-2 text-2xl md:hidden ease-out duration-200 '>
                            {
                                !navSwitch ? <GiHamburgerMenu /> : <BsPlusLg className='rotate-45' />
                            }
                        </div>

                        <Link to='/'>
                            <span className='ml-1  text-white'>Tour <span className=' text-[#38BDF8] '>E JAi Dure</span></span>
                        </Link>

                    </div>

                    {/* routes  */}


                    {/* profile  */}
                    <div className=' flex items-center '>



                        <div className={`routes absolute md:static left-0 z-10 w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"}`}>

                            <ul className='md:flex   border-x-2 border-b-2 md:border-0 border-gray-200  pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden  mr-2 ' />Home</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/single" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden  mr-2' /> Tours page</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/projects" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden  mr-2' /> <a href="#projects"> Destination</a></NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/blog" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden  mr-2 ' /> Blog</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/contact" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden mr-2' /> News</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  '> <NavLink to="/news" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden mr-2' /> Contact</NavLink> </li>
                            </ul>
                        </div>

                    </div>



                </div>
            </div>
        </nav>
    );
};

export default Navigation;