"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Logo animation
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
    })

    // Progress bar animation
    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          // Hide preloader after loading
          gsap.to(preloaderRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
              if (preloaderRef.current) {
                preloaderRef.current.style.display = "none"
              }
            },
          })
        },
      },
      "-=0.5",
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={preloaderRef} className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center">
      {/* Animated logo */}
      <div ref={logoRef} className="mb-8">
        <h1 className="text-6xl font-light text-white tracking-wider">
          <span className="text-blue-400">S</span>aad
        </h1>
      </div>

      {/* Progress bar container */}
      <div className="w-80 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div ref={progressBarRef} className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-0"></div>
      </div>

      {/* Loading text */}
      <p className="text-slate-400 mt-4 text-sm tracking-wide">Loading Experience...</p>
    </div>
  )
}
