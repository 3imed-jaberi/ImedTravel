import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutStripeForm from '../components/Checkout Stripe Form';
import axios from 'axios';


import "../assets/styles/Alert.css";
import ClientOptions from '../components/Client Options';

import { hideErrors , Materialize_SelectIMG , Materialize_Date } from "../assets/scripts/main";

// import 4 basic images .. 
import errorIMG from "../assets/images/select forms/alert.png";
import twoIMG from "../assets/images/select forms/two.png";
import threeIMG from "../assets/images/select forms/three.png";
import fourIMG from "../assets/images/select forms/four.png";
import fiveIMG from "../assets/images/select forms/five.png";

class Booking extends Component {

  componentDidMount(){
    Materialize_SelectIMG();
    Materialize_Date();
    this.setState({ bookingID : new URL(window.location.href).searchParams.get("id") }) ;
    console.log(this.state.errors);
    hideErrors();
  }

  // prepre the data  .. 

  state = {
    bookingID: '',
    cin1: '', 
    cin2: '',
    cin3: '',
    cin4: '',
    cin5: '',
    firstName1: '',
    firstName2: '',
    firstName3: '',
    firstName4: '',
    firstName5: '',
    lastName1: '',
    lastName2: '',
    lastName3: '',
    lastName4: '',
    lastName5: '',
    phone1: '',
    address1: '' ,
    date_dept:'',
    date_fin:'',
    nbP: '-1' ,
    display : false , 
    displayFomrs : true,
    errors : {
      empty : true
    }
  }



  handleNbPChange = event => {
    this.setState({ nbP: event.target.value });
  }
  handlePhoneChange = event => {
    this.setState({ phone1: event.target.value });
  }
  handleAddressChange = event => {
    this.setState({ address1: event.target.value });
  }

  // first name of all peopels who subscribe in the trip .. 
  handleFirtName1Change = event => {
    this.setState({ firstName1 : event.target.value });
  }
  handleFirtName2Change = event => {
    this.setState({ firstName2 : event.target.value });
  }
  handleFirtName3Change = event => {
    this.setState({ firstName3 : event.target.value });
  }
  handleFirtName4Change = event => {
    this.setState({ firstName4 : event.target.value });
  }
  handleFirtName5Change = event => {
    this.setState({ firstName5 : event.target.value });
  }

  // last name of all peopels who subscribe in the trip .. 
  handleLastName1Change = event => {
    this.setState({ lastName1 : event.target.value });
  }
  handleLastName2Change = event => {
    this.setState({ lastName2 : event.target.value });
  }
  handleLastName3Change = event => {
    this.setState({ lastName3 : event.target.value });
  }
  handleLastName4Change = event => {
    this.setState({ lastName4 : event.target.value });
  }
  handleLastName5Change = event => {
    this.setState({ lastName5 : event.target.value });
  }

  // age of all peopels who subscribe in the trip .. 
  handleCin1Change = event => {
    this.setState({ cin1 : event.target.value });
  }
  handleCin2Change = event => {
    this.setState({ cin2 : event.target.value });
  }
  handleCin3Change = event => {
    this.setState({ cin3 : event.target.value });
  }
  handleCin4Change = event => {
    this.setState({ cin4 : event.target.value });
  }
  handleCin5Change = event => {
    this.setState({ cin5 : event.target.value });
  }


  // send the eamil 
  handleSubmit = event => {

    event.preventDefault();

    let data = { 
      bookingID : this.state.bookingID ,
      cin1 : this.state.cin1 ,
      cin2 : this.state.cin2 ,
      cin3 : this.state.cin3 ,
      cin4 : this.state.cin4 ,
      cin5 : this.state.cin5 ,
      date_dept : document.getElementById('dateD').value , 
      date_fin : document.getElementById('dateF').value , 
      nbP : this.state.nbP , 
      firstName1 : this.state.firstName1, 
      firstName2 : this.state.firstName2, 
      firstName3 : this.state.firstName3 ,  
      firstName4 : this.state.firstName4 ,  
      firstName5 : this.state.firstName5 , 
      lastName1 : this.state.lastName1 ,  
      lastName2 : this.state.lastName2 ,  
      lastName3 : this.state.lastName3 ,  
      lastName4 : this.state.lastName4 ,  
      lastName5 : this.state.lastName5 ,
      phone1 : this.state.phone1 , 
      address1 : this.state.address1  
    };

    axios.post(`http://localhost/api/booking.php`,data)
      .then(res => {

        if ( res.data.add !== 'success' && res.data.add !=='failed' ){
          //console.log(res);
          //console.log(res.data);
          this.setState({ errors : res.data });
          console.log(this.state.errors);
        }else{
          console.log(res);
          console.log(res.data);
          this.setState({ display : true });
        }
      });

  }

