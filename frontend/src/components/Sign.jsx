import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

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

            // Assuming the backend returns a token or user info
            const data = response.data;

            alert("Signup successful");
            
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen w-screen bg-black flex items-center justify-center font-sans">
            <div className="w-full max-w-6xl h-[600px] flex flex-col md:flex-row shadow-lg">
                {/* Left Image Section */}
                <div className="md:w-1/2 relative">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/6f5c70f7-96c4-45c0-3c04-123230040c4b.jpg"
                        alt="Closeup image of green fern leaves"
                        className="w-full h-full object-cover"
                    />
                    <button
                        aria-label="Go back to log in"
                        className="absolute top-4 left-4 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2">
                        <a href="/login">Login</a>
                    </button>
                </div>

                {/* Right Form Section */}
                <div className="md:w-1/2 bg-black flex flex-col justify-center px-8 md:px-16 py-12 text-white relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full" />
                    <h1 className="font-playfair text-4xl mb-2 font-semibold">Sign up</h1>
                    <p className="text-xs mb-10 max-w-xs">
                        Welcome! Create an account to get started.
                    </p>

                    <form className="space-y-6 max-w-xs w-full" onSubmit={handleSignup}>


                        <div>
                            <label htmlFor="name" className="block text-xs font-semibold tracking-widest mb-1">
                                NAME
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold tracking-widest mb-1">
                                EMAIL
                            </label>
                            <input
                                name='email'
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold tracking-widest mb-1">
                                PASSWORD
                            </label>
                            <input
                                name='password'
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs font-semibold tracking-widest mb-1">
                                PHONE NO.
                            </label>
                            <input
                                name="phone"
                                type="text"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-green-700 text-white text-sm py-1 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white text-xs font-semibold tracking-widest py-2 rounded-full mt-6"
                        >
                            SIGN UP
                        </button>
                    </form>

                    <p className="text-center text-xs mt-8 mb-4 text-gray-400">OR</p>
                </div>
            </div>
        </div>
    );
};

export default Sign;
