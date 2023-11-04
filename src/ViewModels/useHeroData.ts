import data from '../data/data.json';
import { useEffect, useState } from 'react';
import { HeroData } from '../Models/Hero';
import { isValidUrl } from '../Utilities/isValidUrl';

export const useHeroData = () => {
    const [heroData, setHeroData] = useState<HeroData>();

    useEffect(() => {
        if (isValidUrl(data.heroData.heroImage)) {
            setHeroData(data.heroData);
        }
    }, []);

    return heroData;
}