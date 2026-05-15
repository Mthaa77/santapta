'use client';

import Navbar from '@/components/sanca/Navbar';
import HeroSection from '@/components/sanca/HeroSection';
import HeroTicker from '@/components/sanca/HeroTicker';
import PartnersStrip from '@/components/sanca/PartnersStrip';
import CEOWelcomeSection from '@/components/sanca/CEOWelcomeSection';
import SelfAssessment from '@/components/sanca/SelfAssessment';
import RecoveryVisualizer from '@/components/sanca/RecoveryVisualizer';
import DiagnosisTips from '@/components/sanca/DiagnosisTips';
import MythsSection from '@/components/sanca/MythsSection';
import MedicalAidSection from '@/components/sanca/MedicalAidSection';
import AboutSection from '@/components/sanca/AboutSection';
import TeamSection from '@/components/sanca/TeamSection';
import NationalFootprintSection from '@/components/sanca/NationalFootprintSection';
import RecoveryJourney from '@/components/sanca/RecoveryJourney';
import ProgrammesSection from '@/components/sanca/ProgrammesSection';
import TreatmentComparison from '@/components/sanca/TreatmentComparison';
import FacilitiesSection from '@/components/sanca/FacilitiesSection';
import AdmissionsSection from '@/components/sanca/AdmissionsSection';
import DrugSeverityMeter from '@/components/sanca/DrugSeverityMeter';
import DrugInfoSection from '@/components/sanca/DrugInfoSection';
import AddictionCostCalculator from '@/components/sanca/AddictionCostCalculator';
import FamiliesSection from '@/components/sanca/FamiliesSection';
import FAQSection from '@/components/sanca/FAQSection';
import TestimonialsSection from '@/components/sanca/TestimonialsSection';
import VolunteerSection from '@/components/sanca/VolunteerSection';
import NewsletterSection from '@/components/sanca/NewsletterSection';
import ContactSection from '@/components/sanca/ContactSection';
import EmergencyCTA from '@/components/sanca/EmergencyCTA';
import FloatingActions from '@/components/sanca/FloatingActions';
import ChatBot from '@/components/sanca/ChatBot';
import ResourceLibrary from '@/components/sanca/ResourceLibrary';
import EventsSection from '@/components/sanca/EventsSection';
import DrugTrendsSection from '@/components/sanca/DrugTrendsSection';
import PreventionProgrammesSection from '@/components/sanca/PreventionProgrammesSection';
import VideoSection from '@/components/sanca/VideoSection';
import PageLoader from '@/components/sanca/PageLoader';
import ScrollProgress from '@/components/sanca/ScrollProgress';
import Footer from '@/components/sanca/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HeroTicker />
        <PartnersStrip />
        <CEOWelcomeSection />
        <div className="parallax-divider" />
        <SelfAssessment />
        <RecoveryVisualizer />
        <div className="parallax-divider" />
        <DiagnosisTips />
        <MythsSection />
        <MedicalAidSection />
        <div className="parallax-divider" />
        <AboutSection />
        <TeamSection />
        <NationalFootprintSection />
        <RecoveryJourney />
        <div className="parallax-divider" />
        <ProgrammesSection />
        <TreatmentComparison />
        <FacilitiesSection />
        <div className="parallax-divider" />
        <AdmissionsSection />
        <DrugSeverityMeter />
        <DrugInfoSection />
        <DrugTrendsSection />
        <AddictionCostCalculator />
        <div className="parallax-divider" />
        <FamiliesSection />
        <VideoSection />
        <PreventionProgrammesSection />
        <ResourceLibrary />
        <EventsSection />
        <div className="parallax-divider" />
        <FAQSection />
        <TestimonialsSection />
        <div className="parallax-divider" />
        <VolunteerSection />
        <NewsletterSection />
        <ContactSection />
        <EmergencyCTA />
      </main>
      <Footer />
      <FloatingActions />
      <ChatBot />
    </div>
  );
}
