import '../Styles/About.css'
import shop from '../assets/shop_ab.png'
import tube from '../assets/wixytube-ab.png'
import work from '../assets/wixywork-ab.png'
import whitepace from '../assets/whitepace-ab.png'
import {BsTypescript} from "react-icons/bs";
import {FaReact} from "react-icons/fa6";
import {containerVariants, itemVariants} from "../Animations/Animations.ts";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'



export const About = () => {
    const photosRef = useRef(null)
    const isPhotosInView = useInView(photosRef, { once: true, amount: 0.3 })

    const aboutRef = useRef(null)
    const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })

    return (
        <div>
            <motion.div
                className='about-photos'
                ref={photosRef}
                variants={containerVariants}
                initial='hidden'
                animate={isPhotosInView ? 'visible' : 'hidden'}
            >
                <motion.img variants={itemVariants} src={work} alt='WixyWork'/>
                <motion.img variants={itemVariants} src={shop} alt='Shop'/>
                <motion.img variants={itemVariants} src={tube} alt='WixyTube'/>
                <motion.img variants={itemVariants} src={whitepace} alt='Whitepace'/>
            </motion.div>

            <motion.div
                ref={aboutRef}
                variants={containerVariants}
                initial='hidden'
                animate={isAboutInView ? 'visible' : 'hidden'}
                className='about'>

                <motion.h1 variants={itemVariants}>About</motion.h1>
                <motion.p variants={itemVariants}>


                    Hi there! I’m <strong>Artem</strong>, a <strong>frontend engineer</strong> passionate about turning
                    ideas into modern, thoughtful, and
                    enjoyable web experiences.
                    I’m especially focused
                    on <strong><FaReact/>React</strong> and <strong><BsTypescript/>TypeScript</strong>, where clean
                    code, responsive interfaces, and
                    attention to detail come together to create websites that feel as good as they look.

                    My approach goes beyond simply making a design work in the browser.
                    I care about the small details that make a website feel polished — from smooth interactions and
                    responsive layouts to reusable components and maintainable code.
                    I enjoy taking an idea from a Figma design or a simple concept and turning it into a fast,
                    functional website that people actually enjoy using.
                </motion.p>
                <motion.p variants={itemVariants}>
                    I’m always learning, experimenting with modern frontend technologies, and looking for better ways to
                    build.
                    Whether it’s a landing page, business website, dashboard, or React interface,
                    I approach every project with curiosity, responsibility, and a genuine desire to deliver something I
                    can be proud of.

                    For me, great development is where <strong>clean engineering meets thoughtful design</strong>— and
                    that’s
                    exactly what I aim to bring to every project.

                </motion.p>
            </motion.div>

        </div>
    );
};


