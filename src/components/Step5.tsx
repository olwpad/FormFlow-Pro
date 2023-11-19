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
    </main>
  );
};
