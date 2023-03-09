import Cards from "./components/Cards";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [users, setUsers] = useState([]);

  const searchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers([...users, data])); // data es el objeto del usuario
  };

  // a partir de ahora tengo un estado que se llama users = []
  // setUsers es la función encargada de modificar ese estado

  return (
    <div className="App">
      <SearchBar onSearch={searchUser} />
      <Cards users={users} />
    </div>
  );
}

export default App;
