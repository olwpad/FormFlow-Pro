import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context/UserContext";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { validation4 } from "../schemas/steps";
import { MdBlock } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step4: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (state.formData) {
      initialValues.username = state.formData.username || '';
      initialValues.password = state.formData.password || '';
    }
  }, [state]);
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
      <h2>Hello My friend</h2>
      <p className='card_parrafo'>Follow the steps</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation4}
          enableReinitialize={true}
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
        <h2>Steps</h2>
        {
            state.step<5 &&(
              <div>
                <p>1Step:<MdOutlineDone/></p>
                <p>2Step:<MdOutlineDone/></p>
                <p>3Step:<MdOutlineDone/></p>
                <p>{state.step}Step:<GiPositionMarker /></p>
                <p>5 Step:<MdBlock /></p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
