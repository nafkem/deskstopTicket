const express = require('express');
const router = express.Router();
const {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController');

const { authenticate, authorize } = require('../middlewares/auth');

router.use(authenticate);

router.get('/', authorize('Agent', 'Admin'), getAllTickets);
router.post('/', authorize('User', 'Agent', 'Admin'), createTicket);
router.get('/:id', getTicketById);
router.put('/:id', authorize('Agent', 'Admin'), updateTicket);
router.delete('/:id', authorize('Admin'), deleteTicket);

module.exports = router;
