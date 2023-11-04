/**
 * Interface for Anchor Text
 * @interface
 * @property {number} id - The unique identifier for an anchor text
 * @property {string} text - The display text of the anchor
 * @property {string} url - The URL that the anchor points to
 */
export interface AnchorText {
    id: number;
    text: string;
    url: string;
}