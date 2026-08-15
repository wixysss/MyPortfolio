import '../Styles/Services.css'
import {FaWandSparkles} from "react-icons/fa6";
import {services} from "../Data/Services.ts";
import ServiceCard from "./ServiceCard.tsx";
import { motion, useInView } from 'framer-motion'
import {useRef} from "react";
import {containerVariants, itemVariants} from "../Animations/Animations.ts";

export const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    return (
        <motion.div
            className='services'
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            <motion.div variants={itemVariants} className='services-hero'>

                <div className='services-hero-icon'>
                    <FaWandSparkles size={36}/>
                </div>
                <h1>How can I help?</h1>
                <p>I build modern, responsive React websites tailored to your goals — from Figma designs to polished, high-performing web experiences. Clean code, thoughtful UI, and reliable results from idea to launch.</p>
            </motion.div>

            <div className='services-card'>
                {services.map((service) =>(
                    <motion.div
                        key={service.title}
                        variants={itemVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <ServiceCard service={service}/>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

