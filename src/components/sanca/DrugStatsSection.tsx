'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { BarChart3, TrendingUp, Users, AlertTriangle, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ── Data ──────────────────────────────────────────────────────────────────────

const substanceData = [
  { name: 'Alcohol', value: 45, fill: '#1B5E3B' },
  { name: 'Dagga', value: 22, fill: '#059669' },
  { name: 'Tik', value: 12, fill: '#C5963A' },
  { name: 'Heroin', value: 8, fill: '#E8C877' },
  { name: 'Cocaine', value: 5, fill: '#2D8B57' },
  { name: 'Mandrax', value: 4, fill: '#9B7429' },
  { name: 'Other', value: 4, fill: '#E8F0E8' },
];

const trendData = [
  { year: '2019', admissions: 8200 },
  { year: '2020', admissions: 6800 },
  { year: '2021', admissions: 7500 },
  { year: '2022', admissions: 8900 },
  { year: '2023', admissions: 9600 },
  { year: '2024', admissions: 10200 },
];

const ageData = [
  { name: '13–18', value: 15, fill: '#1B5E3B' },
  { name: '19–25', value: 28, fill: '#059669' },
  { name: '26–35', value: 32, fill: '#C5963A' },
  { name: '36–50', value: 18, fill: '#E8C877' },
  { name: '51+', value: 7, fill: '#E8F0E8' },
];

const tabs = [
  { id: 'substance', label: 'Admissions by Substance', icon: BarChart3 },
  { id: 'trends', label: 'Trends Over Time', icon: TrendingUp },
  { id: 'age', label: 'Age Demographics', icon: Users },
] as const;

type TabId = (typeof tabs)[number]['id'];

// ── Custom tooltip ────────────────────────────────────────────────────────────

function SancaTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-sanca-green/20 bg-white px-4 py-3 shadow-premium-lg">
      <p className="font-serif font-bold text-sanca-green-dark text-sm mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-xs text-foreground flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="font-medium">{entry.name}:</span>{' '}
          {typeof entry.value === 'number' && entry.value >= 100 ? entry.value.toLocaleString() : `${entry.value}%`}
        </p>
      ))}
    </div>
  );
}

// ── Custom legend ─────────────────────────────────────────────────────────────

function SancaLegend({ payload }: { payload?: Array<{ value: string; color: string }> }) {
  if (!payload) return null;
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4">
      {payload.map((entry) => (
        <span key={entry.value} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          {entry.value}
        </span>
      ))}
    </div>
  );
}

// ── Key stat cards ────────────────────────────────────────────────────────────

