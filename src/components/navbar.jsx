import React from 'react'
import '../styles/navbar.css'
import { IoHomeSharp } from "react-icons/io5";
import { IoRibbon } from "react-icons/io5";
import { IoTerminal } from "react-icons/io5";
import { IoReader } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";


function navbar() {
    return (
        <section id="navbar">
            <div className='navbar'>
                <ul className='navbar-nav'>
                    <li className='logo'>
                        <a href='#home' className='nav-link'>
                            <IoChevronForwardCircleSharp className='logo-img' />
                            <span className='link-text'>Matthew Felicia</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a href='#home' className='nav-link'>
                            <IoHomeSharp className='link-img' />
                            <span className='link-text'>Home</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a href='#skills' className='nav-link'>
                            <IoRibbon className='link-img' />
                            <span className='link-text'>Skills</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a href='#projects' className='nav-link'>
                            <IoTerminal className='link-img' />
                            <span className='link-text'>Projects</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a href='#resume' className='nav-link'>
                            <IoReader className='link-img' />
                            <span className='link-text'>Resume</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a href='#resume' className='nav-link'>
                            <IoPhonePortrait className='link-img' />
                            <span className='link-text'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default navbar
