const express = require("./src/server");

const PORT = 8002;

express.listen(PORT, ()=>{
    console.log("Planets listening on port 8002")
})