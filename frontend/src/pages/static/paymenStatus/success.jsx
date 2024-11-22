import { Link } from 'react-router-dom';

const Success = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                {/* <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" /> */}
                <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase! Your order has been successfully processed.
                </p>
                <Link to='/products'>
                    <button
                        className="w-full py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 transition rounded-lg"
                    >
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Success;
