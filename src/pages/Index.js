import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRedux, SiMysql, SiMongodb } from 'react-icons/si';
import { HiOutlineMailOpen } from 'react-icons/hi'

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
                    I'm a Full-Stack Developer and Practical Engineer.<br/> I have a
                    great passion for web development.
                </p>
                <p className="pBody">
                    well-organized person, self learner and quick Understands, 
                    problem solver, independent employee with high attention to detail.
                </p>
                <p className="pBody">
                    Interested in the entire Full-Stack specturm and working
                    on complex projects with positive people.
                </p>

            </div>

            <div className="projectsDiv" id="projects">

                <h1 className="projectsH1">Projects</h1>

                <div className="projectsComp">
                    <img className="img" src={shopWeb} alt="undefined" />
                    <h1>shop web</h1>
                    <p>
                        shoping website
                    </p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <a className="a" href="https://github.com/yuvalalkalay/shopWeb">view code</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="projectsComp">
                    <img className="img" src={basicFSP} alt="undefined" />
                    <h1>basic full stack project</h1>
                    <p>
                        Students manager website
                    </p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <a className="a" href="https://github.com/yuvalalkalay/full-stack-basic-project">view code</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="projectsCom1">
                    <img className="img" src={TTT} alt="undefined" />
                    <h1>Tik Tak Toe game</h1>
                    <p>
                        Tik Tak Toe game website
                    </p>
                    <table className="table">

                        <tbody>
                            <tr>
                                <td>
                                    <a className="a" href="https://github.com/yuvalalkalay/Tik-Tak-Toe">view code</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="skiles" id="skills">
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

                <div className="contactH">
                    <div className="sH1Div">
                        <h1 className="sH1">Contact</h1>
                    </div> 
                </div>

                <div className="contactB" id="contact">

                    <HiOutlineMailOpen className="icons"/>
                    <h2>Email</h2>
                        
                    <p className="contactCV">
                        yuval.alkalay1@gmail.com
                    </p>

                    <div className="CV">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="a" href="https://drive.google.com/file/d/1vhgq5OExjjNV_Dgjtlqdgk7b6K8HymTp/view">View CV</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                        

            </div>

        </div>
    )
}

export default Index;