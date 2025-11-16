"use client"

import { useState, useCallback, useMemo } from "react"
import { Mail, Phone, MapPin, Zap, MessageSquareText, Lightbulb, ChevronDown } from "lucide-react"
// Assuming these are custom components you have
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// --- Data Definitions (Moved outside for performance) ---

const FAQS = [
  {
    q: "How quickly will I receive a response?",
    a: "We prioritize all inquiries and typically respond within 2–4 hours during business hours (9 AM - 6 PM IST). For time-sensitive issues, please call us directly.",
  },
  {
    q: "What information should I include in my message?",
    a: "To help us provide the most relevant answer, please include details about your project scope, ideal timeline, budget range (if known), and any specific business challenges you're facing.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Absolutely! We offer a **free, no-obligation 30-minute discovery call** to understand your business needs and outline how Total View can drive your success.",
  },
  {
    q: "What is 'Total View'?",
    a: "Total View is our commitment to providing a holistic, 360-degree approach to your digital strategy, ensuring all aspects of your business are optimized for growth.",
  },
]

// --- Shared Components ---

// A visually distinct and highly contrasted button style
const PrimaryButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`w-full py-3 px-6 rounded-xl font-bold text-lg bg-accent text-white hover:bg-accent/90 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-accent/40 flex items-center justify-center ${className}`}
    {...props}
  >
    {children}
  </button>
)

// Card component for displaying contact details
const ContactDetailCard = ({ icon: Icon, title, content, link = "#" }: {
  icon: React.ElementType,
  title: string,
  content: React.ReactNode,
  link?: string,
}) => (
  // The outer div is just for styling and hover effects, not the link itself
  <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:bg-primary/5 border border-transparent hover:border-border">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent border border-accent/20">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="font-bold text-xl text-foreground mb-1">{title}</h3>
      {/* Ensure tel: and mailto: links are standard <a> tags for proper handling */}
      <a 
        href={link} 
        className="text-muted-foreground transition-colors hover:text-primary font-medium block leading-relaxed"
        // Use target="_blank" and rel="noopener noreferrer" for external or non-standard links (like mailto/tel) for security best practice
        target={link.startsWith('http') ? "_blank" : undefined}
        rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    </div>
  </div>
)

// --- Main Component ---

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  // Optimized change handler using useCallback
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  // Optimized submit handler using useCallback
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API here.
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll be in touch soon.")
    setFormData({ name: "", email: "", company: "", subject: "", message: "" })
  }, [formData])

  // Common input classes for dry code
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/20 outline-none transition-all duration-200"


  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navigation />

      {/* Header with Pattern and Strong Focus */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background border-b border-border">
        {/* Subtle Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none text-primary"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">
              Ready to Transform Your Business?
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-3xl">
              Let's Start the <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Conversation</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Get in touch with the Stanfler Tech LLP team. We're here to provide the <span className="font-semibold text-foreground">Total View</span> for your next big project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info & Details Card */}
          <div className="lg:col-span-1 space-y-10 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold border-b pb-4 border-border/50 text-foreground">Direct Contact</h2>
            
            <div className="space-y-6">
              <ContactDetailCard
                icon={Mail}
                title="Email Support"
                content="Support@totalview.in"
                link="mailto:Support@totalview.in"
              />

              <ContactDetailCard
                icon={Phone}
                title="Call Us Directly"
                content="+91 9108036919"
                link="tel:+919108036919"
              />

              <ContactDetailCard
                icon={MapPin}
                title="Our Headquarters"
                content={
                  <>
                    Stanfler Tech LLP <br />
                    Bangalore, India
                  </>
                }
                // link intentionally left as '#'
              />
            </div>

            {/* Legal Info Block */}
            <div className="p-6 border border-border/50 rounded-xl bg-primary/5 shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-1">Legal Information</h3>
              <p className="text-muted-foreground text-sm">
                Legal Name: <span className="font-semibold text-foreground">Stanfler Tech LLP</span>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-2xl shadow-primary/10 space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold mb-6 text-accent">Send a Message</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClasses}
                  required
                />
              </div>
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">Company (Optional)</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Total View Inc."
                className={inputClasses}
              />
            </div>

            {/* Subject of Inquiry - Improved Select Styling */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">Subject of Inquiry</label>
              <div className="relative">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  required
                >
                  <option value="" disabled>Select the most relevant topic</option>
                  <option value="general">General Inquiry / Feedback</option>
                  <option value="support">Technical Support / Billing</option>
                  <option value="sales">New Project / Sales Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
                {/* Custom chevron icon for the select box */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your project, your challenges, or your business goals..."
                className={`${inputClasses} resize-none`}
                required
              />
            </div>

            <PrimaryButton type="submit" className="mt-8">
              Send Message <MessageSquareText className="w-5 h-5 ml-2" />
            </PrimaryButton>
          </form>
        </div>
      </section>

      {/* Action Block - Need Immediate Assistance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-background">
        <div className="w-full max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-2xl border border-primary/30 bg-card shadow-2xl shadow-primary/10">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-slow" />
          <h2 className="text-3xl font-bold mb-3">Need Immediate Assistance?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            For urgent support or to schedule your <span className="font-semibold text-foreground">free 30-minute consultation</span> right now, give us a call!
          </p>
          <a href="tel:+919108036919">
            <button className="px-8 py-3 rounded-full font-semibold bg-primary text-black hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.03] shadow-xl shadow-primary/50 active:scale-[0.98] border border-primary/50">
              <Phone className="inline w-5 h-5 mr-2" /> Call Now: +91 9108036919
            </button>
          </a>
        </div>
        {/* Custom CSS for a clean animation */}
        <style jsx global>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      {/* FAQ Section - Enhanced Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Answers to Your <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              We've compiled quick answers to the most common inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card shadow-md space-y-3 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-accent flex-shrink-0" />
                    <h3 className="text-xl font-bold text-foreground">{faq.q}</h3>
                </div>
                {/* Increased padding for better alignment with the icon */}
                <p className="text-muted-foreground pl-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}