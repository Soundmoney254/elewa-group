/**
 * Interface for Footer Data
 * @interface
 * @property {Object} Headquarters - The headquarters information
 * @property {string} Headquarters.address - The address of the headquarters
 * @property {Object} Contact - The contact information
 * @property {string} Contact.phone - The phone number for contact
 * @property {string} Contact.email - The email for contact
 * @property {string[]} Navigation - The navigation links
 * @property {string[]} Brands - The brand names
 * @property {string[]} Privacy - The privacy policy links
 * @property {Object} SocialMediaLogos - The social media logos
 * @property {string} SocialMediaLogos.facebook - The Facebook logo
 * @property {string} SocialMediaLogos.instagram - The Instagram logo
 * @property {string} SocialMediaLogos.linkedin - The LinkedIn logo
 */
export interface FooterData {
    Headquarters: {
        address: string;
    };
    Contact: {
        phone: string;
        email: string;
    };
    Navigation: string[];
    Brands: string[];
    Privacy: string[];
    SocialMediaLogos: {
        facebook: string;
        instagram: string;
        linkedin: string;
    };
}