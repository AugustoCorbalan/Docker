const films = require("../data");
const {response} = require("../utils");

module.exports = async (req, res)=>{
    const newFilms = await films.create();
    response(res, 201, newFilms);
}
