import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Statepro';
import { auth } from './firebase';

function Header() {
    const [{ basket,user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return ( 
    <div className='header'>
        <Link to='/'>
        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        
         <div className='header_search'>
            <input className='header_searchinput' type="text" />
            <SearchIcon className='header_Iconsearch' />
         </div>
         <div className='header_nav'>
            <Link to = {!user && "/login"}>
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionlineone'>Hello { !user? 'guest':user?.email}</span>
                <span className='header_optionlinetwo'>{!user? "sign in" :"sign out"}</span>
            </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionlineone'>Returns</span>
                <span className='header_optionlinetwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionlineone'>Your</span>
                <span className='header_optionlinetwo'>Prime</span>
            </div>
            <Link to='/cheakout'>
            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionlinetwo header_basketcount'>{basket.length}</span>
            </div>
            </Link>
         </div>
          </div>
    )
}

export default Header