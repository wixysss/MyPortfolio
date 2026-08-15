import '../Styles/Contact.css'
import {FiMail} from "react-icons/fi";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser'
import {useState} from "react";
import {CiCircleCheck} from "react-icons/ci";
import { motion, useInView } from 'framer-motion'
import {useRef} from "react";
import {containerVariants, itemVariants} from "../Animations/Animations.ts";

const schema = z.object({
    name: z.string().min(2,{message:'Name must be at least 2 characters'}),
    email: z.string().email({message:'Please enter a valid email'}),
    message: z.string().min(10, {message: 'Too short message!'})
})
type ContactForm = z.infer<typeof schema>

export const Contact = () => {
    const [isSend,setIsSend] = useState(false)
    const {register, handleSubmit, formState: {errors},reset} = useForm<ContactForm>({resolver: zodResolver(schema)})
    const onSubmit = async (data: ContactForm) => {
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {name: data.name, email: data.email, message: data.message},
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        reset()
        setIsSend(true)
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
        <motion.div
            className='contact'
            id='contact'
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >

            <motion.div variants={itemVariants} className='contact-hero'>
                <div className='contact-hero-icon'>
                    <FiMail size={36}/>
                </div>
                <h1>Contact me</h1>
                <p>Have a project in mind? Let’s turn your ideas into a modern, high-quality web experience.
                    Whether you need a landing page, React website, or responsive front-end, I’m here to help bring your
                    vision to life.
                </p>
            </motion.div>

            <motion.form variants={itemVariants} onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-form'>
                    <div className='contact-form-hero'>
                        <input type='text' {...register('name')} placeholder='Name'/>
                        <input type='email' {...register('email')} placeholder='Email address'/>

                    </div>

                    <div className='contact-form-error'>
                        {errors.name && <p>{errors.name?.message}</p>}
                        {errors.email && <p>{errors.email?.message}</p>}
                    </div>


                    <div className='contact-form-textarea'>
                        <textarea placeholder='Your message' {...register('message')}/>

                        <div className='contact-form-error'>
                            {errors.message && <p>{errors.message?.message}</p>}
                        </div>

                        <button type='submit'>Book a call</button>
                    </div>

                    <div className='contact-send'>
                        {isSend && <p><CiCircleCheck size={30} color={'green'}/>Your message has been sent!</p>}
                    </div>
                </div>
            </motion.form>

        </motion.div>
    );
};
