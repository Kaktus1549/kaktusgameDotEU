'use client'

import { useState } from "react";
import Image from 'next/image';
import projectsData from './projects.json';

export default function Projects(){
    let projectKeys = Object.keys(projectsData);
    let buttons = [] as JSX.Element[];
    const [disabledButton, setDisabledButton] = useState<string>(projectKeys[0]);
    const [switching, setSwitching] = useState<boolean>(false);

    function handleSelect(id: string) {
        if(switching === false){
            setDisabledButton(id)
            let index = projectKeys.indexOf(id);
            let currentIndex = projectKeys.indexOf(disabledButton);
            if(index > currentIndex){
                moveProjects(disabledButton as keyof typeof projectsData, id as keyof typeof projectsData, 'right');
            } else {
                moveProjects(disabledButton as keyof typeof projectsData, id as keyof typeof projectsData, 'left');
            }
        }
    }

    function renderProjects(){   
        let projects = [] as JSX.Element[];
        projects.push(
            <div className='invisible projects-box'id='dummy' key='dummy'>
                <div className='project-box'>
                    <div className='project-text'>
                        <h3>Dummy box</h3>
                        <p>If you see this, please contact me, because something went wrong.</p>
                    </div>
                </div>
            </div>
        );
        projectKeys.forEach((key, index) => {
            let project = projectsData[key as keyof typeof projectsData];
            projects.push(
                <div className={index != 0 ? 'absolute invisible projects-box': 'absolute projects-box'} id={key} key={key}>
                    <div className='project-box'>
                        <Image src={project.image} alt={project.caption} width={project.image_width} height={project.image_height} className='project-image'/>
                        <div className='project-text'>
                            <h3>{project.caption}</h3>
                            <p>{project.text}</p>
                        </div>
                    </div>
                </div>
            );
        })
        return projects;
    }
    function generateButtons(){
        projectKeys.forEach(key => {
            buttons.push(
                <button className='project-button' key={key} disabled={key !== null && key === disabledButton} onClick={() => handleSelect(key)}></button>
            );
        });
        return buttons;
    }
    function moveProjects(currentProject: keyof typeof projectsData, nextProject: keyof typeof projectsData, direction: string){
        // finds projects-box with id of key
        if (switching) return;
        setSwitching(true);

        const current = document.getElementById(currentProject);
        const next = document.getElementById(nextProject);

        const handleAnimationEnd = () => {
            next?.classList.remove(`in${direction.charAt(0).toUpperCase() + direction.slice(1)}`);
            current?.classList.replace(`out${direction.charAt(0).toUpperCase() + direction.slice(1)}`, 'invisible');
            current?.removeEventListener('animationend', handleAnimationEnd);
            setSwitching(false);
        };

        if (current && next) {
            requestAnimationFrame(() => {
                current.classList.add(`out${direction.charAt(0).toUpperCase() + direction.slice(1)}`);
                next.classList.replace('invisible', `in${direction.charAt(0).toUpperCase() + direction.slice(1)}`);
            });
            current.addEventListener('animationend', handleAnimationEnd);
        }
    }

    function nextProject(){
        if(switching){
            return;
        }
        let index = projectKeys.indexOf(disabledButton);
        if(index < projectKeys.length - 1){
            setDisabledButton(projectKeys[index + 1]);
            moveProjects(projectKeys[index] as keyof typeof projectsData, projectKeys[index + 1] as keyof typeof projectsData, 'right');
        } else {
            setDisabledButton(projectKeys[0]);
            moveProjects(projectKeys[projectKeys.length - 1] as keyof typeof projectsData, projectKeys[0] as keyof typeof projectsData, 'right');
        }
    }
    function prevProject(){
        if(switching){
            return;
        }
        let index = projectKeys.indexOf(disabledButton);
        if(index > 0){
            setDisabledButton(projectKeys[index - 1]);
            moveProjects(projectKeys[index] as keyof typeof projectsData, projectKeys[index - 1] as keyof typeof projectsData, 'left');
        } else {
            setDisabledButton(projectKeys[projectKeys.length - 1]);
            moveProjects(projectKeys[0] as keyof typeof projectsData, projectKeys[projectKeys.length - 1] as keyof typeof projectsData, 'left');
        }

    }

    return(
        <div id="projects" className='projects'>
            <h2>My projects</h2>
            <div className='projects-container'> 
                <div className="project">
                    {renderProjects()}
                </div>
                <div className='controls'>
                    <Image src="/svg/Arrow_left.svg" alt="Kaktus Game" width="50" height="50" className='arrow' onClick={prevProject}/>
                    <div className='project-selector'>
                        {generateButtons()}
                    </div>
                    <Image src="/svg/Arrow_right.svg" alt="Kaktus Game" width="50" height="50" className='arrow' onClick={nextProject}/>
                </div>
            </div>
      </div>
    );
}