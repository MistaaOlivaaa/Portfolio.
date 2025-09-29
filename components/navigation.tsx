"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Navigation fade in animation
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      delay: 3, // After preloader
    })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="nav-item">
            <h2 className="text-2xl font-light text-white tracking-wide">
              <span className="text-blue-400">S</span>omesh
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-item text-slate-300 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden nav-item text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-slate-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
