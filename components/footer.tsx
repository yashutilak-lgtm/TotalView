import Link from "next/link"
import { Logo } from "./logo"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Define Navigation Links
  const navLinks = [
    {
      title: "Platform",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "Demo & Trial", href: "/contact" },
        { name: "Documentation", href: "#", external: true },
        { name: "AI Features", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Sales", href: "/contact" },
        { name: "Careers (Hiring!)", href: "#" },
        { name: "Our Blog", href: "#" },
      ],
    },
    {
      title: "Resources & Support",
      links: [
        { name: "Support Center", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Developer Docs", href: "#" },
        { name: "System Status", href: "#" },
      ],
    },
  ]

  // Social Media Links - UPDATE THESE WITH YOUR ACTUAL URLS
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/your-company-name", // CHANGE THIS
      ariaLabel: "LinkedIn"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/your-handle", // CHANGE THIS
      ariaLabel: "Twitter"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/your-username", // CHANGE THIS
      ariaLabel: "GitHub"
    }
  ]

  return (
    // Updated footer styling for a premium look
    <footer className="bg-background border-t border-border/50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 pb-16 border-b border-border/50">

          {/* Column 1: Logo & Mission Statement */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with intelligent, real-time analytics to unlock total data visibility and drive growth.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.ariaLabel}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Columns 2, 3, 4: Navigation Links */}
          {navLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-bold text-lg text-foreground mb-6 border-l-4 border-accent/70 pl-3">
                {section.title}
              </h4>
              <ul className="space-y-4 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors hover:underline hover:underline-offset-4"
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Column 5: Direct Contact Info (Highly Valuable) */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg text-foreground mb-6 border-l-4 border-primary/70 pl-3">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">Email Support</p>
                        <a href="mailto:support@totalview.in" className="hover:text-primary transition-colors">support@totalview.in</a>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">Phone (Sales)</p>
                        <a href="tel:+919108036919" className="hover:text-primary transition-colors">+91 9108036919</a>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-foreground">HQ Address</p>
                        <p>Stanfler Tech LLP, Bangalore, India</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar (Copyright & Legal) */}
        <div className="py-8 text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                
                <p className="order-2 sm:order-1">
                    &copy; {currentYear} TotalView. All rights reserved.
                </p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 order-1 sm:order-2 font-medium">
                    <Link href="#" className="hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>
                    <p className="text-primary font-semibold hidden lg:block">Built by Stanfler Tech LLP</p>
                </div>

            </div>
        </div>
      </div>
      
      {/* Subtle Bottom Separator */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </footer>
  )
}