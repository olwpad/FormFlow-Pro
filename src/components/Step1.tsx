import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Step1: React.FC = () => {
  const { uservalue, setuse } = useContext(UserContext);

  const handleClick = () => {
    setuse("¡Hola, nuevo valor!");
  };

  return (
    <div>
      <p>Valor actual: {uservalue}</p>
      <button onClick={handleClick}>Cambiar valor</button>
    </div>
  );
};

export default Step1;


