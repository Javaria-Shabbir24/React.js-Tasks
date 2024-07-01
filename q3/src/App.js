
//q3
import React from 'react';

const Football = () => {
  const shoot = (message) => {
    alert(message);
  };
  return (
    
    <button onClick={() => shoot("Goal!")}>
      Shoot
    </button>
  );
};

export default Football;
