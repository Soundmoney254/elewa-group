import React from 'react'
import '../Styles/HeroSection.css';
import Header from './Header';
import { useHeroData } from '../ViewModels/useHeroData';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"
interface HeroSectionProps {
    index: number;
}

function HeroSection({ index }: HeroSectionProps) {
    const heroData = useHeroData(index);
    const ref = useIntersectionObserver();

    return (
        <div ref={ref} className='hero-section' style={{
            backgroundImage: `url(${heroData?.heroImage})`,
        }}>
            <Header />
            <section className='hero'>
                <h3 className='scaling'>{heroData?.heroSubheading}</h3>
                <h1 className='impact'>{heroData?.heroHeading}</h1>
            </section>
        </div>
    )
}

export default HeroSection