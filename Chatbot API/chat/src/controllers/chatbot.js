require('dotenv').config();

const apiai = require('apiai');
const uuid = require('uuid/v4');

const chatbot = apiai("9745acd90b4546b59fa5929f8cbb1925");


exports.HomeTest = (req, res, next) => {
  res.status(200).json({
    'msg': 'welcome to the api for dialogflow chatbot using api ai ..'
  });
};


exports.ClientBot = (req, res, next) => {
  const request = chatbot.textRequest(req.body.msg, { sessionId: uuid() });

  request.on('response', function(response) {
    res.status(200).json({ 
      "clientRequestMsg": response.result.resolvedQuery,
      "chatbotResponseMsg": response.result.fulfillment.speech 
    });
  });

  request.on('error', function(error) {
    res.status(404).json(error);
  });

  request.end();
}
