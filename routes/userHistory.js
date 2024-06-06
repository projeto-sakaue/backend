const express = require('express');
const router = express.Router();
const UserHistoryController = require('../controllers/userHistoryController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/userHistory', UserHistoryController.createUserHistory);

module.exports = router;
