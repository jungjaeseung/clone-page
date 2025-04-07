
import Link from "next/link";
import Image from "next/image";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import Footer from "./_components/Footer";
import AnimateOnScroll from "./_components/AnimateOnScroll";
import WireSphereCanvas from "./_components/WireSphere";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-40 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <AnimateOnScroll animation="fade-in" className="relative w-full max-w-xl h-64 mb-12">
                    <WireSphereCanvas />
              </AnimateOnScroll>
              <div className="max-w-3xl mx-auto mb-12">
                <AnimateOnScroll animation="fade-in-up">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Welcome to the Attention.<br />
                    I design attention-grabbing designs.
                  </h1>
                </AnimateOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <AnimateOnScroll animation="fade-in-up" delay={200} className="text-sm">
                    <p>Feb 2023—Present</p>
                    <p>Available for contract/freelance work</p>
                    <p>Based in Seoul, Korea</p>
                    <p>(+82) 0123 4567</p>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fade-in-up" delay={400} className="flex flex-col items-center">
                    <p className="mb-2">Contact me!</p>
                    <p className="mb-4">design.attention@gmail.com</p>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                        Let&apos;s work together!
                      </Button>
                    </Link>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">I can design for you</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="text-lg mb-12">
                  Hello! I am a designer from Seoul, a product designer who wakes up everyday excited to solve problems through
                  beautiful & data-driven designs. I help brands define their culture and thrive. From brand strategy to design to
                  communication, we create something that stands out today, so that people can hold onto tomorrow.
                  Every brand has the power to shape the future. We help them make their impact meaningful and memorable.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={400}>
                <h3 className="text-xl font-bold mb-6">About me</h3>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-20 bg-[#f8f8f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">This is how<br />my design works</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="mb-8">
                  There are a total of six design process. It can change depending on the situation, but it&apos;s a process I learned
                  from making the best results. Click on more to see the detailed design process!
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={300} className="inline-block">
                <h3 className="text-lg font-bold mb-4">Design process</h3>
                <Link href="/about">
                  <Button variant="outline" className="border border-gray-300 rounded-full px-6">
                    More
                  </Button>
                </Link>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="fade-in-up" delay={100} className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-medium">01</span>
                  <h4 className="text-lg font-bold">Identify the Problem</h4>
                </div>
                <p>Isolate the critical issue by dissecting user pain points and initial observations</p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200} className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-medium">02</span>
                  <h4 className="text-lg font-bold">Understand the Scope</h4>
                </div>
                <p>Assess the user needs, business objectives, and technical constraints to frame the design challenge.</p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={300} className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-medium">03</span>
                  <h4 className="text-lg font-bold">Design Solutions</h4>
                </div>
                <p>Ideate solutions to resolve immediate user needs while staying true to the overarching product vision.</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Work</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="mb-8">
                  Understand the concept of the brand, understand the inconvenience
                  of customers, and design. These are some of the projects we have
                  been working on in recent years.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Project 1 */}
              <AnimateOnScroll animation="slide-in-right">
                <div className="mb-6 aspect-video bg-gray-100 overflow-hidden relative">
                  <Image
                    src="https://ext.same-assets.com/1013325554/3947675964.jpeg"
                    alt="Brand identity project"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Brand identity / 2024</h3>
                  <p>The package was designed using soft fonts that fit the shape of the curved product and the brand concept.</p>
                </div>
                <Link href="#">
                  <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-primary">
                    Download it
                  </Button>
                </Link>
              </AnimateOnScroll>

              {/* Project 2 */}
              <AnimateOnScroll animation="slide-in-left">
                <div className="mb-6 aspect-video bg-gray-100 overflow-hidden relative">
                  <Image
                    src="https://ext.same-assets.com/1013325554/2542594904.jpeg"
                    alt="Mobile project"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Mobile / 2024</h3>
                  <p>I worked on a mobile portfolio page with a neat concept that can give blue and orange points and trust.</p>
                </div>
                <Link href="#">
                  <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-primary">
                    Download it
                  </Button>
                </Link>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade-in-up" className="text-center">
              <Link href="/work">
                <Button variant="outline" className="border border-gray-300 rounded-full px-6">
                  More
                </Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Brand Value Section */}
        <section className="py-20 bg-[#f8f8f8] text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll animation="fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Attention<br />
                  Increase the value<br />
                  of the brand
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="mb-8">
                  I design attention-grabbing designs.<br />
                  I love analyzing brand values and creating something familiar yet new.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={400}>
                <h3 className="text-2xl font-bold mb-6">
                  I design<br />
                  attention-grabbing designs
                </h3>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={600}>
                <p className="mb-8">
                  I help brands define their culture and thrive.<br />
                  From brand strategy to design to communication, we create<br />
                  something that stands out today, so that people can hold<br />
                  onto tomorrow.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
