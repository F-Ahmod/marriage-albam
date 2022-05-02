
import React from 'react';
import {
  BrowserRouter,
  Routes,
  
} from "react-router-dom";
// import Angajment from './Pages/Angajment/Angajment';
// import Home from './Pages/Home/Home';
import Nagigation from './Pages/Home/Nagigation/Nagigation';
// import Wedding from './Pages/Wedding/Wedding';


function App() {

  return (

    <BrowserRouter>
    <Nagigation />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        
        <Route path='/a' element={<Angajment />} />
        
        <Route path='/w' element={<Wedding />} /> */}
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

