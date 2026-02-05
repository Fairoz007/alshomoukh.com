
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-20">
                <AnimatedSection>
                    <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-4xl">
                        <p>Last updated: March 22, 2025</p>

                        <h3>Your Privacy Is Important To Us</h3>
                        <p>
                            The privacy policy is one of the most essential legal requirements for websites.
                            Even if you just have a small business or a blog with no income at all, you might be surprised to discover that you still need a privacy policy.
                        </p>
                        <p>
                            Basically, if your website collects personal data, you need a privacy policy that informs your users about this according to privacy laws in most jurisdictions, including the EU and the US.
                            Almost all modern websites function with the use of cookies, so chances are high that your website is collecting personal data, for example for statistical, functional or marketing purposes.
                        </p>

                        <h3>What is a privacy policy?</h3>
                        <p>
                            A privacy policy is a document that states what personal data you collect from your users, why, and how you keep it private.
                            The purpose of the privacy policy is to inform your users about how their data is being handled.
                            Hence, the privacy policy should be accessible for your users and kept in a plain and readable language.
                        </p>

                        <h3>What is personal data?</h3>
                        <p>
                            Personal data is information that can identify an individual, either directly or when combined with other data.
                            Names, e-mails, addresses, localization, IP-addresses, photos, and account information all are directly identifying data.
                            Health information, income, religion and cultural profiles and the like is also personal data.
                            Furthermore, and crucial in the present context, data on user behavior is also personal. Cookies can track and register individual users’ browsing activities.
                        </p>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    )
}
