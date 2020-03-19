import React from 'react';



const Trip = ({ data: { name, prix, id, path, description }}) => {

  const myStyle = {
    height : '450px'
  }

  return (
    <div className='col s12 m6'>
      <div className='card meduim' style={myStyle}>
        <div className='card-image'>
          <img src={path} alt='' />
          <span className='card-title'>{name} : {prix} dt</span>
          <a href={`/booking?id=${id}`} className='btn-floating halfway-fab waves-effect waves-light red'><i className='material-icons'>weekend</i></a>
        </div>
        <div className='card-content'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}


export default Trip; 