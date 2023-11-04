import React from 'react';
import '../Styles/Header.css';
import AnchorTextView from './AnchorText';
import Logo from '../Utilities/Logo';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

function Header() {
    const ref = useIntersectionObserver();
    return (
        <div ref={ref} className='header-container'>
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