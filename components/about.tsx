"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Code, Palette, Zap, Globe, Database, Smartphone, Terminal, Cpu, MonitorSmartphone } from "lucide-react"
import { SiPython, SiC, SiCplusplus, SiLinux, SiGit, SiMysql, SiAmazon, SiGooglecloud } from "react-icons/si"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills = [
    { icon: SiPython, name: "Python", color: "text-yellow-400" },
    { icon: SiC, name: "C", color: "text-blue-400" },
    { icon: SiCplusplus, name: "C++", color: "text-indigo-400" },
    { icon: SiLinux, name: "Linux", color: "text-green-400" },
    { icon: SiGit, name: "Git", color: "text-red-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
    { icon: SiAmazon, name: "AWS", color: "text-yellow-500" },
    { icon: SiGooglecloud, name: "Google Cloud", color: "text-blue-400" },
    // Microsoft Azure icon is not available in react-icons/si
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        },
      )

      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        },
      )

      // Skills stagger animation
      gsap.fromTo(
        ".skill-icon",
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
            trigger: skillsRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30 hover:scale-105 hover:rotate-3 transition-all duration-500">
                <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                About <span className="text-blue-400">Me</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Hi 👋, I'm Saad Fahmi a passionate learner with a strong interest in programming languages. Currently a student I’m deeply enthusiastic about exploring software development, robotics, and everything in between I’m eager to learn and contribute in any way I can.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon group p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <skill.icon
                    className={`w-8 h-8 ${skill.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <p className="text-sm text-slate-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
