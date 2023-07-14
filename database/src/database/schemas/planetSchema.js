const { Schema } = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type: String, ref: "characters"}],
    films: [{type: String, ref: "films"}]
})

planetSchema.statics.list = async function (){
    return await this.find()
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "name"])
}

planetSchema.statics.get = async function (_id){
    return await this.findById(_id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "name"])
}

planetSchema.statics.insert = async function (newPlanet){
    await this.create(newPlanet);
    return "El planeta fue agregado a la base de datos"
} 

module.exports = planetSchema;