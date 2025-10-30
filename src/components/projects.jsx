import React from 'react'
import '../styles/projects.css'
import CNC from '../assets/CNC.PNG'
import BlockRobot from '../assets/blockBot.jpg'
import ChatApp from '../assets/texting.jpg'
import WebsitePic from '../assets/webImg.jpg'

const cards = [
    {
        title: "Handwriting Robot",
        description: "Designed and built a robot capable of replicating a person’s handwriting to write notes and letters, using a CNC machine controlled by an Arduino board.",
        media: CNC, // can also be a video link
        skills: ["Arduino", "Python", "G-Code", "Automation",],
    },
    {
        title: "Block Finder Robot",
        description: "Developed a color-detection robot powered by a Raspberry Pi and camera module that navigates its environment, identifies and retrieves colored blocks using OpenCV, and stacks them at a designated home location.",
        media: BlockRobot,
        skills: ["OpenCV", "Python", "UART Protocol", "Raspberry Pi", "Circuit Design"],
    },
    {
        title: "Group Chat App",
        description: "Collaborated on a team project to develop a real-time group chat application featuring message handling, user connectivity, and data synchronization using C and AWS servers.",
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
