import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {validation1} from "../schemas/steps.ts"
import { GiPositionMarker } from "react-icons/gi";
import { MdBlock } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

const Step1: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
  };

  useEffect(() => {
    if (state.formData) {
      initialValues.firstName = state.formData.firstName || '';
      initialValues.lastName = state.formData.lastName || '';
    }
  }, [state]);


  const onSubmit = (values: any) => {
    dispatch({ type: 'UPDATE_DATA', payload: values });
    dispatch({ type: 'NEXT_STEP' });
    navigate('/step2');
  };

  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/');
  };

  return (
    <main>
        <ProgressBar animated now={20}/>
       <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
        <h2>Hello My friend</h2>
        <p>Follow the steps</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}validationSchema={validation1}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">FirstName</label>
              <Field name="firstName" id="firstName" type="text" autoFocus />
              <ErrorMessage
                name="firstName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lastName">Last name</label>
              <Field name="lastName" id="lastName" type="text" />
              <ErrorMessage
                name="lastName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit">Next</button>
            <button type="button" onClick={goBack}>Prev</button>
          </Form>
        </Formik>
      </div>
      <div className='texto'>
        <h2>Steps</h2>
          {
            state.step<2 &&(
              <div>
                <p>{state.step} Step:<GiPositionMarker /></p>
                <p>2 Step:<MdBlock /></p>
                <p>3 Step:<MdBlock /></p>
                <p>4 Step:<MdBlock /></p>
                <p>5 Step:<MdBlock /></p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};

export default Step1;
