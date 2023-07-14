const films = require('../data');
const { response } = require('../utils');

module.exports = async (req, res)=>{
    const data = await films.list();
    response(res, 200, data);    
}




