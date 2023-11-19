import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Step1: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
  };

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
        <ProgressBar animated now={20} variant='#FF5A7F' />
       <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
        <h2>Hello My friend</h2>
        <p>Follow steps</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">Firstaname</label>
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
        <h2>Welcome</h2>
          {
            state.step<2 &&(
              <div>
                <p>{state.step}paso:Actual</p>
                <p>2paso:bloqueado</p>
                <p>3paso:bloqueado</p>
                <p>4paso:bloqueado</p>
                <p>5paso:bloqueado</p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};

export default Step1;
