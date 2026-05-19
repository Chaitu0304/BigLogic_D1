import { motion } from "framer-motion";
import { Database, Bot, Zap, Cloud } from "lucide-react";

const integrations = [
  {
    icon: Database,
    title: "QuickBooks Online",
    desc: "Your accounting stays in sync automatically. When a job milestone is hit, a compliant invoice draft is generated and logged instantly."
  },
  {
    icon: Cloud,
    title: "AWS Secure Cloud Storage",
    desc: "Every site photo, estimate copy, and contract document is archived in dedicated enterprise-grade cloud storage folders."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Our event-driven pipeline runs administrative chores in the background, connecting estimators with office support personnel."
  },
  {
    icon: Bot,
    title: "Advanced LLM Models",
    desc: "BIGlogic leverages enterprise conversational artificial intelligence models to understand professional construction specifications."
  }
];

export const Integrations = () => {
  return (
    <section className="bg-surface-abyss py-24 relative overflow-hidden border-b border-slate-lead/20">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
            Works Seamlessly With <br className="hidden md:block"/>
            <span className="text-mercury-blue">the Core Tools You Already Use.</span>
          </h2>
          <p className="text-body text-silver leading-relaxed">
            Plugs directly into your active accounting and document stores to introduce automated intelligence without breaking existing workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-24 md:p-32 rounded-3xl bg-surface-surface border border-slate-lead/20 hover:border-mercury-blue/30 flex flex-row items-start gap-24 transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_50px_rgba(21,128,61,0.18)] hover:-translate-y-1.5"
            >
              <div className="w-56 h-56 rounded-2xl bg-mercury-blue/10 border border-none flex items-center justify-center text-mercury-blue shrink-0 shadow-[0_4px_20px_rgba(21,128,61,0.05)]">
                <item.icon className="w-28 h-28" />
              </div>
              <div className="space-y-12">
                <h3 className="text-subheading font-display text-starlight font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-body-sm text-silver leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
