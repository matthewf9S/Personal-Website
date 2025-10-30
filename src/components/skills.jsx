import React from 'react'
import '../styles/skills.css'
import CompImg from '../assets/CompImg.jpg'

function skills() {
    return (
        <section id="skills">
            <div className='skill'>
                <img src={CompImg} alt="Computer Skills" className='skill-img' />
                <div className='skill-text'>
                    <p className='skill-title' style={{ margin: '0', padding: '0' }}>Languages</p>
                    <ul className='skill-info'>
                        <li className='skill-info-item'>Java Dude</li>
                        <li className='skill-info-item'>Python</li>
                        <li className='skill-info-item'>HTML/CSS</li>
                        <li className='skill-info-item'>React</li>
                        <li className='skill-info-item'>C</li>
                    </ul>
                    <p className='skill-title' style={{ margin: '0', padding: '0' }}>Tools</p>
                    <ul className='skill-info'>
                        <li className='skill-info-item'>Linux</li>
                        <li className='skill-info-item'>Docker</li>
                        <li className='skill-info-item'>VS Code</li>
                        <li className='skill-info-item'>GIT</li>
                        <li className='skill-info-item'>FPGA</li>
                        <li className='skill-info-item'>Arduino</li>
                        <li className='skill-info-item'>Raspberry Pi</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default skills
