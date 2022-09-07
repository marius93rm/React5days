import React from 'react';
import ReactDOM from 'react-dom/client';
import './primitive.css';
import profilo from './profilo.jpg'

const oggi = new Date().toLocaleDateString()
const autore = {
  nome: "Marius",
  cognome: "Minia"
}

//STILE
const headerStlyes = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5
}

const utenteStyles = {
  display: "inline-block",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover"
}

const mainStyles = {
  backgroundColor: "#F3F0F5"
}

const footerStyles = {
  backgroundColor: "#61DBFB"
}

//ELEMENTI
const header = (
  <header style={headerStlyes} className="small-container">
    <h1>Benvenuti nel nostro sito</h1>
    <h2>Cominciamo con il tutorial di React</h2>
    <h3>una libreria per creare pezzi di UI</h3>
    <small>{oggi}</small>
  </header>
)

const utente = (
  <div>
    <img src={profilo} alt="Napoleone" style={utenteStyles}/>
    <p>{autore.nome} {autore.cognome.toUpperCase()}</p>
  </div>
)

const techs = ["HTML","CSS","Javascript"]
const techsFormatted = techs.map( (tech, index) => <li key={index}> {tech}</li>)

const main = (
  <main style={mainStyles} className="small-container">
    <p>Prerequisiti per iniziare con react.js</p>
    <ul>
      {techsFormatted}
    </ul>
  </main>
)

const footer = (
  <footer styles={footerStyles} className="small-container" >
    <p>Copyright 2022</p>
  </footer>
)


//RENDERIZZA
const app = (
  <div>
    {header}
    {utente}
    {main}
    {footer}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);





