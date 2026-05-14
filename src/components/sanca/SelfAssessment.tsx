'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, HelpCircle, Shield, Heart, Users, Brain, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

interface Question {
  id: number;
  question: string;
  category: string;
  icon: React.ReactNode;
  options: { label: string; score: number; tip: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'How often do you think about using substances?',
    category: 'Cravings',
    icon: <Brain className="h-5 w-5" />,
    options: [
      { label: 'Rarely or never', score: 0, tip: 'Great sign! Minimal cravings indicate healthy habits.' },
      { label: 'Occasionally', score: 1, tip: 'Occasional thoughts are normal. Being aware helps you stay in control.' },
      { label: 'Frequently', score: 2, tip: 'Frequent cravings can be a sign of developing dependence. Support is available.' },
      { label: 'Constantly', score: 3, tip: 'Constant cravings may indicate a substance use concern. Professional help can make a real difference.' },
    ],
  },
  {
    id: 2,
    question: 'Has your substance use affected your work or studies?',
    category: 'Daily Life',
    icon: <Users className="h-5 w-5" />,
    options: [
      { label: 'Not at all', score: 0, tip: 'Your daily responsibilities are intact — that\'s positive!' },
      { label: 'Sometimes', score: 1, tip: 'Minor disruptions can escalate. Early support can prevent this.' },
      { label: 'Often', score: 2, tip: 'Impact on daily life is a key warning sign. SANCA can help you regain stability.' },
      { label: 'Severely', score: 3, tip: 'Significant impact means it\'s time to seek professional guidance.' },
    ],
  },
  {
    id: 3,
    question: 'Have family or friends expressed concern about your substance use?',
    category: 'Relationships',
    icon: <Heart className="h-5 w-5" />,
    options: [
      { label: 'No one has expressed concern', score: 0, tip: 'Your support circle sees you thriving — that\'s encouraging.' },
      { label: 'One or two people', score: 1, tip: 'Loved ones often notice changes before we do. Their concern comes from care.' },
      { label: 'Several people', score: 2, tip: 'When multiple people notice, it\'s worth reflecting. SANCA offers family-inclusive support.' },
      { label: 'Many people, frequently', score: 3, tip: 'This is a strong signal. Reaching out for help is a sign of courage, not weakness.' },
    ],
  },
  {
    id: 4,
    question: 'Have you tried to cut down or stop but couldn\'t?',
    category: 'Control',
    icon: <Shield className="h-5 w-5" />,
    options: [
      { label: 'I don\'t feel the need to stop', score: 0, tip: 'If you\'re content with your usage, that\'s your choice. Stay informed.' },
      { label: 'I\'ve thought about it but haven\'t tried', score: 1, tip: 'Awareness is the first step. If you ever want to make a change, help is here.' },
      { label: 'I\'ve tried but struggled', score: 2, tip: 'Difficulty stopping alone is very common. Professional support increases success rates significantly.' },
      { label: 'I\'ve tried multiple times without success', score: 3, tip: 'This indicates dependence. SANCA\'s structured programme has helped thousands break this cycle.' },
    ],
  },
  {
    id: 5,
    question: 'Do you experience withdrawal symptoms when you stop?',
    category: 'Physical',
    icon: <AlertTriangle className="h-5 w-5" />,
    options: [
      { label: 'No symptoms at all', score: 0, tip: 'No physical dependence detected. Stay mindful of your usage.' },
      { label: 'Mild discomfort', score: 1, tip: 'Mild symptoms can be early warning signs. Medical monitoring can help.' },
      { label: 'Noticeable physical symptoms', score: 2, tip: 'Physical withdrawal signals dependence. Medical detox at Castle Carey can ease this safely.' },
      { label: 'Severe symptoms', score: 3, tip: 'Severe withdrawal requires medical supervision. Please contact SANCA immediately — you don\'t have to face this alone.' },
    ],
  },
];

function getResult(score: number) {
  if (score <= 3) {
    return {
      level: 'Low Risk',
      color: 'text-sanca-emerald',
      bg: 'bg-sanca-emerald/10',
      border: 'border-sanca-emerald/30',
      icon: <CheckCircle2 className="h-8 w-8 text-sanca-emerald" />,
      message: 'Based on your responses, your current substance use appears to be at a lower risk level. However, staying informed and aware is always valuable.',
      recommendation: 'Continue making mindful choices. If you ever feel things changing, remember that SANCA is here for you — no question is too small.',
    };
  } else if (score <= 8) {
    return {
      level: 'Moderate Concern',
      color: 'text-sanca-gold',
      bg: 'bg-sanca-gold/10',
      border: 'border-sanca-gold/30',
      icon: <HelpCircle className="h-8 w-8 text-sanca-gold" />,
      message: 'Your responses suggest some areas of concern that are worth addressing. Early intervention leads to much better outcomes.',
      recommendation: 'We recommend speaking with one of our counsellors. Our outpatient programme at Soshanguve or Hammanskraal may be a great fit — flexible support that fits your life.',
    };
  } else {
    return {
      level: 'High Concern',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      message: 'Your responses indicate significant concerns that warrant professional support. This is not a judgement — it\'s a recommendation for care.',
      recommendation: 'We strongly encourage you to contact SANCA Pretoria today. Our inpatient programme at Castle Carey Clinic provides 24-hour medical supervision, individual therapy, and a structured path to recovery. Call 012 542 1121 now.',
    };
  }
}

