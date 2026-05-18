import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Do I need to be tech-savvy to use BIGlogic?",
    answer: "Not at all. BIGlogic was designed for people who run construction businesses — not tech companies. If you can use a smartphone, you can use BIGlogic. Most users are fully active within one day."
  },
  {
    question: "What exactly is an Xactimate estimate?",
    answer: "Xactimate is the industry-standard software insurance adjusters use to calculate damage claims. BIGlogic automatically parses these PDFs so you don't have to spend hours re-typing estimates manually."
  },
  {
    question: "Will this replace my existing accounting software?",
    answer: "No. BIGlogic synchronizes directly with QuickBooks Online. BIGlogic automates operational management, material lists, and contract drafts, while QuickBooks keeps handling the books."
  },
  {
    question: "What happens to my data? Is it safe?",
    answer: "Your data is stored in secure, enterprise-grade Amazon Web Services (AWS) data stores. All data in transit and at rest is completely encrypted. You own your company's documents entirely."
  },
  {
    question: "How long does it take to set up?",
    answer: "Most restoration businesses are fully operational within one business day. There is no complicated installation, and every Professional plan comes with standard 1-on-1 team onboarding support."
  },
  {
    question: "Can my whole team use it, or just one person?",
    answer: "Your entire team can use it. Every BIGlogic tier offers role-based access limits. Your estimators, office admins, PMs, and field crews get their own secure profiles."
  },
  {
    question: "What if I don't like it? Can I get a refund?",
    answer: "Yes. We offer a 30-day money-back guarantee. If BIGlogic doesn't save you multiple hours in the first 30 days, notify us and we'll refund your fee. No questions asked."
  },
  {
    question: "Does this work for all types of restoration work?",
    answer: "Yes. BIGlogic supports all standard restoration services, including water extraction, fire mitigation, storm damage reconstruction, roofing, and general remodeling projects."
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface-abyss relative overflow-hidden border-b border-slate-lead/20">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mercury-blue/10 border border-mercury-blue/20 text-mercury-blue text-caption uppercase tracking-wider font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Support Center</span>
          </div>
          <h2 className="text-heading lg:text-heading-lg font-display text-starlight leading-tight">
            Got Questions? <br className="hidden md:block"/>
            <span className="text-mercury-blue">We've Got Answers.</span>
          </h2>
          <p className="text-body text-silver max-w-lg mx-auto leading-relaxed">
            If something is on your mind, it's probably here. If not, our team is one message away.
          </p>
        </div>
 
        <div className="space-y-16 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-[2px] ${
                openIndex === index 
                  ? "bg-surface-surface border-mercury-blue/45 border-l-4 border-l-mercury-blue shadow-[0_20px_45px_rgba(21,128,61,0.1)] dark:shadow-[0_20px_45px_rgba(21,128,61,0.25)]" 
                  : "bg-surface-surface border-slate-lead/20 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-slate-lead/35 hover:shadow-[0_25px_45px_rgba(21,128,61,0.06)] dark:hover:shadow-[0_25px_45px_rgba(21,128,61,0.18)]"
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="group w-full p-24 flex justify-between items-center text-left gap-16"
              >
                <span className="font-display text-subheading font-bold text-starlight leading-tight">
                  {item.question}
                </span>
                <div className={`w-32 h-32 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-mercury-blue/20 text-mercury-blue scale-110" 
                    : "bg-slate-lead/10 text-silver group-hover:bg-slate-lead/20 group-hover:text-starlight"
                }`}>
                  <ChevronDown className={`w-16 h-16 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-24 pb-24 pt-4 border-t border-slate-lead/10">
                      <p className="text-body-sm text-silver leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
