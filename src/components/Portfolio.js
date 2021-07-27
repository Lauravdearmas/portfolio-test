import React from "react";

//Componente de foto y nombre
const Photoblog = () => {
  return (
    <div className="photo-banner">
      <div className="infoInit">
        <div className="photo">
          <img src="img/photo.jpg" alt="" />
        </div>
        <div className="about">
          <p>
            Hello 🙂 <br></br>I`m Laura V. De Armas <br></br>a Fullstack
            Developer
          </p>

          <div className="scroll-about">
            <p>
              <i className="fas fa-arrow-down"></i>Scroll down
            </p>
          </div>
        </div>
      </div>

      <div className="about-text">
        <div className="text-one-about">
          <h2>About me</h2>
        </div>
        <div className="text-two-about">
          <div className="about-skills">
            <p>
              I´m currently working as a freelance
              <strong> fullstack developer </strong>
              and UI/UX designer. I enjoy building web apps using
              Styled-Components and React. I`m also an active creator content on
              #vengaloilustro for entrepreneurs and tech students.
            </p>
          </div>
        </div>
      </div>
      <div className="skills-icon-portfolio">
        <div className="item-portfolio">
          <div className="one">⭐</div>
          <p className="title-item">Problem-solving</p>
        </div>
        <div className="item-portfolio">
          <div className="two">🔮</div>
          <p className="title-item">Creativity</p>
        </div>
        <div className="item-portfolio">
          <div className="three">🧩</div>
          <p className="title-item">Collaboration</p>
        </div>
        <div className="item-portfolio">
          <div className="four">🚀</div>
          <p className="title-item">Adaptability</p>
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
            development using PHP and Javascript that i`m now pretty confident
            in building apps using these tools:
            <br></br>
          </p>
        </div>
      </div>
      <div className="skills-animation">
        <div className="box-skills">
          <div className="percent-skills">
            <svg className="svg-skills">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number-skills">
              <h2>
                70<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text-skills">Tailwind CSS</h2>
        </div>
        <div className="box-skills">
          <div className="percent-skills">
            <svg className="svg-skills">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number-skills">
              <h2>
                80<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text-skills">React</h2>
        </div>

        <div className="box-skills">
          <div className="percent-skills">
            <svg className="svg-skills">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number-skills">
              <h2>
                50<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text-skills">MySQL</h2>
        </div>
        <div className="box-skills">
          <div className="percent-skills">
            <svg className="svg-skills">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number-skills">
              <h2>
                70<span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text-skills">NodeJS</h2>
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

      <Skills />

      <Network />
    </div>
  );
};
