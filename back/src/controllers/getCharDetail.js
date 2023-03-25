const axios = require("axios");
const KEY = "ffcda1fea673.0fe9b581e186f2c89a23";
const URL = "https://be-a-rym.up.railway.app/api";

const successH = (response, res) => {
    const { name, gender, status, origin, species, image } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name, gender, status, origin, species, image }));
};

    const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message);
};

    const getCharDetail = (res, id) => {
    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = getCharDetail;