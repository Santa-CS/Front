import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Email from './pages/Email';
import Main from './pages/Main';
import Signin from './pages/Signin';
import Findpw from './pages/Findpw';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/email/*" element={<Email />}></Route>
              <Route path="/signin/*" element={<Signin />}></Route>
              <Route path="/findpw/*" element={<Findpw />}></Route>
          </Routes>
        </BrowserRouter>
		</div>
  );
}

export default App;