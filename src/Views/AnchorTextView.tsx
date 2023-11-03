import React from 'react';
import { useAnchorTexts } from '../ViewModels/AnchorTextViewModel';
import '../Styles/AnchorTextView.css';

function AnchorTextView() {
    const anchorTexts = useAnchorTexts();
    console.log (anchorTexts);

    return (
        <div className='nav-items'>
            {anchorTexts.map(anchorText => (
                <a key={anchorText.id} href={anchorText.url}>{anchorText.text}</a>
            ))}
        </div>
    );
}

export default AnchorTextView