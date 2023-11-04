import React from 'react';
import useRecordData from '../ViewModels/useRecordData';
import '../Styles/RecordSection.css';
import LinkTitleParagraphPage from "../Utilities/LinkTitleParagraphPage";

const RecordSection: React.FC = () => {
    const recordData = useRecordData();


    return (
        <div className="record-section-container">
            <div className='record-section-one'>
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
            </div>
            <LinkTitleParagraphPage index={0} />
        </div>
    );
}

export default RecordSection;