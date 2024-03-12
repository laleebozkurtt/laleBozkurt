import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../Assets/imagedeveloper.png"
import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Im Rahul Vijay</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/laleebozkurtt/laleBozkurt/tree/main/src/components");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/lale-bozkurt-03995a21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://x.com/lale51878961?s=21&t=RTiXHBFbgWoaNF1hO6SLmg");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/laleebozkurtt?igsh=cDcwZjI0ZXo0eTE5&utm_source=qr");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
              <img src={imagedeveloper} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
