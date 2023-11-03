import React from 'react';
import useRecordData from '../ViewModels/useRecordData';

const RecordSection: React.FC = () => {
    const recordData = useRecordData();

    return (
        <div>
            <h2>Record Section</h2>
            <p>{recordData.peopleTrained}</p>
            <p>{recordData.careersLaunched}</p>
            <p>{recordData.projectsFinished}</p>
            <p>{recordData.investors}</p>
        </div>
    );
}

export default RecordSection;