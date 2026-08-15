import '../Styles/Hero.css'
import me from '../assets/main.jpg'
import {FaReact} from "react-icons/fa6";
import { motion } from 'framer-motion'
import {containerVariants, itemVariants, photoVariants} from "../Animations/Animations.ts";


export const Hero = () => {


    return (
        <motion.div className='hero-wrapper' id='hero'>

            <motion.div variants={containerVariants} className='hero'  initial='hidden' animate='visible'>
                <motion.img src={me} alt='My photo' variants={photoVariants}/>
                <motion.h1 variants={itemVariants}>Hi, I’m Artem —
                    💻Frontend  Engineer & <FaReact size={45} className='hero-icon'/>React Developer</motion.h1>
                <motion.p variants={itemVariants}>
                    I turn ideas into fast, modern websites that look great and work smoothly on every screen.
                    With a focus on clean design, thoughtful details, and solid React development, I
                    build responsive web experiences that help businesses look professional and turn visitors into
                    customers.
                </motion.p>

                <motion.div className='hero-bottom' variants={containerVariants}>
                    <a href='#contact'>
                        <motion.button variants={itemVariants} className='book-btn'>Book a call</motion.button>
                    </a>

                    <motion.div variants={itemVariants} className='hero-available' >
                        <motion.div variants={itemVariants} className="status-dot"></motion.div>
                        <motion.p variants={itemVariants}>Available for work</motion.p>
                    </motion.div>

                </motion.div>
            </motion.div>

        </motion.div>
    );
};


