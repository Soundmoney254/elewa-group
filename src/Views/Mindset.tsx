import LinkTitleParagraphPage from "../Utilities/LinkTitleParagraphPage";
import React from 'react';
import '../Styles/MindsetSection.css';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

// This component is used to display the Mindset section.
function MindsetSection() {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} className="mindset-section">
      <LinkTitleParagraphPage index={1} />
    </div>
  )
}

export default MindsetSection