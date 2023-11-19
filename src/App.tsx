

import { Home } from "./Home";
import {   Route, Routes} from 'react-router-dom';
import { UserProvider } from './components/context/userProvider'
function App() {

  return (
    <UserProvider>
       <Routes>
       <Route path="*" element={<Home/>} />
      </Routes>
    </UserProvider>
    
  )
}

export default App
