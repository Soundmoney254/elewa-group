import data from '../data/ImpactProjects.json';
import { useEffect, useState } from 'react';
import { ImpactProject } from '../Models/Impact';
import { isValidUrl } from '../Utilities/isValidUrl';

export const useImpactProjectData = () => {
    const [impactProjectData, setImpactProjectData] = useState<ImpactProject>();

    useEffect(() => {
        const validProjectLogos = data.projectLogos.filter(isValidUrl);
        if (validProjectLogos.length > 0) {
            setImpactProjectData({
                ...data,
                projectLogos: validProjectLogos
            });
        }
    }, []);

    return impactProjectData;
}