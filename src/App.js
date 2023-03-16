import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from "react";
import { useEffect} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from './components/Detail/Detail.jsx';
import Form from "./components/Form/Form.jsx";




function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  const username = "saraviamartin16@gmail.com";
  const password = "mipass123";


  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "ffcda1fea673.0fe9b581e186f2c89a23";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // ! RENDER
  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;