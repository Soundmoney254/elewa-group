import React from 'react'
import '../Styles/HeroSection.css';
import Header from './Header';
import { useHeroData } from '../ViewModels/useHeroData';

function HeroSection() {
    const heroData = useHeroData();
    console.log(heroData);
    return (
        <div className='hero-section'>
            <Header />
            <section className='hero'>
                <h3 className='scaling'>{heroData?.scalingImpact}</h3>
                <h1 className='impact'>{heroData?.humanAndEnvironmentalImpact}</h1>
            </section>
        </div>
    )
}

export default HeroSection