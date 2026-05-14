'use client';

import Navbar from '@/components/sanca/Navbar';
import HeroSection from '@/components/sanca/HeroSection';
import SelfAssessment from '@/components/sanca/SelfAssessment';
import DiagnosisTips from '@/components/sanca/DiagnosisTips';
import MedicalAidSection from '@/components/sanca/MedicalAidSection';
import AboutSection from '@/components/sanca/AboutSection';
import ProgrammesSection from '@/components/sanca/ProgrammesSection';
import FacilitiesSection from '@/components/sanca/FacilitiesSection';
import AdmissionsSection from '@/components/sanca/AdmissionsSection';
import PackingListSection from '@/components/sanca/PackingListSection';
import DrugSeverityMeter from '@/components/sanca/DrugSeverityMeter';
import DrugInfoSection from '@/components/sanca/DrugInfoSection';
import DrugStatsSection from '@/components/sanca/DrugStatsSection';
import FamiliesSection from '@/components/sanca/FamiliesSection';
import RecoveryJourney from '@/components/sanca/RecoveryJourney';
import TeamSection from '@/components/sanca/TeamSection';
import FAQSection from '@/components/sanca/FAQSection';
import TestimonialsSection from '@/components/sanca/TestimonialsSection';
import SuccessStories from '@/components/sanca/SuccessStories';
import VolunteerSection from '@/components/sanca/VolunteerSection';
import NewsletterSection from '@/components/sanca/NewsletterSection';
import EmergencyCTA from '@/components/sanca/EmergencyCTA';
import FloatingActions from '@/components/sanca/FloatingActions';
import ChatBot from '@/components/sanca/ChatBot';
import ResourceLibrary from '@/components/sanca/ResourceLibrary';
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
        <div className="section-divider-thin" />
        <DiagnosisTips />
        <MedicalAidSection />
        <div className="section-divider-thin" />
        <AboutSection />
        <TeamSection />
        <RecoveryJourney />
        <div className="section-divider-thin" />
        <ProgrammesSection />
        <FacilitiesSection />
        <div className="section-divider-thin" />
        <AdmissionsSection />
        <PackingListSection />
        <div className="section-divider-thin" />
        <DrugSeverityMeter />
        <DrugInfoSection />
        <DrugStatsSection />
        <div className="section-divider-thin" />
        <FamiliesSection />
        <ResourceLibrary />
        <div className="section-divider-thin" />
        <FAQSection />
        <TestimonialsSection />
        <SuccessStories />
        <div className="section-divider-thin" />
        <VolunteerSection />
        <NewsletterSection />
        <EmergencyCTA />
      </main>
      <Footer />
      <FloatingActions />
      <ChatBot />
    </div>
  );
}
