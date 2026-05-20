import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BarChart3, Users, DollarSign } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-[140px] md:pt-[180px] pb-12 overflow-hidden bg-surface-abyss">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 md:opacity-100 transition-opacity duration-1000"
          style={{ backgroundImage: `url('/images/biglogic_hero_nodes.png')` }}
        />
        {/* Gradients to fade into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-abyss via-surface-abyss/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-abyss via-surface-abyss/20 to-transparent" />
      </div>

      <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="max-w-4xl space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 mt-30 px-3 py-1.5 rounded-full bg-surface-surface/50 border border-slate-lead/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-mercury-blue animate-pulse" />
              <span className="text-caption font-bold text-starlight tracking-widest uppercase ">
                The #1 Platform for Reconstruction Companies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display font-display font-medium text-starlight leading-tight">
              Stop Paying 10 People <br className="hidden md:block" />
              <span className="text-mercury-blue">to Do What One Platform Can.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-sm md:text-body text-silver max-w-2xl font-light leading-relaxed">
              BIGlogic.ai runs your entire reconstruction business — estimates, contracts, compliance, documents, billing, and communication — automatically. So you can focus on winning more jobs.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <button aria-label="Start free trial" className="group relative inline-flex items-center justify-center min-h-[56px] px-6 sm:px-10 rounded-full bg-mercury-blue text-pure-white font-bold text-xs sm:text-sm tracking-wide transition-all hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(82,102,235,0.4)] animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-mercury-blue w-full sm:w-auto">
              <span className="block sm:hidden">Start My Free Trial</span>
              <span className="hidden sm:block">Start My Free Trial — No Credit Card Needed</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center justify-center min-h-[56px] px-6 text-silver hover:text-mercury-blue transition-colors text-xs sm:text-sm font-bold w-full sm:w-auto border border-slate-lead/20 sm:border-transparent rounded-full sm:rounded-none bg-surface-surface/50 sm:bg-transparent">
              <PlayCircle className="w-5 h-5 mr-2 text-mercury-blue" />
              See how it works in 2 minutes
            </button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="pt-40 grid grid-cols-1 md:grid-cols-3 gap-24 mb transition-all duration-500"
        >
          {[
            {
              icon: BarChart3,
              stat: "73%",
              text: "Average reduction in admin work reported by users in first 30 days",
            },
            {
              icon: DollarSign,
              stat: "$2,400+",
              text: "Saved per month on average vs. hiring extra office staff",
            },
            {
              icon: Users,
              stat: "1 person",
              text: "Can now run what took a full team using BIGlogic's automation",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center justify-center text-center p-24 bg-transparent border border-slate-lead/20 rounded-3xl transition-all duration-500 ease-out shadow-[0_22px_70px_rgba(0,0,0,0.18),0_0_12px_rgba(0,0,0,0.06),0_-6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_110px_rgba(0,0,0,0.26),0_0_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:scale-[1.02] overflow-hidden z-10"
              >

                <div className="space-y-16 relative z-10 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-2xl bg-transparent dark:bg-mercury-blue/15 border border-mercury-blue/20 flex items-center justify-center text-mercury-blue group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-20 h-20" />
                  </div>

                  <div className="space-y-8 flex flex-col items-center justify-center">
                    <h3 className="text-heading-sm md:text-heading font-display font-medium text-starlight leading-none">
                      {item.stat}
                    </h3>
                    <p className="text-caption text-silver group-hover:text-starlight transition-colors duration-300 font-light leading-relaxed max-w-[280px] mx-auto">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
