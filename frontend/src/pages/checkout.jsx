const Checkout = () => {
    return (
        <div className="flex justify-evenly   items-left  min-h-screen mt-40 ml-40 -mb-44">
            <div>
                <span className="font-bold text-3xl">Billing Details</span><br />
                <span className="text-gray-400">First Name</span><span className="text-red-400">*</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" required /><br />
                <span className="text-gray-400">Street Address</span><span className="text-red-400">*</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" required /><br />
                <span className="text-gray-400">Apartment,floor,etc.{ "(" }optional{ ")" }</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" /><br />
                <span className="text-gray-400">Town/City</span><span className="text-red-400">*</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" required /><br />
                <span className="text-gray-400">Phone Number</span><span className="text-red-400">*</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" required /><br />
                <span className="text-gray-400">Email Address</span><span className="text-red-400">*</span><br />
                <input className="bg-gray-100 outline-none rounded" type="text" required /><br />
                <input className="accent-orange-500 " type="checkbox" />
                <span> Save this information for faster check-out next time</span>
            </div>
            <div>
                <span>Subtotal:</span><br />
                <span>Shipping:</span><br />
                <span>Total:</span><br />
                <input className="accent-black" type="radio" value="bank" name="bank" id="bank" />
                <label htmlFor="bank"> Bank</label><br />
                <input className="accent-black" type="radio" value="cash" name="cash" id="cash" defaultChecked />
                <label htmlFor="cash"> Cash on delivery</label><br />
                <input className="outline-none border m-1 p-1 rounded" type="text" placeholder="Coupon Code" />
                <button className="bg-orange-500 rounded text-white p-1">Apply Coupon</button><br />
                <button className="bg-orange-500 rounded text-white p-1">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Checkout