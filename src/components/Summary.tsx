import React from 'react';
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { MdOutlineDone } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Summary: React.FC = () => {
  const {  state,dispatch} = useContext(UserContext);
  console.log(state);
 const navigate=useNavigate()
  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step5');
  };
  return (
 <main>
    <ProgressBar animated now={100} />
 <div className='container'>
      <div className='card'>
        <h3>Information</h3>
        <p><strong>Name:</strong> {state.formData.firstName}</p>
        <p><strong>LastName:</strong> {state.formData.lastName}</p>
        <p><strong>Username:</strong> {state.formData.username}</p>
        <p><strong>Email:</strong> {state.formData.email}</p>
        <p><strong>Phone:</strong> {state.formData.phone}</p>
        <p><strong>Adress:</strong> {state.formData.address}</p>
        <p><strong>City:</strong> {state.formData.city}</p>
        <p><strong>additionalInfo:</strong> {state.formData.additionalInfo}</p>

      </div>
      <div className='texto'>
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
               <button type="button" onClick={goBack}>
                back
               </button>
    </div>
    </div >
 </main>
  );
};

