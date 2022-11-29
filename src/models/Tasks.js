const { model, 
    Schema, 
    Schema: {Types: {ObjectId}} 
} = require("mongoose")

const schema = new Schema({
title: {
    type: String,
    default: ''
},
description: {
    type: String,
    default: ''
},
done: {
    type: Boolean,
    default: false
},
userId: {
    type: ObjectId,
    ref: 'Users'
}
})
module.exports = model('Tasks', schema)