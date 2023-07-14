const axios = require('axios');

module.exports = {
    list: async ()=>{
        const characters = await axios.get("http://database:8004/Character")
        return characters.data;
    }
}