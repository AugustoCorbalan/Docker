const { Schema } = require("mongoose");

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type: String, ref: "characters"}],
    planets: [{type: String, ref: "planets"}]
});

filmSchema.statics.list = async function (){
    return await this.find()
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
}

filmSchema.statics.get = async function (_id){
    return await this.findById(_id)
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
}

filmSchema.statics.insert = async function (newFilm){
    await this.create(newFilm);
    return "Película agregada a la base de datos"
        
}

module.exports= filmSchema;