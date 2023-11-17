import {   Route, Routes} from 'react-router-dom';
import  {Step1,Step2,Step3,Step4,Step5, Summary} from "./components/index"
export const Home:React.FC = () => {
  return (
    <Routes>
    <Route path="/step1" element={<Step1/>}/>
        <Route path="/step2" element={<Step2/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4/>} />
        <Route path="/step5" element={<Step5/>} />
        <Route path="/summary" element={<Summary/>} />
        </Routes>
  )
}
