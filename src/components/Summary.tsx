import React, { useContext } from 'react';
import { UserContext } from "./context/UserContext";
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = styled.main`
h1 {
  color: #5284F3;
  font-size: 24px;
  margin-bottom: 20px;
  text-align:center;
  margin-top:5px;
}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  padding: 30px 50px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  background-color: #5284F3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: white;
    margin-bottom: 15px;
  }

  ul{
    padding: 0;
    list-style: none;
    margin: 0;

  }

  li {
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 40px;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color:black
  }
  @media (max-width: 1200px)
    padding: 8px 15px;
  }
`;


export const Summary: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const goBack = () => {
    dispatch({ type: 'PREV_STEP' });
    navigate('/step5');
  };

  return (
    <Main>
      <ProgressBar animated now={100} />
      <h1>All the best!</h1>
      <Container>
        <Card>
          <h3>Information</h3>
          <ul>
            <li><strong>Name:</strong> {state.formData.firstName}</li>
            <li><strong>LastName:</strong> {state.formData.lastName}</li>
            <li><strong>Username:</strong> {state.formData.username}</li>
            <li><strong>Email:</strong> {state.formData.email}</li>
            <li><strong>Phone:</strong> {state.formData.phone}</li>
            <li><strong>Address:</strong> {state.formData.address}</li>
            <li><strong>City:</strong> {state.formData.city}</li>
            <li><strong>Additional Info:</strong> {state.formData.additionalInfo}</li>
          </ul>
        </Card>

        <Texto>
          <h2>Steps completed</h2>
          {state.step > 4 && (
            <div>
              <p>1 Step: <MdOutlineDone /></p>
              <p>2 Step: <MdOutlineDone /></p>
              <p>3 Step: <MdOutlineDone /></p>
              <p>4 Step: <MdOutlineDone /></p>
              <p>5 Step: <MdOutlineDone /></p>
            </div>
          )}

          <Button type="button" onClick={goBack}>
            Back
          </Button>
        </Texto>
      </Container>
    </Main>
  );
};
