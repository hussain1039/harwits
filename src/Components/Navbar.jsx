import React, { useState } from 'react'
import Logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

const dropdownMenu = [
    {
        id: 1,
        title: 'Standard Package',
        link: '#'
    },
    {
        id: 2,
        title: 'Automated Package',
        link: '#'
    },
    {
        id: 3,
        title: 'Elite Package',
        link: '#'
    },
    {
        id: 4,
        title: 'Essential Package',
        link: '#'
    },
]

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className='relative bg-[#160927]'>
                <nav className='container flex items-center justify-between text-[#ccc] py-2'>

                    {/* ======= Navbar Logo ======= */}
                    <div>
                        <NavLink to='/'>
                            <img
                                src={Logo}
                                alt="logo"
                                className='w-40 md:w-44 lg:w-48'
                            />
                        </NavLink>
                    </div>

                    {/* ======== Navbar Links ======== */}
                    <div className={
                        showMenu ? 
                        'nav-links hidden md:flex items-center gap-8 text-[16px] lg:text-[19px]' :
                        'hidden md:flex items-center gap-8 text-[16px] lg:text-[19px]'
                    }>
                        <NavLink
                            to='/'
                            className='drop-item flex items-center relative'>
                            Packages <IoMdArrowDropdown className='drop-icon text-[23px]' />

                            {/* ========= Dropdown Menu ======== */}
                            <nav className='drop-menu absolute top-[100%] bg-[#161515] rounded w-[200px]'>
                                <ul className='text-[16px] m-4 space-y-3'>
                                    {
                                        dropdownMenu.map((menu) => (
                                            <li
                                                key={menu.id}
                                                className='hover:text-[#7811ff] transition-all border-b-[1px] py-3 border-[#372e2e]'>
                                                <NavLink>
                                                    {menu.title}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </NavLink>
                        <NavLink to='/'>Login/Register</NavLink>
                        <NavLink><button className='primary-btn'>Make Appointment</button></NavLink>
                    </div>
                    <div className='block md:hidden text-2xl'>
                        <NavLink onClick={() => setShowMenu(!showMenu)}>
                            <GiHamburgerMenu />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;