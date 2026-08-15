import '../Styles/NavBar.css'
import {LuHouse} from "react-icons/lu";

import {SiFiverr, SiGithub, SiTelegram} from "react-icons/si";


export const NavBar = () => {
    return (
        <div className='nav-bar'>
            <a href='#hero'>
                <LuHouse className='nav-icon' style={{width: '34px', height: '34px', cursor: "pointer"}}/>
            </a>
            <span className='nav-separator'/>
            <div className='nav-icons'>
                <a href="https://github.com/wixysss" target="_blank" rel="noopener noreferrer">
                    <SiGithub className='nav-icon'/>
                </a>

                <a href="https://www.fiverr.com/s/xXG1yqD" target='_blank' rel='noopener noreferrer'>
                    <SiFiverr className='nav-icon' style={{width: '54px', height: '54px', cursor: "pointer"}}/>
                </a>

                <a href="https://t.me/wixy86" target='_blank' rel='noopener noreferrer'>
                    <SiTelegram className='nav-icon'/>
                </a>


            </div>
            <span className='nav-separator'/>
            <a href='#contact'>
                <button className='book-btn'>Book a call</button>
            </a>
        </div>
    );
};

