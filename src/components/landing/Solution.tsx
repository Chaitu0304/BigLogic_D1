import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Solution = () => {
  return (
    <section className="bg-surface-abyss py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Compact Solution Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-lead/30 shadow-xl bg-surface-surface hover:shadow-2xl transition-all duration-500"
          >
            <img
              src="/images/solution_dashboard_mockup.png"
              alt="BIGlogic Intelligent Workspace Dashboard Mockup"
              className="w-full h-auto object-cover opacity-95 hover:scale-[1.01] transition-all duration-500"
            />
          </motion.div>

          {/* Right Column: Title, Description, and Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight text-center">
                Meet BIGlogic — <br className="hidden md:block" />
                Your Entire Office Team, <br />
                <span className="text-mercury-blue">In One Intelligent Platform.</span>
              </h2>
              <p className="text-body text-silver leading-relaxed text-center">
                BIGlogic is the only platform built specifically for restoration and reconstruction companies. It replaces scattered spreadsheets and manual processes with secure, lightning-fast AI automation.
              </p>
            </div>

            {/* Embedded Elegant Quote Card */}
            <div className="relative bg-surface-surface border border-slate-lead/20 rounded-3xl p-8 overflow-hidden transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_50px_rgba(21,128,61,0.18)] hover:-translate-y-1.5">
              <Quote className="absolute top-4 left-4 w-10 h-10 text-mercury-blue/10" />
              <blockquote className="relative z-10 text-body font-display text-starlight font-light text-center leading-relaxed italic">
                "Imagine having an estimator, a compliance checker, a billing coordinator, and a project manager working 24/7 with zero errors — for less than a part-time salary. That is BIGlogic."
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
