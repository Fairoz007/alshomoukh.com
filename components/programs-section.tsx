"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { TiltCard } from "@/components/tilt-card"

const programs = [
  {
    title: "Kindergarten",
    image: "/images/early-years.jpg",
    description: "The Early Years Foundation Stage (EYFS)",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Primary Curriculum",
    image: "/images/primary-school.jpg",
    description: "Key Stage 1 & 2 UK National Curriculum",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Lower Secondary",
    image: "/images/middle-school.jpg",
    description: "Building strong foundations in core subjects",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Upper Secondary",
    image: "/images/high-school.jpg",
    description: "Edexcel IGCSE, IAL & Omani GED",
    color: "from-amber-500 to-orange-500",
  },
]

export function ProgramsSection() {
  return (
    <section id="academics" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl mb-12 text-balance">
            Academic Programs
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <AnimatedSection key={program.title} delay={index * 100} direction="scale">
              <TiltCard className="h-full">
                <Card className="group h-full glass-card overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={`${program.title} students at Al Shomoukh`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                    {/* Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white text-xs font-medium shadow-lg transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500`}>
                      {program.description}
                    </div>
                  </div>
                  <CardContent className="p-5 relative">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-12 flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            View All Programs
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
