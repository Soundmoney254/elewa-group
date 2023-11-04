/**
 * Interface for first div of the Record Data section
 * @interface
 * @property {string} peopleTrained - The number of people trained
 * @property {string} careersLaunched - The number of careers launched
 * @property {string} projectsFinished - The number of projects finished
 * @property {string} investors - The number of investors
 * @property {string} peopleTrainedText - The text related to people trained
 * @property {string} careersLaunchedText - The text related to careers launched
 * @property {string} projectsFinishedText - The text related to projects finished
 * @property {string} investorsText - The text related to investors
 */
export interface RecordData {
    peopleTrained: string;
    careersLaunched: string;
    projectsFinished: string;
    investors: string;
    peopleTrainedText: string;
    careersLaunchedText: string;
    projectsFinishedText: string;
    investorsText: string;
}