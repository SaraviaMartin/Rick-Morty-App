import { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Buscar
      </button>
    </>
  );
};

export default SearchBar;
