/**
 * Interface for Impact Project section of the page
 * @interface
 * @property {string} title - The title of the impact project
 * @property {string} paragraph - The description of the impact project
 * @property {string[]} projectLogos - An array of URLs with the impact projects logos
 */
export interface ImpactProject {
    title: string;
    paragraph: string;
    projectLogos: string[];
}