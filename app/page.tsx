"use client"

import { useState, useEffect } from "react"
import { Zap, Shield, BarChart3, TrendingUp, Users, Globe, CheckCircle, ArrowRight, Star, Sparkles, Database, Code, Cpu, Activity, Lightbulb, TrendingDown, BookOpen } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Custom Animation Styles Component
const GlobalStyles = () => (
    <style jsx global>{`
      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-slide-up {
        animation: slide-up 0.6s ease-out forwards;
      }

      .animate-delay-1 {
        animation-delay: 0.2s;
        opacity: 0;
      }

      .animate-delay-2 {
        animation-delay: 0.4s;
        opacity: 0;
      }

      .animate-delay-3 {
        animation-delay: 0.6s;
        opacity: 0;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.8;
        }
      }

      .animate-pulse-soft {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .bg-pos-0 {
        background-position: 0% 0%;
      }
      .hover\\:bg-pos-100:hover {
        background-position: 100% 0%;
      }
      .bg-size-200 {
        background-size: 200% 100%;
      }
    `}</style>
);

// Dashboard Visualization Component
const DashboardVisualization = () => {
  const [animatedBars, setAnimatedBars] = useState(false)

  useEffect(() => {
    setAnimatedBars(true)
  }, [])

  const chartData = [
    { label: 'Q1', value: 65, delay: 0 },
    { label: 'Q2', value: 78, delay: 0.1 },
    { label: 'Q3', value: 85, delay: 0.2 },
    { label: 'Q4', value: 92, delay: 0.3 }
  ]

  const metrics = [
    { icon: TrendingUp, label: 'Revenue', value: '+40%', color: 'text-green-400' },
    { icon: Users, label: 'Users', value: '+25%', color: 'text-blue-400' },
    { icon: Globe, label: 'Reach', value: 'Global', color: 'text-purple-400' },
    { icon: Activity, label: 'Performance', value: '100%', color: 'text-orange-400' }
  ]

  return (
    <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 border border-border/50 shadow-xl relative overflow-hidden group hover:border-accent/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Analytics Dashboard</h3>
            <p className="text-lg font-bold text-foreground">Performance Overview</p>
          </div>
          <BarChart3 className="w-8 h-8 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Chart Area */}
        <div className="flex items-end justify-between gap-4 flex-1 mb-6">
          {chartData.map((data, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 flex-1">
              <div className="relative w-full h-32 bg-muted/30 rounded-lg overflow-hidden flex items-end justify-center">
                <div
                  className={`w-full bg-gradient-to-t from-accent to-primary rounded transition-all duration-1000 ease-out ${
                    animatedBars ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    height: animatedBars ? `${data.value}%` : '0%',
                    transitionDelay: `${data.delay}s`
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-muted-foreground">{data.label}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-3">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:border-accent/50 transition-all hover:shadow-md">
                <Icon className={`w-5 h-5 ${metric.color} mb-2`} />
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-bold text-foreground">{metric.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
    const [hasAnimated, setHasAnimated] = useState(false)
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        setHasAnimated(true)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const features = [
        {
            icon: <Database className="w-8 h-8" />,
            title: "Connect Your Data",
            description: "Seamlessly integrate all your data sources, from local databases to cloud services, in minutes.",
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Visualize and Analyze",
            description: "Unlock real-time dashboards and custom reports tailored to every department's needs.",
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI-Powered Insights",
            description: "Get predictive analytics and automated recommendations to drive strategy forward.",
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Actionable Intelligence",
            description: "Move from understanding to action with direct links to your workflow tools.",
        },
    ]

    const benefits = [
        { icon: <TrendingUp className="w-5 h-5" />, text: "40% Revenue Growth Potential" },
        { icon: <Users className="w-5 h-5" />, text: "Boost Team Productivity by 25%" },
        { icon: <Globe className="w-5 h-5" />, text: "Global Scalability & Compliance" },
        { icon: <Activity className="w-5 h-5" />, text: "100% Data-Driven Decisions" },
    ]

    const testimonials = [
        {
            quote: "Total View transformed how we analyze our business data. The predictive AI insights are simply invaluable and have changed our market approach.",
            author: "Sarah Johnson",
            role: "CEO, TechCorp",
            rating: 5,
        },
        {
            quote: "Implementation was seamless, and the ROI was visible within the first month. The real-time visibility gave us a competitive edge we desperately needed.",
            author: "Michael Chen",
            role: "CTO, DataFlow Solutions",
            rating: 5,
        },
        {
            quote: "The security features are bank-level, giving us total confidence. Our operations VP was thrilled with the immediate productivity boost.",
            author: "Emily Rodriguez",
            role: "VP Operations, CloudSync",
            rating: 5,
        },
    ]

    const stats = [
        { value: "10K+", label: "Active Users" },
        { value: "99.9%", label: "Guaranteed Uptime" },
        { value: "24/7", label: "Global Support" },
        { value: "50+", label: "Integrated Platforms" },
    ]

    return (
        <main className="w-full overflow-hidden bg-background">
            <GlobalStyles />
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center justify-center relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/50">
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-pulse-soft" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] animate-pulse-soft"
                    style={{ animationDelay: "1.5s" }}
                />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className={`mb-8 ${hasAnimated ? "animate-slide-up" : "opacity-0"}`}>
                        <div className="inline-block mb-4 px-5 py-2 rounded-full bg-accent/15 border border-accent/40 backdrop-blur-sm shadow-md">
                            <span className="text-sm font-bold text-accent uppercase tracking-[0.2em]">
                                THE FUTURE OF DATA INTELLIGENCE
                            </span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-foreground tracking-tighter">
                            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                                Unlock Total
                            </span>
                            <br />
                            <span className="relative">
                                Visibility
                                <svg
                                    className="absolute -bottom-3 left-0 w-full h-4 text-primary/40"
                                    viewBox="0 0 200 16"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="4" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-muted-foreground font-light mt-8 max-w-4xl mx-auto">
                            Transform raw data into **actionable intelligence** with real-time analytics and predictive AI built for global scale.
                        </p>
                    </div>

                    {/* CTA Group - FIXED: Reduced lighting and shadow */}
                    <div
                        className={`flex flex-col sm:flex-row gap-5 justify-center items-center mt-12 ${hasAnimated ? "animate-slide-up animate-delay-2" : "opacity-0"}`}
                    >
                        <Link href="/contact" passHref>
                            <button className="group relative w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Free Trial <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                </span>
                            </button>
                        </Link>

                        <Link href="/pricing" passHref>
                            <button className="group w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-background">
                                <span className="flex items-center justify-center gap-3">
                                    View Plans <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats/Trust Bar */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b border-border/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-2">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Pipeline Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                            THE TOTAL VIEW ADVANTAGE
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                            Data Flowing to <span className="text-accent">Success</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our platform turns complex data streams into a clear, four-step path to profitable decisions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="relative p-8 rounded-2xl border border-border/50 transition-all duration-500 group bg-background/50 backdrop-blur-sm shadow-lg hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-accent mb-6 group-hover:scale-[1.05] group-hover:bg-primary/20 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <span className="text-xs font-extrabold uppercase text-accent/70 block mb-2">Step 0{index + 1}</span>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                
                                {index < features.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-px bg-border/50">
                                        <ArrowRight className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-5 h-5 text-border" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Services CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50 border-t border-border/50">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-6">
                        <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                            Need Custom <span className="text-accent">Solutions?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Beyond our platform, explore our specialized services designed to meet your unique needs in security, development, and compliance.
                        </p>
                    </div>

                    <Link href="/services" passHref>
                        <button className="group relative px-10 py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-accent via-primary to-accent text-black overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                View Our Full Service Catalog
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </span>
                        </button>
                    </Link>

                    <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary/70" />
                            <span>Security Audits</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-primary/70" />
                            <span>Custom Dev</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary/70" />
                            <span>Compliance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Grid - WITH DASHBOARD */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                                RESULTS FOCUSED
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                                Experience the <span className="text-primary">Measurable Impact</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We don't just provide data; we deliver verifiable business outcomes. Our clients see rapid return on investment and sustained competitive advantages.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/80 border border-border/50 shadow-md hover:shadow-lg transition-all hover:border-accent/50">
                                        <div className="text-accent flex-shrink-0">{benefit.icon}</div>
                                        <span className="text-sm font-semibold text-foreground">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Dashboard Visualization */}
                        <div className="hidden lg:block">
                            <DashboardVisualization />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                            Trusted by <span className="text-accent">Industry Leaders</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">Don't just take our word for it—see what our satisfied customers are achieving.</p>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-background/90 to-background rounded-3xl p-8 sm:p-12 border border-border/50 shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-primary/20">
                            
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-accent text-accent transition-all duration-500" />
                                ))}
                            </div>

                            <p className="text-xl sm:text-2xl text-foreground mb-8 text-center font-serif italic leading-relaxed transition-opacity duration-500">
                                "{testimonials[activeTestimonial].quote}"
                            </p>

                            <div className="text-center border-t border-border/50 pt-6">
                                <p className="font-extrabold text-xl text-primary">{testimonials[activeTestimonial].author}</p>
                                <p className="text-base text-muted-foreground font-medium">{testimonials[activeTestimonial].role}</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-3 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                        index === activeTestimonial ? "bg-accent w-10" : "bg-border hover:bg-primary/50"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 sm:p-16 border border-primary/20 relative overflow-hidden shadow-2xl shadow-primary/10">
                        
                        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] opacity-70" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] opacity-70" />

                        <div className="relative z-10">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground leading-tight">
                                Ready to Achieve <span className="text-accent">Total Visibility?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                                Start your journey to data-driven decision-making today. It only takes a minute to begin your free trial.
                            </p>

                            <Link href="/contact" passHref>
                                <button className="group relative px-12 py-5 rounded-xl font-bold text-xl bg-gradient-to-r from-primary to-accent text-black bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-3xl shadow-primary/50 hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Get Started FREE <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                            </Link>

                            <p className="text-sm text-muted-foreground mt-6 font-semibold flex justify-center gap-6">
                                <Shield className="w-4 h-4 text-accent" /> 14-day Free Trial
                                <CheckCircle className="w-4 h-4 text-accent" /> No Credit Card Required
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}