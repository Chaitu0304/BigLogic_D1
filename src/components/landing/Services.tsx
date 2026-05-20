import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ClipboardList, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "brain",
    icon: Brain,
    title: "The Company Brain",
    description: "Your business intelligence layer. Upload all company SOPs, manuals, pricing guides, and past estimates. Any team member can query this centralized brain via conversational AI, instantly retrieving exact answers, guidelines, and compliant documents.",
    features: [
      "Natural language document search",
      "Instant SOP extraction and validation",
      "Secure private knowledge isolation",
      "Draft custom policies and emails in seconds"
    ],
    image: "/images/mercury_feature_1.png"
  },
  {
    id: "jobs",
    icon: ClipboardList,
    title: "Job Management Dashboard",
    description: "Your command center for every restoration project. See real-time profit and loss metrics, track milestones, track active trades, and manage version-controlled estimates and supplements seamlessly in a single unified UI.",
    features: [
      "Real-time P&L per job",
      "Comprehensive milestone & trade tracking",
      "Estimate version controls",
      "Direct carrier supplement management"
    ],
    image: "/images/mercury_hero_dashboard.png"
  },
  {
    id: "ai",
    icon: Zap,
    title: "AI Operations & Billing",
    description: "Automatic workflow automation. Instantly parse Xactimate estimates, auto-generate payment draw schedules, extract full material lists, auto-draft subcontractor agreements, and sync all accounting to QuickBooks.",
    features: [
      "Xactimate PDF auto-parsing",
      "Automatic project draw schedules",
      "Automated material extraction checklists",
      "QuickBooks real-time accounting sync"
    ],
    image: "/images/mercury_solution_split.png"
  }
];

