import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import LogoutPage from './pages/auth/LogoutPage';


function App() {

  return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
        <div className="bg-neutral-100  h-screen">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
  )
}

export default App
