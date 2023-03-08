import "./AboutMe.css"

import imgPath from "./profile-pic.jpg"

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
        <img src={imgPath} alt="profile picture"/>
        <div>
            <h1>About Me</h1>
            <p>
            Aspiring web developer with a background in music recording technology. Recently completed training at the University of Minnesota coding boot camp for a certificate in full-stack web development. Inventive problem-solver that's excited about working on apps in front-end or back-end technology. Strong ability to create, work in a team, and develop projects from conception to completion.
            </p>
        </div>
    </div>
  )
}

export default AboutMe