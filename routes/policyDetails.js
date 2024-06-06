const express = require('express');
const router = express.Router();
const PolicyDetailsController = require('../controllers/policyDetailsController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/policyDetails', PolicyDetailsController.createPolicy);

module.exports = router;
