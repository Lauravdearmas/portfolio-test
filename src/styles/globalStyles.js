import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
     background: ${({ theme }) => theme.body}; 
    color: ${({ theme }) => theme.text}; 
    
    ${"" /* background:url('img/two.png') center center no-repeat; */}
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  p {
    line-height: 1.4rem;
  }
  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }

  .about-text {
 
  margin: 50px 0px;
  font-size: 16px;
  font-weight: lighter;
  text-align: justify;
  width: 100%;
  line-height: 1.5;
}

.text-two-about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
}


.text-one-about {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
}

.line-two {
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  height: 7px;
  width: 150px;
  margin-left: 50px;
}

.botomabout {
  width: 145px;
  height: 30px;
  margin-left: 5px;
  background: #FFFFFF;
  box-shadow: -3px -3px 7px #fff, 0px 4px 6px 1px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  color: 000000;
  text-align: center;
  border-color: white;
  }

.about-skills{
  font-size: 16px;
  font-weight: lighter;
  text-align: justify;
  width: 100%;
  line-height: 1.5;
}

.skills-section{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:800px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
  border-radius: 12px;
  padding: 50px 100px;
  margin-top: 100px;
  margin-left: -180px;
}

.svg-skills {
  width: 150px;
  height: 150px;
  z-index: 1000;
}

.svg-skills circle{
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #191919;
  stroke-width: 10;
  stroke-Linecap: round;
  transform: translate(5px, 5px)
}

.svg-skills circle:nth-child(2){
  
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  
}
.box-skills:nth-child(1) .svg-skills circle:nth-child(2){
  stroke-dashoffset: calc(440 - ( 440*70) / 100);
  stroke: #00ff43;
  
}

.box-skills:nth-child(4) .svg-skills circle:nth-child(2){
  stroke-dashoffset: calc(440 - ( 440*70) / 100);
  stroke: #1ECBF1;
  
}

.box-skills:nth-child(3) .svg-skills circle:nth-child(2){
  stroke-dashoffset: calc(440 - ( 440*50) / 100);
  stroke: #F8F036;
  
}
.box-skills:nth-child(2) .svg-skills circle:nth-child(2){
  stroke-dashoffset: calc(440 - ( 440*80) / 100);
  stroke: #6200ee;
  
}

.skills-animation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
}

.box-skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.5s;
  margin-left: 20px;
  padding: 20px;
  
}

.box-skills:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, .5);
  
}




.percent-skills{
  
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px #000;
  z-index: 1000;
}

.percent-skills .number-skills{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.percent-skills .number-skills h2{
  
  font-weight: 700;
  font-size: 40px;
  transition: 0.5s;
}

.text-skills {
  
  position: relative;
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: uppercase;
}

.skills-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
  }

.line-skill{
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
    height: 7px;
    width: 100px;
}

.text-skill{
display: flex;
justify-content: center;
flex-direction: column;
}



.text-one-skills{
  line-height: 1.5;
  letter-spacing: 0.01em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-bottom: 10px;
  text-align: justify;
}


.bottomskills{
  width: 83px;
  height: 30px;
  background: #FFFFFF;
  box-shadow: -3px -3px 7px #fff, 0px 4px 6px 1px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  color: 000000;
  text-align: center;
  border-color: white;
  margin-left: 5px;
  margin-right: 5px;
}


.contact{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:800px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
  border-radius: 12px;
  padding: 50px 100px;
  margin-top: 100px;
  margin-left: -180px;
  margin-bottom: 100px;
}

.central-footer{
  width: 800px;
}

.touchfooter{
  display: flex;
  flex-direction: column;
}

.base-contact{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vectoredes{
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.vectoredes i{
  color: white;
  font-size: 28px;
}

.icon-one{
  background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  
  border-radius: 50px;
  height: 80px;
  width: 80px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}



.infoInit{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  width: 800px
  
}

.photo-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:800px;
  background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
  border-radius: 12px;
  padding: 50px 100px;
  margin-left: -180px;
}

.photo-banner img { 
  border-radius: 50%;
  height: 300px;
  width: 300px;
 
}

.img-portfolio-background{
  margin-top: -2500px;
margin-left: -400px;
margin-right: 20px;

}

.img-two-portfolio-background{
  position: relative;
  width: 150px;
  margin-top: -500px;
  margin-left: 800px;
  z-index:-1;

}
.img-three-portfolio-background{
  position: absolute;
  width: 130px;
  margin-top: -750px;
  z-index:-1;
  margin-left: -250px;

}

.img-four-portfolio-background{
  position: absolute;
  width: 70px;
  margin-top: -90px;
  z-index:-1;
  margin-left: -250px;

}
.img-five-portfolio-background{
  position: absolute;
  width: 70px;
  margin-top: -1500px;
  z-index:-1;
  margin-left: -300px;

}

.img-six-portfolio-background{
  position: absolute;
  width: 300px;
  margin-top: -1500px;
  z-index:-1;
  margin-left: 600px;

}
.img-seven-portfolio-background{
  position: absolute;
  width: 300px;
  margin-top: -1400px;
  z-index:-1;
  margin-left: 600px;
}

.img-eigth-portfolio-background{
  position: absolute;
  width: 300px;
  margin-top: -1100px;
  z-index:-1;
  margin-left: -300px;
}

.img-nine-portfolio-background{
  position: absolute;
  width: 50px;
  margin-top: -200px;
  z-index:-1;
  margin-left: -300px;
}

.img-ten-portfolio-background{
  position: absolute;
  width: 70px;
  margin-top: -650px;
  margin-left: 780px;
  z-index:-1;
}





.about {
  margin-left: 50px;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.5;

}


.scroll-about {
  font-size: 16px;
  font-weight: lighter;
  margin-top: 40px;
}

.scroll-about i{
  margin-right: 5px;
}


.skills-icon-portfolio{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:900px;
  
}

.item-portfolio{
  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 50%
}
.one{
  background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  padding: 40px;
  border-radius: 50%;
  font-size: 30px;
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
}
.two{
  background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  padding: 40px;
  border-radius: 50%;
  font-size: 30px;
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
}
.three{
  background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  padding: 40px;
  border-radius: 50%;
  font-size: 30px;
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
}
.four{
  background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  padding: 40px;
  border-radius: 50%;
  font-size: 30px;
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2); 
}


.pizza {
  position: absolute;
  width: 150px;
  margin-top: -1100px;
  margin-left: 520px;
}

.idea {
  position: absolute;
  margin-top: -400px;
  margin-left: -120px; 
}

.exp {
  position: absolute;
  margin-top: -1550px;
  margin-left: -150px; 
  width: 150px;
  height: 70px;
}

${"" /* animation */}
${
  "" /* 
.sol{ 
	background-image: url(img/sun.png);
	width: 100px;
	height: 100px;
	position: absolute;
	left: -110px;
	top: 30%;
	border-radius: 100px;
	box-shadow: 0px 0px 0px 10px rgba(255,140,0,0.5);
	animation-name: sun;
	animation-duration: 20s;
	animation-iteration-count:infinite;
} */
}


${
  "" /* .city{
	background-image: url(img/city.png);
	background-repeat: repeat-x;
	
	position: absolute; 
  left: 0px;
	width: 100%;
	height: 30%;	 
  top: 1900px;
	animation-name: city;
  z-index:-1;
	animation-duration: 30s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
} */
}


${
  "" /* @keyframes sun{
	0%{ left: -110px; top: 30%; }
	50%{ left: 50%; top: 5%; background: #FF4500; } 
	100%{ left: calc(100% + 10px); top: 30%; background: #bee2e6; box-shadow: 0px 0px 0px 10px rgba(73,92,95,0.5); }
}


@keyframes city{
	from{ background-position: 0 100%; }
	to{ background-position: 100% 100%; }
}
 */
}









@media  (max-width: 375px)  {
  /* body{background: orange;} */

  .photo-banner {
  flex-direction: column;
  width:140px;
  margin-left: -80px;
}


.infoInit{
  flex-direction: column;
  margin-top: 50px;
  width: 350px
}


.photo-banner img {
  height: 250px;
  width: 250px;
}




.skills-icon-portfolio{
  flex-direction: column;
  width:300px;
}


.about {
  margin-top: 25px;
  margin-left: 5px;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.5;

}

${"" /* componente 2 */}


.skills-section{
  flex-direction: column;
  width:140px;
  margin-left: -80px;
  margin-top: 100px;
  
}

.svg-skills {
  width: 150px;
  height: 150px;
  z-index: 1000;
}


.skills-animation {
  flex-direction: column;
  width: 200px;
  margin-top: 20px;
}

.box-skills {
  margin-bottom: 20px;
  margin-top: 50px;
}


.skills-title{
    width: 200px;
    margin-top: 20px;
    margin-bottom: 50px;
  }


  ${"" /* componente 3 */}

  .contact{
  flex-direction: column;
  width:140px;
  margin-left: -80px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.central-footer{
  width: 270px;
  flex-direction: column;
  margin-left: -15px;
}


.base-contact{
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

}


@media  (max-width: 320px)  {
  /* body{background: orange;} */

  .photo-banner {
  flex-direction: column;
  width:100px;
  margin-left: -80px;
}


.infoInit{
  flex-direction: column;
  margin-top: 50px;
  width: 350px
}


.photo-banner img {
  height: 250px;
  width: 250px;
}




.skills-icon-portfolio{
  flex-direction: column;
  width:300px;
}


.about {
  margin-top: 25px;
  margin-left: 5px;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.5;

}

${"" /* componente 2 */}


.skills-section{
  flex-direction: column;
  width:100px;
  margin-left: -80px;
  margin-top: 100px;
  
}

.svg-skills {
  width: 150px;
  height: 150px;
  z-index: 1000;
}


.skills-animation {
  flex-direction: column;
  width: 200px;
  margin-top: 20px;
}

.box-skills {
  margin-bottom: 20px;
}


.skills-title{
    width: 200px;
    margin-top: 20px;
    margin-bottom: 50px;
  }


  ${"" /* componente 3 */}

  .contact{
  flex-direction: column;
  width:100px;
  margin-left: -100px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.central-footer{
  width: 270px;
  flex-direction: column;
  margin-left: -15px;
}


.base-contact{
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

}



`;

export const lightTheme = {
  body: "linear-gradient(to right, #cea6ff, #fbc7d4, #fbc7d4)",
  text: "#121212",
  primary: "#fbc7d4",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
};
