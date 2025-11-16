"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo" 

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) 
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes (Best Practice)
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  // Component for the dynamic active/hover indicator
  const ActiveIndicator = ({ href }: { href: string }) => (
    <span
      className={`absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
        pathname === href ? "w-full" : "w-0 group-hover:w-full group-hover:h-0.5"
      }`}
    />
  )

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-2xl shadow-primary/10"
          : "bg-background/80 backdrop-blur-lg border-b border-border/30"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation - Fixed flex layout */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-base lg:text-lg font-semibold transition-colors duration-200 group whitespace-nowrap rounded-lg ${
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <ActiveIndicator href={item.href} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-foreground bg-muted/50 hover:bg-muted transition-colors border border-border/50 shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[600px] border-t border-border/50 shadow-xl" : "max-h-0" 
        }`}
      >
        <div className="px-4 py-6 bg-background/95 backdrop-blur-xl space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                pathname === item.href
                  ? "bg-primary/15 text-primary shadow-inner ring-1 ring-primary/20"
                  : "text-foreground hover:bg-muted/50 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}