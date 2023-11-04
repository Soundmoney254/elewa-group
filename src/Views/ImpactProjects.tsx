import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useImpactProjectData } from '../ViewModels/useImpactData';
import '../Styles/ImpactProjects.css';
import "../Styles/Animate.css"
import useIntersectionObserver from '../Utilities/useIntersectionObserver';

// This component is used to display the impact projects section.
const ImpactProjects = () => {
  const impactProjectData = useImpactProjectData();

  const ref = useIntersectionObserver();

  return (
    <div ref={ref} className='project-impact'>
      <h1 className='carousel-title'>{impactProjectData?.title}</h1>
      <div className="carousel">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {impactProjectData?.projectLogos.map((logo: string, index: number) => (
            <div key={index} className="caroussel-logo">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <p className='carousel-paragraph'>{impactProjectData?.paragraph}</p>
    </div>

  );
}

export default ImpactProjects;