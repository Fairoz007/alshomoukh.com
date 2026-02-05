
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle2 } from "lucide-react"

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative py-20 bg-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Careers</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Join our community of educators and professionals committed to excellence.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16 container mx-auto px-4">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-6">Working at Al Shomoukh</h2>
                                <p className="mb-4 text-muted-foreground">
                                    Al Shomoukh International Private School is one of Oman’s foremost institutions of educational learning excellence.
                                    Our unique environment unites knowledge, skills and values.
                                </p>
                                <p className="mb-4 text-muted-foreground">
                                    We believe that our staff are the beating heart of the school. Therefore, we focus on attracting professionals from all around the world
                                    ready to work side by side to take the education journey ahead.
                                </p>
                            </div>
                            <div className="bg-muted p-8 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">Why Join Us?</h3>
                                <ul className="space-y-2">
                                    {["Professional Growth", "Diverse Environment", "Modern Campus", "Supportive Community"].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-secondary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                {/* How to Apply */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold font-heading mb-8 text-center">Application Process</h2>
                            <div className="max-w-4xl mx-auto">
                                <Card>
                                    <CardContent className="p-8">
                                        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                                            <li>Complete the application online (if available) or send documents via email.</li>
                                            <li>Required: CV, qualifications, transcripts, experience letters.</li>
                                            <li>Application review and assessment.</li>
                                            <li>First interview for qualified candidates.</li>
                                            <li>Second interview for shortlisted candidates.</li>
                                            <li>Job offer and legal immigration processing.</li>
                                            <li>Induction period (2 weeks) upon joining.</li>
                                        </ol>

                                        <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
                                            <h4 className="font-bold mb-2">Contact Human Resources</h4>
                                            <p className="mb-4 text-sm">Send your application to:</p>
                                            <a href="mailto:careers@alshomoukh.com" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                                                <Mail className="w-5 h-5" />
                                                careers@alshomoukh.com
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Oman Intro */}
                <section className="py-16 container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold font-heading mb-4">About Sultanate of Oman</h2>
                        <p className="max-w-3xl mx-auto text-muted-foreground">
                            The Sultanate of Oman is a unique country rich in cultural heritage and natural attractions.
                            Safe, stable, and welcoming, it is a gem of the Middle East where expats feel at home while exploring diverse landscapes.
                        </p>
                    </AnimatedSection>
                </section>

            </main>
            <Footer />
        </div>
    )
}
