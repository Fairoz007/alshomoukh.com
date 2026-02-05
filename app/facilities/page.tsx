import React from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { TiltCard } from "@/components/tilt-card"
import {
  BookOpen,
  Beaker,
  Monitor,
  Dumbbell,
  Palette,
  UtensilsCrossed,
  TreePine,
  Wifi,
  Shield,
  Bus,
  Stethoscope,
  Music
} from "lucide-react"

export const metadata = {
  title: "Facilities | Al Shomoukh International School",
  description: "Explore our state-of-the-art campus facilities designed to provide the best learning environment.",
}

const mainFacilities = [
  {
    title: "Science Laboratories",
    description: "From primary level, students are introduced to techniques to form hypotheses and test ideas. Fully equipped for Physics, Chemistry, and Biology.",
    image: "/images/academics-hero.jpg",
    features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Primary Science Introduction"]
  },
  {
    title: "ICT Suites",
    description: "Formal ICT instruction starts from Kindergarten. Developing computational thinking and digital literacy for the future.",
    image: "/images/computer-lab.jpg",
    features: ["Kindergarten onwards", "Computational Thinking", "Safe Technology Use", "Digital Literacy"]
  },
  {
    title: "Sports Complex & PE",
    description: "Encouraging excellence and personal participation. Kindergarten PE focuses on locomotor skills, balance, and coordination.",
    image: "/images/sports-facility.jpg",
    features: ["Indoor Gym", "Swimming Pool", "Football Field", "Kindergarten Play Areas"]
  },
  {
    title: "Art & Music Studios",
    description: "Equipping students to think originally. 'Logic will take you from A to B. Imagination will take you everywhere.'",
    image: "/images/art-studio.jpg",
    features: ["Drawing & Painting", "Sculpting", "Music Practice", "Creative Expression"]
  },
  {
    title: "Modern Library",
    description: "A spacious library with over 20,000 books, digital resources, quiet study areas, and collaborative learning spaces.",
    image: "/images/facilities-hero.jpg",
    features: ["20,000+ Books", "Digital Resources", "Study Rooms", "Reading Corners"]
  },
  {
    title: "Cafeteria",
    description: "A modern dining facility serving nutritious meals prepared fresh daily with healthy options.",
    image: "/images/cafeteria.jpg",
    features: ["Fresh Meals", "Healthy Options", "Allergen-Free Menu", "Outdoor Seating"]
  },
]

const amenities = [
  { icon: Wifi, title: "Campus-wide WiFi", description: "High-speed internet throughout" },
  { icon: Shield, title: "24/7 Security", description: "CCTV and security personnel" },
  { icon: Bus, title: "Transportation", description: "Safe bus services across the city" },
  { icon: Stethoscope, title: "Medical Clinic", description: "On-site nurse and first aid" },
  { icon: TreePine, title: "Green Spaces", description: "Gardens and outdoor learning areas" },
  { icon: Monitor, title: "Smart Classrooms", description: "Interactive boards in all rooms" },
]

const facilityIcons: Record<string, React.FC<{ className?: string }>> = {
  "Modern Library": BookOpen,
  "Science Laboratories": Beaker,
  "ICT Suites": Monitor,
  "Sports Complex & PE": Dumbbell,
  "Art & Music Studios": Palette,
  "Cafeteria": UtensilsCrossed,
}

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src="/images/facilities-hero.jpg"
          alt="Modern school library"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="container relative mx-auto px-4 h-full flex items-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              World-Class Facilities
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl leading-relaxed">
              State-of-the-art infrastructure designed to inspire learning and growth
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground font-medium text-center sm:text-left">
              Want to see our campus in person? Schedule a guided tour today!
            </p>
            <button className="px-6 py-2 bg-white text-secondary font-semibold rounded-full hover:bg-white/90 transition-colors">
              Book a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Facilities</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every space on our campus is designed to enhance the learning experience
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFacilities.map((facility, index) => {
              const Icon = facilityIcons[facility.title]
              return (
                <AnimatedSection key={facility.title} delay={index * 100}>
                  <TiltCard className="h-full">
                    <div className="bg-card rounded-2xl border border-border overflow-hidden h-full group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={facility.image || "/placeholder.svg"}
                          alt={facility.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          {Icon && (
                            <div className="h-10 w-10 rounded-lg bg-white/90 flex items-center justify-center text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                          )}
                          <h3 className="font-heading text-lg font-bold text-white">{facility.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {facility.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
      {/* Enrichment Activities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Enrichment Activities</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Beyond the classroom, we offer a range of activities to foster holistic development.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <TiltCard className="h-full">
                <div className="bg-card p-6 rounded-xl border border-border h-full">
                  <h3 className="text-xl font-bold mb-3 text-primary">Trips & Excursions</h3>
                  <p className="text-muted-foreground mb-4">
                    Practical learning outside the classroom. We offer trips to Oman’s historical landmarks like Muscat, Sur, Nizwa, and Sohar.
                    Performing arts tours include world-class productions at the Royal Opera House.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <TiltCard className="h-full">
                <div className="bg-card p-6 rounded-xl border border-border h-full">
                  <h3 className="text-xl font-bold mb-3 text-secondary">Extra-Curricular Activities (ECA)</h3>
                  <p className="text-muted-foreground mb-4">
                    Essential for gaining valuable skills in a relaxed setting.
                    Our programme includes Sports, Performing Arts, and Academic activities, offered without additional fees.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <TiltCard className="h-full">
                <div className="bg-card p-6 rounded-xl border border-border h-full">
                  <h3 className="text-xl font-bold mb-3 text-primary">Festival Day</h3>
                  <p className="text-muted-foreground mb-4">
                    "SIPS Festival Day: A great event for a greater cause."
                    Organized by students, bringing the community together with participation from companies and restaurants.
                  </p>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Outdoor Spaces already exists below, leaving it there */}

      {/* Outdoor Spaces */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Outdoor Learning Spaces
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our campus features expansive outdoor areas designed for play, learning, and exploration.
                From landscaped gardens to dedicated play areas, children have safe spaces to develop physically and socially.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Age-appropriate playground equipment",
                  "Outdoor classrooms for nature-based learning",
                  "Landscaped gardens with native plants",
                  "Covered play areas for all weather",
                  "Sports fields and courts",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/playground.jpg"
                  alt="School playground"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Campus Amenities</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Additional services and features that support student well-being
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <AnimatedSection key={amenity.title} delay={index * 100}>
                <TiltCard className="h-full">
                  <div className="p-6 bg-card rounded-xl border border-border h-full flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <amenity.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{amenity.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{amenity.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <Shield className="h-16 w-16 mb-6 text-secondary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Safety & Security
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                The safety of our students is our top priority. We have implemented comprehensive security
                measures to ensure a secure learning environment for everyone on campus.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "24/7 security personnel and monitoring",
                  "CCTV coverage across all areas",
                  "Secure access control systems",
                  "Regular safety drills and training",
                  "On-site medical clinic with trained staff",
                  "GPS-tracked school transportation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Security Staff", value: "24/7" },
                  { icon: Monitor, label: "CCTV Cameras", value: "200+" },
                  { icon: Bus, label: "School Buses", value: "30+" },
                  { icon: Stethoscope, label: "Medical Staff", value: "Full-time" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-secondary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
