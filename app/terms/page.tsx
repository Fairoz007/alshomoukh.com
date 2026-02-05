
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-20">
                <AnimatedSection>
                    <h1 className="text-4xl font-bold font-heading mb-8">Terms & Conditions</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-4xl">
                        <p>Last updated: March 22, 2025</p>

                        <p>
                            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.
                        </p>

                        <h3>General</h3>
                        <p>
                            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                        </p>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    )
}
