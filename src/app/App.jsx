import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/HomePage';
import LogoutPage from './pages/auth/LogoutPage';
import TokenPage from './pages/TokenPage';
import BanPage from './pages/BanPage';
import BanDecisionPage from './pages/BanDecisionPage';


function App() {

  return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
        <div className="bg-neutral-100  h-screen">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>

            <Route path="/tokens" element={<TokenPage/>}/>
            <Route path="/users" element={<BanPage/>}/>
            <Route path="/users/:id" element={<BanDecisionPage/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
  )
}

export default App
