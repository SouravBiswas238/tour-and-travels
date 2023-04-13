import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
// react icon import links 
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg, BsTools } from "react-icons/bs";
import { MdDeveloperMode, MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";


const Navigation = () => {

    const [navSwitch, setNavSwitch] = useState(false);


    const closedNavbarAll = () => {
        setNavSwitch(false)  // user information navbar
    }

    //navbar active or deActive color style 
    const active = " font-semibold bg-[#1C2880]  rounded  text-white  text-white  rounded-[5px] p-2  bg-[#1F2937] text-[17px]  flex items-center "
    const deActive = "  text-[#8C9BB6]  font-semibold flex items-center text-[17px]   p-2 "


    return (
        <nav className='sticky py-2  top-0 left-0 z-50  bg-[#0C1322] nav-shadow nav-border  border-1  border-[#ddd'>
            <div className='container max-w-[1500px] mx-auto relative z-50'>
                <div className='flex justify-between items-center relative'>
                    {/* logo and navbar menu */}
                    <div className='logo flex items-center text-xl font-bold py-3 ml-3'>
                        <div className="hidden lg:block avatar placeholder">
                            <div className=" text-white bg-[#3878DF]   rounded-full w-12">
                                {/* <span>logo</span> */}
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

                            <ul className='md:flex   bg-[#0C1322] text-gray-200 border-x-2 border-b-2 md:border-0 border-gray-200  pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto'>

                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8'> <NavLink to="/" className={({ isActive }) => (isActive ? active : deActive)} ><AiFillHome className='md:hidden text-base mr-2 ' />Home</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8'> <NavLink to="/about" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Tours page</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8'> <NavLink to="/projects" className={({ isActive }) => (isActive ? active : deActive)} ><BsTools className='md:hidden text-base mr-2' /> <a href="#projects"> Destination</a></NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8'> <NavLink to="/blog" className={({ isActive }) => (isActive ? active : deActive)} > <MdDeveloperMode className='md:hidden text-base mr-2 ' /> Blog</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8'> <NavLink to="/contact" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> News</NavLink> </li>
                                <li onClick={closedNavbarAll} className='mr-5 mb-4 md:mb-0  text-[#c6c9d8]'> <NavLink to="/news" className={({ isActive }) => (isActive ? active : deActive)} > <MdOutlineConnectWithoutContact className='md:hidden text-base mr-2' /> Contact</NavLink> </li>
                            </ul>
                        </div>

                    </div>



                </div>
            </div>
        </nav>
    );
};

export default Navigation;