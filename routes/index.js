import { getStatus, getStats } from '../controllers/AppController';

const express = require('express');

const router = express.Router();

router.get('/status', (req, res) => getStatus(req, res));
router.get('/stats', (req, res) => getStats(req, res));

module.exports = router;
