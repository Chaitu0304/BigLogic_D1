import { motion } from "framer-motion";
import { Star, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export const SocialProof = () => {
  const trustItems = [
    { icon: Star, text: "4.9/5 Star Rating" },
    { icon: Building2, text: "500+ Restoration Projects" },
    { icon: TrendingUp, text: "$2M+ Revenue Automated" },
    { icon: ShieldCheck, text: "SOC 2 Secure Isolation" },
  ];

  return (
    <section className="bg-surface-abyss border-y border-slate-lead/20 py-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Sleek Enterprise Header with horizontal fading lines */}
        <div className="flex items-center justify-center gap-24 mb-32">
          <div className="h-px bg-gradient-to-r from-transparent to-slate-lead/20 flex-1 hidden md:block" />
          <span className="text-caption font-bold text-silver uppercase tracking-widest whitespace-nowrap">
            Trusted by restoration providers across the United States
          </span>
          <div className="h-px bg-gradient-to-l from-transparent to-slate-lead/20 flex-1 hidden md:block" />
        </div>
        
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group flex items-center justify-center gap-12 bg-surface-surface/20 hover:bg-surface-surface/45 backdrop-blur-sm border border-slate-lead/10 hover:border-mercury-blue/30 rounded-2xl p-16 shadow-[0_22px_70px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-all duration-300 cursor-default"
              >
                <div className="w-32 h-32 rounded-xl bg-mercury-blue/10 dark:bg-mercury-blue/15 border border-mercury-blue/20 flex items-center justify-center text-mercury-blue group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-16 h-16" />
                </div>
                <span className="text-body-sm font-semibold text-starlight group-hover:text-mercury-blue transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
