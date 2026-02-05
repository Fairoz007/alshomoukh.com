"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Building2, Trophy, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { TiltCard } from "@/components/tilt-card"

const exploreItems = [
  {
    icon: BookOpen,
    title: "Science & Tech",
    description: "ICT training starting from KG and fully equipped Science Labs.",
    href: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Global Citizenship",
    description: "Language learning (French from Grade 1) and international trips.",
    href: "#",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Trophy,
    title: "Active Life",
    description: "Physical Education and a wide range of Extra-Curricular Activities (ECA).",
    href: "#",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Creative Arts",
    description: "Art, Music, and Performing Arts to foster creativity and imagination.",
    href: "#",
    color: "from-violet-500 to-purple-500",
  },
]

export function ExploreSection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl mb-12 text-balance">
            Explore Our School
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exploreItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100} direction="up">
              <TiltCard className="h-full">
                <Card className="group h-full glass-card hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Animated background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <item.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <a
                        href={item.href}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="mt-12 flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            About Our School
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
