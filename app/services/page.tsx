"use client"

import { useState, useEffect } from "react"
import { Code2, Lock, BarChart3, Zap, Shield, Users, ChevronDown, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Services() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)

  useEffect(() => {
    setHasAnimated(true)
  }, [])

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "CLI Tools for Security & Vulnerability Assessment",
      shortDesc: "Cutting-edge command-line utilities designed for security engineers, analysts, and DevSecOps teams.",
      description:
        "Advanced command-line tools that empower security professionals with real-time scanning, automated testing, and comprehensive security analysis capabilities.",
      subServices: [
        "Vulnerability Scanning CLI",
        "Port & Network Reconnaissance",
        "Automated Exploit Simulation",
        "Code Integrity Checker",
        "Secure API Penetration Toolkit",
        "Compliance & Policy Audit CLI",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      badge: "Security First",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Blockchain dApps & Smart Contract Security",
      shortDesc: "Building secure decentralized applications and audit-ready blockchain infrastructure.",
      description:
        "Comprehensive blockchain development platform with built-in security auditing, ensuring your dApps are production-ready and vulnerability-free.",
      subServices: [
        "Smart Contract Vulnerability Analyzer",
        "Tokenomics Audit Framework",
        "On-chain Data Visualizer",
        "Wallet Authentication Suite",
        "Gas Optimization Engine",
        "Blockchain Event Monitoring Dashboard",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      badge: "Web3 Ready",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "KYC Verification Suite",
      shortDesc: "AI-driven identity verification suite that simplifies onboarding while maintaining compliance.",
      description:
        "Next-generation identity verification powered by AI, ensuring seamless user onboarding while maintaining the highest standards of security and regulatory compliance.",
      subServices: [
        "Face & ID Document Verification",
        "Liveness Detection",
        "Address Proof Validation",
        "Fraud Pattern Recognition Engine",
        "Multi-layer AML Screening",
        "Enterprise KYC API Integration",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      badge: "AI-Powered",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Intelligence & Real-Time Analytics",
      shortDesc: "Real-time pipelines that transform raw data into actionable intelligence.",
      description:
        "Transform massive data streams into actionable insights with our real-time analytics platform, designed for security, compliance, and business intelligence.",
      subServices: [
        "Data Stream Processing",
        "Security Log Correlation",
        "Threat Pattern Detection",
        "Predictive Risk Analysis",
        "Cross-Source Data Linking",
        "Visualization & Dashboarding Tools",
      ],
      color: "from-orange-500/20 to-red-500/20",
      badge: "Real-Time",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Security Agents",
      shortDesc: "AI-driven autonomous agents for continuous security and system learning.",
      description:
        "Deploy intelligent AI agents that continuously monitor, learn, and adapt to emerging threats, providing autonomous security that evolves with your infrastructure.",
      subServices: [
        "Automated Threat Detection Bots",
        "Adaptive Defense Models",
        "Behavioral Anomaly Detection",
        "AI-driven Forensics Engine",
        "Incident Response Automation",
        "Secure AI Integration Framework",
      ],
      color: "from-indigo-500/20 to-violet-500/20",
      badge: "ML-Powered",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Security Infrastructure",
      shortDesc: "Build, monitor, and secure digital systems in real time.",
      description:
        "Comprehensive 24/7 security monitoring and threat detection infrastructure that protects your applications, endpoints, and cloud infrastructure around the clock.",
      subServices: [
        "Cloud Infrastructure Monitoring",
        "Intrusion Detection & Response (IDR)",
        "Endpoint Protection Network",
        "API Threat Detection System",
        "Continuous Log Intelligence",
        "SIEM Integration",
      ],
      color: "from-yellow-500/20 to-amber-500/20",
      badge: "24/7 Active",
    },
  ]

  return (
    <main className="w-full overflow-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className={`text-center mb-16 ${hasAnimated ? "animate-slide-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Security-First Solutions
              </span>
              <br />
              <span className="text-foreground">For Modern Enterprises</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security, blockchain, and intelligence tools designed to protect and empower your digital infrastructure
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">Explore our services</span>
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid with Expandable Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-muted/30">
        <style jsx>{`
          @keyframes pulse-highlight {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
            }
          }
          .animate-pulse-highlight {
            animation: pulse-highlight 2s infinite;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Complete <span className="text-accent">Security Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six powerful service categories designed to secure every aspect of your digital operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden ${
                  hasAnimated ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
                          <span className="text-xs font-semibold text-accent">{service.badge}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expand Button with Pulse Highlight */}
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className={`w-full mt-4 flex items-center justify-between px-4 py-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm font-medium text-foreground ${
                      expandedService === null ? "animate-pulse-highlight" : ""
                    }`}
                  >
                    <span>View All Capabilities</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedService === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedService === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 border-t border-border/50">
                    <div className={`pt-6 bg-gradient-to-br ${service.color} rounded-xl p-6 -mx-2`}>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      
                      <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-accent" />
                        Core Capabilities
                      </h4>
                      
                      <div className="grid gap-3">
                        {service.subServices.map((subService, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/30"
                          >
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{subService}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Vision</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Building a <span className="text-accent">Secure Future</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            To create a world where security, data, and intelligence coexist seamlessly — enabling teams and enterprises 
            to innovate with confidence. We believe that robust security shouldn't slow down innovation; it should accelerate it.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Security Monitoring</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-12 sm:p-16 text-center border border-primary/20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Let's Build the Future Securely
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a startup, enterprise, or research lab — TotalView is your security companion for the next generation of tech
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group relative inline-flex px-8 py-4 rounded-xl font-semibold text-lg bg-primary text-black hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                
                <Link href="/pricing" className="inline-flex px-8 py-4 rounded-xl font-semibold text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95">
                  View Pricing
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Free consultation • Custom solutions • Enterprise support available
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}