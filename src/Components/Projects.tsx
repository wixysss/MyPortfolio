import '../Styles/Projects.css'
import {LuLayers3} from "react-icons/lu";
import {projects} from "../Data/Projects.ts";
import {ProjectCard} from "./ProjectCard.tsx";
import { motion, useInView } from 'framer-motion'
import {useRef} from "react";
import {containerVariants, itemVariants} from "../Animations/Animations.ts";

export const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
    return (
        <motion.div
            className='projects'
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >

            <motion.div className='projects-hero' variants={itemVariants}>
                <div className='projects-hero-icon'>
                    <LuLayers3 size={36} />
                </div>
                <h1 >Check out my latest project</h1>
                <p>
                    Explore my latest projects, where thoughtful design meets modern development.
                    Each project is crafted with attention to detail, clean functionality, and a focus on creating seamless user experiences.
                </p>
            </motion.div>

            <div className='projects-cards'>
                {projects.map((project) =>(
                    <motion.div
                        key={project.title}
                        variants={itemVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <ProjectCard project={project}/>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
};


