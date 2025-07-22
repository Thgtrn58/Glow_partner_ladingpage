import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
// import BenefitsSection from '../components/BenefitsSection';
// import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* New Hero Section */}
      <HeroSection />
      
      {/* About Section with Stats and Roadmap */}
      <AboutSection />
      
      {/* Benefits Section - Hidden */}
      {/* <BenefitsSection selectedRole="partner" /> */}
      
      {/* Process Section - Hidden */}
      {/* <ProcessSection selectedRole="partner" /> */}
      
      {/* CTA Section with Role Selection */}
      <CTASection />
    </div>
  );
};

export default Home; 