import React from 'react';
import { useHeaderData } from "../ViewModels/useHeaderData";

function Logo() {
    const logoUrl = useHeaderData();
    return (
        <div>
            <a className="logo" href="/">
                <img
                    src={logoUrl?.url}
                    alt="Elewa Group Logo"
                />
            </a>
        </div>
    )
}
export default Logo;

