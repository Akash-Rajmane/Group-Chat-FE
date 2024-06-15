import { } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
//import './App.css'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import useAuth from './hooks/auth-hook';
import { AuthContext } from "./context/auth-context";

function App() {
  const { token, tokenExpiration, userId, login, logout } = useAuth();
  

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        {/* <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/password/reset-password/:id" element={<ResetPassword/>}/> */}
        <Route path="*" element={<Navigate to="/sign-in" replace/>} />
      </Routes>
    );
  }
 
  
  return (
    <AuthContext.Provider
    value={{
      token,
      tokenExpiration,
      userId,
      login,
      logout,
    }}
  >
      {routes}
    </AuthContext.Provider>
  );
}

export default App
