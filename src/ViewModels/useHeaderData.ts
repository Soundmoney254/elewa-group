import { useEffect, useState } from 'react';
import { LogoUrl } from '../Models/HeaderData';
import data from '../data/data.json';

export const useHeaderData = () => {
    const [logoUrl, setLogoUrl] = useState<LogoUrl>();

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };

    useEffect(() => {
        if (isValidUrl(data.logoUrl)) {
            setLogoUrl({ url: data.logoUrl });
        }
    }, []);

    return logoUrl;
}