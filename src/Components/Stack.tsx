import '../Styles/Stack.css'
import {SiReact, SiJavascript, SiHtml5, SiTypescript, SiGithub, SiTailwindcss, SiCss} from 'react-icons/si'
import {StackCard} from "./StackCard.tsx";
import { motion, useInView } from 'framer-motion'
import {useRef} from "react";
import {containerVariants, itemVariants} from "../Animations/Animations.ts";

const stack = [
    {name: 'React', level: 'Pro', icon: SiReact, color: '#61dafb'},
    {name: 'JavaScript', level: 'Pro', icon: SiJavascript, color: '#f7df1e'},
    {name: 'HTML5', level: 'Pro', icon: SiHtml5, color: '#e34f26'},
    {name: 'CSS', level: 'Pro', icon: SiCss, color: '#264de4'},
    {name: 'TypeScript', level: 'Intermediate', icon: SiTypescript, color: '#3178c6'},
    {name: 'GitHub', level: 'Pro', icon: SiGithub, color: '#181717'},
    {name: 'Tailwind CSS', level: 'Pro', icon: SiTailwindcss, color: '#06b6d4'},
]

export const Stack = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <motion.div
            className='stack'
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            <motion.h1 variants={itemVariants} style={{textAlign: "center"}}>My Stack</motion.h1>
            <motion.div className='stack-grid'>
                {stack.map((card) => (
                    <motion.div key={card.name} variants={itemVariants}>
                        <StackCard card={card}/>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    );
};