export default function SelfAssessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showTip, setShowTip] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const question = questions[currentQ];
  const progress = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100;
  const totalScore = answers.reduce((a, b) => a + b, 0);

  const handleSelect = (score: number) => {
    setSelectedOption(score);
    setShowTip(true);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = selectedOption;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setShowTip(false);
    } else {
      setShowResult(true);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setSelectedOption(answers[currentQ] ?? null);
    } else if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelectedOption(answers[currentQ - 1] ?? null);
      setShowTip(false);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setShowTip(false);
  };

  const result = getResult(totalScore);

  return (
    <section id="assessment" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <HelpCircle className="h-4 w-4" />
            Interactive Self-Assessment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Wondering if It's Time to <span className="text-gradient-gold">Talk</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A gentle, confidential way to reflect on your relationship with substances. Your answers stay completely private — this is just for you.
          </p>
        </motion.div>

        {/* Assessment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-premium-2xl border-0 overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1.5 bg-gray-100">
              <motion.div
                className="h-full bg-gradient-to-r from-sanca-green to-sanca-emerald rounded-r-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={`q-${currentQ}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Question Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative w-10 h-10 rounded-full border border-sanca-gold/30 bg-gradient-to-b from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center text-sanca-green hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow">
                        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                        {question.icon}
                      </div>
                      <div>
                        <p className="text-xs text-sanca-green font-semibold uppercase tracking-wider">
                          {question.category}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Question {currentQ + 1} of {questions.length}
                        </p>
                      </div>
                    </div>

                    {/* Question */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-6">
                      {question.question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                      {question.options.map((option, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleSelect(option.score)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                            selectedOption === option.score
                              ? 'border-sanca-green bg-sanca-green/5 shadow-premium-sm'
                              : 'border-gray-100 hover:border-sanca-green/30 hover:bg-sanca-green/[0.02]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                selectedOption === option.score
                                  ? 'border-sanca-green bg-sanca-green'
                                  : 'border-gray-300'
                              }`}
                            >
                              {selectedOption === option.score && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-white"
                                />
                              )}
                            </div>
                            <span className="text-sm sm:text-base font-medium text-foreground">
                              {option.label}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Tip reveal */}
                    <AnimatePresence>
                      {showTip && selectedOption !== null && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 rounded-xl bg-sanca-sage border border-sanca-green/10 mb-6">
                            <p className="text-sm text-sanca-green-dark flex items-start gap-2">
                              <span className="text-sanca-gold mt-0.5">💡</span>
                              {question.options.find((o) => o.score === selectedOption)?.tip}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        onClick={handleBack}
                        disabled={currentQ === 0}
                        className="text-muted-foreground"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className="bg-sanca-green hover:bg-sanca-green-dark text-white shadow-premium-sm"
                      >
                        {currentQ < questions.length - 1 ? (
                          <>
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            See Results
                            <CheckCircle2 className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {showCelebration && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 1,
                              y: 0,
                              x: 0,
                              scale: 1
                            }}
                            animate={{
                              opacity: 0,
                              y: -200 - Math.random() * 200,
                              x: (Math.random() - 0.5) * 300,
                              scale: 0.5,
                              rotate: Math.random() * 360
                            }}
                            transition={{ duration: 2 + Math.random(), ease: 'easeOut' }}
                            className="absolute w-3 h-3 rounded-full"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              bottom: '30%',
                              backgroundColor: ['#1B5E3B', '#C5963A', '#059669', '#E8C877', '#2D8B57'][i % 5],
                            }}
                          />
                        ))}
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        className="inline-flex mb-4"
                      >
                        {result.icon}
                      </motion.div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                        Assessment Result
                      </h3>
                      <p className={`text-lg font-semibold ${result.color}`}>
                        {result.level}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Score: {totalScore} out of {questions.length * 3}
                      </p>
                    </div>

                    <div className={`p-5 rounded-xl ${result.bg} border ${result.border} mb-6`}>
                      <p className="text-sm text-foreground leading-relaxed">
                        {result.message}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-premium-sm mb-6">
                      <p className="text-sm text-foreground leading-relaxed">
                        <strong>Our Recommendation:</strong> {result.recommendation}
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <a
                        href="tel:0125421121"
                        className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sanca-green text-white font-medium text-sm hover:bg-sanca-green-dark transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        Call 012 542 1121
                      </a>
                      <a
                        href="https://wa.me/27813181511"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sanca-emerald text-white font-medium text-sm hover:bg-sanca-emerald/90 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Us
                      </a>
                    </div>

                    <Button
                      onClick={restart}
                      variant="outline"
                      className="w-full"
                    >
                      Take Assessment Again
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      ⚠️ This is a screening tool only, not a clinical diagnosis. Please consult a healthcare professional for a proper assessment.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
