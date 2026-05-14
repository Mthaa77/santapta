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
import FAQSection from '@/components/sanca/FAQSection';
import TestimonialsSection from '@/components/sanca/TestimonialsSection';
import EmergencyCTA from '@/components/sanca/EmergencyCTA';
import FloatingActions from '@/components/sanca/FloatingActions';
import ScrollProgress from '@/components/sanca/ScrollProgress';
import Footer from '@/components/sanca/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SelfAssessment />
        <DiagnosisTips />
        <MedicalAidSection />
        <AboutSection />
        <ProgrammesSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <PackingListSection />
        <DrugSeverityMeter />
        <DrugInfoSection />
        <DrugStatsSection />
        <FamiliesSection />
        <FAQSection />
        <TestimonialsSection />
        <EmergencyCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
