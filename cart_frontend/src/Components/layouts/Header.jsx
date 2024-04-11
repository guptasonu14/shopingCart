import './Header.css';
import { Link } from 'react-router-dom';
import { PiPhoneFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { IoLogInOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';
import { logout } from '../../redux/slices/authSlice';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {

    const isLogged = useSelector(state => state.auth.isLogged);
    const totalproduct = useSelector(state => state.productdata.items);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }


    return (
        <header>
            <div className="brand">
                <Link to="/"><span className='brand_name'>Sonu's Cart</span></Link>
            </div>
            <div className="right_section">
                {isLogged &&
                    <Link to={'/cart'} className='right_item' style={{ position: "relative" }} >
                        <span className='cart_style'>{totalproduct.length}</span>
                        <FaCartShopping className='right_icon' style={{ color: "#282929" }} />
                        <span>Cart</span>
                    </Link>}
                <Link to={'/contact'} className='right_item'>
                    <PiPhoneFill className='right_icon' />
                    <span>Contact</span>
                </Link>
                {!isLogged ?
                    <Link to={'/login'} className='right_item'>
                        <IoLogInOutline className='right_icon' />
                        <span>{isLogged ? 'Logout' : 'Login'}</span>
                    </Link>
                    :
                    <div className='right_item' onClick={handleLogout}>
                        <IoLogOutOutline className='right_icon' />
                        <span>Logout</span>
                    </div>
                }

            </div>
        </header>
    )
}

export default Header;