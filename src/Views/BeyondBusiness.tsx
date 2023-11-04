import LinkTitleParagraphPage from "../Utilities/LinkTitleParagraphPage";
import React from 'react';
import '../Styles/BeyondBusiness.css';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

function BeyondBusiness() {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} className="beyond-business-section">
      <LinkTitleParagraphPage index={2} />
    </div>
  )
}

export default BeyondBusiness;