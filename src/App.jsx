import {  } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
//import './App.css'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  //const { token, login, logout, userId } = useAuth();
  //const [isPremiumUser, setIsPremiumUser] = useState(false);
  const token = null;

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
    <div>
      {routes}
    </div>
  );
}

export default App
