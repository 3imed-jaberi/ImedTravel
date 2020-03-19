import React, { Component } from 'react';
import { sendEmail } from '../services';
import { Map , Information, Chatbot } from '../components';
import { Materialize_ScrollSpy } from '../assets/scripts';
import '../assets/styles/Alert.css';



class Contact extends Component {

  componentDidMount(){
    Materialize_ScrollSpy(); 
  }

  state = {
    user: '',
    mail: '',
    phone: '',
    msg: '' ,
    display:false
  }

  // handle the changes .. 
  handleUserChange = event => {
    this.setState({ user: event.target.value });
  }
  handleMailChange = event => {
    this.setState({ mail: event.target.value });
  }
  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  }
  handleMsgChange = event => {
    this.setState({ msg: event.target.value });
  }

  // my methods .. is not lifecycle method ..
  myComponentWillUpdate(){
    // vanila js .. simple dom manipulation .. 
    document.getElementById('msg').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
  }

  // send the eamil 
  handleSubmit = event => {
    event.preventDefault();
    let data = { user : this.state.user , mail : this.state.mail , phone : this.state.phone , msg : this.state.msg }; // i can use this.state as data 

    sendEmail(data)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ display : true })
      })
  }

  render() {
    return (
          <div id='contact' className='section section-contact scrollspy'>
            <div className='container'>
      <br/>
      <br/>
      <br/>
              <div className='row'>
                 <div className='col s12 m6'>
                   <Information />
                    <Map />
                 </div>
                 <div className='col s12 m6'>
          <div className='card-panel grey lighten-3'>
            <form onSubmit={this.handleSubmit}>
            <h5>Please fill out this form</h5>
            <div className='input-field'>
              <input type='text' placeholder='Name'  id='name' onChange={this.handleUserChange} required/>
            </div>
            <div className='input-field'>
              <input type='text' placeholder='Email' id='email' onChange={this.handleMailChange} />
            </div>
            <div className='input-field'>
              <input type='text' placeholder='Phone' id='phone' onChange={this.handlePhoneChange} />
            </div>
            <div className='input-field'>
              <textarea className='materialize-textarea' placeholder='Enter Message' id='msg' onChange={this.handleMsgChange}></textarea>
            </div>
            <input type='submit' id='send' value='Submit' className='btn' />
            </form>
            { this.state.display ? <div className='msg msg-success'> Success Send .. </div> : null }
            { this.state.display  ? setTimeout(() => { this.setState({ display : false }) ; this.myComponentWillUpdate() ; } , 2500) : null  }
          </div>  
                 </div>
              </div>
            </div>
            <Chatbot />
          </div>
    )
  }
};


export { Contact };