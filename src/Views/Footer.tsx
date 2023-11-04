import React from 'react';
import { useFooterData } from '../ViewModels/useFooterData';
import '../Styles/Footer.css';
import Logo from '../Utilities/Logo';
import "../Styles/Animate.css"
import useIntersectionObserver from '../Utilities/useIntersectionObserver';

// This component is used to display the footer.
const Footer = () => {
    const footerData = useFooterData();

    const ref = useIntersectionObserver();
    // Makes sure footerData is defined before rendering
    if (!footerData) {
        return null;
    }

    return (
        <footer ref={ref} className='footer'>
            <div className='footer-text'>
                <div>
                    <h2>Headquarters</h2>
                    <p>{footerData.Headquarters.address}</p>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>T {footerData.Contact.phone}</li>
                        <li>E {footerData.Contact.email}</li>
                    </ul>
                </div>
                <div>
                    <h2>Navigation</h2>
                    <ul>
                        {footerData.Navigation.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}

                    </ul>
                </div>
                <div className='brands'>
                    <h2>Brands</h2>
                    <ul>
                        {footerData.Brands.map((brand: string, index: number) => (
                            <li key={index}>{brand}</li>
                        ))}
                    </ul>
                </div>
                <div className='privacy'>
                    <h2>Privacy</h2>
                    <ul>
                        {footerData.Privacy.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='logos'>
                <Logo />
                <div className='social-media-logos'>
                    {Object.entries(footerData.SocialMediaLogos).map(([key, value]) => (
                        <a key={key} href={`https://${key}.com`} target="_blank" rel="noopener noreferrer">
                            <img src={value} alt={`${key} logo`} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;