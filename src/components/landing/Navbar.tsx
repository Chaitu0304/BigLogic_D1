import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "How it Works", id: "how-it-works" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-90 flex justify-center p-4 transition-all duration-500 pointer-events-none">
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full pointer-events-auto transition-all duration-500 ease-in-out border flex flex-col justify-center ${
          isScrolled 
            ? "max-w-[1240px] rounded-full bg-surface-surface/75 backdrop-blur-xl border-none shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-8 h-35"
            : "max-w-[1380px] rounded-3xl bg-surface-surface/30 backdrop-blur-md border-none px-10 h-50"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src={theme === "dark" ? "/logo.png" : "/logo-light-theme.png"} 
              alt="BigLogic Logo" 
              className={`transition-all duration-500 ${isScrolled ? "w-[115px]" : "w-[125px]"}`}
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="font-display text-body-sm font-semibold tracking-wider uppercase text-starlight hover:text-mercury-blue transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mercury-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            {localStorage.getItem("token") ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="font-display text-body-sm font-semibold tracking-wider uppercase text-starlight hover:text-mercury-blue transition-colors duration-300"
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="font-display text-body-sm font-semibold tracking-wider uppercase text-starlight hover:text-mercury-blue transition-colors duration-300 px-2 py-1"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className={`bg-mercury-blue hover:bg-primary-hover text-pure-white font-display text-body-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm flex items-center justify-center ${
                    isScrolled ? "px-6 py-2" : "px-7 py-2.5"
                  }`}
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-full text-starlight hover:bg-surface-interactive transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full overflow-hidden mt-2 border-t border-slate-lead/20 pt-4 pb-2"
            >
              <div className="flex flex-col gap-5 px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="font-display text-body-sm font-semibold uppercase tracking-wider text-starlight hover:text-mercury-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-slate-lead/20 my-1" />
                <div className="flex flex-col gap-3">
                  {localStorage.getItem("token") ? (
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setMobileMenuOpen(false);
                      }}
                      className="font-display text-body-sm font-semibold uppercase tracking-wider text-left text-starlight hover:text-mercury-blue duration-300"
                    >
                      Dashboard
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          navigate("/login");
                          setMobileMenuOpen(false);
                        }}
                        className="font-display text-body-sm font-semibold uppercase tracking-wider text-left text-starlight hover:text-mercury-blue py-1 duration-300"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          navigate("/signup");
                          setMobileMenuOpen(false);
                        }}
                        className="bg-mercury-blue text-pure-white hover:bg-primary-hover font-display text-body-sm font-semibold uppercase tracking-wider rounded-full py-2.5 w-full transition-all duration-300 text-center shadow"
                      >
                        Get Started
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
