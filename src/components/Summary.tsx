import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Summary:React.FC = () => {
  const{state,dispatch}=useContext(UserContext);
  console.log(state)
  return (
    <div>Summary
<div>
  <p><strong>Nombre:</strong> {state.formData.firstName}</p>

  <p><strong>Apellido:</strong> {state.formData.lastName}</p>

  <p><strong>Nombre de usuario:</strong> {state.formData.username}</p>

  <p><strong>Correo electrónico:</strong> {state.formData.email}</p>

  <p><strong>Contraseña:</strong></p>

  <p><strong>Teléfono:</strong> {state.formData.phone}</p>

  <p><strong>Dirección:</strong> {state.formData.address}</p>

  <p><strong>Ciudad:</strong> {state.formData.city}</p>
</div>
  <ProgressBar animated now={100} />;
    </div>
  )
}
