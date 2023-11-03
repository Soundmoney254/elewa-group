import { useState, useEffect } from 'react';
import { RecordData } from '../Models/RecordData';
import data from '../data/data.json';

const useRecordData = (): RecordData => {
    const [recordData, setRecordData] = useState<RecordData>(data.recordSection);


    useEffect(() => {
        setRecordData(data.recordSection as RecordData);
    }, []);

    return recordData;
}

export default useRecordData;