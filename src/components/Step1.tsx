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
      <ProgressBar animated now={20} />
      <h3>Welcome, Join us!</h3>
      <div className="card">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="firstName">Full name</label>
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
    </main>
  );
};

export default Step1;
