import React from 'react';
import { useAnchorTexts } from '../ViewModels/useAnchorTextData';
import '../Styles/AnchorTextView.css';

// This component is used to display the anchor text.
function AnchorTextView() {
    const anchorTexts = useAnchorTexts();
    console.log(anchorTexts);

    return (
        <div className='nav-items'>
            {anchorTexts.map(anchorText => (
                <a key={anchorText.id} href={anchorText.url}>{anchorText.text}</a>
            ))}
        </div>
    );
}

export default AnchorTextView