import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="min-h-screen bg-white px-32">
            <div className=" text-black text-center pt-48">
                <h1 className=" text-9xl">404</h1>
                <div className=" text-xl">Page not found.</div>
                <div className=" mt-8 text-lg">
                    <p>Oops! It seems like the page you&rsquo;re trying to access doesn&rsquo;t exist.</p>
                    <p>If you believe there&rsquo;s an issue, feel free to report it, and we&rsquo;ll look into it.</p>
                </div>
                <div className=" mt-8">
                    <Link to='/' className="mt-6 px-2 py-2 mx-4 border text-white border-orange-500 dark:bg-orange-700 rounded-lg">Return Home</Link>
                    <Link to='/contact' className="mt-6 px-2 py-2 border border-orange-500 rounded-lg cursor-pointer">Report problem</Link>
                </div>
            </div>
        </div>
    )
}

export default Error