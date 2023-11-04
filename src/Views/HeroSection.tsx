import React from 'react'
import '../Styles/HeroSection.css';
import Header from './Header';
import { useHeroData } from '../ViewModels/useHeroData';
import useIntersectionObserver from '../Utilities/useIntersectionObserver';
import "../Styles/Animate.css"

function HeroSection() {
    const heroData = useHeroData(0);
    const ref = useIntersectionObserver();

    return (
        <div ref={ref} className='hero-section' style={{ backgroundImage: `url(${heroData?.heroImage})` }} >
            <Header />
            <section className='hero'>
                <h3 className='scaling'>{heroData?.scalingImpact}</h3>
                <h1 className='impact'>{heroData?.humanAndEnvironmentalImpact}</h1>
            </section>
        </div>
    )
}

export default HeroSection