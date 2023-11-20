import { UserContext } from "./context/UserContext";
import { useContext ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { validation2 } from "../schemas/steps";
import { MdOutlineDone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { MdBlock } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Step2: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const initialValues = {
    email: "",
    phone: "",
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (state.formData) {
      initialValues.email = state.formData.email || '';
      initialValues.phone = state.formData.phone || '';
    }
  }, [state]);
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
      <h3>Welcome, Join us!</h3>
      <div className='container'>
      <div className="card">
      <h2>Hello My friend</h2>
        <p>Follow the steps</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation2}
          enableReinitialize={true}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field name="email" id="email" autoFocus />
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
      <div className='texto'>
        <h2>Steps</h2>
        {
            state.step<3 &&(
              <div>
                <p>1 Step:<MdOutlineDone/></p>
                <p>{state.step} Step:<GiPositionMarker /></p>
                <p>3 Step:<MdBlock /></p>
                <p>4 Step:<MdBlock /></p>
                <p>5 Step:<MdBlock /></p>
            </div>
            )}
      </div>
      </div>
    </main>
  );
};
