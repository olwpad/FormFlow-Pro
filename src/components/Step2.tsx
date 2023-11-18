import { UserContext } from "./context/UserContext";
import {useContext} from "react"
export const Step2 :React.FC= () => {
  const{state,dispatch}=useContext(UserContext);

  console.log(state)
  return (
    <div>Step2</div>
  )
}
