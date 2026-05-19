import { motion } from "framer-motion";
import { ArrowRight, Settings, Upload, Bot } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Settings,
    title: "10-Minute Setup",
    desc: "Create your secure account, upload your company branding, and add your team members. BIGlogic instantly creates your private workspace."
  },
  {
    num: "2",
    icon: Upload,
    title: "Upload Estimates",
    desc: "Drop in your Xactimate estimate PDF. Our AI automatically extracts materials, creates draw schedules, and formats contracts in under 60 seconds."
  },
  {
    num: "3",
    icon: Bot,
    title: "Autopilot Business",
    desc: "Track active jobs, communicate with documents using conversational AI, and handle carrier compliance without administrative hassle."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-surface-abyss py-24 border-t border-slate-lead/20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
              Operational in <br />
              Less Than a Day.<br />
              <span className="text-mercury-blue">No Complex Tech Skills Needed.</span>
            </h2>
            <p className="text-body text-silver leading-relaxed">
              We designed BIGlogic to be simple and intuitive. Your office team and field staff can start automating tasks immediately with zero friction.
            </p>
          </div>

          {/* Right Column: 3 Steps Styled as a Flowchart Timeline */}
          <div className="lg:col-span-7 relative py-2 flex flex-col gap-8">
            {/* Elegant Flowchart Connector Line */}
            <div className="absolute left-[28px] sm:left-[36px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-mercury-blue via-mercury-blue/30 to-transparent z-0" />

            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex gap-6 items-center group z-10 pl-1 sm:pl-3"
              >
                {/* Step Circle with Icon - Anchored on flow line */}
                <div className="flex-shrink-0 w-40 h-40 rounded-full bg-surface-surface border-2 border-slate-lead/40 flex items-center justify-center text-mercury-blue group-hover:bg-mercury-blue group-hover:text-pure-white group-hover:border-mercury-blue transition-all duration-300 shadow-sm z-10">
                  <step.icon className="w-15 h-15" />
                </div>
                
                {/* Step Card Content */}
                <div className="flex-grow bg-surface-surface border border-slate-lead/20 hover:border-mercury-blue/30 rounded-3xl p-24 md:p-32 transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_50px_rgba(21,128,61,0.18)] hover:-translate-y-1.5 space-y-2">
                  <h3 className="text-subheading font-display text-starlight font-bold leading-tight">
                    <span className="text-mercury-blue mr-2 font-display font-bold">0{step.num}.</span>
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-silver leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
