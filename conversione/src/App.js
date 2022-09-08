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
    this.state = { backgroundColor: "#F7EDE2" }
  }

  handleSwitch = () => {
    if (this.state.backgroundColor === "#F7EDE2") {
      this.setState({ backgroundColor: "#84A59D" })
    }
    else {
      this.setState({ backgroundColor: "#F7EDE2" })
    }
  }

  render() {

    const stileApp = {backgroundColor : this.setState.backgroundColor}
    

    return (
      <div className="small-container" style={stileApp}>
        <Header />
        <Bottone handleSwitch={this.handleSwitch} />
        <Utente autore={autore} />
        <Main techs={techs} />
        <Subscribe />
        <Footer />
        
      </div>
    )
  }
}

export default App;
