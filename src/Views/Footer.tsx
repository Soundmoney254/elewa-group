import React from 'react';
import { useFooterData } from '../ViewModels/useFooterData';
import '../Styles/Footer.css';

const Footer = () => {
    const footerData = useFooterData();

    // Make sure footerData is defined before rendering
    if (!footerData) {
        return null;
    }

    return (
        <footer className='footer'>
            <div>
                <h2>Headquarters</h2>
                <p>{footerData.Headquarters.address}</p>
            </div>
            <div>
                <h2>Contact</h2>
                <p>T {footerData.Contact.phone}</p>
                <p>E {footerData.Contact.email}</p>
            </div>
            <div>
                <h2>Navigation</h2>
                <ul>
                    {footerData.Navigation.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}

                </ul>
            </div>
            <div>
                <h2>Brands</h2>
                <ul>
                    {footerData.Brands.map((brand: string, index: number) => (
                        <li key={index}>{brand}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Privacy</h2>
                <ul>
                    {footerData.Privacy.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;