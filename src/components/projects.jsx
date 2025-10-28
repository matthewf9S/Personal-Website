import React from 'react'
import '../styles/projects.css'
import CNC from '../assets/CNC.PNG'
import BlockRobot from '../assets/blockBot.jpg'
import ChatApp from '../assets/texting.jpg'
import WebsitePic from '../assets/webImg.jpg'

const cards = [
    {
        title: "Handwriting Robot",
        description: "A robot that could use another person's handwriting to write notes and letters. Handwriting was preformed by using a CNC machine controlled by an Arduino board.",
        media: CNC, // can also be a video link
        skills: ["Arduino", "Python", "G-Code", "Automation",],
    },
    {
        title: "Block Finder Robot",
        description: "Utilizing a Raspberry Pi and camera module, this robot could navigate a space and identify blocks of specific colors using Open Cv. Upon retrielval and sotrage of all of the blocks, the robot would then stack each block at its home destination.",
        media: BlockRobot,
        skills: ["OpenCV", "Python", "UART Protocol", "Raspberry Pi", "Circuit Design"],
    },
    {
        title: "Group Chat App",
        description: "Team project where we deigned a group chat application with real-time messaging, user authentication, and media sharing capabilities.",
        media: ChatApp,
        skills: ["C", "Git", "AWS Servers"],
    },
    {
        title: "This Website",
        description: "You're looking at it! A personal portfolio website built with React to showcase my projects and skills.",
        media: WebsitePic,
        skills: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
    },
];


function projects() {
    return (
        <section id="projects">
            <div className='projects-container'>
                <h1 className='projects-title'>My Projects</h1>
                <div className="card-container">
                    {cards.map((project, index) => (
                        <div className="projectCard" key={index}>
                            {project.media.endsWith(".mp4") ? (
                                <video src={project.media} controls className="projectMedia" />
                            ) : (
                                <img src={project.media} alt={project.title} className="projectMedia" />
                            )}
                            <div className="projectInfo">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="projectSkills">
                                    {project.skills.map((skill, i) => (
                                        <span className="skillBadge" key={i}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default projects
