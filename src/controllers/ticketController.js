const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({
      ...req.body,
      reporterId: req.user.id
    });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create ticket', error: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json(tickets);
};

exports.getTicketById = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
  res.json(ticket);
};

exports.updateTicket = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

  await ticket.update(req.body);
  res.json(ticket);
};

exports.deleteTicket = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

  await ticket.destroy();
  res.status(204).send();
};
