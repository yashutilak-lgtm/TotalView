"use client"

import { JSX, useState } from "react"
import { Check, X, Zap, Crown, ArrowRight, HelpCircle, Sparkles, TrendingUp, Users, Cloud, HardHat } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- Helper Components & Data (Defined outside the main function for clarity) ---

interface Plan {
  name: string
  icon: JSX.Element
  monthlyPrice: number
  annualPrice: number
  description: string
  features: FeatureProps[]
  popular?: boolean
  cta: string
}

interface FeatureProps {
  text: string
  included: boolean
  highlight?: boolean
}

const FeatureItem = ({ text, included }: FeatureProps) => (
  <div className="flex items-start gap-3">
    {included ? (
      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-primary" />
      </div>
    ) : (
      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
        <X className="w-3.5 h-3.5 text-muted-foreground/50" />
      </div>
    )}
    <span className={`text-sm ${included ? "text-foreground" : "text-muted-foreground/70 line-through"}`}>
      {text}
    </span>
  </div>
)

interface PricingCardProps {
  plan: Plan
  billingCycle: "monthly" | "annual"
  getPrice: (plan: Plan) => string
  getSavings: (plan: Plan) => string | null
}

const PricingCard = ({ plan, billingCycle, getPrice, getSavings }: PricingCardProps) => {
  const isPopular = plan.popular
  
  const cardClasses = `relative rounded-3xl border transition-all duration-500 overflow-hidden h-full flex flex-col ${
    isPopular
      ? "border-accent/80 bg-gradient-to-br from-gray-900/90 to-black/90 text-white shadow-4xl shadow-accent/40 scale-[1.05] z-20 hover:shadow-5xl hover:shadow-accent/50"
      : "border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
  }`

  const buttonClasses = `w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${
    isPopular
      ? "bg-gradient-to-r from-accent to-primary text-white hover:shadow-2xl hover:shadow-accent/50 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
      : "border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-md active:scale-[0.98]"
  }`
  
  const textColor = isPopular ? 'text-white' : 'text-foreground';
  const mutedColor = isPopular ? 'text-gray-400' : 'text-muted-foreground';

  const topFeatures = plan.features.slice(0, isPopular ? 6 : 5).filter(f => f.included);
  const remainingCount = plan.features.filter(f => f.included).length - topFeatures.length;

 return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute top-3 right-4 z-50">
          <div className="bg-primary text-black px-4 py-1.5 rounded-full text-small font-bold shadow-lg">
            Popular
          </div>
        </div>
      )}

      <div className="p-8 sm:p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              isPopular ? "bg-accent/30 text-accent ring-2 ring-accent/50" : "bg-muted/50 text-muted-foreground"
            }`}
          >
            {plan.icon}
          </div>
          <h3 className={`text-3xl font-extrabold ${textColor}`}>{plan.name}</h3>
        </div>

        <p className={`text-base mb-6 ${mutedColor}`}>{plan.description}</p>

        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className={`text-6xl font-extrabold ${textColor}`}>{getPrice(plan)}</span>
            <span className={`text-base ${mutedColor}`}>/month</span>
          </div>
          {billingCycle === "annual" && getSavings(plan) ? (
            <p className="text-sm font-bold mt-2 text-green-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> {getSavings(plan)} (Billed Annually)
            </p>
          ) : (
            <div className="h-6" />
          )}
        </div>

        <Link href={plan.cta === "Contact Sales" ? "/contact" : plan.cta === "Start 14-Day Trial" ? "/contact" : "#"}>
          <button className={buttonClasses}>
            {plan.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>

        <div className="space-y-4 pt-8 border-t border-border/50 mt-8 flex-grow">
          <p className={`text-base font-bold ${textColor} mb-4`}>Key Features:</p>
          {topFeatures.map((feature, fIndex) => (
            <div key={fIndex} className={`flex items-start gap-3 ${mutedColor}`}>
                 <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${isPopular ? 'text-accent' : 'text-primary'}`} />
                 <span className="text-sm">{feature.text}</span>
            </div>
          ))}
          
          {remainingCount > 0 && (
            <p className={`text-xs italic pt-2 ${mutedColor}`}>
                + {remainingCount} more features included. See full table below.
            </p>
          )}

        </div>
      </div>
    </div>
  )
}

