import { FileText, Hammer, Mic, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  {
    icon: FileText,
    title: "Instant Contract Generation",
    desc: (
      <>
        Estimates are parsed into a comprehensive <strong className="text-starlight font-semibold">payment draw schedule</strong> and branded subcontractor contracts in under 60 seconds.
      </>
    )
  },
  {
    icon: Hammer,
    title: "Automatic Material Checklists",
    desc: (
      <>
        Parses every selection and options list from your estimate, <strong className="text-starlight font-semibold">saving your team hours</strong> of manual transcription.
      </>
    )
  },
  {
    icon: Mic,
    title: "Field Transcript Summary",
    desc: (
      <>
        Record onsite walkthroughs to get a <strong className="text-starlight font-semibold">clean voice summary</strong>, task lists, and assignments automatically created by AI.
      </>
    )
  },
  {
    icon: MessageSquare,
    title: "Conversational Document AI",
    desc: (
      <>
        Retrieve exact policy guidelines and SOP templates instantly by <strong className="text-starlight font-semibold">querying your central database</strong> with natural text.
      </>
    )
  }
];

export const AITools = () => {
  return (
    <section className="bg-surface-abyss py-50 relative border-b border-slate-lead/20">
      <div className="container max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
            Your Smartest Team Member <br className="hidden md:block"/>
            <span className="text-mercury-blue">Operates 24/7 with Zero Administrative Mistakes.</span>
          </h2>
          <p className="text-body text-silver leading-relaxed">
            BIGlogic automates the most time-consuming operational tasks using secure, specialized AI models built specifically for contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-row items-start gap-24 bg-surface-surface border border-slate-lead/20 hover:border-mercury-blue/30 p-24 md:p-32 rounded-3xl transition-all duration-500 ease-out shadow-[0_0_30px_rgba(0,0,0,0.16)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_48px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <div className="w-56 h-56 p-3 rounded-2xl bg-mercury-blue/10 dark:bg-mercury-blue/15 border border-none flex items-center justify-center text-mercury-blue shrink-0 group-hover:scale-110 hover:shadow-[0_0_12px_rgba(21,128,61,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-mercury-blue transition-transform duration-300 shadow-[0_4px_20px_rgba(21,128,61,0.05)]">
                  <Icon className="w-28 h-28" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-subheading font-display text-starlight font-bold leading-tight">
                    {tool.title}
                  </h3>
                  <p className="text-body-sm text-silver leading-relaxed font-light">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
