import './App.css';
import Contatore from './Contatore';
import Calcolatrice from './Calcolatrice';
import Somma from './Somma'; 

function App() {
  

  return (
    <div className='app'>
      <Contatore />
      <hr/>
      <Calcolatrice />
      <hr/>
      <Somma />
    </div>
  );
};

export default App;
