import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step5: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    additionalInfo: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch({ type: 'UPDATE_DATA', payload: values });
    dispatch({ type: 'NEXT_STEP' });
    navigate("/summary");
  };
  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step4');
  };
  return (
    <main>
      <ProgressBar animated now={80} />
      <h3>Step 5: Additional Information</h3>
      <div className='container'>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="additionalInfo">Additional Information:</label>
              <Field
                as="textarea"
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Enter additional information..."
              />
              <ErrorMessage
                name="username"
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
            state.step<6 &&(
              <div>
                <p>1paso:diligenciado</p>
                <p>2paso:diligenciado</p>
                <p>3paso:diligenciado</p>
                <p>4paso:bloqueado</p>
                <p>{state.step}paso:Actual</p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
