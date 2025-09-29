"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 }) // After preloader

    // Headline animation
    tl.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
      },
    )

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6",
    )

    // CTA animation
    tl.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.4",
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Spline 3D Background - Full Hero Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/orb-jQw5ARB286530C2pyyguaZbf/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl font-light leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Saad</span>
          <br />
          <span className="text-slate-100">CS Student</span>
        </h1>

        <p ref={subtitleRef} className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Crafting immersive digital experiences with cutting-edge technologies and creative innovation.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              const element = document.getElementById("projects")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <Code className="w-5 h-5 mr-2" />
            Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
