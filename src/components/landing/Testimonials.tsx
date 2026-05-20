import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I used to have two full-time office staff just handling estimates and contracts. With BIGlogic, the AI does it faster and never makes a mistake. That is $3,800 a month saved back in my pocket.",
    name: "Marcus T.",
    role: "Owner",
    company: "Pinnacle Restoration, Dallas TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    quote: "Before BIGlogic, keeping site meeting details straight was a struggle. Now, I record walkthroughs on my tablet and get instant task lists and summaries. I don't know how I managed without it.",
    name: "Sarah K.",
    role: "Senior PM",
    company: "BlueSky Rebuild, Phoenix AZ",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
  },
  {
    quote: "We had a claim rejected last year due to a manual estimate error. With BIGlogic, the AI checks every single guideline check before submission. We haven't had a claim rejected in 8 months.",
    name: "Robert M.",
    role: "Finance Director",
    company: "Allied Storm Recovery, Atlanta GA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  },
  {
    quote: "I was skeptical because I am not a tech person. But the interface is simple and clean. My assistant setup our brain in one afternoon and our operations have been running automatically since.",
    name: "Dave C.",
    role: "Owner",
    company: "Riverside Roof & Restore, Columbus OH",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-surface-abyss py-50 relative overflow-hidden border-b border-slate-lead/20">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          {/* Aggregate Rating Block */}
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-mercury-blue text-mercury-blue" />
              ))}
            </div>
            <p className="text-caption font-bold text-starlight uppercase tracking-wider">
              4.9 out of 5 · Based on 120+ verified reviews
            </p>
          </div>

          <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
            Trusted by Restoration Professionals <br />
            <span className="text-mercury-blue">Running High-Growth Operations.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-surface-surface border border-slate-lead/20 p-24 rounded-3xl relative flex flex-col justify-between transition-all duration-500 ease-out overflow-hidden shadow-[0_0_32px_rgba(0,0,0,0.16)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_48px_rgba(0,0,0,0.24)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] hover:border-mercury-blue/30"
            >
              {/* Left Accent Gradient Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-mercury-blue via-emerald-500/70 to-transparent rounded-l-3xl" />
              
              <div className="space-y-20 relative z-10 pl-8">
                <p className="text-body-sm text-silver leading-relaxed italic font-light">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-16 pt-20 border-t border-slate-lead/20">
                  <div className="p-[3px] border border-mercury-blue/30 rounded-full shrink-0 shadow-sm bg-surface-abyss group-hover:border-mercury-blue/60 transition-colors duration-300">
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-body-sm font-bold text-starlight leading-tight">{t.name}</h4>
                    <p className="text-caption text-silver leading-tight">
                      {t.role} &mdash; <span className="text-mercury-blue font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
