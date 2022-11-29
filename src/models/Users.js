const { model, 
        Schema
    } = require("mongoose")

const schema = new Schema({
    fullname: {
        type: String,
        default: ''
    }
})
module.exports = model('Users', schema)