  renderCondition(){
    if( this.state.nbP === '2' ) {
      return (
      <div>
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 2 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin2Change} required />
          { (this.state.errors.cin2 ? <div className="msg msg-error"> { this.state.errors.cin2 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 2 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName2Change} required />
          { (this.state.errors.firstName2 ? <div className="msg msg-error"> { this.state.errors.firstName2 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 2 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName2Change} required />
          { (this.state.errors.lastName2 ? <div className="msg msg-error"> { this.state.errors.lastName2 } </div> : null )}
      </div>
      </div>
      );
    }else if ( this.state.nbP === '3' ) {
      return (
      <div>
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 2 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin2Change} required />
          { (this.state.errors.cin2 ? <div className="msg msg-error"> { this.state.errors.cin2 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 2 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName2Change} required />
          { (this.state.errors.firstName2 ? <div className="msg msg-error"> { this.state.errors.firstName2 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 2 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName2Change} required />
          { (this.state.errors.lastName2 ? <div className="msg msg-error"> { this.state.errors.lastName2 } </div> : null )}
      </div>
      
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 3 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin3Change} required />
          { (this.state.errors.cin3 ? <div className="msg msg-error"> { this.state.errors.cin3 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 3 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName3Change} required />
          { (this.state.errors.firstName3 ? <div className="msg msg-error"> { this.state.errors.firstName3 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 3 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName3Change} required />
          { (this.state.errors.lastName3 ? <div className="msg msg-error"> { this.state.errors.lastName3 } </div> : null )}
      </div>  

      </div>
      );
    }else if (this.state.nbP === '4' ){
      return (
    <div>
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 2 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin2Change} required />
          { (this.state.errors.cin2 ? <div className="msg msg-error"> { this.state.errors.cin2 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 2 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName2Change} required />
          { (this.state.errors.firstName2 ? <div className="msg msg-error"> { this.state.errors.firstName2 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 2 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName2Change} required />
          { (this.state.errors.lastName2 ? <div className="msg msg-error"> { this.state.errors.lastName2 } </div> : null )}
      </div>
      
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 3 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin3Change} required />
          { (this.state.errors.cin3 ? <div className="msg msg-error"> { this.state.errors.cin3 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 3 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName3Change} required />
          { (this.state.errors.firstName3 ? <div className="msg msg-error"> { this.state.errors.firstName3 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 3 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName3Change} required />
          { (this.state.errors.lastName3 ? <div className="msg msg-error"> { this.state.errors.lastName3 } </div> : null )}
      </div>  
    
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 4 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin4Change} required />
          { (this.state.errors.cin4 ? <div className="msg msg-error"> { this.state.errors.cin4 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 4 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName4Change} required />
          { (this.state.errors.firstName4 ? <div className="msg msg-error"> { this.state.errors.firstName4 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 4 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName4Change} required />
          { (this.state.errors.lastName4 ? <div className="msg msg-error"> { this.state.errors.lastName4 } </div> : null )}
      </div>
    </div> 
    )}else if ( this.state.nbP === '5' ){
            return (
    <div>
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 2 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin2Change} required />
          { (this.state.errors.cin2 ? <div className="msg msg-error"> { this.state.errors.cin2 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 2 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName2Change} required />
          { (this.state.errors.firstName2 ? <div className="msg msg-error"> { this.state.errors.firstName2 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 2 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName2Change} required />
          { (this.state.errors.lastName2 ? <div className="msg msg-error"> { this.state.errors.lastName2 } </div> : null )}
      </div>
      
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 3 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin3Change} required />
          { (this.state.errors.cin3 ? <div className="msg msg-error"> { this.state.errors.cin3 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 3 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName3Change} required />
          { (this.state.errors.firstName3 ? <div className="msg msg-error"> { this.state.errors.firstName3 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 3 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName3Change} required />
          { (this.state.errors.lastName3 ? <div className="msg msg-error"> { this.state.errors.lastName3 } </div> : null )}
      </div>  
    
      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 4 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin4Change} required />
          { (this.state.errors.cin4 ? <div className="msg msg-error"> { this.state.errors.cin4 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 4 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName4Change} required />
          { (this.state.errors.firstName4 ? <div className="msg msg-error"> { this.state.errors.firstName4 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 4 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName4Change} required />
          { (this.state.errors.lastName4 ? <div className="msg msg-error"> { this.state.errors.lastName4 } </div> : null )}
      </div>

      <div className="input-field">
                <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 5 : <sup>*</sup></label>
          <input type="text" name="cin1"  onChange={this.handleCin5Change} required />
          { (this.state.errors.cin5 ? <div className="msg msg-error"> { this.state.errors.cin5 } </div> : null )}
      </div> 
      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 5 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName5Change} required />
          { (this.state.errors.firstName5 ? <div className="msg msg-error"> { this.state.errors.firstName5 } </div> : null )}
      </div> 

      <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 5 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName5Change} required />
          { (this.state.errors.lastName5 ? <div className="msg msg-error"> { this.state.errors.lastName5 } </div> : null )}
      </div>
    </div> 
    )}else{
      return(
        <div></div>
      )
    }
  }

  render() {
    return (
       <div className="container">
         { this.state.displayFomrs ? 
          <form onSubmit={this.handleSubmit}>
            <br/>
            <h4 className="center">
              <span className="teal-text">Booking</span> Forms
            </h4><br/>

          <div className="input-field">
          <i className="material-icons prefix">contacts</i>
          <label htmlFor="cin">CIN 1 : <sup>*</sup></label>
          <input type="text" name="cin1" id="cin"  onChange={this.handleCin1Change} required />
          { (this.state.errors.cin1 ? <div className="msg msg-error"> { this.state.errors.cin1 } </div> : null )}
          </div>    

          <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <label htmlFor="first_name"> First Name 1 : <sup>*</sup></label>
          <input type="text" name="first_name1" onChange={this.handleFirtName1Change} required />
          { (this.state.errors.firstName1 ? <div className="msg msg-error"> { this.state.errors.firstName1 } </div> : null )}
          </div> 

          <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <label htmlFor="last_name"> Last Name 1 : <sup>*</sup></label>
          <input type="text" name="last_name1" onChange={this.handleLastName1Change} required />
          { (this.state.errors.lastName1 ? <div className="msg msg-error"> { this.state.errors.lastName1 } </div> : null )}
          </div> 

          <div className="input-field">
          <i className="material-icons prefix">date_range</i>
          <label htmlFor="date_depart">Date Depart :<sup>*</sup></label>
          <input type="text" id="dateD" className="datepicker" name='date_dept' /> 
          </div>       

          <div className="input-field">
          <i className="material-icons prefix">polymer</i>
          <label htmlFor="date_fin">Date Fin :<sup>*</sup></label>
          <input type="text" id="dateF" className="datepicker" name='date_fin' /> 
          </div> 

          <div className="input-field">
          <i className="material-icons prefix">phone</i>
          <label htmlFor="age"> Phone : <sup>*</sup></label>
          <input type="text" name="phone1" onChange={this.handlePhoneChange} required />
          { (this.state.errors.phone1 ? <div className="msg msg-error"> { this.state.errors.phone1 } </div> : null )}
          </div>
          
          <div className="input-field">
          <i className="material-icons prefix">airline_seat_individual_suite</i>
          <label htmlFor="address1"> Address : <sup>*</sup></label>
          <input type="text" name="address1" onChange={this.handleAddressChange} required />
          { (this.state.errors.address1 ? <div className="msg msg-error"> { this.state.errors.address1 } </div> : null )}
          </div>              
 
          <div className = "input-field col s12">
          <i className="material-icons prefix">group_add</i>
               <select className = "icons" value={this.state.nbP}  onChange={this.handleNbPChange} required >
                  <option value = "-1" disabled  data-icon ={errorIMG} >Select Technology</option>
                  <option value = "2" data-icon ={twoIMG} > two peoples </option>
                  <option value = "3" data-icon ={threeIMG} > three peoples</option>
                  <option value = "4" data-icon ={fourIMG} > four peoples </option>
                  <option value = "5" data-icon ={fiveIMG} > five peoples</option>
               </select>
               <label htmlFor="nbPerson">Nombre de personnes : </label>
          { (this.state.errors.nbP ? <div className="msg msg-error"> { this.state.errors.nbP } </div> : null )}
          </div>

          { this.renderCondition() }

          <div className="input-field">
          <i className="material-icons prefix">euro_symbol</i>
          <label htmlFor="payer"> Payer : <sup>*</sup></label>
          <input type="text" name="payer"  required />
          </div>
          <br/>
          <hr/>
          <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <div className="example">
                <h2>Stripe Integration Exemple</h2>
                <Elements>
                    <CheckoutStripeForm/>
                </Elements>
              </div>
          </StripeProvider>
          <hr/>
          <br/>
          <div className="center">
            <button className="btn waves-effect text-teal lighten-2 white-text btn-large center" type="submit" > 
              Booking 
              <i className="material-icons right">send</i>
            </button> 
          </div> 
          <br/>
          </form> : null }

          { (this.state.display ? <div className="msg msg-success"> Success Booking .. </div> : null )}
          
          { !this.state.displayFomrs ? <ClientOptions data={this.state} /> : null }
          
          { this.state.display  ? setTimeout(() => { this.setState({ display : false  , displayFomrs : false }) ; } , 2500) : null  }
      
      </div>
    )
  }
}

export default Booking ;