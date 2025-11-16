import Link from "next/link"
import { Zap } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
      >
        {/* Define Gradient for Primary Color Accent */}
        <defs>
          <linearGradient id="logoGradientFabulous" x1="5" y1="5" x2="39" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary, #007bff)" offset="0%" />
            <stop stopColor="var(--color-accent, #ff4500)" offset="100%" />
          </linearGradient>
          <linearGradient id="dataFlowGradient" x1="10" y1="20" x2="34" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-accent, #ff4500)" offset="0%" stopOpacity="0.8" />
            <stop stopColor="var(--color-primary, #007bff)" offset="100%" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* 1. Background: Abstract Data Flow (Wavy Lines) */}
        <path 
          d="M 5 22 C 15 15, 25 29, 39 22" 
          stroke="url(#dataFlowGradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="transition-opacity duration-500 opacity-60"
        />
        <path 
          d="M 5 16 C 15 25, 25 10, 39 16" 
          stroke="url(#dataFlowGradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="transition-opacity duration-500 opacity-60"
        />

        {/* 2. Foreground: The "View" / Lens (Geometric Window) */}
        {/* Diamond shape overlay representing focus/total view */}
        <polygon 
          points="22 5, 39 22, 22 39, 5 22" 
          fill="var(--color-background, #1e1e1e)" 
          fillOpacity="0.8" 
          stroke="url(#logoGradientFabulous)" 
          strokeWidth="3" 
          strokeLinejoin="round"
          className="transform transition-transform duration-300 group-hover:scale-95"
        />

        {/* 3. Center Point: The Insight (A subtle spark) */}
        <circle cx="22" cy="22" r="3" fill="url(#logoGradientFabulous)" className="shadow-lg" />
      </svg>
      
      {/* Text Logo with Gradient Effect */}
      <span className="text-2xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-90">
            Total View
        </span>
      </span>
    </Link>
  )
}
