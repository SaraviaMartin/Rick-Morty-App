const axios = require("axios");
const KEY = "ffcda1fea673.0fe9b581e186f2c89a23";
const URL = "https://be-a-rym.up.railway.app/api";

const successH = (response, res) => {
    const { id, image, name, gender, species } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id, name, gender, species, image }));
  };
  
  const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
  };
  
  const getCharById = (res, id) => {
    axios
      .get(`${URL}/character/${id}?key=${KEY}`)
      .then((response) => successH(response, res))
      .catch((error) => errorH(error, res));
  };
  
  module.exports = getCharById;