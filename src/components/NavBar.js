import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/NavBar.css';

const NavBar = ()=>{

    return(
        <div className="main">
            <ul>
                <li className="liP">Portfolio</li>
                <li className="li"> <a className="an" href="#projects">Projects</a></li>
                <li className="li"><a className="an" href="#skills">Skills</a></li>
                <li className="li"><a className="an" href="#contact">Contact</a></li>
                <li className="li"><a className="an" href="https://github.com/yuvalalkalay"><FaGithub /> GitHub</a></li>
                <li className="li"><a className="an" href="https://www.linkedin.com/in/yuval-alkalay-890b17195/"><FaLinkedin /> LinkedIn</a></li>
            </ul>
        </div>
    )
}

export default NavBar;