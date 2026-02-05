
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Al Shomoukh International Private School for girls and boys aged 3 – 18.
                Since our founding in 2015, we have been on the leading edge of preparing students for their future.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Welcome */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/school-building.jpg"
                  alt="Al Shomoukh School Building"
                  fill
                  className="object-cover"
                />
                {/* Fallback color if image fails */}
                <div className="absolute inset-0 bg-secondary/10 -z-10"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold font-heading mb-6">Welcome</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                It is my pleasure to welcome you to one of the finest educational institutions in the world. As parents, selecting a school for your child is one of the most important decisions you will ever make.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each fall at Al Shomoukh International Private School, we open our doors to over 900 students and their families. We remain steadfast and deeply committed to ensuring that every day, every student receives the extraordinary care that is our hallmark.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={100}>
                <Card className="h-full border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Vision</h3>
                    <p className="text-lg">
                      A community of lifelong learners that demonstrate the knowledge, skills and values required for productive global citizenship.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <Card className="h-full border-secondary/20 bg-secondary/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-secondary">Mission</h3>
                    <p className="mb-4 font-semibold">We... RISE.</p>
                    <ul className="space-y-2">
                      <li><strong>Respect:</strong> encourage kindness, understanding and tolerance.</li>
                      <li><strong>Integrity:</strong> honesty and responsibility are our core values.</li>
                      <li><strong>Success:</strong> achieved by nurturing holistic development.</li>
                      <li><strong>Exploration:</strong> supported and critical thinking endorsed.</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-heading mb-6 text-center">History of Our Name</h2>
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <p>
                Al Shomoukh International Private School is a homegrown educational brand and a lifelong dream of its founder Honourable Sheihk Salim bin Hamood Al-Hashmi.
              </p>
              <p>
                The school was developed by Global Education Services Company (GES) to provide premium schools, that follow the UK National Curriculum, for Omani as well as international students.
                Launched in 2015, the school provides the highest quality international education from Kindergarten to Grade 12.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Community */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-heading mb-6">Our Community</h2>
              <p className="max-w-3xl mx-auto mb-8 text-muted-foreground">
                Giving back to the community plays an essential role in building a better generation that thinks selflessly and has sympathy and greater awareness of wider society.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Training Programmes</h4>
                    <p className="text-sm text-muted-foreground">Opportunities for local and international community. info@alshomoukh.com</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Environment</h4>
                    <p className="text-sm text-muted-foreground">Educating students on environmental crises to make a difference.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Alumni</h4>
                    <p className="text-sm text-muted-foreground">Connecting former students to strengthen the community.</p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
