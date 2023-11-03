import React from 'react';
import '../Styles/Header.css';
import AnchorTextView from './AnchorTextView';

function Header() {
    return (
        <div className='header-container'>
            <header className='header'>
                <nav>
                    <div className='navbar'>
                        <div>
                            <a className="logo" href="/">
                                <img
                                    src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
                                    alt="Elewa Group Logo"
                                />
                            </a>
                        </div>
                            <AnchorTextView />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;