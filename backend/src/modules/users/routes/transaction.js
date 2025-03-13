const transaction = require('../controllers/transaction');
const express = require('express');
const router = express.Router();

router.get('/get-transaction', transaction.getTransaction);