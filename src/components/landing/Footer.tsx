import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="font-body text-silver hover:text-starlight transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-surface-abyss border-t border-slate-lead/20 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-6 md:col-span-1">
            <Link to="/" className="flex items-start">
              <img src={theme === "dark" ? "/logo.png" : "/logo-light-theme.png"} alt="BigLogic Logo" width="140px" />
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-body text-starlight font-medium mb-6">Product</h4>
            <ul className="space-y-4">
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/security">Security</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/changelog">Changelog</FooterLink>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-body text-starlight font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-body text-starlight font-medium mb-6">Legal</h4>
            <ul className="space-y-4">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-lead/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-silver">
            © {new Date().getFullYear()} BigLogic Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="font-body text-silver hover:text-starlight transition-colors">Twitter</a>
            <a href="#" className="font-body text-silver hover:text-starlight transition-colors">LinkedIn</a>
            <a href="#" className="font-body text-silver hover:text-starlight transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
