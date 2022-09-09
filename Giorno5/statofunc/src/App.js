import './App.css';
import React, { useState } from 'react';

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon"
  ]

  const [filterList, setFilterList] = useState(list);

  let noPuntini = {
    listStyleType: "none"
  }

  const handleSearch = (evento) => {
    let search = evento.target.value;

    if (search === "") {
      setFilterList(list);
      
    } else {
      const filtreredValues = list.filter(
        (item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
      setFilterList(filtreredValues);
    }

  }
  
  return (
    <div className="App">
      <h1>My Grocery List</h1>
      <div>
        Search: <input type="text" name="query" onChange={handleSearch}/>
      </div>
      <ul style={noPuntini}>
        {filterList.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
