import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step2: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    email: "",
    phone: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch({ type: 'UPDATE_DATA', payload: values });
    dispatch({ type: 'NEXT_STEP' });
    navigate("/step3");
    console.log(state);
  };

  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step1');
  };
  return (
    <main>
      <ProgressBar animated now={40} />
      <h3>hola</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" type="email" autoFocus />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" id="phone" type="tel" />
              <ErrorMessage
                name="phone"
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
