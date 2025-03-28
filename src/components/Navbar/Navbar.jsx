import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { SlMenu, SlArrowRight } from "react-icons/sl";



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./images/logo.png" alt="" />

                    <ul>
                        <li><a href="" className="menu-item">Home</a></li>
                        <li><a href="" className="menu-item">Skills</a></li>
                        <li><a href="" className="menu-item">Work Experience</a></li>
                        <li><a href="" className="menu-item">Contact Me</a></li>

                        <button className="contact-btn" onClick={() => { }}>Hire me</button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                       
                        {openMenu ? (
                            <SlArrowRight style={{ fontSize: "1.8rem" }} />  // Icon đóng (close)
                        ) : (
                            <SlMenu style={{ fontSize: "1.8rem" }} />  // Icon menu (menu)
                        )}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar