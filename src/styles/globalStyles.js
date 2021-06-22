import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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
 
  margin: 200px 0px;
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
  flex-direction: column;
  align-items: center;
  margin: 300px 0px;
}

.skills-title{
    display: flex;
    flex-direction: column;
    align-items: center;
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


.icon-skills{
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}

.logoskill img{
margin-left: 30px;
height: 70px;
width: 70px;
margin-top: 30px;
}

.logoskilldos img{
  margin-left: 30px;
  height: 70px;
  width: 70px;
  margin-top: 10px;
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
  margin: 0 0 40px 0; 
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



.photo-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  
}

.photo-banner img { 
  border-radius: 10%;
  border: 4px solid #bb86fc;
 
}

.about {
  margin-left: 20px;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.5;

}

.line {
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  border-radius: 15%;
  height: 10px;
  width: 100%;
  margin-top: -10px;
} 

.scroll-about {
  font-size: 16px;
  font-weight: lighter;
  margin-top: 40px;
}

.scroll-about i{
  margin-right: 5px;
}


@media  (max-width: 500px)  {
  /* body{background: orange;} */

  .about {
  
  font-size: 22px;
  margin-top: 53px;
  padding: 25px;

  
}

.text-two-about {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button {
  margin-top: 50px;
}

/* componente 4 */
.line-four {
  background: transparent;
}


.blog-items{
  display: flex;
  flex-direction: column;
}

.renglonuno{
  margin-top: 50px;
}

.renglondos{
  margin-top: 150px;
  margin-left: 0px;
}
/* 
component 6 */


.text-skill{
align-items: center;
}

.text-one-skills{
margin-top: 20px;
width: 100%;
text-align: justify;
}


/* component 7 */

.base-contact{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
}

.touchfooter{
display: flex;
flex-direction: column;
margin-left: -40px;
}


}











`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#6200ee",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
};
