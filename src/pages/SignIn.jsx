import  { useState } from 'react';
import AuthInput from '../components/AuthInput'; 
import AuthButton from '../components/AuthButton'; 
import {Link} from "react-router-dom";
import useAuth from '../hooks/auth-hook';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const {login} = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
    
      const res = await fetch(`${import.meta.env.VITE_BE_HOST}/api/user/log-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:form.email, password:form.password }),
      });
      
      setLoading(false);

      if (res.ok) {
        const { message, token, user } = await res.json();
        alert(message);
        const {id} = user;
        login(token,null,id);
      } else {
        const errorData = await res.json();
        alert(errorData.message || 'Failed to sign up');
      }
    }catch(err){
      console.error(err);
      setLoading(false);
    }
    
  };



  return (
    <div className="min-h-screen bg-dark_bg_1 flex items-center justify-center py-[15px] overflow-hidden">
      <div className="w-full max-w-md p-8 bg-dark_bg_2 rounded-xl">
        <div className="text-center text-dark_text_1">
          <h2 className="mt-2 text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2 text-md">Sign In</p>
        </div>
        <form onSubmit={handleSubmit}>
          <AuthInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <AuthInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <AuthButton label="Sign In" type="submit" loading={loading} />
        </form>
        <p className="text-center text-dark_text_1">
          You do not have an account?{' '}
          <Link to="/sign-up" className="text-blue-500 hover:underline"> 
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
