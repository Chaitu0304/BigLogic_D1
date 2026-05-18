import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problems } from "@/components/landing/Problems";
import { Solution } from "@/components/landing/Solution";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { AITools } from "@/components/landing/AITools";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { WhoItsFor } from "@/components/landing/WhoItsFor";
import { Integrations } from "@/components/landing/Integrations";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { Navigate } from "react-router-dom";

const Index = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-surface-abyss text-starlight font-body overflow-x-hidden selection:bg-mercury-blue selection:text-pure-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problems />
      <Solution />
      <HowItWorks />
      <Services />
      <AITools />
      <WhatYouGet />
      <WhoItsFor />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

