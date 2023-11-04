import React from 'react';
import '../Styles/Header.css';
import AnchorTextView from './AnchorText';
import Logo from '../Utilities/Logo';

function Header() {
    return (
        <div className='header-container'>
            <header className='header'>
                <nav>
                    <div className='navbar'>
                        <Logo />
                        <AnchorTextView />
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Header;