import React from 'react'
import '../styles/hero.css'
import GradPic from '../assets/GradPic.png'

function hero() {
    return (
        <section id="home">
            <div className='hero-container'>
                <div className='hero-title'>
                    <h1 className='hero-title-text'>Hi, <br />I'm <span className="typewriter-inline" style={{ color: '#9a5a9bff' }}>Matthew</span></h1>
                    <p style={{ marginTop: '0', }}>
                        I’m a Computer Engineering graduate from the University of Scranton with a strong background in software and hardware design, eager to contribute to developing efficient and impactful technologies.
                    </p>
                    <div className='hero-info'>
                        <div className='hero-status'>
                            <p className='hero-status-title'>Employment Status</p>
                            <p className='hero-status-info'>Open to work</p>
                        </div>
                        <div className='hero-status'>
                            <p className='hero-status-title'>Location</p>
                            <p className='hero-status-info'> Medford, New Jersey <br />(Open to relocation) </p>
                        </div>

                    </div>
                    <button className='hero-button'
                        onClick={() => {
                            const skillsSection = document.getElementById('skills');
                            skillsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                        See Skills
                    </button>
                </div>
                <div className='hero-banner'>
                    <div className='hero-image'>
                        <img src={GradPic} alt="Graduation Picture" className='hero-img' />

                    </div>
                </div>
            </div>
        </section >
    )
}

export default hero
