// import { useContext } from "react";
// import { UserContext } from "../context/UserContextProvider";

const Account = () => {
    // const { user } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem("user"))
    console.log("user",user)
    return (
        <div className="flex items-left justify-center min-h-screen mt-40 -mb-44">
            <div>
                <div className="font-bold text-xl p-1">Manage My Account</div>
                <div className='ml-6 p-1 flex flex-col gap-1'>
                    <div>My Profile</div>
                    <div>Address Book</div>
                    <div>My Payment Options</div>
                </div>
                <div className="font-bold text-xl p-1">My Orders</div>
                <div className='ml-6 p-1 flex flex-col gap-1'>
                    <div>My Returns</div>
                    <div>My Cancellations</div>
                </div>
                <div className="font-bold text-xl p-1">My WishList</div>
            </div>
            <div className="m-1 pl-10 rounded w-1/4">
                <div className="font-bold text-orange-500 text-2xl">Edit Your Profile</div>
                <div className="flex flex-col w-full">
                    Name
                    <input className="bg-gray-100 my-1 p-1 outline-none rounded" type="text" autoFocus required />
                </div>
                <div className="flex flex-col w-full">
                    Email
                    <input className="bg-gray-100 my-1 p-1 outline-none rounded" type="email" required />
                </div>
                <div className="flex flex-col w-full">
                    Address
                    <input className="bg-gray-100 my-1 p-1 outline-none rounded" type="text" />
                </div>
                <div className="flex flex-col w-full">
                    Change Password
                    <input className="bg-gray-100 my-1 p-1 outline-none rounded" type="password" placeholder="New password" /><br />
                    <input className="bg-gray-100 my-1 p-1 outline-none rounded" type="password" placeholder="Confirm password" /><br />
                    <div className="flex gap-2 justify-end">
                        <button>Cancel</button>
                        <button className="bg-orange-500 rounded text-white p-1 m-1">Save changes</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Account