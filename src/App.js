import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage' ;
import MyDissertation from './pages/MyDissertation';
import CV from './pages/MyCV';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/CV" element={<CV />}>
        <Route index element={<CV />} />
      </Route>
      <Route path="/Dissertation" element={<MyDissertation />}>
        <Route index element={<MyDissertation />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
