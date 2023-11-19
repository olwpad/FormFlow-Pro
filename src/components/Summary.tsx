import React from 'react';
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Summary: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  return (
 <main>
    <ProgressBar animated now={100} />
 <div className='container'>
      <div className='card'>
        <p><strong>Nombre:</strong> {state.formData.firstName}</p>
        <p><strong>Apellido:</strong> {state.formData.lastName}</p>
        <p><strong>Nombre de usuario:</strong> {state.formData.username}</p>
        <p><strong>Correo electrónico:</strong> {state.formData.email}</p>
        <p><strong>Contraseña:</strong></p>
        <p><strong>Teléfono:</strong> {state.formData.phone}</p>
        <p><strong>Dirección:</strong> {state.formData.address}</p>
        <p><strong>Ciudad:</strong> {state.formData.city}</p>
      </div>
      <div className='texto'>
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Commodi quam reiciendis distinctio, totam impedit accusantium laudantium numquam vitae, 
           labore eos ratione harum sunt unde reprehenderit ea at mollitia aliquam quasi?</p>
    </div>
    </div >
 </main>
     
  );
};

