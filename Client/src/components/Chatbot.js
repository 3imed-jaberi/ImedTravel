import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';
import { ChatBotLogo } from '../constant';
import 'react-chat-widget/lib/styles.css';
import '../assets/styles/Chatbot.css';



class Chatbot extends Component {

  handleNewUserMessage = (msg) => {
    axios.post('http://localhost:5000/client',{ msg })
    .then(res => {
      console.log(res);
      console.log(res.data);
                
      addResponseMessage(res.data.chatbotResponseMsg);
    }).catch(error => {
      console.log(error.response)
      console.log(error.response.data)
  });
  }

  render() {
    return (
      <div className='App'>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar = {ChatBotLogo}
          title='3imed-bot'
          subtitle=' it is a chat bot created by IMED JABERI ... '
          senderPlaceHolder =' write something you dont know :p '
          badge='nobmre of the notifcation when new msg comme .. '
        />
      </div>
    );
  }
}


export { Chatbot };