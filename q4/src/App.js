//q4
import React, { useState } from 'react';

const Greeting = ({ name }) => {
  const [userName, setUserName] = useState(name);

  const handleChange = (event) => {
    setUserName(event.target.value);//getting the entered value
  };

  return (
    <div>
      <h2>Greeting</h2>
      <p>Hello, {userName}!</p>
      <input
        type="text"
        value={userName}
        onChange={handleChange}//called component handle change
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Greeting;
