import { useContext, useEffect, useState } from "react";
import images from "/assets/images.jpg"
import { UserContext } from "../../context/UserContextProvider";
import { TbLockAccessOff } from "react-icons/tb";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";
const Profile = () => {
    const { fetchUserById } = useContext( UserContext );
    const storedUser = localStorage.getItem( "user" );
    const user = storedUser ? JSON.parse( storedUser ) : null;
    console.log(user)
    const [ profileData, setProfileData ] = useState( {
        username: user?.username || "",
        email: user?.email || "",
        mobile: user?.phone || "",
        state: user?.address?.state || "",
        city: user?.address?.city || "",
        address: user?.address?.streetAddress || ""
    } );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );
    useEffect( () => {
        fetchUserById();
    }, [] );

    const handleChange = ( e ) => {
        const { id, value } = e.target;
        setProfileData( ( prevData ) => ( {
            ...prevData,
            [ id ]: value
        } ) );
    };

    const handleSubmit = async () => {
        try {
            setLoading( true );
            const response = await fetch( "http://localhost:8000/api/user/account", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( profileData )
            } );
            if ( !response.ok ) throw new Error( "Failed to update profile" );
            // const updatedData = await response.json();
            // console.log(updatedData)
            // setLoading( false );
            fetchUserById();
            if(response.ok){
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Profile updated successfully!',
                    confirmButtonText: 'OK'
                });
            }
        } catch ( err ) {
            setError( err.message );
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message,
                confirmButtonText: 'OK'
            });
        }
    };
    const statesOfIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
        "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
        "Delhi", "Puducherry", "Ladakh", "Jammu & Kashmir"
    ];
    return (
        <div className="mx-auto w-full pt-6 bg-white min-h-screen shadow-lg rounded-lg ">
            <div className="p-6">
                {/* <h2 className="text-3xl font-bold mb-10 text-orange-600">Profile</h2> */}

                {/* Profile Picture and Info Section */ }
                <div className="md:flex items-center md:space-x-8 mb-6">
                    {/* Profile Picture */ }
                    <div className="">
                        <img className="rounded-full w-56 h-56" src={ images } alt="Avatar" />
                        
                    </div>
                    {/* Personal Information */ }
                    <div className="w-1/2 md:-mt-20 ">
                        <h3 className="text-3xl font-semibold text-orange-600">
                            Personal Information
                        </h3>
                        <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-lg font-medium text-gray-700"
                                >
                                    { " " }
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={ profileData.username }
                                    onChange={ handleChange }
                                    placeholder="Admin"
                                    className="mt-1 p-2 block w-full  outline-none rounded-md bg-[#F3F4F6]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className=" text-lg font-medium text-gray-700"
                                >

                                    Email
                                </label>

                                <div className="flex items-center justify-between bg-gray-100 my-1 p-2 outline-none rounded">
                                    <input
                                        className=""
                                        type="email"
                                        name="email"
                                        value={ profileData.email }
                                        disabled
                                        onChange={ handleChange }
                                    />
                                    <TbLockAccessOff size={ 20 } />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-1/2">
                            <label
                                htmlFor="mobile"
                                className="block text-lg font-medium text-gray-700"
                            >
                                { " " }
                                Mobile Number{ " " }
                            </label>
                            <div className="">
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={ profileData.mobile }
                                    onChange={ handleChange }
                                    placeholder="+91 9876543210"
                                    className=" mt-1 p-2  block w-full outline-none rounded-md bg-[#F3F4F6]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 w-1/2">
                    <h3 className="text-2xl font-semibold text-orange-600">Location</h3>
                    <div className="flex flex-col gap-4 mt-4">
                        <div>
                            <select
                                id="state"
                                value={ profileData.state }
                                onChange={ handleChange }
                                className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm outline-none"
                            >
                                <option value="" disabled>Select your state</option>
                                { statesOfIndia.map( ( state, index ) => (
                                    <option key={ index } value={ state }>{ state }</option>
                                ) ) }
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="city"
                                className="block text-lg font-medium text-gray-700"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                value={ profileData.city }
                                onChange={ handleChange }
                                placeholder="New Delhi"
                                className=" outline-none mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                            <div>
                                <textarea
                                    type="text"
                                    id="address"
                                    value={ profileData.address }
                                    onChange={ handleChange }
                                    placeholder="Address"
                                    className=" outline-none mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-md"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                { error && (
                    <div className="flex items-center gap-1 italic font-serif mt-4 md:pl-64 text-red-600 font-semibold">
                        <MdError size={20}/>
                        Error: {error}
                    </div>
                )}

                {/* Save Changes Button */ }
                <div className="mt-4 md:pl-64 ">
                    {loading ? (
                        <div className="w-[160px] flex items-center justify-center text-white py-2 px-4 rounded-md border border-orange-500">
                            <div className="button-loader "></div>
                        </div>
                    ): (
                        <button onClick={handleSubmit} className="w-40 bg-orange-500 text-white py-3 px-4 rounded-md cursor-pointer hover:bg-orange-600">
                            Save Changes
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile