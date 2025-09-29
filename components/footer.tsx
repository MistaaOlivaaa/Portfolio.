"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative py-16 px-6 border-t border-slate-800">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
              <h3 className="text-2xl font-light text-white tracking-wide">
                <span className="text-blue-400">S</span>AAD
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate web developer creating immersive digital experiences with modern technologies. Let's build
              something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Services</h4>
            <div className="flex flex-col space-y-2">
                {["Web Development", "UI/UX Design", "Animation & GSAP"].map((service) => (
                <span key={service} className="text-slate-400 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
          Made with <span className="text-red-400">❤️</span> by <span className="text-blue-400">SAAD</span>
          </p>
          <p className="text-slate-500 text-sm">© 2024 SAAD. All rights reserved.</p>
         <p className="text-slate-500 text-sm">© 2024 SAAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
