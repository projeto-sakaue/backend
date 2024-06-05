const express = require('express');
const router = express.Router();
const PolicyController = require('../controllers/policyController');
const privacyPolicy = require('../middlewares/privacyPolicy');

router.post('/policy', PolicyController.createPolicy);
router.get('/policy', PolicyController.getAllPolicies);
router.get('/admin/policy/:id',PolicyController.getPolicyById);
router.get('/policy/:id', PolicyController.getPolicyById)
router.put('/policy/:id', PolicyController.updatePolicy);
router.delete('/policy/:id', PolicyController.deletePolicy);

module.exports = router;