// --- Main Component ---

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const allFeatures = {
      user_limit: "User Seats Limit",
      analytics: "Advanced Analytics Dashboard",
      ai_insights: "AI Insights & Prediction Engine",
      support_sla: "Support Response Time (SLA)",
      storage: "Cloud Storage Capacity",
      reports: "Report Frequency",
      api_access: "Dedicated API Access",
      integrations: "Custom Integrations (CRM, SSO)",
      security: "Enterprise-Grade Security & Compliance",
      account_manager: "Dedicated Account Manager",
  }

  const plans: Plan[] = [
    {
      name: "Starter",
      icon: <Zap className="w-7 h-7" />,
      monthlyPrice: 999,
      annualPrice: 9999,
      description: "Launch your presence with essential tools and data.",
      features: [
        { text: "Up to 10 users", included: true, highlight: true },
        { text: "Basic Analytics Dashboard", included: true, highlight: true },
        { text: "No AI Insights", included: false, highlight: true },
        { text: "Email Support (24hr SLA)", included: true, highlight: true },
        { text: "50GB Cloud Storage", included: true, highlight: true },
        { text: "Monthly Performance Reports", included: true, highlight: true },
        { text: "Basic API Access", included: true },
        { text: "No Custom Integrations", included: false },
        { text: "Standard Security", included: true },
        { text: "No Account Manager", included: false },
      ],
      cta: "Start 14-Day Trial",
    },
    {
      name: "Pro",
      icon: <Sparkles className="w-7 h-7" />,
      monthlyPrice: 2999,
      annualPrice: 29999,
      description: "Accelerate growth with powerful AI and priority service.",
      features: [
        { text: "Up to 100 users", included: true, highlight: true },
        { text: "Advanced Analytics Dashboard", included: true, highlight: true },
        { text: "Advanced AI insights", included: true, highlight: true },
        { text: "Priority Support (4hr SLA)", included: true, highlight: true },
        { text: "500GB Cloud Storage", included: true, highlight: true },
        { text: "Weekly Performance Reports", included: true, highlight: true },
        { text: "Full API Access", included: true },
        { text: "Custom Integrations (CRM, ERP)", included: true },
        { text: "Advanced Security", included: true },
        { text: "No Account Manager", included: false },
      ],
      popular: true,
      cta: "Start 14-Day Trial",
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-7 h-7" />,
      monthlyPrice: 7999,
      annualPrice: 79999,
      description: "Maximum scale, security, and personalized support.",
      features: [
        { text: "Unlimited users", included: true, highlight: true },
        { text: "Advanced Analytics Dashboard", included: true, highlight: true },
        { text: "AI-powered predictions", included: true, highlight: true },
        { text: "24/7 Phone & Email (1hr SLA)", included: true, highlight: true },
        { text: "Unlimited Storage", included: true, highlight: true },
        { text: "Real-time Reports", included: true, highlight: true },
        { text: "Dedicated API Gateway", included: true },
        { text: "SSO & Custom Integrations", included: true },
        { text: "Enterprise Security & Compliance", included: true },
        { text: "Dedicated Account Manager", included: true },
      ],
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time directly from your dashboard. Changes take effect immediately, and we'll prorate your billing accordingly. We believe in flexibility, not lock-in.",
    },
    {
      question: "How is the Annual Discount calculated?",
      answer: "By choosing the annual plan, you pay for 10 months and get 2 months free. This works out to a 16.67% savings, which we round up to **Save 17%** on your overall costs compared to paying monthly.",
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! Every paid plan comes with a generous **14-day free trial**, giving you full access to all features. No credit card is required to begin the trial—just sign up and explore!",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we are committed to supporting non-profit organizations and educational institutions. Please contact our sales team with your proof of status to receive a substantial discount code.",
    },
  ]

  const getPrice = (plan: Plan) => {
    const price = billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)
    return `₹${price.toLocaleString("en-IN")}`
  }

  const getSavings = (plan: Plan) => {
    if (billingCycle === "monthly") return null
    const monthlyTotal = plan.monthlyPrice * 12
    const savingsAmount = monthlyTotal - plan.annualPrice
    const savingsPercent = Math.round((savingsAmount / monthlyTotal) * 100)
    return `Save ${savingsPercent}%`
  }
  
  const GlobalStyles = () => (
    <style jsx global>{`
      @keyframes radial-pulse {
        0% {
          transform: scale(0.9);
          opacity: 0.1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.3;
        }
        100% {
          transform: scale(0.9);
          opacity: 0.1;
        }
      }
      .animate-radial-pulse {
        animation: radial-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes bounce-subtle {
        0%, 100% {
          transform: translateX(-50%) translateY(0);
        }
        50% {
          transform: translateX(-50%) translateY(2px);
        }
      }
      .animate-bounce-subtle {
        animation: bounce-subtle 3s ease-in-out infinite;
      }
    `}</style>
  );


  return (
    <main className="w-full overflow-hidden bg-background">
      <GlobalStyles />
      <Navigation />

      {/* Hero Section - Immersive */}
      <section className="min-h-[80vh] flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-radial-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-radial-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 py-10">
          <div className="inline-block mb-6 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/40 backdrop-blur-sm shadow-xl shadow-accent/10">
            <span className="text-sm font-bold text-accent uppercase tracking-[0.2em]">MAXIMUM VALUE. ZERO HASSLE.</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-6 text-foreground tracking-tight">
            The Right Plan for <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Vision</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Seamlessly scale your capabilities as your business grows. **14 days free, no credit card required.**
          </p>

          {/* Billing Toggle - FIXED: Better contrast for unselected state */}
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-muted/50 backdrop-blur-md border border-border/50 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-primary text-black shadow-xl shadow-primary/30"
                  : "text-foreground bg-muted/30 hover:bg-muted/50 hover:text-accent"
              }`}
            >
              Pay Monthly
                      </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-primary text-black shadow-xl shadow-primary/30"
                  : "text-foreground bg-primary/10 hover:bg-primary/20"
              }`}
            >
              Pay Annually
              <span className="text-xs px-3 py-1 rounded-full bg-accent text-black font-extrabold transform scale-105">
                SAVE 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                billingCycle={billingCycle}
                getPrice={getPrice}
                getSavings={getSavings}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Comparison Table --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t border-b border-border/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                    Detailed <span className="text-primary">Feature Breakdown</span>
                </h2>
                <p className="text-lg text-muted-foreground">See exactly what you get with each plan.</p>
            </div>
            
            <div className="overflow-x-auto rounded-xl shadow-2xl border border-border/50 bg-background/90">
                <table className="min-w-full divide-y divide-border/50">
                    <thead className="bg-muted/10">
                        <tr className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                            <th className="p-4 text-left w-1/4">Feature</th>
                            <th className="p-4 text-center">Starter</th>
                            <th className="p-4 text-center bg-accent/10 text-accent rounded-tr-xl">Pro (Recommended)</th>
                            <th className="p-4 text-center">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50 text-sm">
                        {Object.entries(allFeatures).map(([key, featureName], fIndex) => {
                            const starterFeature = plans[0].features.find(f => f.text.includes(featureName.split(' ')[0])) || {text: "—", included: false};
                            const proFeature = plans[1].features.find(f => f.text.includes(featureName.split(' ')[0])) || {text: "—", included: false};
                            const enterpriseFeature = plans[2].features.find(f => f.text.includes(featureName.split(' ')[0])) || {text: "—", included: false};

                            const isHighlighted = starterFeature.highlight || proFeature.highlight || enterpriseFeature.highlight;

                            const getCellValue = (planFeature: FeatureProps) => {
                                const isPro = plans[1].features.includes(planFeature);
                                if (planFeature.included) {
                                    return (
                                        <div className={`flex items-center justify-center gap-2 p-2 ${isPro ? 'bg-accent/5' : ''}`}>
                                            <Check className={`w-4 h-4 ${isPro ? 'text-accent' : 'text-primary'}`} />
                                            <span className={`${isPro ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>{planFeature.text.includes(":") ? planFeature.text.split(":")[1].trim() : planFeature.text}</span>
                                        </div>
                                    );
                                }
                                return <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />;
                            };

                            return (
                                <tr key={fIndex} className={`hover:bg-primary/5 ${isHighlighted ? 'bg-background/80' : 'bg-background/50'}`}>
                                    <td className="p-4 font-semibold text-foreground flex items-center gap-3">
                                        <HardHat className="w-5 h-5 text-accent/80" /> {featureName}
                                    </td>
                                    <td className="p-4 text-center">{getCellValue(starterFeature)}</td>
                                    <td className="p-4 text-center bg-accent/5 font-bold">{getCellValue(proFeature)}</td>
                                    <td className="p-4 text-center">{getCellValue(enterpriseFeature)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-8">
                * Features marked "—" are not available on that plan.
            </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our pricing and policies.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-background shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 transition-colors duration-200 hover:bg-muted/10 rounded-xl"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${openFaq === index ? "rotate-180 text-primary" : "text-muted-foreground"}`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openFaq === index ? "max-h-60 opacity-100 p-6 pt-0" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-10 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}