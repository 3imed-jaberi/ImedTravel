import React, { Component } from 'react'

class Dashboard extends Component {

  componentDidMount(){
          console.log(this.props.data2);
          
  }

  state = {
     data : this.props.data2
  }



  render() {
    return (
      <div>
                <br/><br/><br/><br/>
              <table className="striped highlight centered responsive-table">
                <thead className="lighten-4" > 
                  <tr>        
                      <th>CIN</th>
                      <th>First Name </th>
                      <th>Last Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Nombre de Place</th>
                      <th>Date Dept</th>
                      <th>Date Fin</th>
                      <th>Payer</th>
                  </tr>
                </thead>          
                <tbody>
                    <tr key={this.state.data.id}>
                          <td>{this.state.data.cin1}</td>
                          <td>{this.state.data.firstName1}</td>
                          <td>{this.state.data.lastName1}</td> 
                          <td>{this.state.data.phone1}</td> 
                          <td>{this.state.data.address1}</td> 
                          <td>{this.state.data.nbP}</td> 
                          <td>{this.state.data.date_dept}</td> 
                          <td>{this.state.data.date_fin}</td>                          
                          <td>XXXX</td>                          
                    </tr>
                </tbody>
              </table>  
              <br/><br/>
      </div>
    )
  }
}

export default Dashboard
