"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Floating background elements animation
    gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Preloader />
      <Navigation />

      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-20 right-1/3 w-28 h-28 bg-violet-500/20 rounded-full blur-xl"></div>
      </div>

      {/* Grid background pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <main ref={mainRef} className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
