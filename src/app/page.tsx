'use client';

import Navbar from '@/components/sanca/Navbar';
import HeroSection from '@/components/sanca/HeroSection';
import SelfAssessment from '@/components/sanca/SelfAssessment';
import MoodTracker from '@/components/sanca/MoodTracker';
import RecoveryAffirmations from '@/components/sanca/RecoveryAffirmations';
import RecoveryVisualizer from '@/components/sanca/RecoveryVisualizer';
import DiagnosisTips from '@/components/sanca/DiagnosisTips';
import MythsSection from '@/components/sanca/MythsSection';
import MedicalAidSection from '@/components/sanca/MedicalAidSection';
import AboutSection from '@/components/sanca/AboutSection';
import ProgrammesSection from '@/components/sanca/ProgrammesSection';
import TreatmentComparison from '@/components/sanca/TreatmentComparison';
import FacilitiesSection from '@/components/sanca/FacilitiesSection';
import AdmissionsSection from '@/components/sanca/AdmissionsSection';
import PackingListSection from '@/components/sanca/PackingListSection';
import DrugSeverityMeter from '@/components/sanca/DrugSeverityMeter';
import DrugInfoSection from '@/components/sanca/DrugInfoSection';
import DrugStatsSection from '@/components/sanca/DrugStatsSection';
import AddictionCostCalculator from '@/components/sanca/AddictionCostCalculator';
import FamiliesSection from '@/components/sanca/FamiliesSection';
import RecoveryJourney from '@/components/sanca/RecoveryJourney';
import TeamSection from '@/components/sanca/TeamSection';
import FAQSection from '@/components/sanca/FAQSection';
import TestimonialsSection from '@/components/sanca/TestimonialsSection';
import SuccessStories from '@/components/sanca/SuccessStories';
import SobrietyCalculator from '@/components/sanca/SobrietyCalculator';
import VolunteerSection from '@/components/sanca/VolunteerSection';
import NewsletterSection from '@/components/sanca/NewsletterSection';
import ContactSection from '@/components/sanca/ContactSection';
import EmergencyCTA from '@/components/sanca/EmergencyCTA';
import FloatingActions from '@/components/sanca/FloatingActions';
import ChatBot from '@/components/sanca/ChatBot';
import CrisisBanner from '@/components/sanca/CrisisBanner';
import ResourceLibrary from '@/components/sanca/ResourceLibrary';
import EventsSection from '@/components/sanca/EventsSection';
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
        <SelfAssessment />
        <MoodTracker />
        <RecoveryAffirmations />
        <RecoveryVisualizer />
        <div className="parallax-divider" />
        <DiagnosisTips />
        <MythsSection />
        <MedicalAidSection />
        <div className="parallax-divider" />
        <AboutSection />
        <TeamSection />
        <RecoveryJourney />
        <div className="parallax-divider" />
        <ProgrammesSection />
        <TreatmentComparison />
        <FacilitiesSection />
        <div className="parallax-divider" />
        <AdmissionsSection />
        <PackingListSection />
        <div className="parallax-divider" />
        <DrugSeverityMeter />
        <DrugInfoSection />
        <DrugStatsSection />
        <AddictionCostCalculator />
        <div className="parallax-divider" />
        <FamiliesSection />
        <ResourceLibrary />
        <EventsSection />
        <div className="parallax-divider" />
        <FAQSection />
        <TestimonialsSection />
        <SuccessStories />
        <SobrietyCalculator />
        <div className="parallax-divider" />
        <VolunteerSection />
        <NewsletterSection />
        <ContactSection />
        <EmergencyCTA />
      </main>
      <Footer />
      <FloatingActions />
      <ChatBot />
      <CrisisBanner />
    </div>
  );
}
