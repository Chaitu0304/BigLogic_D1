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
    <section id="features" className="bg-surface-abyss py-24 border-t border-slate-lead/20 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Columns - Interactive Selector */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onMouseEnter={() => setActiveModule(mod.id)}
                onClick={() => setActiveModule(mod.id)}
                className={cn(
                  "text-left p-6 rounded-3xl transition-all duration-500 ease-out border flex flex-col justify-between",
                  activeModule === mod.id 
                    ? "bg-surface-surface border-mercury-blue/35 shadow-[0_15px_40px_rgba(21,128,61,0.06)] dark:shadow-[0_15px_40px_rgba(21,128,61,0.18)] -translate-y-0.5" 
                    : "bg-transparent border-transparent hover:bg-surface-surface/40 hover:border-slate-lead/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:-translate-y-0.5"
                )}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors",
                    activeModule === mod.id ? "bg-mercury-blue text-pure-white" : "bg-surface-interactive text-silver"
                  )}>
                    <mod.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-subheading font-medium text-starlight">
                    {mod.title}
                  </h3>
                </div>
                <AnimatePresence mode="wait">
                  {activeModule === mod.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-body-sm text-silver mb-4 leading-relaxed">
                        {mod.description}
                      </p>
                      <ul className="grid grid-cols-1 gap-2">
                        {mod.features.map((feat, i) => (
                          <li key={i} className="text-caption text-silver flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-mercury-blue mr-2 shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Right Columns - Dynamic UI Mockup */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden border border-slate-lead/30 bg-surface-interactive shadow-xl">
            {modules.map((mod) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeModule === mod.id ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "absolute inset-0 p-4 md:p-8 flex items-center justify-center",
                  activeModule === mod.id ? "pointer-events-auto" : "pointer-events-none"
                )}
              >
                <img 
                  src={mod.image} 
                  alt={mod.title} 
                  className="w-full h-full object-cover rounded-2xl shadow-lg border border-slate-lead/20"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
