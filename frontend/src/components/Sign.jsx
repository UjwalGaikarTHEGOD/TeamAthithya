import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const Sign = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        name,
        email,
        password,
        phone
      });

      alert("Signup successful");
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col justify-center items-center">
        <Nav />
        <div className="flex flex-row max-w-[80%] md:flex-row h-[calc(100vh-4rem)]">
          {/* Left Image Section */}
          <div className="md:w-1/2 relative hidden md:block">
            <img
              src="https://storage.googleapis.com/a1aa/image/6f5c70f7-96c4-45c0-3c04-123230040c4b.jpg"
              alt="Green fern leaves"
              className="w-full h-full object-cover"
            />
            <button
              aria-label="Go back to log in"
              className="absolute top-4 left-4 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded"
            >
              <a href="/login">Login</a>
            </button>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-black text-white px-6 py-12">
            <div className="w-full max-w-md">
              <h1 className="font-playfair text-4xl mb-2 font-semibold">Sign up</h1>
              <p className="text-xs mb-10 max-w-xs">
                Welcome! Create an account to get started.
              </p>

              <form className="space-y-6" onSubmit={handleSignup}>
                {["name", "email", "password", "phone"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-xs font-semibold tracking-widest mb-1 uppercase"
                    >
                      {field === "phone" ? "Phone No." : field}
                    </label>
                    <input
                      name={field}
                      type={field === "password" ? "password" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white text-xs font-semibold tracking-widest py-2 rounded-full mt-6"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
