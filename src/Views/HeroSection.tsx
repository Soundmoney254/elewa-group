import React from 'react'
import '../Styles/HeroSection.css';
import Header from './Header';
import { useHeroData } from '../ViewModels/useHeroData';

function HeroSection() {
    const heroData = useHeroData();
    console.log (heroData);
    return (
        <div className='hero-section'>
            <Header />
            <p>{heroData?.scalingImpact}</p>
            <p>{heroData?.humanAndEnvironmentalImpact}</p>
        </div>
    )
}

export default HeroSection