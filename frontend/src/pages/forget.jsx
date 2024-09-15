const Forget = () => {
    return (
        <div className="flex flex-col items-left justify-center min-h-screen -mt-32 ml-40">
            <span className="text-4xl font-bold">Enter your details below</span><br/>
            <input className="outline-none" type="email" placeholder="Email or Phone Number" autoFocus required /><br/>
            <input className="outline-none" type="password" placeholder="New password" /><br/>
            <input className="outline-none" type="password" placeholder="Confirm password" /><br/>
            <span><button className="bg-orange-500 rounded text-white p-1">Save Changes</button></span>
        </div>
    )
}

export default Forget