import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Email from './pages/Email';
import LoginMain from './pages/LoginMain';
import Signin from './pages/Signin';
import Findpw from './pages/Findpw';
import MainP from './pages/MainP';
import Solve from './pages/Solve';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginMain />}></Route>
              <Route path="/email/*" element={<Email />}></Route>
              <Route path="/signin/*" element={<Signin />}></Route>
              <Route path="/findpw/*" element={<Findpw />}></Route>
              <Route path="/MainP/*" element={<MainP />}></Route>
              <Route path="/Solve/*" element={<Solve />}></Route>
          </Routes>
        </BrowserRouter>
		</div>
  );
}

export default App;