import './App.css';

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
  cognome: "Minia",
  img: profilo,
  skills: ["HTML", "CSS", "Javascript", "Python", "Java", "Scala", "NodeJS", "SQL", "React", "Angular", "Git", "MondoFB", "Flask", "Pandas", "NumPy", "MySQL"]
}
const techs = [html, css, js, reac]


//HEADER
const headerStlyes = {
  backgroundColor: "#F5E2C8",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5
}

function Header() {
  return (
    <header style={headerStlyes}>
      <h1 className="centro">Benvenuti nel nostro sito</h1>
      <h2 style={{ margin: "10px 0 0 0" }}>Cominciamo con il tutorial di React</h2>
      <h3 style={{ margin: "0px" }}>una libreria per creare pezzi di UI</h3>
      <small>{oggi}</small>
    </header>
  )
}

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
  color: "white",
  background: "#47D0CF",
  maxWidth: "100px",
  padding: "5px 10px 5px 10px",
  textAlign: "center",
  borderRadius: "10px",
  margin: "10px",
}

function Skill(props) {
  return (
    <div key={props.index} style={skillsStyles}>
      {props.elem}
    </div>
  )
}

const skillsFormatted = autore.skills.map((elem, index) =>
  <Skill elem={elem} index={index} />
)

function Utente(props) {
  return (
    <div>
      <div className="centro">
        <img src={props.img} alt="Napoleone" style={utenteStyles} />
        <p style={{ margin: "0" }}>
          {props.nome.toUpperCase()} {props.cognome.toUpperCase()}
          <img style={spuntaStyles} src={spunta} alt="utente verificato" />
        </p>
        <small>Teacher, Rome</small>
      </div>
      <h5 style={{ textAlign: "left" }}>SKILLS</h5>
      {skillsFormatted}
    </div>
  )
}

//TECHs

const techStyles = {
  width: "auto",
  height: "150px",
  marginBottom: "10px",
  padding: "0px 10px 0px 10px"
}

function TechList(props) {
  const techlist = props.techs.map((tech) =>
    <div className="flex-small" key={props.index}>
      <img alt="tecnologia" src={tech} style={techStyles} />
    </div>)
  return techlist
}


//MAIN
const mainStyles = {
  backgroundColor: "#F5E2C8"
}

function Main(props) {
  return (
    <main style={mainStyles}>
      <h3 style={{ padding: "25px 0px 25px 0" }} className="centro">Front End Technologies</h3>
      <div className="flex-row">
        {/* {techsFormatted} */}
        <TechList techs={props.techs} />
      </div>
    </main>
  )
}

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

function Subscribe() {
  return (
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
}

//FOOTER
const footerStyles = {
  backgroundColor: "#17255A",
  color: "white"
}

function Footer() {
  return (<footer style={footerStyles}>
    <p>Copyright 2022</p>
  </footer>)
}

function App() {
  return (
    <div>
      <Header />
      <Utente nome={autore.nome} cognome={autore.cognome} img={autore.img} skills={autore.skills} />
      <Main techs={techs} />
      <Footer />
      <Subscribe />
    </div>
  );
}

export default App;
