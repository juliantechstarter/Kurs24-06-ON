import React, { useState } from 'react';
import CustomTextField from './CustomTextField';
import Content from './content'; 

function Contont() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Contont Page</h1>

      {}
      <CustomTextField
        label="Name:"
        placeholder="Gib deinen Namen ein"
        value={name}
        onChange={handleNameChange}
      />
      <p>Dein Name: {name}</p>

      {}
      <Content />
    </div>
  );
}

export default Contont;

