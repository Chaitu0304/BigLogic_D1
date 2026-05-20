import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, Zap, Crown, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started",
    priceMonthly: 199,
    priceAnnually: 159,
    bestFor: "Restoration companies running 1–5 jobs at a time with a team of under 5 people.",
    features: [
      "Up to 10 active jobs",
      "Company Brain (document uploads)",
      "Job dashboard & P&L tracking",
      "AI estimate reader (up to 20 estimates/month)",
      "Email support"
    ]
  },
  {
    name: "Professional",
    tagline: "The complete platform for growing companies",
    priceMonthly: 499,
    priceAnnually: 399,
    popular: true,
    bestFor: "Companies running 5–20 concurrent jobs, with an office team of 3–10 people.",
    features: [
      "Unlimited active jobs",
      "Full Company Brain with authority tiers",
      "Complete job management suite",
      "Unlimited AI estimate reading",
      "Meeting recorder & transcription (unlimited)",
      "Material selection extraction",
      "QuickBooks two-way sync",
      "Risk & compliance dashboard",
      "Priority support + onboarding call"
    ]
  },
  {
    name: "Enterprise",
    tagline: "For large operations that need maximum control",
    priceMonthly: 999,
    priceAnnually: 799,
    bestFor: "Large restoration companies or franchises with multiple locations, 20+ staff, and high job volume.",
    features: [
      "Everything in Professional",
      "Custom workflow automation (built for your process)",
      "Multi-location support",
      "Dedicated account manager",
      "API access for custom integrations",
      "White-label option (your brand, our platform)",
      "Custom onboarding & team training"
    ]
  }
];

const getPlanIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Zap className="w-20 h-20 text-silver shrink-0" />;
    case 1:
      return <Crown className="w-20 h-20 text-mercury-blue shrink-0 animate-pulse" />;
    case 2:
      return <Building2 className="w-20 h-20 text-starlight shrink-0" />;
    default:
      return null;
  }
};

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"annually" | "monthly">("annually");
  const [hoveredPlan, setHoveredPlan] = useState<number>(1);

  return (
    <section id="pricing" className="bg-surface-abyss py-50 relative overflow-hidden border-b border-slate-lead/20">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mercury-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-mercury-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Centered Premium Header */}
        <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
            Simple, Transparent Pricing. <br className="hidden md:block"/>
            <span className="text-mercury-blue">No Seat Charges. Surprises Free.</span>
          </h2>
          <p className="text-body text-silver leading-relaxed max-w-2xl mx-auto font-light">
            One flat monthly fee. No per-user fees that penalize your growth. Cancel anytime.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center gap-2 bg-surface-abyss/85 border border-slate-lead/20 p-4 rounded-2xl mt-8 relative">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "relative px-20 py-6 rounded-lg text-caption font-bold transition-colors duration-300 z-10",
                billingPeriod === "monthly" 
                  ? "text-pure-white" 
                  : "text-silver hover:text-starlight"
              )}
            >
              {billingPeriod === "monthly" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-mercury-blue rounded-l -z-10 shadow-md shadow-mercury-blue/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={cn(
                "relative px-20 py-6 rounded-lg text-caption font-bold transition-colors duration-300 flex items-center gap-8 z-10",
                billingPeriod === "annually" 
                  ? "text-pure-white" 
                  : "text-silver hover:text-starlight"
              )}
            >
              {billingPeriod === "annually" && (
                <motion.div
                  layoutId="activeBilling"
                  className="absolute inset-0 bg-mercury-blue rounded-lg -z-10 shadow-md shadow-mercury-blue/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Annually
              <span className={cn(
                "text-[10px] uppercase font-black px-8 py-2 rounded transition-all duration-300 relative z-20",
                billingPeriod === "annually" 
                  ? "bg-pure-white/20 text-pure-white" 
                  : "bg-success/15 text-success border border-success/20"
              )}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-stretch mb-20 pt-16">
          {plans.map((plan, idx) => {
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceAnnually;
            const savings = plan.priceMonthly - plan.priceAnnually;
            const isHovered = hoveredPlan === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredPlan(idx)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "p-24 md:p-32 rounded-3xl flex flex-col justify-between relative border transition-all duration-500 ease-out shadow-[0_24px_70px_rgba(0,0,0,0.18)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)]",
                  isHovered 
                    ? "bg-surface-surface border-mercury-blue ring-2 ring-mercury-blue/40 lg:scale-[1.03] shadow-[0_24px_70px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_32px_90px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                    : "bg-surface-surface border-slate-lead/20 hover:border-mercury-blue/30 hover:shadow-[0_32px_90px_rgba(0,0,0,0.24),0_0_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(82,102,235,0.5)] lg:scale-100"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-24 -translate-y-1/2 bg-surface-abyss px-12 py-2 text-mercury-blue text-[9px] uppercase font-black tracking-widest border-none rounded shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    Most Popular
                  </div>
                )}

                <div className="space-y-24">
                  <div className="flex items-start justify-between gap-12">
                    <div>
                      <h3 className="text-subheading font-display text-starlight font-bold mb-2">{plan.name}</h3>
                      <p className="text-caption text-silver leading-relaxed min-h-[40px] font-light">{plan.tagline}</p>
                    </div>
                    {getPlanIcon(idx)}
                  </div>

                  <div className="space-y-4">
                    {billingPeriod === "annually" ? (
                      <div className="flex items-center gap-8 h-24">
                        <span className="text-caption text-silver line-through font-light">Was ${plan.priceMonthly}/mo</span>
                        <span className="text-[10px] uppercase font-black text-success bg-success/10 px-8 py-2 rounded">
                          Save ${savings}/mo
                        </span>
                      </div>
                    ) : (
                      <div className="h-24" />
                    )}
                    <div className="flex items-baseline gap-4">
                      <span className="text-display font-display text-starlight font-bold tracking-tight">${price}</span>
                      <span className="text-body-sm text-silver font-light">/month</span>
                    </div>
                  </div>

                  {/* High-Contrast Target Scale Box */}
                  <div className="bg-surface-interactive/45 dark:bg-surface-interactive/25 border border-slate-lead/15 p-16 rounded-2xl">
                    <span className="text-[10px] uppercase font-black text-mercury-blue tracking-wider block mb-4">Target Scale</span>
                    <p className="text-caption text-silver leading-relaxed font-light">{plan.bestFor}</p>
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-12 pt-16 border-t border-slate-lead/20">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="text-body-sm text-silver flex items-start gap-12">
                        <div className="w-16 h-16 rounded-full bg-mercury-blue/10 flex items-center justify-center text-mercury-blue shrink-0 mt-2">
                          <Check className="w-12 h-12" />
                        </div>
                        <span className="font-light leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-24">
                  <button className={cn(
                    "group w-full min-h-[56px] px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-4 sm:gap-8 border",
                    isHovered 
                      ? "bg-mercury-blue hover:bg-emerald-600 border-emerald-500/20 hover:border-emerald-500/40 text-pure-white shadow-[0_2px_12px_rgba(21,128,61,0.15)] hover:shadow-[0_4px_20px_rgba(21,128,61,0.3)]" 
                      : "bg-transparent border-slate-lead/30 hover:border-mercury-blue/60 text-silver hover:text-starlight hover:bg-mercury-blue/5"
                  )}>
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-12 h-12 transition-transform duration-300 group-hover:translate-x-4 shrink-0" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Reassurance */}
        <div className="bg-surface-abyss border border-slate-lead/25 rounded-3xl p-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm">
          <div className="w-40 h-40 rounded-2xl bg-mercury-blue/10 flex items-center justify-center text-mercury-blue shrink-0">
            <Info className="w-20 h-20" />
          </div>
          <p className="text-body-sm font-display text-starlight leading-relaxed">
            <strong className="text-mercury-blue">Risk-Free Guarantee:</strong> If BIGlogic doesn't save you at least 3× its monthly cost in the first 30 days, we'll give you a full refund. No questions asked.
          </p>
        </div>

      </div>
    </section>
  );
};
