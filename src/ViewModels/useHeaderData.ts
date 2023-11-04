import { useEffect, useState } from 'react';
import { LogoUrl } from '../Models/Header';
import data from '../data/data.json';
import { isValidUrl } from '../Utilities/isValidUrl';

export const useHeaderData = () => {
    const [logoUrl, setLogoUrl] = useState<LogoUrl>();

    useEffect(() => {
        if (isValidUrl(data.logoUrl)) {
            setLogoUrl({ url: data.logoUrl });
        }
    }, []);

    return logoUrl;
}