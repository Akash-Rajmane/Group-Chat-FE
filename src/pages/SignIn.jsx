import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AuthInput from '../components/AuthInput'; 
import AuthButton from '../components/AuthButton'; 
import {Link} from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace this with your actual API call
    const success = await mockSignIn(form.email, form.password);
    
    setLoading(false);

    if (success) {
      navigate('/'); // Navigate to the home page
    } else {
      setError('Failed to sign in');
    }
  };

    // Mock sign-in function for demonstration purposes
    const mockSignIn = (email, password) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email === 'test@example.com' && password === 'password');
          }, 1000);
        });
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
        {error && <p className="text-center text-red-500 mb-[10px]">{error}</p>}
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
