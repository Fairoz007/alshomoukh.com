
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center">
                Our Curriculum
              </h1>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Providing a seamless, high-quality education from Kindergarten to adulthood,
                following the UK National Curriculum and Omani Ministry requirements.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Kindergarten */}
        <section className="py-16 container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-heading mb-8 text-primary">Kindergarten</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">The Early Years Foundation Stage Curriculum</h3>
                <p className="mb-4">
                  Al Shomoukh International School follows the Early Years Foundation Stage (EYFS) Framework which is
                  adapted to meet the needs of each individual child.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-secondary">7 Areas of Learning</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Personal, social and emotional development</li>
                      <li>Communication and language</li>
                      <li>Physical development</li>
                      <li>Literacy</li>
                      <li>Mathematics</li>
                      <li>Understanding of the World</li>
                      <li>Expressive Arts and Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-secondary">Characteristics of Learning</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Creating and thinking critically</li>
                      <li>Playing and Exploring</li>
                      <li>Active learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>

        {/* Primary Curriculum */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-heading mb-8 text-primary">Primary Curriculum</h2>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Stage 1 & Lower Key Stage 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We follow the Primary Key Stage 1 and 2 UK National Curriculum. The curriculum sets a clear statutory
                      entitlement to learning for all children which is both inclusive and challenging.
                    </p>
                    <p className="mb-4">
                      Our teachers plan a range of current and relevant topics carefully matched to meet requirements.
                      Emphasis is placed on developing creativity, problem solving and physical development.
                      We engage in innovative collaboration in English, Mathematics, Science, Art, Computing, PE, Music and Life Skills.
                    </p>
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2">Phonics & Reading</h4>
                      <p className="text-sm">
                        Systematic phonics approach for distinct letter-sound relationships.
                        Daily phonics lessons for Grade 1 & 2. Catch-up lessons for Grade 3.
                        At Al Shomoukh, we follow the <strong>Oxford Reading Tree</strong> program.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Lower Key Stage 2 (Grades 3 - 6)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Offers a variety of ways for students to express their creativity.
                      Focus on developing independent learning skills and a nurturing environment.
                      Specialist teachers for PE, Art, ICT, Music and French.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Lower Secondary */}
        <section className="py-16 container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold font-heading mb-8 text-primary">Lower Secondary</h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-8">
              "If the child can't learn the way we teach, maybe we should teach the way they learn." — Ignacio Estrada
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Philosophy</h3>
                <p className="mb-4">
                  Designed to build a strong foundation in core subjects and support academic success.
                  Students are encouraged to deepen and expand their understanding and develop life skills.
                </p>
                <h3 className="text-xl font-semibold mb-3">Core Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {["English", "Mathematics", "Science (Biology, Physics, Chemistry)", "Information Technology", "Physical Education", "Art", "Music", "French", "Social Studies", "Arabic & Islamic Studies"].map((subj) => (
                    <Badge key={subj} variant="secondary">{subj}</Badge>
                  ))}
                </div>
              </div>
              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Curriculum Focus</h3>
                <p>
                  Preparation for Edexcel IGCSE examinations. Focus on core knowledge needed for success.
                  Pearson’s Edexcel Curriculum resources used in all core subjects across Key Stage 3, 4 and 5.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Upper Secondary */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold font-heading mb-8 text-primary">Upper Secondary</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Edexcel IGCSE (Grades 9 & 10)</h3>
                  <p className="mb-4">
                    Broad range of IGCSE subjects following Pearson’s IGCSE Edexcel curriculum.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader><CardTitle className="text-lg">Core Subjects</CardTitle></CardHeader>
                      <CardContent>
                        Mathematics, English Language, Triple Science (Biology, Physics & Chemistry)
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader><CardTitle className="text-lg">Options</CardTitle></CardHeader>
                      <CardContent>
                        Geography, History, English Literature, Business Studies, Applied ICT, PE, Art, Arabic
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Edexcel International Advanced Levels (IAL) – Grades 11 & 12</h3>
                  <p className="mb-4">
                    Students select at least four subjects (AS Levels). Passing at least 3 subjects in Grade 11 is required to progress to Grade 12.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mathematics", "English language", "English Literature", "Business Studies", "Economics", "Physics", "Chemistry", "Biology", "Geography", "History", "Applied ICT"].map((subj) => (
                      <Badge key={subj} variant="outline" className="text-base py-1 px-3">{subj}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Omani General Education Diploma (GED) Grades 11 & 12</h3>
                  <p className="mb-4">
                    Equivalent to the International A-Levels program. Developed and monitored by the Ministry of Education.
                    Inspires students to be compelling individuals who are curious about all areas of learning.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Core (Grade 11 & 12):</strong> Mathematics, English, Science (Bio, Phys & Chem - choose 1, 2 or 3).
                      <br />
                      <strong>Options:</strong> ICT, Physical Education, Music, Art, Business.
                      <br />
                      <strong>Compulsory (Arabic speakers):</strong> Arabic, Islamic, Arabic Social Studies.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
