import React from "react";

//Componente de foto y nombre
const Photoblog = () => {
  return (
    <div className="photo-banner">
      <div className="photo">
        <img src="img/photo.png" alt="" width="220" height="200" />
      </div>
      <div className="about">
        <p>
          Hello 🙂 <br></br>I`m Laura V. De Armas <br></br>a Fullstack Developer
        </p>

        <div className="line"></div>
        <div className="scroll-about">
          <p>
            <i className="fas fa-arrow-down"></i>Scroll down
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente 3
const About = () => {
  return (
    <div className="about-text">
      <div className="text-one-about">
        <h2>About me</h2>
        <div className="line-two"></div>
      </div>
      <div className="text-two-about">
        <div className="about-skills">
          <p>
            I´m currently working as a freelance
            <strong> fullstack developer </strong>
            and UI/UX designer. I enjoy building web apps using
            <input
              className="botomabout"
              type="botton"
              value="Styled-Components"
            />{" "}
            and
            <input
              className="botomabout"
              type="botton"
              value="React"
            ></input>{" "}
            i`m also an active creator content in #vengaloilustro for
            entrepreneurs and tech students.
          </p>
        </div>
      </div>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-title">
        <h2>Skills</h2>
        <div className="line-skill"></div>
      </div>

      <div className="text-skill">
        <div className="text-one-skills">
          <p>
            I`ve spent about one year on improving my skills in website
            development using
            <input className="bottomskills" type="bottom" value="PHP" /> and
            <input className="bottomskills" type="bottom" value="Javascript" />
            that i`m now pretty confident in building apps using these tools:
            <br></br>
          </p>
        </div>

        <div className="icon-skills">
          <div className="logoskill">
            <img src="img/1.png" alt="" />
            <img src="img/2.png" alt="" />
            <img src="img/3.png" alt="" />
          </div>

          <div className="logoskilldos">
            <img src="img/4.png" alt="" />
            <img src="img/5.png" alt="" />
            <img src="img/6.png" alt="" />
            <img src="img/7.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Network = () => {
  return (
    <div className="contact">
      <div className="central-footer">
        <div className="touchfooter">
          <p>Get in touch</p>
        </div>
        <div className="base-contact">
          <h2>loridarmas@gmail.com</h2>
          <div className="vectoredes">
            <div className="icon-one">
              <a href="https://www.facebook.com/Laura-V-De-Armas-108542417514141">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="icon-one">
              <a href="https://twitter.com/lauravdearmas">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="icon-one">
              <a href="https://github.com/Lauravdearmas">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BodyPortfolio = () => {
  return (
    <div>
      <Photoblog />
      <About />
      <Skills />
      <Network />
    </div>
  );
};
