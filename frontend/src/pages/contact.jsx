import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
const Contact = () => {
    return (
        <div className="flex items-left justify-center min-h-screen mt-40 ml-40 -mb-44">
            <div className="m-1 p-1  rounded">
                <div className="m-1 p-1 ">
                    <div className="flex justify-between">
                        <IoCallOutline className="bg-orange-500 text-white rounded-full p-1" size={40} />
                        <span className="font-bold text-orange-500">Call To Us</span><br />
                    </div>
                    <span>We are available 24/7.</span><br />
                    <span>Phone: +91 9999999999</span><br />
                </div>
                <div className="m-1 p-1">
                    <div className="flex justify-between">
                        <CiMail className="bg-orange-500 text-white rounded-full p-1" size={40} />
                        <span className="font-bold text-orange-500">Write To Us</span><br />
                    </div>

                    <span>Fill out our form and we will contact you within 24 hours.</span><br />
                    <span>Email: techbazaar2025@gmail.com</span><br />
                </div>
            </div>
            <div className="flex flex-col m-1 p-1 rounded">
                <input className="bg-gray-100 m-1 p-1 outline-none rounded" type="text" placeholder="Your Name *" autoFocus required />
                <input className="bg-gray-100 m-1 p-1 outline-none rounded" type="email" placeholder="Your Email *" required />
                <input className="bg-gray-100 m-1 p-1 outline-none rounded" type="tel" placeholder="Your Phone *" required />
                <input className="bg-gray-100 m-1 p-1 outline-none rounded" type="text" placeholder="Your message" />
                <button className="bg-orange-500 rounded text-white p-1 m-1">Send Message</button>
            </div>
        </div>
    )
}

export default Contact