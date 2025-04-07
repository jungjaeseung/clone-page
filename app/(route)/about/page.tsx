

import AnimateOnScroll from "@/app/_components/AnimateOnScroll";
import Image from "next/image";


export default function AboutPage() {
  return (
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll animation="fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">
                  I design<br />
                  attention-grabbing designs.
                </h1>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <AnimateOnScroll animation="slide-in-right">
                  <h2 className="text-2xl font-bold mb-6">About me</h2>
                  <div className="space-y-4">
                    <p>
                      I can design for you
                    </p>
                    <p>
                      Hello! I am a designer from Seoul, a product designer who wakes up everyday excited to solve problems through
                      beautiful & data-driven designs. I help brands define their culture and thrive. From brand strategy to design to
                      communication, we create something that stands out today, so that people can hold onto tomorrow.
                    </p>
                    <p>
                      Every brand has the power to shape the future. We help them make their impact meaningful and memorable.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-in-left" className="relative h-64 md:h-auto">
                  <Image
                    src="https://ext.same-assets.com/1013325554/939102120.png"
                    alt="Contact illustration"
                    fill
                    className="object-contain animate-float"
                  />
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 bg-[#f8f8f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <AnimateOnScroll animation="fade-in-up">
                  <h2 className="text-3xl font-bold mb-4">Design process</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up" delay={200}>
                  <p className="text-lg mb-2">This is how my design works</p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-in-up" delay={400}>
                  <p className="max-w-2xl mx-auto">
                    This six-step process maps out how I approach design problems and leverage user insights and cross-team collaboration to fuel iterative improvement.
                  </p>
                </AnimateOnScroll>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <AnimateOnScroll animation="fade-in-up" delay={100} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">01</span>
                    <h3 className="text-xl font-bold">Identify the Problem</h3>
                  </div>
                  <p>
                    Isolate the critical issue by dissecting user pain points and initial observations.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={200} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">02</span>
                    <h3 className="text-xl font-bold">Understand the Scope</h3>
                  </div>
                  <p>
                    Assess the user needs, business objectives, and technical constraints to frame the design challenge.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={300} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">03</span>
                    <h3 className="text-xl font-bold">Design Solutions</h3>
                  </div>
                  <p>
                    Ideate solutions to resolve immediate user needs while staying true to the overarching product vision.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={400} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">04</span>
                    <h3 className="text-xl font-bold">Collaborate with Team</h3>
                  </div>
                  <p>
                    Work closely with business and technical teams to align design solutions with overarching goals.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={500} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">05</span>
                    <h3 className="text-xl font-bold">Gather Feedback</h3>
                  </div>
                  <p>
                    Conduct user testing and gather feedback in cycles, refining the design until it meets predefined acceptance criteria.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in-up" delay={600} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">
                    <span className="text-sm font-medium">06</span>
                    <h3 className="text-xl font-bold">Analyze and Iterate</h3>
                  </div>
                  <p>
                    Implement the final design, measure its impact through key metrics, and continuously refine for an optimal user experience.
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
