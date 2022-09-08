import './App.css';
import Skills from './Skills'

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
        <Skills skills={tecnologie} />
      </div>
    </div>
  );
}

export default App;
