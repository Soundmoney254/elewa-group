import data from '../data/data.json';
import { useEffect, useState } from 'react';
import { HeroData } from '../Models/HeroData';

export const useHeroData = () => {
    const [heroData, setHeroData] = useState<HeroData>();

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };

    useEffect(() => {
        if (isValidUrl(data.heroData.heroImage)) {
            setHeroData(data.heroData);
        }
    }, []);

    return heroData;
}