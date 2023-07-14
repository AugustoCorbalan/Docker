const axios = require("axios");

module.exports = {
    list: async ()=>{
        const planets = await axios.get("http://database:8004/Planet");
        return planets.data;
    }
}