import data from '../data/hero.json';
import { useEffect, useState } from 'react';
import { HeroData } from '../Models/Hero';
import { isValidUrl } from '../Utilities/isValidUrl';

/**
 * Custom hook that returns the hero data from the hero.json file.
 * @returns A hero data object.
 */

export const useHeroData = (index: number) => {
    const [heroData, setHeroData] = useState<HeroData>();

    useEffect(() => {
        if (data.heroData.every(item => isValidUrl(item.heroImage))) {
            setHeroData(data.heroData[index]);
        }
    }, [index]);

    return heroData;
}