const keyStats = [
  {
    number: '1 in 7',
    label: 'South Africans struggle with substance use',
    accent: 'bg-sanca-green',
  },
  {
    number: '45%',
    label: 'of all treatment admissions are alcohol-related',
    accent: 'bg-sanca-gold',
  },
  {
    number: '43%',
    label: 'of first-time admissions are youth under 25',
    accent: 'bg-sanca-emerald',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function DrugStatsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('substance');

  return (
    <section id="drug-stats" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sanca-green/[0.03]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sanca-gold/[0.04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <AlertTriangle className="h-4 w-4" />
            National Statistics
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            South Africa&apos;s Substance <span className="text-gradient-gold">Crisis</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Understanding the scale of substance use in South Africa is essential to addressing it.
            These figures, drawn from SACENDU and SANCA national reporting, paint a clear picture
            of the challenges our communities face. Together, we can turn the tide.
          </p>
        </motion.div>

        {/* ── Key Stat Callouts ──────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-14">
          {keyStats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card className="p-6 text-center shadow-premium-lg border-0 bg-white relative overflow-hidden hover-lift">
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${stat.accent}`} />
                <p className="font-serif text-4xl sm:text-5xl font-bold text-sanca-green-dark mb-2 tracking-tight">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ── Tab Bar ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium
                    transition-all duration-300 premium-focus
                    ${
                      isActive
                        ? 'bg-sanca-green text-white shadow-premium-md'
                        : 'bg-white text-sanca-green-dark border border-sanca-green/15 hover:bg-sanca-green/5 hover:border-sanca-green/30'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Chart Area ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Card className="shadow-premium-2xl border-0 bg-white overflow-hidden">
            <div className="p-4 sm:p-8">
              {/* Chart title */}
              <div className="mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
                  {activeTab === 'substance' && 'Treatment Admissions by Substance Type'}
                  {activeTab === 'trends' && 'Treatment Admission Trends (2019–2024)'}
                  {activeTab === 'age' && 'Age Demographics of Patients'}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {activeTab === 'substance' && 'Percentage of total treatment admissions across SANCA centres'}
                  {activeTab === 'trends' && 'Annual treatment admissions showing the impact of COVID-19 and recovery'}
                  {activeTab === 'age' && 'Distribution of patients by age group at first admission'}
                </p>
              </div>

              {/* ── Bar Chart ─────────────────────────────────────────────── */}
              {activeTab === 'substance' && (
                <motion.div
                  key="substance-chart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={substanceData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8F0E8" vertical={false} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: '#0D3B22', fontSize: 12, fontFamily: 'inherit' }}
                        axisLine={{ stroke: '#E8F0E8' }}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: '#0D3B22', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 50]}
                        tickFormatter={(v: number) => `${v}%`}
                      />
                      <Tooltip content={<SancaTooltip />} cursor={{ fill: 'rgba(27,94,59,0.05)' }} />
                      <Legend content={<SancaLegend />} />
                      <Bar dataKey="value" name="Admissions" radius={[6, 6, 0, 0]} maxBarSize={56}>
                        {substanceData.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              )}

              {/* ── Line Chart ────────────────────────────────────────────── */}
              {activeTab === 'trends' && (
                <motion.div
                  key="trends-chart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E8F0E8" vertical={false} />
                      <XAxis
                        dataKey="year"
                        tick={{ fill: '#0D3B22', fontSize: 12 }}
                        axisLine={{ stroke: '#E8F0E8' }}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: '#0D3B22', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        domain={[5000, 11000]}
                        tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
                      />
                      <Tooltip content={<SancaTooltip />} />
                      <Legend content={<SancaLegend />} />
                      <Line
                        type="monotone"
                        dataKey="admissions"
                        name="Admissions"
                        stroke="#1B5E3B"
                        strokeWidth={3}
                        dot={{ fill: '#1B5E3B', r: 5, strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 7, fill: '#C5963A', stroke: '#fff', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  {/* COVID callout */}
                  <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-sanca-sage border border-sanca-green/10">
                    <AlertTriangle className="h-5 w-5 text-sanca-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-sanca-green-dark">COVID-19 Impact</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        The 2020 dip reflects reduced access to treatment facilities during lockdown,
                        not a decline in substance use. Post-pandemic admissions have exceeded pre-COVID levels.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Donut Chart ───────────────────────────────────────────── */}
              {activeTab === 'age' && (
                <motion.div
                  key="age-chart"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={ageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        paddingAngle={3}
                        dataKey="value"
                        nameKey="name"
                        stroke="none"
                      >
                        {ageData.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip content={<SancaTooltip />} />
                      <Legend content={<SancaLegend />} />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Youth callout */}
                  <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-sanca-cream border border-sanca-gold/20">
                    <Users className="h-5 w-5 text-sanca-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-sanca-green-dark">Youth at Risk</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        43% of all patients entering treatment are under 25. SANCA Pretoria places
                        special emphasis on early intervention and youth-oriented programmes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Source Attribution ──────────────────────────────────────── */}
            <div className="px-4 sm:px-8 pb-6 pt-2 border-t border-sanca-sage">
              <p className="text-xs text-muted-foreground italic">
                Source: SACENDU &amp; SANCA National Reports. Data reflects aggregated treatment
                admission figures across SANCA-affiliated centres in South Africa.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto leading-relaxed">
            If you or someone you know is struggling with substance use, take the first step today. You&apos;re not alone.
          </p>
          <Button
            onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sanca-green hover:bg-sanca-green-dark text-white px-8 py-6 text-base font-semibold rounded-xl btn-ripple shadow-gold transition-colors"
          >
            Take the Free Self-Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
