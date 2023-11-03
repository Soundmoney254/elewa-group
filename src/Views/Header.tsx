import React from 'react';
import '../Styles/Header.css';
import AnchorTextView from './AnchorTextView';
import { useHeaderData } from "../ViewModels/useHeaderData";

function Header() {
    const logoUrl = useHeaderData();

    return (
        <div className='header-container'>
            <header className='header'>
                <nav>
                    <div className='navbar'>
                        <div>
                            <a className="logo" href="/">
                                <img
                                    src={logoUrl?.url}
                                    alt="Elewa Group Logo"
                                />
                            </a>
                        </div>
                        <AnchorTextView />
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;