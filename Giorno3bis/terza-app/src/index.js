import React from 'react';
import ReactDOM from 'react-dom/client';
import './primitive.css';

//imgs
import profilo from './imgs/profilo.jpg'
import spunta from './imgs/spunta.png'
import html from './imgs/html.png'
import css from './imgs/css.png'
import js from './imgs/js.png'
import reac from './imgs/react.png'


const oggi = new Date().toLocaleDateString()
const autore = {
  nome: "Marius",
  cognome: "Minia"
}

//HEADER
const headerStlyes = {
  backgroundColor: "#F5E2C8",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style={ headerStlyes }>
    <h1 className="centro">Benvenuti nel nostro sito</h1>
    <h2 style={ { margin: "10px 0 0 0" } }>Cominciamo con il tutorial di React</h2>
    <h3 style={{ margin: "0px" }}>una libreria per creare pezzi di UI</h3>
    <small>{oggi}</small>
  </header>
)

//UTENTE
const utenteStyles = {
  marginTop: "30px",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover"
}

const spuntaStyles = {
  width: "auto",
  height: "15px",
  marginLeft: "5px"
}

const skillsStyles = {
  display: "inline-block",
  color:"white",
  background:"#47D0CF",
  maxWidth: "100px",
  padding: "5px 10px 5px 10px",
  textAlign: "center",
  borderRadius: "10px",
  margin: "10px",
}

const skills = ["HTML", "CSS", "Javascript", "Python", "Java", "Scala", "NodeJS", "SQL", "React", "Angular", "Git", "MondoFB", "Flask", "Pandas", "NumPy", "MySQL"]
const skillsFormatted = skills.map((elem, index) =>
  <div key={index} style={skillsStyles}>
    {elem}
  </div>
)

const utente = (
  <div>
    <div className="centro">
      <img src={profilo} alt="Napoleone" style={utenteStyles} />
      <p style={{ margin: "0" }}>
        {autore.nome.toUpperCase()} {autore.cognome.toUpperCase()}
        <img style={spuntaStyles} src={spunta} alt="utente verificato" />
      </p>
      <small>Teacher, Rome</small>
    </div>
    <h5 style={{ textAlign: "left" }}>SKILLS</h5>
    {skillsFormatted}
  </div>
)

//TECHs
const techStyles = {
  width: "auto",
  height: "150px",
  marginBottom: "10px",
  padding: "0px 10px 0px 10px"
}

const techs = [html, css, js, reac]
const techsFormatted = techs.map((tech, index) =>
  <div className="flex-small" key={index}>
    <img alt="tecnologia" src={tech} style={techStyles} />
  </div>)

//MAIN
const mainStyles = {
  backgroundColor: "#F5E2C8"
}

const main = (
  <main style={mainStyles}>
    <h3 style={{ padding: "25px 0px 25px 0" }} className="centro">Front End Technologies</h3>
    <div className="flex-row">
      {techsFormatted}
    </div>
  </main>
)

//SUBSCRIBE
const subscribeStyles = {
  backgroundColor: "#C2E6F4"
}

const inputStyles = {
  display: "flex"
}

const textStyles = {
  marginLeft: "10px",
  marginRight: "10px",
  backgroundColor: "white"
}

const buttonStyles = {
  marginTop: "10px",
  backgroundColor: "#F37475",
  border: "0px",
  borderRadius: "10px",
  width: "300px"
}

const subscribe = (
  <div className="centro" style={subscribeStyles}>
    <h3>Subscribe</h3>
    <p>Sign up with your email address to receive news and updates.</p>
    <div style={inputStyles}>
      <input style={textStyles} type="text" name="firstName" placeholder='First name' />
      <input style={textStyles} type="text" name="lastName" placeholder='Last name' />
      <input style={textStyles} type="text" name="email" placeholder='Email' />
    </div>

    <input style={buttonStyles} type="submit" value="Subscribe" />

  </div>
)


//FOOTER
const footerStyles = {
  backgroundColor: "#17255A",
  color: "white"
}

const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2022</p>
  </footer>
)


//RENDERIZZA
const app = (
  <div className="small-container">
    {header}
    {utente}
    {main}
    {subscribe}
    {footer}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);





