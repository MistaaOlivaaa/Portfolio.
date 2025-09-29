"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: "Caclulator App in C",
      description: "modern calculator built with GTK3 Perfect for both Linux enthusiasts and Windows users who want a beautiful, functional calculator experience.",
      image: "/images/project-1.png",
      tech: ["C", "GTK3", "Makefile"],
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/MistaaOlivaaa/Calculator_UI_In_C",
    },
    {
      id: 2,
      title: "Image_to_ascii",
      description: "A simple Python script that converts images into ASCII art using text characters. Transform any image into beautiful text-based art that can be displayed in terminals, text files, or anywhere monospace fonts are supported.",
      image: "/images/project-2.png",
      tech: ["Python", "Pillow"],
      color: "from-purple-500 to-pink-500",
      github : "https://github.com/MistaaOlivaaa/image_to_ascii"
    },
    {
      id: 3,
      title: "Document_scanner",
      description: "A professional Python project for scanning and processing documents and images. This tool allows you to easily scan, enhance, and extract content from images or PDF files, making it ideal for digitizing paperwork, receipts, and other documents.",
      image: "/images/project-3.png",
      tech: ["OpenCV", "Python", "Numpy", "Pillow"],
      color: "from-green-500 to-teal-500",
      github: "https://github.com/MistaaOlivaaa/Document_Scanner"
    },
    {
      id: 4,
      title: "Lead Generation Site",
      description: "High-converting landing page with 3D illustrations",
      image: "/images/project-4.png",
      tech: ["Next.js", "GSAP", "Tailwind"],
      color: "from-orange-500 to-red-500",
    },
    
    
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        },
      )

      // Cards stagger animation
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-light text-center mb-16">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 bg-transparent flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 w-full border-slate-700 bg-transparent flex items-center justify-center opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
