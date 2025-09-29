"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Send, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form inputs animation
      gsap.fromTo(
        ".form-input",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      )

      // Social icons animation
      gsap.fromTo(
        ".social-icon",
        {
          opacity: 0,
          scale: 0.5,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Button bounce animation
    gsap.to(".submit-btn", {
      scale: 1.1,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    })

    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-input">
                <Input
                  placeholder="Your Name"
                  className="bg-slate-900/50 border-slate-700 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder:text-slate-400 h-12"
                />
              </div>

              <div className="form-input">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-900/50 border-slate-700 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder:text-slate-400 h-12"
                />
              </div>

              <div className="form-input">
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-slate-900/50 border-slate-700 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="form-input">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white h-12 rounded-xl font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-400">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>saadfagmigmail.com</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Morocco Timezone</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex justify-center space-x-6">
              <a
                href="https://github.com/MistaaOlivaaa/"
                className="social-icon p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-gray-400 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:saadfagmigmail.com"
                className="social-icon p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
