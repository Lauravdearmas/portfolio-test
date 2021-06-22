import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Switch from "./switch";

const Header = () => {
  return (
    <div className="navigation">
      <div className="nav-header">
        <div className="dark-mode">
          <p className="dark-mode-title">Dark Mode</p>
          <input type="checkbox" className="checkbox" id="checkbox"></input>
          <label className="switch" htmlFor="checkbox"></label>
        </div>
      </div>
    </div>
  );
};

//Componente de foto y nombre
const Photoblog = () => {
  return (
    <div className="photo-banner">
      <div className="photo">
        <img src="img/photo.png" alt="" width="220" height="200" />
      </div>
      <div className="about">
        <p>
          Hello 🙂 <br></br>I`m Laura V. De Armas <br></br>
        </p>
        <div className="line-text">
          <p>a Fullstack Developer </p>
        </div>
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
              value="TailwindCSS"
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
        {/* <div className="button">
          <input
            className="resumebotton"
            type="botton"
            value="Download Resume"
          />
        </div> */}
      </div>
    </div>
  );
};

// componente 4
// const Box = () => {
//   return (
//     <div className="Boxes">
//       <div className="projects">
//         <h2>Projects</h2>
//         <div className="line-three"></div>
//       </div>

//       <div className="boxes-skills">
//         <div className="boxespage">
//           <h3>Use pagination</h3>
//           <p>
//             Simple client side pagination hooks for React + TailwindCSS client -
//             loridarmas.store
//           </p>
//           <div className="info-box">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//         <div className="boxespage">
//           <h3>Portfolio UX Design</h3>
//           <p>Design System, prototypes, UX Research for a new venture</p>
//           <div className="info-box">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//         <div className="boxespage">
//           <h3>Learn GIT</h3>
//           <p>
//             Simple page with python and some animation for learn Git and Github
//           </p>
//           <div className="info-box">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//         <div className="boxespage">
//           <h3>Benny catalogo</h3>
//           <p>
//             Lodgement management application. Developed react, NodeJS + MongoDB
//           </p>
//           <div className="info-box-only">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//         <div className="boxespage">
//           <h3>Tutorial Flutter</h3>
//           <p>Practices in Flutter</p>
//           <div className="info-box-onlytwo">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//         <div className="boxespage">
//           <h3>UX Study Cases </h3>
//           <p>Some of the cases that i`ve research in UX Design</p>
//           <div className="info-box-onlythree">
//             <i className="fab fa-github"></i>
//             <a href="#">Details</a>
//           </div>
//         </div>
//       </div>

//       <div className="seemore">
//         <input className="seebotton" type="botton" value="See More" />
//       </div>
//     </div>
//   );
// };

//Componente  5
// const Blog = () => {
//   return (
//     <div className="blog-pages">
//       <div className="title-blog">
//         <h2>Blogs</h2>
//         <div className="barrablog">
//           <div className="line-four"></div>
//           <div className="more">
//             <input className="morebottom" type="botton" value="More Article" />
//           </div>
//         </div>
//       </div>
//       <div className="blog-items">
//         <div className="renglonuno">
//           <h3>
//             <a href="#">Animations for your header</a>
//           </h3>
//           <p>
//             Check out some animations for your header and nav bar with this code
//             with CSS and SCSS let behind libraries and more, just follow these
//             steps...
//           </p>
//           <br></br>

//           <h3>
//             <a href="#">Best pluggins for frontends in 2021</a>
//           </h3>
//           <p>
//             If you are a frontend developer these pluggins for visual studio
//             code can help with your code...
//           </p>
//           <br></br>
//         </div>
//         <div className="renglondos">
//           <h3>
//             <a href="#">¿Black or white?</a>
//           </h3>
//           <p>
//             Pros and cons of use one color in your visual studio code that is
//             posible you dont know ...
//           </p>
//           <br></br>
//           <h3>
//             <a href="#">¿Serverless means the end of backend?</a>
//           </h3>
//           <p>
//             Lets see what is happend with Azure functions and the serverless and
//             the activities of the backend guys...
//           </p>
//           <br></br>
//         </div>
//       </div>
//     </div>
//   );
// };

//Componente 6
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
          </p>
          <p>
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

// Componente 7
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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("clicked", changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeEventListener("clicked", changeMedia);
    };
  }, []);

  return (
    // <div id="main" className="container">
    <main className={mainClass}>
      <Switch
        setDarkMode={setDarkMode}
        checked={checked}
        setChecked={setChecked}
      />
      <Photoblog />
      <About />
      <Skills />
      <Network />
    </main>

    // </div>
  );
};

export default App;
