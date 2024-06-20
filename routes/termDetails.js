const express = require('express');
const router = express.Router();
const TermDetailsController = require('../controllers/termDetailsController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/termDetails', TermDetailsController.createTerm);

module.exports = router;
