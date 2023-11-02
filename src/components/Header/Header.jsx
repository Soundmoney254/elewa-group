import React from 'react'
import data from '../../data/data.json';
import './Header.css';


function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div>
                        <div>
                            <a href="/">
                                <img
                                    src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
                                    alt="Elewa Group Logo"
                                />
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a href="/"> {data.home} </a>
                            </li>
                            <li>
                                <a href="/about">{data.aboutUs}</a>
                            </li>
                            <li>
                                <a href="/social-impact" >{data.socialImpact}</a>
                            </li>
                            <li>
                                <a href="/invest">{data.invest}</a>
                            </li>
                            <li>
                                <a href="/venture-labs">{data.ventureLabs}</a>
                            </li>
                            <li>
                                <a href="/brands">{data.brands}</a>
                            </li>
                            <li>
                                <a href="/careers">{data.careers}</a>
                            </li>
                            <li>
                                <a href="/contact">{data.contact}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header