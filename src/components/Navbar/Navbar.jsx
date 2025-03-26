import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src="" alt="" className="logo" />

                    <ul>
                        <li><a href="" className="menu-item">Home</a></li>
                        <li><a href="" className="menu-item">Skills</a></li>
                        <li><a href="" className="menu-item">Work Experience</a></li>
                        <li><a href="" className="menu-item">Contact Me</a></li>

                        <button className="contact-btn" onClick={() => { }}>Hire me</button>
                    </ul>

                    <button className="menu-btn" onClick={() => {}}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            Menu
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar