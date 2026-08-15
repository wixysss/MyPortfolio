import react from '../assets/react-sr.png'
import figma from '../assets/figma-sr.png'
import landing from '../assets/landing-sr.png'
import frontend from '../assets/frontend-sr.png'

export type Service = {
    title: string,
    description: string,
    img: string,
    link: string
}

export const services:Service[] =[
    {
        title:'Modern React Website',
        description:'Building fast, responsive, and scalable React websites with clean code, modern UI, and a smooth user experience.',
        img: react,
        link:'https://www.fiverr.com/s/KeNPj64'
    },
    {
        title:'Figma to React',
        description:'Turning Figma designs into pixel-perfect, responsive React websites with clean code, reusable components, and modern UI.',
        img: figma,
        link: 'https://www.fiverr.com/s/o8DbyPN'
    },
    {
        title:'React Landing Page',
        description:'I build modern React landing pages that turn your ideas into fast, polished, and conversion-focused experiences. Clean UI, responsive layouts, and smooth interactions — built to look great on every device.',
        img: landing,
        link:'https://www.fiverr.com/s/rEVY52N'
    },
    {
        title:'Responsive Web Page',
        description:'I create responsive front-end experiences that adapt seamlessly to desktop, tablet, and mobile. Clean code, consistent layouts, and smooth interactions ensure your website looks and feels great everywhere.',
        img: frontend,
        link:'https://www.fiverr.com/s/KeNPj64'
    },
]