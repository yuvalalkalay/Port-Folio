import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {SiRedux, SiMysql, SiMongodb} from 'react-icons/si';

import NavBar from "../components/NavBar";
import '../styles/Index.css';

import YuvalP from '../images/Yuval.jpg';
import shopWeb from '../images/shopWeb.PNG';
import basicFSP from '../images/basicFSP.PNG';
import TTT from '../images/TTT.PNG';

const Index = ()=>{
    return(
        <div className="mainDiv">

            <div className="NavBar">
            
                <NavBar />
            
            </div>

            <div>
                <img className="yuvalPoto" src={YuvalP} alt="undefined"  />
            </div>

            <div className="pDiv">

                <p className="pHead">
                    Hi,<br/>
                    I'm Yuval,<br/>
                    Full-stack-Developer<br/>
                </p>

                <p className="pBody">
                    I'm a Self-Taught Full-Stack Developer. I have a
                    great passion for web development.
                </p>
                <p className="pBody">
                    Fluent English speaker, well-organized person,
                    quick learner, problem solver, independent employee with high attention to detail. Basketball fan, gym rat and stock market enthusiast.
                </p>
                <p className="pBody">
                    Interested in the entire Full-Stack specturm and working
                    on complex projects with positive people.
                </p>

            </div>

            <div className="projectsDiv">

                <h1 className="projectsH1">Projects</h1>

                <div className="projectsComp">
                    <img className="img" src={shopWeb} alt="undefined" />
                    <h1>shop web</h1>
                </div>

                <div className="projectsComp">
                    <img className="img" src={basicFSP} alt="undefined" />
                    <h1>basic full stack project</h1>
                </div>

                <div className="projectsCom1">
                    <img className="img" src={TTT} alt="undefined" />
                    <h1>Tik Tak Toe game</h1>
                </div>

            </div>

            <div className="skiles">
                <div className="sH1Div">
                    <h1 className="sH1">Technologies and Skills</h1>
                </div>
                <div className="frontSkill">

                    <FaReact className="icons"/>
                    <SiRedux className="icons" />
                    
                    <h2>Front-End</h2>
                    
                    <p>
                        Experience with <br/>
                        HTML CSS JavaScript React.js Axios JQuery Bootstrap
                    </p>

                </div>

                <div className="backSkill">

                    <FaNodeJs className="icons"/>
                    <SiMongodb className="icons"/>
                    
                    <h2>Back-End</h2>
                    
                    <p>
                        Experience with <br/>
                        Node.js Express Mongoose MySQL
                    </p>

                </div>

                <div className="DBSkill">

                    <FaDatabase className="icons"/>
                    <SiMysql className="icons"/>
                    
                    <h2>Data-Bases</h2>
                    
                    <p>
                        Experience with <br/>
                        MongoDB MySQL SQL NoSQL
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Index;