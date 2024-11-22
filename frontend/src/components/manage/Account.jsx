import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import { UserContext } from "../../context/UserContextProvider";
import { TbLockAccessOff } from "react-icons/tb";


const Account = () => {
    const { fetchUserById } = useContext(UserContext);
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    const [formData, setFormData] = useState({
        username: user?.username || '',
        email: user?.email || '',
        password: '',
        new_password: '',
        Address: user?.Address || '', // Adding fallback value for Address
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null); // To display success messages

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCancel = () => {
        setFormData({
            username: user?.username || '',
            email: user?.email || '',
            password: '',
            new_password: '',
            Address: user?.Address || ''
        });
        setError(null);
        setSuccess(null); // Reset success message
    };

    const handleSave = async () => {
        // Password match validation
        if (formData.password && formData.password !== formData.new_password) {
            setError("Passwords do not match");
            return;
        }

        try {
            // API call to update user profile
            const response = await axios.put(
                `http://localhost:8000/api/user/account`, // Replace with your actual API endpoint
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password ? formData.password : undefined, // Only update if password is entered
                    Address: formData.Address,
                },
                // {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem('token')}` // Send token for authentication
                //     }
                // }
            );

            if (response.status === 200) {
                // Assuming the API response contains updated user data
                const updatedUser = response.data.user;

                // Update the local storage with the new user data
                localStorage.setItem("user", JSON.stringify(updatedUser));
                fetchUserById();

                setError(null);
                setSuccess("Profile updated successfully!");

                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Profile updated successfully!',
                    confirmButtonText: 'OK'
                });

                console.log("User updated successfully", updatedUser);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            const errorMessage = error.response?.data?.message || 'Failed to update profile. Please try again.';
            setError(errorMessage);

            // Show error alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
                confirmButtonText: 'OK'
            });
        }
    };

    return (
            <div className="flex flex-col items-center justify-center w-full mx-2  pt-16">
                <div className=" w-[22rem] shadow-lg p-4 rounded-lg ">
                    <div className="font-bold text-orange-500 text-2xl py-2">Edit Your Profile</div>

                    <div className="flex flex-col gap-2">
                        User Name
                        <input
                            className="bg-gray-100 my-1 p-2 outline-none rounded"
                            type="text"
                            value={formData.username}
                            name="username"
                            onChange={handleChange}
                            autoFocus
                            required
                        />
                        Email
                        <div className="flex items-center justify-between bg-gray-400 text-gray-100 my-1 p-2 outline-none rounded">
                            <input
                                className="bg-gray-400"
                                type="email"
                                name="email"
                                value={formData.email}
                                disabled
                                onChange={handleChange}
                            />
                            <TbLockAccessOff size={20} />
                        </div>
                        Address
                        <input
                            className="bg-gray-100 my-1 p-2 outline-none rounded"
                            placeholder="Address"
                            name="Address"
                            value={formData.Address}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        Change Password
                        <input
                            className="bg-gray-100 my-1 p-2 outline-none rounded"
                            type="password"
                            name="password"
                            placeholder="New password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            className="bg-gray-100 my-1 p-2 outline-none rounded"
                            type="password"
                            name="new_password"
                            value={formData.new_password}
                            placeholder="Confirm new password"
                            onChange={handleChange}
                        />
                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-green-500">{success}</div>}
                        <div className="flex gap-2 mt-2">
                            <button onClick={handleCancel} className="hover:bg-gray-200 rounded p-2">
                                Reset
                            </button>
                            <button
                                className="bg-orange-500 rounded text-white p-2 m-1 hover:bg-orange-600"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Account;
