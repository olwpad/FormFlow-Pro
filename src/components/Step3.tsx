import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { validation3 } from "../schemas/steps";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineDone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { MdBlock } from "react-icons/md";

export const Step3: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const initialValues = {
    address: "",
    city: "",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (state.formData) {
      initialValues.address = state.formData.address || '';
      initialValues.city = state.formData.city || '';
    }
  }, [state]);

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
      <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
      <h2>Hello My friend</h2>
      <p className='card_parrafo'>Follow the steps</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation3}
          enableReinitialize={true}
          
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
        <h2>Steps</h2>
        {
            state.step<4 &&(
              <div>
                <p>1 Step:<MdOutlineDone/></p>
                <p>2 Step:<MdOutlineDone/></p>
                <p>{state.step} Step:<GiPositionMarker /></p>
                <p>4 Step:<MdBlock /></p>
                <p>5 Step:<MdBlock /></p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
