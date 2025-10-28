import React from 'react'
import ResumeFile from '../assets/MatthewFelicia_Resume25E.pdf'
import '../styles/resume.css'
import mountPic from '../assets/face.JPEG'
import { IoCloudDownload } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";


function resume() {
    return (
        <section id="resume">
            <div className='resume-container'>
                <div className='text-section'>
                    <h2 className='resume-title'>Want to learn more?</h2>
                    <img src={mountPic} alt="Mountain Hiking" className='section-img' />
                    <div className='section-contact'>
                        <p className='contact-text'>Feel free to reach out to me via email or phone!</p>
                        <p className='contact-text'><span style={{ fontWeight: 'bold' }}>Email:</span> Matthew.Felicia@outlook.com</p>
                        <p className='contact-text'><span style={{ fontWeight: 'bold' }}>Phone:</span> (856) 685-4470</p>
                    </div>
                    <div className='link-container'>
                        <a href="https://www.linkedin.com/in/matthew-felicia" className='link-img'><IoLogoLinkedin /></a>
                        <a href="https://github.com/matthewf9S" className='link-img'><IoLogoGithub /></a>
                    </div>
                    <h1 className='button-label-text'>Download My Resume</h1>
                    <button className='resume-button'>
                        <a href={ResumeFile} download className='button-link'>
                            <IoCloudDownload className='button-icon' />
                            <span className='button-text'>Download</span>
                        </a>
                    </button>
                </div>
                <div className='banner-section'>
                    <h1 className='banner-text'>Lets get <br />in Contact!</h1>
                </div>
            </div>
        </section>
    )
}

export default resume
