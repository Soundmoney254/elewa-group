import LinkTitleParagraphPage from "../Utilities/LinkTitleParagraphPage";
import React from 'react';
import '../Styles/BeyondBusiness.css';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

// This component is used to display the Beyond Business section.
function BeyondBusiness() {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} className="beyond-business-section">
      <LinkTitleParagraphPage index={2} />
    </div>
  )
}

export default BeyondBusiness;