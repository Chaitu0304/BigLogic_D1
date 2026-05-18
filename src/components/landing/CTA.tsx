import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden bg-surface-abyss border-t border-slate-lead/20">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20"
        style={{ backgroundImage: `url('/images/mercury_house_twilight.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-abyss via-surface-abyss/85 to-surface-abyss pointer-events-none" />

      <div className="container relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-heading lg:text-heading-lg font-display text-starlight mb-6 leading-tight max-w-3xl">
          Take Back Your Weeks. <br/>
          <span className="text-mercury-blue">Put Your Business on Autopilot.</span>
        </h2>

        <p className="text-body font-body font-normal text-silver max-w-2xl mb-12 leading-relaxed">
          Stop letting paperwork run your company. Start building, scaling, and taking back your time today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={() => navigate("/signup")}
            className="h-14 px-8 bg-mercury-blue hover:bg-opacity-90 text-pure-white font-semibold rounded-full transition-all shadow-md text-body-sm"
          >
            Start Your 30-Day Free Trial
          </button>
          <button
            onClick={() => navigate("/login")}
            className="h-14 px-8 bg-surface-interactive hover:bg-surface-surface text-starlight font-semibold rounded-full transition-all border border-slate-lead/30 text-body-sm shadow-sm"
          >
            Talk to Our Team
          </button>
        </div>

        <p className="text-caption text-silver">
          No credit card required to start &middot; Cancel anytime &middot; 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};
