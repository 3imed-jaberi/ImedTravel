import React from 'react';
import { ChatBotLogo as MyPhoto } from '../constant';



const AboutCreator = () => {

  let myStyle = {
    fontFamily: "'Times New Roman', Times, serif"
  }

  return (          
    <div className='container'>  
      <br/><br/><br/><br/><br/>
      <div className='container'>
        <div className='col s12 m8 offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s2'>
                <img src={MyPhoto} alt='' className='circle responsive-img' /> 
              </div>
              <div className='col s10'>
                <span className='black-text'>
                  <h5 style={myStyle}> 
                    &nbsp; My name is <b className='teal-text'>IMED JABERI</b> , i'm a junior full stack developer .. 
                    I'm would to growth my carrer .. I'm interessted to all new thecnology , Computer Science and Information Technology .. 
                    I'm in Love with JAVASCRIPT ecosystem .. Maybe i can surprise you with some thinks .. 
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  )
}


export default AboutCreator; 