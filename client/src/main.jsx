import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
