import React,{useState} from 'react';
import { useEffect } from 'react' ;
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click,setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);}}

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setDropdown(true);
            setButton(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    useEffect(() => {
        showButton();
    },[]);


    window.addEventListener('resize',showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL <i className="fab fa-typo3" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link> 
                 </li>
                 <li className='nav-item'
                    className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                        <i className='fas fa-caret-down' />
                    </Link> 
                    {dropdown && <Dropdown />}
                 </li>
                 <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link> 
                 </li>
                 <li className='nav-item'>
                    <Link
                    to='/contact-us'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                    Contact Us
                    </Link>
                </li>
                 <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign up
                    </Link> 
                 </li>            
                </ul>
                <button />

            </div>
        </nav>
    </>       
  );
}

 export default Navbar;
