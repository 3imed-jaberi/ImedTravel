import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DownloadLink from "react-download-link";
import axios from 'axios';

import { Materialize_Notifcations } from '../assets/scripts/main' ;
import Dashboard from './Dashboard';

class ClientOptions extends Component {

  state = {
    redirect: false , 
    print : false ,
    style: {
      margin: "",
      textDecoration: "",
      color: "White",
      cursor: ""
    },
    data2 : this.props.data
  }

  componentDidMount(){
    Materialize_Notifcations();
    // console.log(this.props.data);
  }

  setRedirect = () => {
    setTimeout(()=>{
      this.setState({
        redirect: true
      });
    } , 1000 )

  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  FACTURE = () => {
    let facture = `
=================================================
=                                               =
=         THANK YOU FOR YOUR CONFIDENCE         =
=                                               =
=================================================
=                                               =
=   CIN : ${this.state.data2.cin1}              =
=   FIRST NAME : ${this.state.data2.firstName1} =
=   LAST NAME : ${this.state.data2.lastName2}   =
=   PHONE : ${this.state.data2.phone1}          =
=   ADDRESS : ${this.state.data2.address1}      =
=   NB COMPANYS : ${this.state.data2.nbP}       =
=   DEPART : ${this.state.data2.date_dept}      =
=   FIN : ${this.state.data2.date_fin}          =
=   PAYER :  **********************             =
=                                               =
=  note : this application 'need click to pay'  =
=   or other api for whrite here the true       =
=   transcation of money ..                     =
=                                               =
================================================= 
    ` ;
    return facture;
  }

  handleDeleteSubmit = event => {
    event.preventDefault();
    let cin1 = this.state.data2.cin1 ;
    axios.delete(`http://localhost/api/booking.php?cin1=${cin1}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
 
/*   handlUpdateSubmit = event => {
    event.preventDefault();
    // update code  .. 
    // get data and put and then uppdate table ..
    axios.get(`http://localhost/api/booking.php?cin1=${cin1}`)
    .then(res => {
      console.log(res.data);
    });
  }
 */
  render(){
  return (
    <div className="container">
      <Dashboard data2={this.state.data2} />
       <br/><br/>
      <div className="row"> 
      <div className="col s4">   
      </div>
      <div className="col s3">   
            <button className="btn-large black" id="print" >
              <i className="material-icons right">folder_shared</i>
              <DownloadLink label="PRINT" style={this.state.style} filename="FACTURE.txt" exportFile={this.FACTURE} />
            </button> 
      </div>
{/*         // add update later in the others verion of the app .. 
            // chnage the col to s3 .. 
        <div className="col s3">         
            <form onSubmit={this.handleUpdateSubmit} >
              <button className="btn-large blue" type="submit" id="update"> UPDATE
                <i className="material-icons right">clear</i>
              </button>
            </form>
        </div> */}

        <div className="col s3">           
            <form onSubmit={this.handleDeleteSubmit} >
                {this.renderRedirect()}
              <button className="btn-large pink" onClick={this.setRedirect} type="submit" id="delete"> 
                DELETE 
               <i className="material-icons right">clear</i>
             </button>
           </form>
        </div>

        <br/><br/><br/><br/>
      </div>
      <br/><br/>
    </div>
  )}
}

export default ClientOptions ;
