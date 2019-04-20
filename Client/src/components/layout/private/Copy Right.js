import React from "react";

const iconSize = {
   fontSize : '20px',
   color: '#d9e3f0'
};


const CopyRight = () => {
  return (
    <div className="footer-copyright teal darken-4">
      <div className="container center-align">
          &copy; 2019 Copyright 3imed-jaberi 
          <a href="https://www.instagram.com/3imed_jaberi/"> <i className="fab fa-instagram" style={iconSize}></i> </a>
          <a href="https://github.com/3imed-jaberi"> <i className="fab fa-github-square" style={iconSize}></i> </a>
      </div>
    </div>
  )
}

export default CopyRight ;