import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-rose-100">
      <Header />
      <HeroSection />

      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Our Programs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-yellow text-2xl font-bold text-primary mx-auto">
              2-3
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">Toddler Program</h3>
            <p className="text-muted-foreground">
              A nurturing environment for our youngest learners to explore language through play.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-blue text-2xl font-bold text-primary mx-auto">
              3-4
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">Preschool Program</h3>
            <p className="text-muted-foreground">
              Building language skills through structured activities and creative exploration.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-green text-2xl font-bold text-primary mx-auto">
              4-5
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">Pre-K Program</h3>
            <p className="text-muted-foreground">
              Preparing children for kindergarten with bilingual literacy and numeracy skills.
            </p>
          </div>
        </div>
      </section>

      <section id="register" className="bg-pastel-blue py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Register Now</h2>
          <RegistrationForm />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Why Choose Sunlight?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Bilingual Environment</h3>
            <p className="text-muted-foreground">
              Children are immersed in both languages daily, learning naturally through play and structured activities.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Qualified Teachers</h3>
            <p className="text-muted-foreground">
              Our teachers are native speakers with degrees in early childhood education.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Small Class Sizes</h3>
            <p className="text-muted-foreground">
              With a 1:6 teacher-to-student ratio, each child receives personalized attention.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Play-Based Learning</h3>
            <p className="text-muted-foreground">
              Our curriculum emphasizes learning through exploration, creativity, and play.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
