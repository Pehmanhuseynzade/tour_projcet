const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    useimg: String,
    usename: String,
    usedesc: Number,
});

const useModel = mongoose.model('use', useSchema);


module.exports = useModel