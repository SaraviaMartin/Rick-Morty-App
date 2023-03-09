
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);


  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "ffcda1fea673.0fe9b581e186f2c89a23";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
        // setCharacters([...characters, data]);
      } else {
        alert("Algo salió mal");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 className='title'>CARTAS RICK AND MORTY</h1>
    <div>
    <Nav onSearch={onSearch}/>
    </div>
      <div>
        <Cards
          characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
