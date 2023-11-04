import { useEffect, useState } from 'react';
import { FooterData } from '../Models/Footer';
import data from '../data/footer.json';

export const useFooterData = () => {
    const [footerViewModel, setFooterViewModel] = useState<FooterData>();

    useEffect(() => {
        const footerData: FooterData = data;
        setFooterViewModel(footerData);
    }, []);

    return footerViewModel;
}