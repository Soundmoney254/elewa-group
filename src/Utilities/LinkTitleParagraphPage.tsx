import useLinkTitleParagraph from '../ViewModels/useLinkTitleParagraph';
import React from 'react';

interface SectionProps {
  index: number;
}

const LinkTitleParagraphPage: React.FC<SectionProps> = ({ index }) => {
  const linkTitleParagraph = useLinkTitleParagraph(index);

  return (
    <div className='title-photo-paragraph'>
      <img id='section-photo' src={linkTitleParagraph?.recordPhoto} alt='record' />
      <div className='section-title-paragraph'>
        <h1 className='section-title'>{linkTitleParagraph?.recordSectionTitle}</h1>
        <p className='section-paragraph'>{linkTitleParagraph?.recordSectionParagraph}</p>
      </div>
    </div>
  );
};

export default LinkTitleParagraphPage;