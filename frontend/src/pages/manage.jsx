import { useState } from 'react';
import Account from '../components/manage/account';
import Profile from '../components/manage/profile';
import Order from '../components/manage/order';
// import Return from '../components/manage/return';
// import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineManageAccounts } from 'react-icons/md';
import { FaRegUserCircle } from "react-icons/fa";
import { TbShoppingBag } from 'react-icons/tb';

const Manage = () => {
    const [component, setvalue] = useState(<Account/>);

    const handleClick1 = () => {
        setvalue(<Account />);
    }

    const handleClick2 = () => {
        setvalue(<Profile />);
    }

    const handleClick4 = () => {
        setvalue(<Order />);
    }

    // const handleClick5 = () => {
    //     setvalue(<Return />);
    // }


    return (
        <div className="flex w-full min-h-screen md:mx-10">
            <div className="flex flex-col items-start gap-8 md:gap-3 md:w-1/4 border-r-2 border-orange-600 px-4 md:px-10 pt-[12rem]">
                <div>
                    <MdOutlineManageAccounts onClick={handleClick1} size={40} className='md:hidden text-orange-500 cursor-pointer'/>
                    <button 
                        className="hidden md:inline-block md:px-10 hover:text-red-500 w-[15rem] py-2 rounded-md bg-gray-200 text-orange-500 font-semibold text-xl transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" 
                        onClick={handleClick1}
                    >
                        Manage Account
                    </button>
                </div>
                <div>
                    <FaRegUserCircle onClick={handleClick2} size={35} className='md:hidden text-orange-500 cursor-pointer'/>
                    <button 
                        className="hidden md:inline-block md:px-10 hover:text-red-500 w-[15rem] py-2 rounded-md bg-gray-200 text-orange-500 font-semibold text-xl transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" 
                        onClick={handleClick2}
                    >
                        My Profile
                    </button>
                </div>
                <div>
                    <TbShoppingBag onClick={handleClick4} size={35} className='md:hidden text-orange-500 cursor-pointer'/>
                    <button 
                        className="hidden md:inline-block md:px-10 hover:text-red-500 w-[15rem] py-2 rounded-md bg-gray-200 text-orange-500 font-semibold text-xl transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" 
                        onClick={handleClick4}
                    >
                        My Orders
                    </button>
                </div>
                {/* <div>
                    <GiReturnArrow onClick={handleClick5} size={35} className='md:hidden text-orange-500 cursor-pointer'/>
                    <button 
                        className="hidden md:inline-block md:px-10 hover:text-red-500 w-[15rem] py-2 rounded-md bg-gray-200 text-orange-500 font-semibold text-xl transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" 
                        onClick={handleClick5}
                    >
                        My Returns
                    </button>
                </div> */}
            </div>
            <div className='w-full'>
                {component}
            </div>
        </div>
    )
}

export default Manage;