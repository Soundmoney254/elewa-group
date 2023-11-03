import React from 'react';
import useRecordData from '../ViewModels/useRecordData';
import '../Styles/RecordSection.css';

const RecordSection: React.FC = () => {
    const recordData = useRecordData();

    return (
        <div className="record-section">
            <div className='record'>
                <p>{recordData.peopleTrained}</p>
                <p>{recordData.careersLaunched}</p>
                <p>{recordData.projectsFinished}</p>
                <p>{recordData.investors}</p>
            </div>
            <div className='record-text'>
                <p>{recordData.peopleTrainedText}</p>
                <p>{recordData.careersLaunchedText}</p>
                <p>{recordData.projectsFinishedText}</p>
                <p>{recordData.investorsText}</p>
            </div>
            <img className='record-photo' src={recordData.recordPhoto} alt='record' />
        </div>
    );
}

export default RecordSection;