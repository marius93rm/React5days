import logo from './logo.svg';
import './App.css';
import verdi from './verdi.jpg';


function formatName(user){
  //return user.firstName + " " + user.lastName;
  if(user){
    return `${user.firstName} ${user.lastName}` //template literal
  }
  return `ciao Sconosciuto` //template literal
}

function getProfilo(user){
  if(user){
    console.log("carico l'img")
    return user.profilo
    
  }
  console.log("non ho trovato l'img")
}



const stile = {
  height: "auto",
  width: "100px"
}

const artista = {
  firstName: 'Giuseppe',
  lastName: 'Verdi',
  profilo: verdi
}
const indirizzo="https://www.google.com"
const titolo = <h1 style={ {color: "red", textAlign: "center"} }> Hello , {formatName(artista)}!</h1>
const profilo = <img alt="img del profilo" src={getProfilo(artista)} style={stile} /> //attenzione alla chiusura del tag :)
const collegamento = <a href={indirizzo} className="collegamento">Clicca qui</a>

function App() {
  return (
    <div>
     {titolo}
     {profilo}
     {collegamento}
    </div>
  );
}

export default App;
