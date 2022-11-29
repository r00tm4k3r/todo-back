const genericCrud = require('./generic.controller')
const {Tasks} = require('../models')

module.exports = { ...genericCrud(Tasks)}