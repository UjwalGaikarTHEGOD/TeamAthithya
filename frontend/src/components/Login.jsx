import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./Nav";


const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.warn("⚠️ Please fill all fields!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      // Assuming the backend returns a token or user info
      const data = response.data;

      toast.success("🎉 Login Successful!");
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      toast.error(`Something went wrong!\n${err.response.data.msg}`)
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Nav/>
      <div className="min-h-screen bg-black flex items-center justify-center font-sans w-screen flex justify-center">
        <div className="w-screen max-w-6xl flex flex-col md:flex-row shadow-lg overflow-hidden rounded-lg">
          {/* Left Image Section */}
          <div className="md:w-1/2 relative hidden md:block">
            <img
              src="https://storage.googleapis.com/a1aa/image/6f5c70f7-96c4-45c0-3c04-123230040c4b.jpg"
              alt="Closeup of green fern leaves"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-4 left-4 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 flex items-center space-x-2">
              <a href="/signup">Signup</a>
            </button>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 w-full bg-black flex flex-col justify-center px-8 md:px-16 py-12 text-white relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full"></div>
            <h1 className="font-playfair text-4xl mb-2 font-semibold">Log in</h1>
            <p className="text-xs mb-10 max-w-xs">
              Welcome back! Log in to continue participating in the forum.
            </p>

            <form onSubmit={handleLogin} className="space-y-6 max-w-xs w-full">
              <div>
                <label

                  htmlFor="email"
                  className="block text-xs font-semibold tracking-widest mb-1"
                >
                  EMAIL
                </label>
                <input
                  name="email"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold tracking-widest mb-1"
                >
                  PASSWORD
                </label>
                <input
                  name="password"
                  value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white text-xs font-semibold tracking-widest py-2 rounded-full mt-6"
              >
                LOG IN
              </button>
            </form>

            <p className="text-center text-xs mt-8 mb-4 text-gray-400">....</p>
            <div className="flex justify-center space-x-6 text-green-700 text-lg">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;