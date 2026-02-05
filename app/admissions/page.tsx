
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Admissions</h1>
              <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
                "Hold fast to dreams, for if dreams die, life is a broken-winged bird that can not fly."
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Start Your Journey at S.I.S</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">1. Book A Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    The best way to get a true insight of Al Shomoukh International Private School.
                  </p>
                  <div className="flex flex-col items-center gap-2 text-sm font-medium">
                    <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> admission@alshomoukh.com</span>
                    <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +968 24284756</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">2. Placement Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    All students are interviewed for their ability to be successful at the school.
                    Results communicated within 5 working days.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">3. Application & Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Once accepted, parents can proceed with application requirements and fee payment to secure the seat.
                  </p>
                  <Button variant="outline" size="sm">Download Enrolment Form</Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-heading mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the academic level criteria?</AccordionTrigger>
                  <AccordionContent>
                    We admit students who were successful in their previous schools and were able to pass our entrance exam.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the age criteria?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside">
                      <li>KG1: Must have turned 3 years in June of enrolling year.</li>
                      <li>KG2: Must be 4 in June.</li>
                      <li>Grade 1: Must be 5 in June.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Does my child need to be toilet-trained?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all KG students must be toilet-trained.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you accept students with special needs?</AccordionTrigger>
                  <AccordionContent>
                    We currently have very limited capacity to help students with special needs and do not typically enroll them.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What is the class size?</AccordionTrigger>
                  <AccordionContent>
                    The average class size is 25.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What curriculum do you follow in Primary?</AccordionTrigger>
                  <AccordionContent>
                    We follow the Primary Key Stage 1 and 2 UK National Curriculum.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
