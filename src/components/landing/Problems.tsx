import { motion } from "framer-motion";

const problems = [
  {
    num: "01.",
    quote: "Drowning in Daily Paperwork",
    desc: (
      <>
        Estimates are manually re-typed and progress is tracked on whiteboards.{" "}
        <strong className="text-starlight font-semibold">Valuable hours are wasted</strong> on slow, repetitive back-office admin.
      </>
    )
  },
  {
    num: "02.",
    quote: "Fear of Insurance Rejections",
    desc: (
      <>
        A single guideline infraction can trigger a claim rejection,{" "}
        <strong className="text-starlight font-semibold">blocking $40,000+ payments</strong> and crippling company cash flow.
      </>
    )
  },
  {
    num: "03.",
    quote: "Scattered Document Storage",
    desc: (
      <>
        Contracts sit in scattered emails and lost desktops.{" "}
        <strong className="text-starlight font-semibold">Finding the right SOP or file</strong> is a slow, daily struggle.
      </>
    )
  }
];

export const Problems = () => {
  return (
    <section className="bg-surface-abyss py-24 border-b border-slate-lead/20 relative">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Copy & Problems */}
          <div className="space-y-12">
            <div>
              <h2 className="text-heading lg:text-heading-lg font-display text-starlight mb-6 leading-tight">
                Running a Restoration Business <br/>
                <span className="text-mercury-blue">Shouldn't Feel Like This.</span>
              </h2>
              <p className="text-body text-silver leading-relaxed max-w-lg">
                If you manage a property restoration company, daily operations can feel like a constant battle against document clutter, lost details, and profit leaks.
              </p>
            </div>

            <div className="space-y-8">
              {problems.map((prob, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="text-mercury-blue font-display text-subheading font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    {prob.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-subheading font-medium text-starlight">
                      {prob.quote}
                    </h3>
                    <p className="text-silver text-body-sm leading-relaxed max-w-md">
                      {prob.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-slate-lead/30 shadow-2xl aspect-[4/3] bg-surface-interactive"
          >
            <img 
              src="/images/mercury_problems_desk.png" 
              alt="Messy property restoration office workspace with paperwork" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-abyss/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Visual Callout Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/75 border border-white/10 backdrop-blur-md shadow-lg">
              <p className="text-caption text-emerald-400 uppercase tracking-widest font-bold">Industry Average</p>
              <h4 className="text-body font-display font-bold text-white mt-2 leading-relaxed">
                Restoration owners waste up to <span className="text-emerald-400 font-extrabold underline decoration-emerald-400/40">15 hours per week</span> on admin.
              </h4>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
