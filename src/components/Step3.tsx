import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step3: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const initialValues = {
    address: "",
    city: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch({ type: 'UPDATE_DATA', payload: values });
    dispatch({ type: 'NEXT_STEP' });
    navigate("/step4");
  };

  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step2');
  };
  return (
    <main>
      <ProgressBar animated now={60} />
      <h3>hola</h3>
      <div className='container'>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="address">Address:</label>
              <Field type="text" id="address" name="address" />
              <ErrorMessage
                name="address"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="city">City:</label>
              <Field type="text" id="city" name="city" />
              <ErrorMessage
                name="city"
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
            state.step<4 &&(
              <div>
                <p>1paso:diligenciado</p>
                <p>2paso:diligenciado</p>
                <p>{state.step}paso:Actual</p>
                <p>4paso:bloqueado</p>
                <p>5paso:bloqueado</p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
