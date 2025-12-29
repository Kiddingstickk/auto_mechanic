import { Wrench, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Engine Repair', href: '#services' },
      { label: 'Diagnostics', href: '#services' },
      { label: 'Brake Service', href: '#services' },
      { label: 'Oil Change', href: '#services' },
      { label: 'Modifications', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#work' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Warranty Info', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <Wrench className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-foreground">PRECISION</span>
                <span className="font-display text-2xl tracking-wider text-primary ml-1">AUTO</span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Expert auto repair and modification services since 1995. 
              Your vehicle deserves the best – trust the professionals.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary border border-border rounded flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display text-lg text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Precision Auto. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Serving Detroit Metro Area Since 1995
            </p>
          </div>
        </div>
      </div>

      {/* Hazard Stripe */}
      <div className="h-2 hazard-stripe" />
    </footer>
  );
};

export default Footer;