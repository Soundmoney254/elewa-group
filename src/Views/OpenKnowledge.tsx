import LinkTitleParagraphPage from "../Utilities/LinkTitleParagraphPage";
import React from 'react';
import '../Styles/OpenKnowledge.css';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

function OpenKnowledge() {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} className="open-knowledge-section">
      <LinkTitleParagraphPage index={3} />
    </div>
  )
}

export default OpenKnowledge;