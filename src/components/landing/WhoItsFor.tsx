import { Building2, Briefcase, DollarSign, HardHat } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    icon: Building2,
    title: "Company Owner / Admin",
    desc: (
      <>
        Oversee all operations, P&Ls, and team efficiency in one place. Define <strong className="text-starlight font-semibold">granular permissions</strong> and workflows.
      </>
    )
  },
  {
    icon: Briefcase,
    title: "Project Manager",
    desc: (
      <>
        Run active jobs in parallel, complete trade tracking, and automate <strong className="text-starlight font-semibold">carrier communication</strong>.
      </>
    )
  },
  {
    icon: DollarSign,
    title: "Finance & Office Staff",
    desc: (
      <>
        Automate invoice drafts, organize billing records, and log instant <strong className="text-starlight font-semibold">QuickBooks sync</strong> events.
      </>
    )
  },
  {
    icon: HardHat,
    title: "Field Staff / Site Manager",
    desc: (
      <>
        Direct onsite notes capture, upload job photos, and post <strong className="text-starlight font-semibold">real-time field updates</strong> live on location.
      </>
    )
  }
];

export const WhoItsFor = () => {
  return (
    <section className="py-50 bg-surface-abyss relative border-b border-slate-lead/20">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Copy & Grid */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-heading lg:text-heading-lg font-display text-starlight mb-6 leading-tight">
                Built for Every Person <br className="hidden md:block"/>
                <span className="text-mercury-blue">on Your Restoration Team.</span>
              </h2>
              <p className="text-body text-silver leading-relaxed max-w-xl">
                BIGlogic isolates exact operational views per role — so your office administrators, finance teams, project managers, and field crews see precisely what they need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-24 md:p-32 rounded-3xl bg-surface-surface border border-slate-lead/20 hover:border-mercury-blue/30 flex flex-col justify-between transition-all duration-500 ease-out shadow-[0_0_30px_rgba(0,0,0,0.16)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_48px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] hover:-translate-y-0.5"
                >
                  <div className="flex flex-row items-start gap-20 ">
                    <div className="w-56 h-56 rounded-2xl bg-mercury-blue/10 flex items-center justify-center text-mercury-blue shrink-0 shadow-[0_4px_20px_rgba(21,128,61,0.05)]">
                      <role.icon className="w-28 h-28" />
                    </div>
                    <div className="space-y-8 flex-grow h-45">
                      <h3 className="text-subheading font-display text-starlight font-bold leading-tight">
                        {role.title}
                      </h3>
                      <p className="text-body-sm text-silver leading-relaxed font-light">
                        {role.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Graphic Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-lead/30 shadow-[0_24px_90px_rgba(0,0,0,0.18)] aspect-[4/5] bg-surface-interactive hover:shadow-[0_32px_110px_rgba(0,0,0,0.24)] transition-all duration-500"
          >
            <img 
              src="/images/mercury_team_collaboration.png" 
              alt="Diverse property restoration crew collaborating in front of BIGlogic AI connected dashboard interface" 
              className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-abyss/85 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/75 border border-white/10 backdrop-blur-md shadow-lg">
              <blockquote className="text-body-sm font-display text-white font-medium italic leading-relaxed">
                "No matter your role — if you touch a restoration project, BIGlogic has a workspace designed for you."
              </blockquote>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
