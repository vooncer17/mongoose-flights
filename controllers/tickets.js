var Flight = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err,flight) {
        res.render(`/tickets/new`);
})};
    

function create(req, res) {
    Flight.findById(req.params.id, function(err,flight) {
        Ticket.flight.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
