import { useEffect, useState } from 'react';
import { AnchorText } from '../Models/AnchorText';
import data from '../data/data.json';

export const useAnchorTexts = () => {
    const [anchorTexts, setAnchorTexts] = useState<AnchorText[]>([]);

    useEffect(() => {
        setAnchorTexts(data.anchortext as AnchorText[]);
    }, []);

    return anchorTexts;
}