import { useEffect, useState } from 'react';
import { AnchorText } from '../Models/Anchor';
import data from '../data/data.json';

/**
 * Custom hook that returns the anchor text data from the data.json file.
 * @returns An array of anchor text objects.
 */

export const useAnchorTexts = () => {
    const [anchorTexts, setAnchorTexts] = useState<AnchorText[]>([]);

    useEffect(() => {
        setAnchorTexts(data.anchortext as AnchorText[]);
    }, []);

    return anchorTexts;
}