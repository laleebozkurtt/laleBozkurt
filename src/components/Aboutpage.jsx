import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import AboutImage from "../Assets/AboutImage.png"

import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> Hi! I am Lale Bozkurt, a software engineering student. During my undergraduate education, I worked in the field of image processing in the Autonomous Vehicle Race organized by Teknofest. During this process, I gained experience in teamwork outside of software. Additionally, I took part in the management of school and out-of-school communities. I graduated from the recently held Turkcell Software Testing Expertise program.
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={100}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="right"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage">
                            <img src={AboutImage} alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage
