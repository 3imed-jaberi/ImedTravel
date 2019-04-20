import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';

// addLinkSnippet, addUserMessage , 

import 'react-chat-widget/lib/styles.css';
import '../assets/styles/Chatbot.css';

import logo from '../assets/images/imed jaberi/logo.jpg';



class Chatbot extends Component {

  handleNewUserMessage = (msg) => {
    //console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
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
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar = {logo}
          title="3imed-bot"
          subtitle=" it's a chat bot created by IMED JABERI ... "
          senderPlaceHolder =" write something you don't know :p "
          badge="nobmre of the notifcation when new msg comme .. "
        />
      </div>
    );
  }
}

export default Chatbot;
