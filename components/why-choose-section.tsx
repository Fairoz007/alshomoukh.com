"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, GraduationCap, Shield, Building } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { TiltCard } from "@/components/tilt-card"

const features = [
  {
    icon: Star,
    title: "Qualified Educators",
    description: "Experienced and dedicated teachers.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: GraduationCap,
    title: "Holistic Education",
    description: "Balancing academics, arts, and sports.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure and nurturing campus.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Building,
    title: "Modern Facilities",
    description: "State-of-the-art learning spaces.",
    color: "from-purple-500 to-pink-500",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        style={{ animation: "float 15s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite reverse" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl mb-8 text-balance">
                Why Choose Al Shomoukh?
              </h2>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 100 + 100} direction="left">
                  <TiltCard className="h-full">
                    <Card className="h-full glass-card hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                      <CardContent className="p-5 relative">
                        {/* Hover gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        <div className="flex items-start gap-4 relative">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-foreground mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Image with 3D effect */}
          <AnimatedSection delay={300} direction="right">
            <div className="relative group perspective-1000">
              <div
                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/images/teacher-helping.jpg"
                  alt="Teacher helping students at Al Shomoukh International School"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating decoration */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-2xl shadow-xl flex items-center justify-center"
                style={{ animation: "bounce 3s ease-in-out infinite" }}
              >
                <span className="font-heading text-3xl font-bold text-white">25+</span>
              </div>
              <div className="absolute -bottom-6 -right-6 mt-14 text-center">
                <span className="text-xs text-secondary font-medium">Years of Excellence</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
