import "./Contact.css"
import Resume from "./garrett-resume-2023.pdf"
function Contact() {
  return (
    <div id="contact" className="contact-container">
        <p>Garrett Ohrt</p>
        <p>Minneapolis, MN</p>
        <a href ={Resume} target="_blank" rel="noopener noreferrer">
          <p>Resume</p>
        </a>
        <p>(563) 880-9503</p>
        <p>garrettohrt@gmail.com</p>

    </div>
  )
}

export default Contact