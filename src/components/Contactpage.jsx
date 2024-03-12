import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I'd love to connect and explore exciting opportunities with you! Whether you have interesting projects, creative ideas, or just want to chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/lale-bozkurt-03995a21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app");
          }}
        >
          Connect Now 🚀
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span onClick={() => {
            window.open("https://www.instagram.com/laleebozkurtt?igsh=cDcwZjI0ZXo0eTE5&utm_source=qr");
          }}>rahulvijay</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
