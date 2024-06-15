import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AuthInput from '../components/AuthInput'; 
import AuthButton from '../components/AuthButton'; 
import {Link} from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
    
      const res = await fetch(`${import.meta.env.VITE_BE_HOST}/api/user/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: form.name, email:form.email, phone:form.phone, password:form.password }),
      });
      
      setLoading(false);

      if (res.ok) {
        const data = await res.json();
        alert(data.message);
        navigate('/sign-in');
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
          <h2 className="mt-2 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-md">Sign up</p>
        </div>
        <form onSubmit={handleSubmit}>
            <AuthInput
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <AuthInput
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <AuthInput
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <AuthInput
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <AuthButton label="Sign Up" type="submit" loading={loading} />
        </form>
        <p className=" text-center text-dark_text_1">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
