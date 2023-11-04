import { LinkTitleParagraph } from "../Models/linkTitleParagraph";
import { isValidUrl } from "../Utilities/isValidUrl";
import LinkTitleParagraphData from '../data/linkTitleParagraph.json';
import { useEffect, useState } from 'react';

const useLinkTitleParagraph = (index :number ) => {
    const [linkTitleParagraph, setLinkTitleParagraph] = useState<LinkTitleParagraph>();

    useEffect(() => {
        if (LinkTitleParagraphData.linkTitleParagraph[index] && isValidUrl(LinkTitleParagraphData.linkTitleParagraph[index].recordPhoto)) {
            setLinkTitleParagraph(LinkTitleParagraphData.linkTitleParagraph[index]);
        }
    }, [index]);

    return linkTitleParagraph;
}

export default useLinkTitleParagraph;