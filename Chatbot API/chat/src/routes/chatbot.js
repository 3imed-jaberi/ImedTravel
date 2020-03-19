const express = require('express');
const router = express.Router();
const { HomeTest, ClientBot} = require('../controllers/chatbot');


router.get('/', HomeTest);
router.post('/client', ClientBot);


module.exports = router;