import '../Styles/ProjectCard.css'
import type {Project} from "../Data/Projects.ts";
import {LuSquareArrowOutUpRight} from "react-icons/lu";

export const ProjectCard = ({ project }: { project: Project }) => {

    return (
        <div className='project-card'>
            <img src={project.img} alt={project.title}/>

            <div className='project-card-info'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.link? <a href={project.link} target='_blank' rel='noopener noreferrer'><button>View Project<LuSquareArrowOutUpRight  style={{marginLeft:'5px'}} size={20}/></button></a>  : null}
            </div>

        </div>
    );
};


