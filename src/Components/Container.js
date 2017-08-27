import React from 'react';
import '../stylesheets/Container.css';

const Container = ({onClick, color}) => {
  let buttonStyle = { 
    color
  };

  return (
    <div >
      <button onClick={onClick} style={buttonStyle} >Click Me!</button>
    </div>
  );
};

export default Container;