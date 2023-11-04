import { useEffect, useState } from 'react';
import { FooterData } from '../Models/Footer';
import data from '../data/footer.json';
import { isValidUrl } from '../Utilities/isValidUrl';

/**
 * Custom hook that returns the footer data from the footer.json file.
 * @returns A footer data object.
 */

export const useFooterData = () => {
    const [footerViewModel, setFooterViewModel] = useState<FooterData>();

    useEffect(() => {
        const footerData: FooterData = data;

        // Check if the logos are valid URLs
        const isValidFacebookUrl = isValidUrl(footerData.SocialMediaLogos.facebook);
        const isValidInstagramUrl = isValidUrl(footerData.SocialMediaLogos.instagram);
        const isValidLinkedinUrl = isValidUrl(footerData.SocialMediaLogos.linkedin);

        // If all URLs are valid, assign the object to state
        if (isValidFacebookUrl && isValidInstagramUrl && isValidLinkedinUrl) {
            setFooterViewModel(footerData);
        }
    }, []);

    return footerViewModel;
}