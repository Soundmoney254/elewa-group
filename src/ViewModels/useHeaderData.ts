import { useEffect, useState } from 'react';
import { LogoUrl } from '../Models/Header';
import data from '../data/data.json';
import { isValidUrl } from '../Utilities/isValidUrl';

/**
 * Custom hook that returns the header data from the data.json file.
 * @returns A logo URL object.
 */

export const useHeaderData = () => {
    const [logoUrl, setLogoUrl] = useState<LogoUrl>();

    useEffect(() => {
        if (isValidUrl(data.logoUrl)) {
            setLogoUrl({ url: data.logoUrl });
        }
    }, []);

    return logoUrl;
}