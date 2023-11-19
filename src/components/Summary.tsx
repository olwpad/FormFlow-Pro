import React from 'react';
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { MdOutlineDone } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Summary: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  return (
 <main>
    <ProgressBar animated now={100} />
 <div className='container'>
      <div className='card'>
        <h3>Informartion</h3>
        <p><strong>Nombre:</strong> {state.formData.firstName}</p>
        <p><strong>Apellido:</strong> {state.formData.lastName}</p>
        <p><strong>Nombre de usuario:</strong> {state.formData.username}</p>
        <p><strong>Correo electrónico:</strong> {state.formData.email}</p>

        <p><strong>Teléfono:</strong> {state.formData.phone}</p>
        <p><strong>Dirección:</strong> {state.formData.address}</p>
        <p><strong>Ciudad:</strong> {state.formData.city}</p>
        <p><strong>additionalInfo:</strong> {state.formData.additionalInfo}</p>

      </div>
      <div className='texto'>
      <Link to="/step1">
      <IoArrowBackCircleOutline  />
             </Link>
   
        <h2>Follow The Steps</h2>
        {
            state.step>4 &&(
              <div>
                <p>1 Step:<MdOutlineDone/></p>
                <p>2 Step:<MdOutlineDone/></p>
                <p>3 Step:<MdOutlineDone/></p>
                <p>4 Step:<MdOutlineDone/></p>
                <p>5 Step:<MdOutlineDone/></p>
            </div>
            )}
    </div>
    </div >
 </main>
     
  );
};

