import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-black text-white flex justify-center'>
            <marquee direction="right">
                <span className='ml-24'>Limited time offer... Get 50% off right now!!</span>
                <Link to={'/products'} className='font-bold mr-24 '>CLICK HERE</Link>
            </marquee>
        </div>
    )
}
 export default Header;