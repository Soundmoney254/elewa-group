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
            <div className='record-section-two'>
            <img className='record-photo' src={recordData.recordPhoto} alt='record' />
            <div className='social-business'>
                <h1>{recordData.recordSectionTitle}</h1>
                <p>{recordData.recordSectionParagraph}</p>
            </div>
            </div>
         
       

        </div>
    );
}

export default RecordSection;