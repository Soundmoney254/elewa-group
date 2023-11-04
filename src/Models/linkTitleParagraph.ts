/**
 * Interface for the sections that contain only a title paragraph and a photo
 * @interface
 * @property {string} recordPhoto - The URL of the photo
 * @property {string} recordSectionTitle - The sections title text
 * @property {string} recordSectionParagraph - The sections paragraph text
 */
export interface LinkTitleParagraph {
    recordPhoto: string;
    recordSectionTitle: string;
    recordSectionParagraph: string;
}