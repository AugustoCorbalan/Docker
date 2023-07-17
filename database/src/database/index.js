const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

// const conn = mongoose.createConnection("mongodb+srv://Admin:Admin@cluster0.pspouia.mongodb.net/star_wars");
const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    Character : conn.model("characters", require("./schemas/carachterSchema")),
    Film : conn.model("films", require("./schemas/filmSchema")),
    Planet : conn.model("planets", require("./schemas/planetSchema"))
}