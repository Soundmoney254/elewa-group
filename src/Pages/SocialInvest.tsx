import React from "react";
import HeroSection from "../Views/HeroSection";
import RecordSection from "../Views/RecordSection";
import MindsetSection from "../Views/Mindset";
import BeyondBusiness from "../Views/BeyondBusiness";
import OpenKnowledge from "../Views/OpenKnowledge";
import ImpactProjects from "../Views/ImpactProjects";
import Footer from "../Views/Footer";

// This component is used to display the Social Invest page.
function SocialInvest() {
    return (
        <div className="homepage">
            <HeroSection index={0} />
            <RecordSection />
            <MindsetSection />
            <BeyondBusiness />
            <OpenKnowledge />
            <ImpactProjects />
            <Footer />
        </div>
    )
}

export default SocialInvest