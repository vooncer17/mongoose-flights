var Flight = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    var ticket = new Ticket(req.body)
    

function create(req, res) {
    