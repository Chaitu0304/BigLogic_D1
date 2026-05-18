import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Clock, TrendingDown, Landmark } from "lucide-react";

export const WhatYouGet = () => {
  return (
    <section className="bg-surface-abyss py-24 relative overflow-hidden border-b border-slate-lead/20">
      {/* Subtle light leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mercury-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-mercury-blue/10 border border-mercury-blue/20">
            <TrendingDown className="w-16 h-16 text-mercury-blue" />
            <span className="text-caption font-bold text-mercury-blue tracking-wide uppercase">Efficiency Audit</span>
          </div>
          <h2 className="text-heading font-display text-starlight leading-tight">
            Stop Bleeding Overhead <br className="hidden sm:block"/>
            <span className="text-mercury-blue">on Manual Tasks a Machine Can Do.</span>
          </h2>
        </div>

        {/* Compact Split Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-stretch">
          
          {/* Left Column: Financial Audit */}
          <div className="bg-surface-surface border border-slate-lead/20 rounded-3xl p-24 md:p-32 flex flex-col justify-between space-y-24 transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_50px_rgba(21,128,61,0.18)] hover:-translate-y-1.5 hover:border-mercury-blue/30">
            <div className="space-y-4">
              <div className="flex items-center gap-12 text-subheading font-display font-bold text-starlight">
                <Landmark className="w-20 h-20 text-mercury-blue animate-pulse" />
                Financial Impact
              </div>
              <p className="text-caption text-silver leading-relaxed">
                Replaces high administrative salaries, claims rejections, and redundant subscription software.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex justify-between items-center p-12 rounded-xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/10">
                <span className="text-body-sm text-silver flex items-center gap-8">
                  <AlertCircle className="w-14 h-14 text-destructive" />
                  Traditional Operations Cost
                </span>
                <span className="text-body-sm font-bold text-destructive">~$5,900/mo</span>
              </div>

              <div className="flex justify-between items-center p-12 rounded-xl bg-mercury-blue/5 dark:bg-mercury-blue/10 border border-mercury-blue/10">
                <span className="text-body-sm text-silver flex items-center gap-8">
                  <CheckCircle className="w-14 h-14 text-mercury-blue" />
                  BIGlogic AI Operations Cost
                </span>
                <span className="text-body-sm font-bold text-mercury-blue">Flat Subscription</span>
              </div>
            </div>

            {/* Glowing Hero Metric Panel */}
            <div className="p-20 rounded-2xl bg-gradient-to-r from-mercury-blue to-emerald-600 text-pure-white shadow-[0_8px_30px_rgba(21,128,61,0.15)] flex items-center justify-between">
              <div>
                <p className="text-caption font-bold text-pure-white/70 uppercase tracking-wider">Estimated Profit Gain</p>
                <h4 className="text-heading font-display font-medium text-pure-white leading-none mt-4">$5,000+/mo</h4>
              </div>
              <TrendingDown className="w-32 h-32 text-pure-white/20 transform rotate-180" />
            </div>
          </div>

          {/* Right Column: Time Gained Back */}
          <div className="bg-surface-surface border border-slate-lead/20 rounded-3xl p-24 md:p-32 flex flex-col justify-between space-y-24 transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_50px_rgba(21,128,61,0.18)] hover:-translate-y-1.5 hover:border-mercury-blue/30">
            <div className="space-y-4">
              <div className="flex items-center gap-12 text-subheading font-display font-bold text-starlight">
                <Clock className="w-20 h-20 text-mercury-blue" />
                Time Gained Back
              </div>
              <p className="text-caption text-silver leading-relaxed">
                Actual duration tracking of common restoration tasks using BIGlogic's automation.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { title: "Estimate to Contract", oldTime: "3 hrs", newTime: "60 seconds" },
                { title: "Walkthrough Notes to SOP Checklist", oldTime: "1 hr", newTime: "Instant" },
                { title: "Searching Historical Job Documents", oldTime: "20 mins", newTime: "Instant" },
                { title: "Material Checklists Generation", oldTime: "2 hrs", newTime: "Auto-Generated" },
                { title: "Job Profitability Spreadsheets", oldTime: "1 hr", newTime: "Live on Dashboard" },
              ].map((task, idx) => (
                <div key={idx} className="flex justify-between items-center text-body-sm border-b border-slate-lead/10 pb-8 last:border-b-0 last:pb-0">
                  <span className="text-silver font-light">{task.title}</span>
                  <span className="text-starlight font-medium">
                    {task.oldTime} &rarr; <span className="text-mercury-blue font-bold">{task.newTime}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="p-16 rounded-2xl bg-surface-interactive/60 border border-slate-lead/15 text-center">
              <p className="text-caption text-silver italic leading-relaxed">
                "Our customers save an average of <span className="text-mercury-blue font-bold">15–20 hours per week</span> — 2.5 full working days, returned to focus on winning jobs."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
