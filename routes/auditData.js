const express = require('express');
const router = express.Router();
const controller = require('../controllers/auditDataController');

router.get('/all', controller.getAuditData);

module.exports = router