export const Services = () => {
  const [activeModule, setActiveModule] = useState("brain");

  return (
    <section id="features" className="bg-surface-abyss py-50 border-t border-slate-lead/20 relative">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-heading lg:text-heading-lg font-display text-starlight mb-6 leading-tight">
            Everything Your Business Needs, <br className="hidden md:block"/>
            <span className="text-mercury-blue">Finally in One Unified Workspace.</span>
          </h2>
          <p className="text-body text-silver leading-relaxed">
            BIGlogic is built around three core modules that operate together seamlessly. No switching apps, no double data entries, and no communication gaps.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Columns - Interactive Selector */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-4 md:space-y-6 w-full">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onMouseEnter={() => setActiveModule(mod.id)}
                onClick={() => setActiveModule(mod.id)}
                className={cn(
                  "text-left p-16 md:p-24 lg:p-32 rounded-3xl transition-all duration-500 ease-out border flex flex-row items-start gap-12 md:gap-20",
                  activeModule === mod.id 
                    ? "bg-surface-surface border-mercury-blue/40 shadow-[0_24px_70px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_50px_rgba(21,128,61,0.08)] hover:shadow-[0_32px_90px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_70px_rgba(21,128,61,0.16)] lg:-translate-y-1" 
                    : "bg-surface-surface/40 border-slate-lead/10 hover:border-slate-lead/25 shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_60px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:bg-surface-surface/80 hover:-translate-y-0.5"
                )}
              >
                <div className={cn(
                  "w-40 h-40 md:w-56 md:h-56 p-2 rounded-2xl border border-none flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgba(21,128,61,0.05)]",
                  activeModule === mod.id ? "bg-mercury-blue text-pure-white shadow-[0_4px_20px_rgba(21,128,61,0.2)]" : "bg-mercury-blue/10 text-mercury-blue"
                )}>
                  <mod.icon className="w-20 h-20 md:w-28 md:h-28" />
                </div>

                <div className="space-y-4 md:space-y-8 flex-grow w-full">
                  <h3 className="text-body md:text-subheading font-display text-starlight justify-content p-0 font-bold leading-tight mt-1 md:mt-2">
                    {mod.title}
                  </h3>
                  
                  <AnimatePresence mode="wait"> 
                    {activeModule === mod.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-12 w-full"
                      >
                        <p className="text-body-sm text-silver leading-relaxed font-light mt-4">
                          {mod.description}
                        </p>
                        <ul className="grid grid-cols-1 gap-2 pt-4">
                          {mod.features.map((feat, i) => (
                            <li key={i} className="text-caption text-silver flex items-center font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-mercury-blue mr-2 shrink-0" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            ))}
          </div>

          {/* Right Columns - Dynamic UI Demo Panel */}
          <div className="lg:col-span-7 order-1 lg:order-2 w-full relative rounded-3xl overflow-hidden border border-slate-lead/30 bg-surface-interactive shadow-[0_24px_90px_rgba(0,0,0,0.18)] h-[560px] md:h-[520px] lg:h-[620px]">
            {modules.map((mod) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: activeModule === mod.id ? 1 : 0, y: activeModule === mod.id ? 0 : 16 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "absolute inset-0 p-4 md:p-8",
                  activeModule === mod.id ? "pointer-events-auto" : "pointer-events-none"
                )}
              >
                <div className="h-full w-full rounded-3xl border border-slate-800 dark:border-slate-200 bg-slate-900 dark:bg-white shadow-[0_24px_90px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
                  {/* System Window Header */}
                  <div className="flex items-center justify-between gap-4 px-6 py-3 bg-slate-950 dark:bg-slate-50 border-b border-slate-800 dark:border-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
                    </div>
                    <div className="flex-1 px-4 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 font-semibold">{mod.title}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live</span>
                    </div>
                  </div>

                  {/* UI Body */}
                  <div className="flex-1 p-6 md:p-8 overflow-hidden bg-slate-900/50 dark:bg-slate-100/50">
                    <div className="h-full rounded-[2rem] bg-slate-900 dark:bg-white p-6 md:p-8 border border-slate-800 dark:border-slate-200 shadow-inner overflow-y-auto flex flex-col gap-6">
                      
                      {mod.id === "brain" ? (
                        // ChatGPT-like Interface
                        <div className="flex flex-col h-full bg-slate-950/50 dark:bg-slate-50/50 rounded-2xl border border-slate-800 dark:border-slate-200 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] dark:shadow-inner">
                          {/* Chat History */}
                          <div className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">
                            
                            {/* User Message */}
                            <div className="flex items-start justify-end gap-3">
                              <div className="bg-slate-800 dark:bg-slate-100 border border-slate-700 dark:border-slate-200 rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-sm">
                                <p className="text-body-sm text-slate-300 dark:text-slate-700">What's the status of the Acme project? Are we missing any documents?</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-200 flex items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500">YOU</span>
                              </div>
                            </div>

                            {/* AI Message */}
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-mercury-blue flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(82,102,235,0.4)]">
                                <Brain className="w-4 h-4 text-pure-white" />
                              </div>
                              <div className="bg-mercury-blue/10 dark:bg-mercury-blue/5 border border-mercury-blue/20 rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm">
                                <p className="text-body-sm text-slate-200 dark:text-slate-800 leading-relaxed">
                                  The Acme project is currently in the <strong className="text-mercury-blue font-semibold">Estimating Phase</strong>. 
                                  <br/><br/>
                                  Upon scanning the project workspace, we are missing the signed <strong>Work Authorization Form</strong>. Based on company SOP, mitigation cannot begin until this is signed.
                                </p>
                              </div>
                            </div>
                            
                            {/* User Message */}
                            <div className="flex items-start justify-end gap-3">
                              <div className="bg-slate-800 dark:bg-slate-100 border border-slate-700 dark:border-slate-200 rounded-2xl rounded-tr-sm p-4 max-w-[85%] shadow-sm">
                                <p className="text-body-sm text-slate-300 dark:text-slate-700">Draft an email asking them to sign it, using our standard template.</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-200 flex items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500">YOU</span>
                              </div>
                            </div>
                            
                            {/* AI Message */}
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-mercury-blue flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(82,102,235,0.4)]">
                                <Brain className="w-4 h-4 text-pure-white" />
                              </div>
                              <div className="bg-mercury-blue/10 dark:bg-mercury-blue/5 border border-mercury-blue/20 rounded-2xl rounded-tl-sm p-4 max-w-[85%] shadow-sm space-y-3">
                                <p className="text-body-sm text-slate-200 dark:text-slate-800 leading-relaxed">
                                  Certainly. Here is the draft ready to send:
                                </p>
                                <div className="bg-slate-950 dark:bg-white border border-slate-800 dark:border-slate-200 p-4 rounded-xl text-xs text-slate-400 dark:text-slate-600 font-mono leading-relaxed shadow-inner">
                                  Subject: Action Required: Work Authorization for Acme Project<br/><br/>
                                  Hi [Client Name],<br/><br/>
                                  We are ready to begin mitigation on your property. However, per our policy, we need a signed Work Authorization Form before our team can deploy.<br/><br/>
                                  Please sign the attached document at your earliest convenience.<br/><br/>
                                  Best,<br/>
                                  BIGlogic Team
                                </div>
                              </div>
                            </div>

                          </div>
                          
                          {/* Input Area */}
                          <div className="p-4 bg-slate-900/80 dark:bg-white/80 backdrop-blur-md border-t border-slate-800 dark:border-slate-200">
                            <div className="relative flex items-center">
                              <input 
                                type="text" 
                                readOnly 
                                value="Ask anything about your company..."
                                className="w-full bg-slate-950 dark:bg-slate-50 border border-slate-800 dark:border-slate-300 rounded-full py-3 px-5 text-sm text-slate-300 dark:text-slate-700 focus:outline-none focus:border-mercury-blue/50 transition-colors"
                              />
                              <button className="absolute right-2 w-8 h-8 bg-mercury-blue rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(82,102,235,0.5)] hover:bg-opacity-90 transition-all hover:scale-105">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                              </button>
                            </div>
                            <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 mt-3 font-medium">BIGlogic AI can make mistakes. Always verify important info.</p>
                          </div>
                        </div>
                      ) : mod.id === "jobs" ? (
                        // Elite Jobs Management Dashboard UI - Spaced & Charted
                        <div className="flex flex-col h-full bg-slate-950 dark:bg-slate-50 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border border-slate-800/80 dark:border-slate-300/80 rounded-2xl relative">
                          
                          {/* Top Navigation Bar */}
                          <div className="h-16 border-b border-slate-800/80 dark:border-slate-200 flex items-center justify-between px-6 bg-slate-900/95 dark:bg-white/95 backdrop-blur-md z-10">
                            <div className="flex items-center gap-4">
                              
                            
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 dark:text-emerald-600 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                Active Sync
                              </div>
                            </div>
                          </div>
                          
                          {/* Main Dashboard Grid */}
                          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 relative">
                            {/* Ambient background glow */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-mercury-blue/5 rounded-full blur-3xl pointer-events-none" />

                            {/* KPI Row with Mini Charts */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                              {/* Gross Revenue Bar Chart */}
                              <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mb-1">Approved Est.</p>
                                <p className="text-2xl font-display font-bold text-white dark:text-slate-900">$24,500</p>
                                <div className="flex items-end gap-1.5 mt-5 h-10">
                                   <div className="flex-1 bg-slate-800 dark:bg-slate-200 rounded-t h-[30%] hover:bg-slate-700 transition-colors" />
                                   <div className="flex-1 bg-slate-800 dark:bg-slate-200 rounded-t h-[50%] hover:bg-slate-700 transition-colors" />
                                   <div className="flex-1 bg-slate-800 dark:bg-slate-200 rounded-t h-[40%] hover:bg-slate-700 transition-colors" />
                                   <div className="flex-1 bg-slate-800 dark:bg-slate-200 rounded-t h-[75%] hover:bg-slate-700 transition-colors" />
                                   <div className="flex-1 bg-mercury-blue rounded-t h-[100%] shadow-[0_0_8px_rgba(82,102,235,0.4)]" />
                                </div>
                              </div>
                              
                              {/* Margin Sparkline */}
                              <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mb-1">Real-time Margin</p>
                                <div className="flex items-end gap-2">
                                  <p className="text-2xl font-display font-bold text-emerald-400 dark:text-emerald-500">42.8%</p>
                                  <span className="text-xs text-emerald-400 font-medium mb-1">+$10,486</span>
                                </div>
                                <div className="mt-5 h-10 relative">
                                   <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                                      <path d="M0,25 Q25,25 50,20 T100,5" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                                      <path d="M0,25 Q25,25 50,20 T100,5 L100,30 L0,30 Z" fill="url(#emerald-grad)" opacity="0.2" />
                                      <defs>
                                        <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="#10b981" />
                                          <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                      </defs>
                                   </svg>
                                </div>
                              </div>

                              {/* Expenses Donut */}
                              <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mb-1">Expenses</p>
                                <p className="text-2xl font-display font-bold text-slate-300 dark:text-slate-700">$14,014</p>
                                <div className="absolute right-4 bottom-4">
                                   <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                                      <path className="text-slate-800 dark:text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                      <path className="text-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]" strokeDasharray="57, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                   </svg>
                                   <p className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-300 dark:text-slate-700">57%</p>
                                </div>
                              </div>
                            </div>

                            {/* Middle Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                              {/* Trade Tracking */}
                              <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-6 rounded-2xl shadow-lg flex flex-col">
                                 <div className="flex justify-between items-center mb-8">
                                   <p className="text-xs text-slate-300 dark:text-slate-700 uppercase tracking-widest font-bold">Trade Tracking</p>
                                   <span className="text-[10px] bg-slate-800 dark:bg-slate-100 px-3 py-1.5 rounded-lg text-slate-300 dark:text-slate-700 font-semibold border border-slate-700/50 dark:border-slate-200/50">3 of 8 Complete</span>
                                 </div>
                                 
                                 <div className="flex-1 space-y-8 relative">
                                   <div className="relative pl-12">
                                     <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] z-10" />
                                     <div className="flex justify-between items-center mb-1">
                                       <p className="text-sm font-bold text-slate-300 dark:text-slate-700">Initial Mitigation</p>
                                       <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Done</p>
                                     </div>
                                     <p className="text-[10px] text-slate-500 font-medium">Completed on Oct 14</p>
                                   </div>
                                   
                                   <div className="relative pl-12 bg-slate-800/30 dark:bg-slate-50 p-4 -ml-4 rounded-xl border border-slate-700/50 dark:border-slate-200 shadow-inner">
                                     <div className="absolute left-5 top-5 w-4 h-4 rounded-full border-2 border-mercury-blue border-t-transparent animate-spin z-10" />
                                     <div className="flex justify-between items-center mb-3">
                                       <p className="text-sm font-bold text-white dark:text-slate-900">Drywall & Insulation</p>
                                       <p className="text-[10px] text-mercury-blue font-bold tracking-widest uppercase bg-mercury-blue/10 px-2 py-1 rounded">Active</p>
                                     </div>
                                     <div className="w-full bg-slate-950 dark:bg-slate-200 rounded-full h-2 mb-3 overflow-hidden shadow-inner">
                                       <div className="bg-gradient-to-r from-mercury-blue to-indigo-500 h-2 rounded-full w-[65%]" />
                                     </div>
                                     <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-slate-900 dark:border-white shadow-sm" />
                                            <div className="w-6 h-6 rounded-full bg-rose-500 border-2 border-slate-900 dark:border-white shadow-sm" />
                                          </div>
                                          <p className="text-[11px] text-slate-400 font-medium">Apex Builders</p>
                                        </div>
                                        <p className="text-xs font-bold text-white dark:text-slate-800">65%</p>
                                     </div>
                                   </div>
                                   
                                   <div className="relative pl-12">
                                     <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 border-slate-700 dark:border-slate-300 bg-slate-900 dark:bg-white z-10" />
                                     <div className="flex justify-between items-center">
                                       <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Final Cleaning</p>
                                       <p className="text-xs text-slate-500 font-medium">Pending</p>
                                     </div>
                                   </div>
                                 </div>
                              </div>

                              {/* Estimate Control */}
                              <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 rounded-2xl shadow-lg flex flex-col overflow-hidden">
                                <div className="p-6 border-b border-slate-800/80 dark:border-slate-200 bg-slate-800/30 dark:bg-slate-50/50 flex justify-between items-center">
                                  <div>
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold mb-1">Estimate Control</p>
                                    <h5 className="text-base font-bold text-white dark:text-slate-900">Carrier Submissions</h5>
                                  </div>
                                  <button className="text-xs bg-mercury-blue text-white px-4 py-2 rounded-lg font-bold shadow-[0_4px_15px_rgba(82,102,235,0.4)] hover:shadow-[0_4px_20px_rgba(82,102,235,0.6)] hover:-translate-y-0.5 transition-all">
                                    + Supplement
                                  </button>
                                </div>
                                
                                <div className="flex-1 p-6 space-y-5 bg-slate-900/20 dark:bg-white/50">
                                  {/* Original Estimate */}
                                  <div className="p-5 rounded-xl bg-slate-950/50 dark:bg-slate-50 border border-slate-800 dark:border-slate-200 shadow-sm hover:border-slate-700 dark:hover:border-slate-300 transition-colors">
                                    <div className="flex justify-between items-center mb-4">
                                      <div>
                                        <p className="text-sm font-bold text-slate-300 dark:text-slate-700">Original (v1.0)</p>
                                        <p className="text-xs text-slate-500 mt-1 font-medium">State Farm • Oct 12</p>
                                      </div>
                                      <p className="text-base font-mono font-bold text-slate-300 dark:text-slate-700">$24,500</p>
                                    </div>
                                    <div className="inline-block px-2.5 py-1 bg-slate-800 dark:bg-slate-200 rounded text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest border border-slate-700 dark:border-slate-300">
                                      Approved
                                    </div>
                                  </div>

                                  {/* Supplement 1 */}
                                  <div className="p-5 rounded-xl bg-mercury-blue/10 dark:bg-mercury-blue/5 border border-mercury-blue/30 shadow-[0_8px_20px_rgba(82,102,235,0.1)] relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-mercury-blue" />
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                       <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                                    </div>
                                    <div className="flex justify-between items-center mb-4 relative z-10">
                                      <div>
                                        <p className="text-sm font-bold text-white dark:text-slate-900">Supplement #1</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                          <span className="w-2 h-2 rounded-full bg-mercury-blue animate-pulse shadow-[0_0_8px_rgba(82,102,235,0.8)]" />
                                          <p className="text-[10px] text-mercury-blue font-bold uppercase tracking-widest">Direct Sync</p>
                                        </div>
                                      </div>
                                      <p className="text-base font-mono font-bold text-mercury-blue bg-mercury-blue/10 px-3 py-1.5 rounded-lg border border-mercury-blue/20">+$3,240</p>
                                    </div>
                                    <div className="mt-4 border-t border-mercury-blue/20 pt-4 relative z-10">
                                      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
                                        Added 14 line items (DWH, PNT) via automated extraction from field notes. Pending adjustor review.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      ) : (
                        // Elite AI Operations & Billing Dashboard
                        <div className="flex flex-col h-full bg-slate-950 dark:bg-slate-50 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border border-slate-800/80 dark:border-slate-300/80 rounded-2xl relative">
                          
                          {/* Top Navigation */}
                          <div className="h-16 border-b border-slate-800/80 dark:border-slate-200 flex items-center justify-between px-6 bg-slate-900/95 dark:bg-white/95 backdrop-blur-md z-10">
                            <div className="flex items-center gap-4">
                            
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#2ca01c]/10 text-[#2ca01c] text-xs font-bold tracking-widest uppercase rounded-full border border-[#2ca01c]/20 shadow-[0_0_10px_rgba(44,160,28,0.2)]">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                                QB Synced
                              </div>
                            </div>
                          </div>
                          
                          {/* Main Dashboard Workspace */}
                          <div className="flex-1 p-6 md:p-8 relative bg-slate-900/40 dark:bg-slate-50/50 overflow-y-auto">
                            {/* Ambient background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
                              
                              {/* Left Column: Ingestion & Extraction */}
                              <div className="lg:col-span-5 space-y-6">
                                {/* Xactimate Parsing Node */}
                                <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
                                  <div className="absolute -right-4 -top-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                  </div>
                                  <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/30">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold text-white dark:text-slate-900">Xactimate_Est_Smith.pdf</p>
                                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Processing... 84%</p>
                                    </div>
                                  </div>
                                  
                                  {/* Scanning effect */}
                                  <div className="relative h-24 w-full bg-slate-950/80 dark:bg-slate-50 rounded-xl border border-slate-800 dark:border-slate-200 overflow-hidden p-4 flex flex-col gap-3 shadow-inner">
                                    <div className="w-3/4 h-2 bg-slate-800 dark:bg-slate-200 rounded" />
                                    <div className="w-1/2 h-2 bg-slate-800 dark:bg-slate-200 rounded" />
                                    <div className="w-full h-2 bg-slate-800 dark:bg-slate-200 rounded" />
                                    <div className="w-5/6 h-2 bg-slate-800 dark:bg-slate-200 rounded" />
                                    {/* Scanner line */}
                                    <motion.div 
                                      animate={{ top: ["0%", "100%", "0%"] }} 
                                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                      className="absolute left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10" 
                                    />
                                  </div>

                                  <div className="mt-5 pt-4 border-t border-slate-800/80 dark:border-slate-200 flex items-center justify-between">
                                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2 bg-indigo-500/10 px-2 py-1 rounded">
                                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                      Auto-Parsing
                                    </p>
                                    <p className="text-xs text-slate-300 dark:text-slate-700 font-mono font-bold">143 Items Found</p>
                                  </div>
                                </div>

                                {/* Material Extraction Checklist */}
                                <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg relative hover:border-indigo-500/50 transition-colors">
                                  <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mb-4">Material Extraction</p>
                                  <div className="space-y-3">
                                    {[
                                      { name: '5/8" Drywall (4x8)', qty: "120 Sheets", checked: true },
                                      { name: "R-13 Insulation", qty: "45 Rolls", checked: true },
                                      { name: "Premium Paint (Eggshell)", qty: "8 Gallons", checked: false },
                                    ].map((item, idx) => (
                                      <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/40 dark:bg-slate-50 border border-slate-800/50 dark:border-slate-200/50 hover:bg-slate-800/40 dark:hover:bg-slate-100 transition-colors">
                                        <div className={cn("w-5 h-5 rounded border flex items-center justify-center shadow-sm", item.checked ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-600 dark:border-slate-400")}>
                                          {item.checked && <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5"><path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                                        </div>
                                        <div className="flex-1">
                                          <p className="text-xs font-bold text-slate-200 dark:text-slate-800">{item.name}</p>
                                        </div>
                                        <p className="text-[10px] text-indigo-400 font-mono font-bold bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded-lg">{item.qty}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column: Workflows & Sync */}
                              <div className="lg:col-span-7 space-y-6">
                                {/* Draw Schedule */}
                                <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 transition-colors">
                                  <div className="flex justify-between items-center mb-8">
                                    <div>
                                      <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold mb-1">Payment Engine</p>
                                      <h5 className="text-base font-bold text-white dark:text-slate-900">Auto-Draw Schedule</h5>
                                    </div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                      Generated
                                    </div>
                                  </div>
                                  
                                  {/* Timeline / Stepper */}
                                  <div className="space-y-6 relative before:absolute before:inset-y-4 before:left-[19px] before:w-[2px] before:bg-slate-800 dark:before:bg-slate-200">
                                    <div className="relative pl-14">
                                      <div className="absolute left-3 top-3 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900 dark:border-white shadow-[0_0_12px_rgba(16,185,129,0.5)] z-10" />
                                      <div className="bg-slate-950/50 dark:bg-slate-50 p-4 rounded-xl border border-emerald-500/30 flex justify-between items-center shadow-sm">
                                        <div>
                                          <p className="text-sm font-bold text-white dark:text-slate-900">1. Initial Deposit (30%)</p>
                                          <p className="text-[10px] text-emerald-400 mt-1 font-medium bg-emerald-500/10 inline-block px-2 py-0.5 rounded">Paid • Check #1042</p>
                                        </div>
                                        <p className="text-base font-mono font-bold text-white dark:text-slate-900">$12,450</p>
                                      </div>
                                    </div>
                                    <div className="relative pl-14">
                                      <div className="absolute left-3 top-3 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 dark:border-white shadow-[0_0_12px_rgba(99,102,241,0.5)] z-10" />
                                      <div className="bg-indigo-500/10 dark:bg-indigo-500/5 border border-indigo-500/30 p-4 rounded-xl flex justify-between items-center shadow-[0_4px_20px_rgba(99,102,241,0.1)]">
                                        <div>
                                          <p className="text-sm font-bold text-white dark:text-slate-900">2. Drywall Completion</p>
                                          <p className="text-[10px] text-indigo-400 mt-1 flex items-center gap-1.5 font-bold uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_5px_rgba(99,102,241,0.8)]" /> Pending Invoice</p>
                                        </div>
                                        <p className="text-base font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">$15,000</p>
                                      </div>
                                    </div>
                                    <div className="relative pl-14">
                                      <div className="absolute left-3 top-3 w-4 h-4 rounded-full bg-slate-800 dark:bg-slate-300 border-4 border-slate-900 dark:border-white z-10" />
                                      <div className="opacity-50 p-4 flex justify-between items-center bg-slate-950/30 dark:bg-slate-50 border border-slate-800 dark:border-slate-200 rounded-xl">
                                        <div>
                                          <p className="text-sm font-bold text-slate-400 dark:text-slate-600">3. Final Completion</p>
                                          <p className="text-[10px] text-slate-500 mt-1 font-medium">Locked</p>
                                        </div>
                                        <p className="text-base font-mono font-bold text-slate-400 dark:text-slate-600">$14,050</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {/* Subcontractor Agreements */}
                                  <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg flex flex-col justify-between group cursor-pointer hover:border-indigo-500/50 transition-colors">
                                    <div>
                                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all shadow-inner">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14h6"/><path d="M9 18h6"/><path d="M9 10h.01"/></svg>
                                      </div>
                                      <h5 className="text-sm font-bold text-white dark:text-slate-900">Sub Agreements</h5>
                                      <p className="text-[10px] text-slate-400 mt-1 font-medium leading-relaxed">Auto-drafted from estimate scopes</p>
                                    </div>
                                    <div className="mt-5 pt-4 border-t border-slate-800 dark:border-slate-200 flex items-center justify-between">
                                      <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-200 border-2 border-slate-900 dark:border-white flex items-center justify-center text-[9px] font-bold shadow-sm">AP</div>
                                        <div className="w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-200 border-2 border-slate-900 dark:border-white flex items-center justify-center text-[9px] font-bold shadow-sm">ER</div>
                                      </div>
                                      <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">2 Ready</span>
                                    </div>
                                  </div>

                                  {/* QuickBooks Sync Status */}
                                  <div className="bg-slate-900/80 dark:bg-white border border-slate-800/80 dark:border-slate-200 p-5 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#2ca01c]/50 transition-colors">
                                    <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                      <svg width="60" height="60" viewBox="0 0 24 24" fill="#2ca01c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                                    </div>
                                    <div className="relative w-20 h-20 mb-4">
                                      <div className="absolute inset-0 rounded-full border-4 border-slate-800 dark:border-slate-200 shadow-inner" />
                                      <div className="absolute inset-0 rounded-full border-4 border-[#2ca01c] border-l-transparent animate-spin" />
                                      <div className="absolute inset-0 flex items-center justify-center bg-[#2ca01c]/10 rounded-full m-2">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#2ca01c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                                      </div>
                                    </div>
                                    <h5 className="text-sm font-bold text-white dark:text-slate-900">QuickBooks Online</h5>
                                    <p className="text-[10px] text-slate-400 mt-1 font-medium bg-slate-950 dark:bg-slate-50 px-3 py-1 rounded-full border border-slate-800 dark:border-slate-200">Real-time ledger sync active</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
