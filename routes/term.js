const express = require('express');
const router = express.Router();
const TermController = require('../controllers/termController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/term', TermController.createTerm);
router.get('/term', TermController.getAllTerms);
router.get('/admin/term/:id', TermController.getTermById);
router.get('/term/:id', TermController.getTermById)
router.put('/term/:id', TermController.updateTerm);
router.delete('/term/:id', TermController.deleteTerm);

module.exports = router;
