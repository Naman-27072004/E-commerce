import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/user/signup', formData,{
                withCredentials: true
            });
            console.log('Signup successful!', response.data);
            navigate('/login');

        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col items-left justify-center max-w-[40rem] min-w-fit -mt-40 ml-40 shadow-md shadow-orange-400 px-4 py-10">
                <span className="text-4xl font-bold">Create an account</span><br />
                <span>Enter your details below</span><br />
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        className="outline-none"
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoFocus
                        required
                    /><br />
                    <input
                        className="outline-none"
                        type="email"
                        placeholder="Email or Phone Number"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /><br />
                    <input
                        className="outline-none"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /><br />
                    <button type="submit" className="bg-orange-500 rounded text-white p-1">
                        Create Account
                    </button><br />
                </form>
                <span>Already have an account? <a href="/login">Log in</a></span>
            </div>
        </div>
    );
};

export default Signup;
