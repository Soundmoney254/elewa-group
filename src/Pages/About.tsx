import React from 'react';
import HeroSection from '../Views/HeroSection';
import Footer from '../Views/Footer';

// This component is used to display the About page.
function About() {
    return (
        <div>
            <HeroSection index={1} />
            <Footer />
        </div>
    )
}

export default About