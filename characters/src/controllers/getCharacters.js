const characters = require("../data");

module.exports = async (req, res)=>{
    const charactersList = await characters.list();
    res.status(200).json(charactersList);
}