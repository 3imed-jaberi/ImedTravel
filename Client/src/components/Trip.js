import React from 'react' ;

const Trip = (props) => {
  const myStyle = {
    height : '450px'
   }
    return (
    <div className="col s12 m6">
      <div className="card meduim" style={myStyle}>
        <div className="card-image">
          <img src={props.data.path} alt=" " />
          <span className="card-title"> { props.data.name } : { props.data.prix } dt </span>
          <a href={ "/booking?id="+props.data.id} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">weekend</i></a>
        </div>
        <div className="card-content">
          <p>{ props.data.description }</p>
        </div>
      </div>
    </div>
    )
}

export default Trip ; 