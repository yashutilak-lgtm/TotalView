"use client"


import { useState, useEffect, useMemo, JSX } from "react"
import { Eye, Users, Lightbulb, Award, Globe, TrendingUp, Shield, Target, Zap, Code2, ArrowRight, Sparkles, Lock, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- TYPE DEFINITIONS TO FIX TS7031 ERRORS ---

interface StatData {
  number: string;
  label: string;
  icon: JSX.Element;
}

interface TimelineData {
  year: string;
  title: string;
  description: string;
}

interface ValueData {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

interface StatProps {
  stat: StatData;
  index: number;
}

interface TimelineProps {
  item: TimelineData;
  index: number;
}

interface ValueProps {
  value: ValueData;
  index: number;
}

// Define animation classes for reuse
const ANIMATION_CLASSES = {
  fadeIn: "transition-opacity duration-1000 ease-out opacity-100",
  fadeOut: "opacity-0",
  slideUp: "translate-y-0",
  slideDown: "translate-y-4",
}

// Security Dashboard Component
const SecurityDashboard = () => {
  const [animateMetrics, setAnimateMetrics] = useState(false)

  useEffect(() => {
    setAnimateMetrics(true)
  }, [])

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Security Control</h3>
            <p className="text-lg font-bold text-foreground">Real-time Monitoring</p>
          </div>
          <Lock className="w-8 h-8 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Threats Detected */}
          <div className={`bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 transition-all duration-500 ${animateMetrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <span className="text-xs text-muted-foreground font-semibold">Threats</span>
            </div>
            <p className="text-2xl font-bold text-foreground">0</p>
            <p className="text-xs text-green-400 font-semibold mt-1">✓ Secured</p>
          </div>

          {/* Systems Protected */}
          <div className={`bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 transition-all duration-500 ${animateMetrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-delay-100`}>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-semibold">Protected</span>
            </div>
            <p className="text-2xl font-bold text-foreground">150+</p>
            <p className="text-xs text-blue-400 font-semibold mt-1">Active</p>
          </div>

          {/* Compliance */}
          <div className={`bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 transition-all duration-500 ${animateMetrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-delay-200`}>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs text-muted-foreground font-semibold">Compliance</span>
            </div>
            <p className="text-2xl font-bold text-foreground">99.9%</p>
            <p className="text-xs text-green-400 font-semibold mt-1">Compliant</p>
          </div>
        </div>

        {/* Status Bar */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">Data Integrity</span>
              <span className="text-xs text-accent font-bold">100%</span>
            </div>
            <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000 ${animateMetrics ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">System Health</span>
              <span className="text-xs text-primary font-bold">98%</span>
            </div>
            <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 delay-100 ${animateMetrics ? 'w-[98%]' : 'w-0'}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data definitions moved outside of the component to prevent re-creation on every render
const CORE_VALUES: ValueData[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security First",
    description: "Every line of code, every feature, every decision starts with security. We don't bolt on protection as an afterthought—we architect it from the foundation.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We push boundaries and challenge conventions. Our commitment to cutting-edge technology ensures you're always ahead of emerging threats and opportunities.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Empowerment",
    description: "We build tools that amplify human potential. Our solutions don't replace your expertise—they enhance it, letting you focus on what matters most.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "Mediocrity isn't in our vocabulary. We obsess over details, optimize relentlessly, and deliver solutions that exceed expectations every single time.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision",
    description: "In security and automation, accuracy is everything. Our systems are designed for reliability, delivering consistent results you can trust.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Speed",
    description: "Security shouldn't slow you down. Our tools are optimized for performance, enabling rapid response without compromising thoroughness.",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

const COMPANY_STATS: StatData[] = [
  { number: "10K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
  { number: "500M+", label: "Data Points Analyzed", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
  { number: "150+", label: "Enterprise Clients", icon: <Globe className="w-6 h-6" /> },
]

const COMPANY_TIMELINE: TimelineData[] = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Founded by a team of security engineers frustrated with fragmented, outdated tools. We set out to build something better.",
  },
  {
    year: "2024 Q2",
    title: "First Product Launch",
    description: "Released our CLI security toolkit, instantly adopted by DevSecOps teams seeking reliable, efficient vulnerability assessment.",
  },
  {
    year: "2024 Q4",
    title: "Enterprise Expansion",
    description: "Scaled to serve 150+ enterprise clients across fintech, healthcare, and blockchain sectors with specialized security solutions.",
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Launched AI-powered security agents, revolutionizing automated threat detection and response capabilities.",
  },
]

// Component for individual Stat Block (Type added: StatProps)
const StatBlock = ({ stat, index }: StatProps) => (
  <div
    key={index}
    className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden"
  >
    {/* Subtle gradient overlay on hover for effect */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10 text-center">
      {/* Icon with hover effect */}
      <div className="flex justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
    </div>
  </div>
)

// Component for individual Timeline Item (Type added: TimelineProps)
const TimelineItem = ({ item, index }: TimelineProps) => (
  <div key={index} className="relative pl-20">
    {/* Timeline dot */}
    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
      <div className="flex items-center flex-wrap gap-3 mb-2">
        <span className="text-sm font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20 whitespace-nowrap">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
        <div />
      </div>
      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  </div>
)

// Component for individual Core Value Card (Type added: ValueProps)
const ValueCard = ({ value, index }: ValueProps) => (
  <div
    key={index}
    className="relative p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group bg-background/50 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
  >
    {/* Gradient background on hover */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
    />
    <div className="relative z-10">
      {/* Icon container with background and hover effects */}
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {value.icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
    </div>
  </div>
)

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false)

  // Use useEffect for setting animation state on mount
  useEffect(() => {
    // Timeout added for a cleaner initial render and delayed fade-in effect
    const timeout = setTimeout(() => {
      setHasAnimated(true)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  // Optimized class names for Hero animation
  const heroAnimationClasses = useMemo(() => {
    return `${hasAnimated ? ANIMATION_CLASSES.fadeIn : ANIMATION_CLASSES.fadeOut} ${hasAnimated ? ANIMATION_CLASSES.slideUp : ANIMATION_CLASSES.slideDown} transition-all duration-1000`
  }, [hasAnimated])

  return (
    <main className="w-full overflow-hidden bg-background">
      <Navigation />

      {/* Hero Section - Securing the Digital Future */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Background Gradients/Blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "700ms" }}
        />
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <div className={`mb-8 ${heroAnimationClasses}`}>
            {/* Header Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Securing the Digital Future
              </span>
              <br />
              <span className="text-foreground">One System at a Time</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              We're engineers obsessed with building technology that protects, empowers, and innovates—without compromise
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">Discover our journey</span>
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section - Trusted by Thousands */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Trusted by <span className="text-accent">Thousands</span>
            </h2>
            <p className="text-lg text-muted-foreground">Our impact in numbers</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat, index) => (
              <StatBlock key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - WITH SECURITY DASHBOARD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a team of engineers driven by one obsession—building technology that <span className="font-semibold text-foreground">secures the digital future</span>.
                At Total View, <span className="font-semibold text-foreground">innovation meets precision</span> in every solution we create.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines years of expertise in <span className="font-semibold text-foreground">cybersecurity, automation, and distributed systems</span> to deliver
                cutting-edge CLI tools and AI-powered agents that simplify complexity without sacrificing power.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We stand for <span className="font-semibold text-foreground">excellence in engineering, security from the ground up</span>, and collaboration that scales—no
                noise, no quick fixes, no fragile code. Just robust, reliable solutions built to last.
              </p>
              <div className="pt-4">
                <Link 
                  href="/services" 
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Security Dashboard Visualization */}
            <SecurityDashboard />
          </div>
        </div>
      </section>

      {/* Timeline Section - Our Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">From startup to trusted security partner</p>
          </div>

          <div className="relative">
            {/* Main Timeline Line (Improved gradient line) */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            <div className="space-y-12">
              {COMPANY_TIMELINE.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - The Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision, every line of code, and every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Call to Action Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Subtle Gradient & Blur Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center border border-primary/20">
              {/* Mission Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Mission</span>
                </div>
              </div>

              {/* Mission Title */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Empowering Trust in Technology
              </h2>

              {/* Mission Statement */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Every line of code, every feature, every product is designed with a single goal: to empower trust in technology.
                We believe security and innovation aren't opposing forces—they're complementary partners in building the future.
              </p>

              {/* Contact Button */}
              <Link 
                href="/contact" 
                className="group relative inline-flex px-8 py-4 rounded-xl font-semibold text-lg bg-primary text-black hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}