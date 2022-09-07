import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const elemento = (
    <div>
      <h1>Orologio</h1>
      <h2>Sono le {new Date().toLocaleTimeString()} </h2>
    </div>
  )
  root.render(elemento)
}

setInterval(tick, 1000)

