import wixywork from '../assets/wixyworl-pj.png'
import shop from '../assets/shop_ab.png'
import wixytube from '../assets/wixytube-pj.png'
import whitepace from '../assets/whitepace-ab.png'
import wixyadmin from '../assets/wixyadmin.png'
export type Project = {
    title: string,
    description: string,
    link?: string,
    img: string
}

export const projects: Project[] = [
    {
        title: 'WixyWork',
        description: 'WixyWork is a modern task management app built with React, designed to make project organization simple, clear, and efficient.With interactive boards, customizable lists, and intuitive task management, it delivers a smooth productivity experience inspired by modern workflow tools.',
        link: 'https://wixy-work.vercel.app/',
        img: wixywork
    },
    {
        title: 'Shop.co',
        description: 'SHOP.CO is a modern e-commerce website built with React, designed to deliver a smooth and intuitive shopping experience. With product browsing, smart filtering, detailed product pages, and responsive layouts, it combines clean UI with practical functionality.',
        img: shop
    },
    {
        title: 'WixyTube',
        description: 'WixyTube is a modern video-sharing platform built with React, designed for a smooth and engaging content discovery experience. With video browsing, intuitive navigation, and a responsive interface, it combines clean UI with practical functionality for everyday content consumption.',
        link:'https://wixy-tube.vercel.app/',
        img: wixytube
    },
    {
        title:'WixyAdmin',
        description:'Wixy Admin is a modern admin dashboard designed to help users manage data, monitor activity, and navigate essential tools efficiently. With a clean interface, responsive layouts, intuitive navigation, and reusable UI components, it combines a professional look with a smooth and practical user experience.',
        img: wixyadmin
    },
    {
        title: 'Whitepace',
        description: 'WhiteSpace is a modern productivity website designed to help users organize their work, manage tasks, and stay focused. With a clean interface, intuitive navigation, and responsive layouts, it combines simplicity with a smooth and practical user experience.',
        img: whitepace
    },

]