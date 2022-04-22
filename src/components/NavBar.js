import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/NavBar.css';

const NavBar = ()=>{

    return(
        <div className="main">
            <ul>
                <li className="liP">Portfolio</li>
                <li className="li">Projects</li>
                <li className="li">Skills</li>
                <li className="li">Contact</li>
                <li className="li"> <FaGithub /> GitHub</li>
                <li className="li"> <FaLinkedin /> LinkedIn</li>
            </ul>
        </div>
    )
}

export default NavBar;