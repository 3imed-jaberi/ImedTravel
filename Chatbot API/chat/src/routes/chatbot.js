const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbot');

router.get('/',chatbotController.home);

router.post('/client',chatbotController.chatbot);
          
module.exports = router ;
