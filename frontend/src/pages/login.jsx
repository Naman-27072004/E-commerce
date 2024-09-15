import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContextProvider';

const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/user/login', formData, {
                withCredentials: true
            });
            if(response.status === 200){
                const { token, user } = response.data;
                login(user, token); // Save the token and user data to context
                setCookie('token', token, 2);// Save the token cookies
                setCookie('user', user, 2);// Save the user data to cookies
                console.log('Login successful!', response.data);
                navigate('/');
            }else{
                console.log("Login failed!")
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className="flex flex-col items-left justify-center -mt-32 ml-40">
                <span className="text-4xl font-bold">Log in to Tech Bazaar</span><br />
                <span>Enter your details below</span><br />
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        className="outline-none py-2 rounded-md pl-1"
                        type="email"
                        placeholder="Email or Phone Number"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoFocus
                        required
                    /><br />
                    <input
                        className="outline-none py-2 rounded-md pl-1"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /><br />
                    <div className="flex justify-between">
                        <button type="submit" className="bg-orange-500 rounded text-white p-1">
                            Log in
                        </button>
                        <Link className="text-orange-500" to="/forget">
                            Forget Password?
                        </Link><br />
                    </div>
                </form>
                <div className='mt-4'>Don&apos;t have an Account<span className='px-1 underline underline-offset-2 cursor-pointer font-thin'>Register Now</span></div>
            </div>
        </div>
    );
};

export default Login;
