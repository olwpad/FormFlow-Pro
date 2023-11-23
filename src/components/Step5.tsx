import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineDone } from "react-icons/md";
import { validation5 } from "../schemas/steps";
import { GiPositionMarker } from "react-icons/gi";

export const Step5: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    additionalInfo: "",
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (state.formData) {
      initialValues.additionalInfo = state.formData.additionalInfo || '';
    }
  }, [state]);
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
      <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
      <h2>Hello My friend</h2>
      <p className='card_parrafo'>Follow the steps</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation5}
          enableReinitialize={true}
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
        <h2>Steps</h2>
        {
            state.step<6 &&(
              <div>
                <p>1 Step:<MdOutlineDone/></p>
                <p>2 Step:<MdOutlineDone/></p>
                <p>3 Step:<MdOutlineDone/></p>
                <p>4 Step:<MdOutlineDone/></p>
                <p>{state.step} Step:<GiPositionMarker /></p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
