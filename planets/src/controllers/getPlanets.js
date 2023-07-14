const planets = require("../data");

module.exports = async (req, res)=>{
    const planetsList = await planets.list();
    res.status(200).json(planetsList);
}