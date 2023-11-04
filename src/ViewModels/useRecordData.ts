import { useState, useEffect } from 'react';
import { RecordData } from '../Models/Record';
import data from '../data/data.json';

/**
 * Custom hook that returns the record data from the data.json file.
 * @returns A record data object.
 */

const useRecordData = (): RecordData => {
    const [recordData, setRecordData] = useState<RecordData>(data.recordSection);


    useEffect(() => {
        setRecordData(data.recordSection as RecordData);
    }, []);

    return recordData;
}

export default useRecordData;