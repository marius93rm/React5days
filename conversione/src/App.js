import React from 'react'

import Header from './components/Header'
import Utente from './components/Utente'
import Main from './components/Main'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Bottone from './components/Bottone'

import profilo from './imgs/profilo.jpg'
import html from './imgs/html.png'
import css from './imgs/css.png'
import js from './imgs/js.png'
import reac from './imgs/react.png'

const autore = {
  nome: "Marius",
  cognome: "Minia",
  img: profilo,
  skills: ["HTML", "CSS", "Javascript", "Python", "Java", "Scala", "NodeJS", "SQL", "React", "Angular", "Git", "MondoFB", "Flask", "Pandas", "NumPy", "MySQL"]
}
const techs = [html, css, js, reac]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tema: true }
  }

  handleSwitch = () => {
    // console.log("test")
    // if (this.state.tema === "chiaro") {
    //   console.log("imposto scuro")
    //   this.setState({ backgroundColor: "scuro" })

    // }
    // else {
    //   console.log("imposto chiaro")
    //   this.setState({ backgroundColor: "chiaro" })
    // }

    this.setState( prevState => ({
      tema : !prevState.tema
    }))
  }

  render() {

    return (
      <div className={this.state.tema ? "chiaro" : "scuro"}>
        <Header />
        <Bottone handleSwitch={this.handleSwitch} tema={this.state.tema} />
        {/* <button onClick={this.handleSwitch}>
          {this.state.tema ? 'chiaro' : 'scuro'}
        </button> */}
        <Utente autore={autore} />
        <Main techs={techs} />
        <Subscribe />
        <Footer />
        
      </div>
    )
  }
}

export default App;
