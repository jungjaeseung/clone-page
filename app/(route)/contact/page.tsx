
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-24 md:py-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                  Let&apos;s work together!
                </h1>

                <div className="space-y-1 text-sm mb-8">
                  <p>Feb 2023—Present</p>
                  <p>Available for contract/freelance work</p>
                  <p>Based in Seoul, Korea</p>
                  <p>(+82) 0123 4567</p>
                </div>

                <div className="mb-8">
                  <p className="text-xl mb-6">
                    Every brand has the power to shape the future.
                    We help them make their impact meaningful
                    and memorable.
                    Experience the power and brilliance of collaboration!
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <Link href="https://www.behance.net/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Behance
                  </Link>
                  <Link href="https://www.instagram.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </Link>
                  <Link href="https://br.pinterest.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Pinterest
                  </Link>
                  <Link href="mailto:design.attention@gmail.com" className="hover:underline">
                    design.attention@gmail.com
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                <div className="bg-white/10 rounded-2xl overflow-hidden h-full">
                  <Image
                    src="https://ext.same-assets.com/1013325554/16417699.png"
                    alt="Contact office interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
