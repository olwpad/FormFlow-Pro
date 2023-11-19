import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step4: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch({ type: 'UPDATE_DATA', payload: values });
    dispatch({ type: 'NEXT_STEP' });
    navigate("/step5");
  };

  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step3');
  };
  return (
    <main>
      <ProgressBar animated now={80} />
      <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" required />
              <ErrorMessage
                name="username"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" required />
              <ErrorMessage
                name="password"
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
            state.step<5 &&(
              <div>
                <p>1paso:diligenciado</p>
                <p>2paso:diligenciado</p>
                <p>3paso:diligenciado</p>
                <p>{state.step}paso:Actual</p>
                <p>5paso:bloqueado</p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
