import './App.css';
import Lista from './Lista'

const tecnologie = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

function App() {
  return (
    <div className="container">
      <div>
        <h1>Skill level</h1>
        <Lista lista={tecnologie} />
      </div>
    </div>
  );
}

export default App;
