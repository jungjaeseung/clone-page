
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";


const projects = [
  {
    id: 1,
    title: "Brand identity / 2024",
    description: "The package was designed using soft fonts that fit the shape of the curved product and the brand concept.",
    image: "https://ext.same-assets.com/1013325554/3947675964.jpeg",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Mobile / 2024",
    description: "I worked on a mobile portfolio page with a neat concept that can give blue and orange points and trust.",
    image: "https://ext.same-assets.com/1013325554/2542594904.jpeg",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Web / 2024",
    description: "We developed a website for an American sports brand with a more intuitive UIUX. Various design movements were expressed to express the vibrant energy that fits the brand concept.",
    image: "https://ext.same-assets.com/1013325554/692251566.jpeg",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Brand identity / 2023",
    description: "We designed a business card that fits the brand concept with blue color points that can give trust.",
    image: "https://ext.same-assets.com/1013325554/1300912498.jpeg",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Brand identity / 2023",
    description: "We designed promotional materials to promote the launch of new products by companies specializing in sound devices. We used a variety of vibrant colors to express new products made targeting young people.",
    image: "https://ext.same-assets.com/1013325554/1154664585.jpeg",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Web&Mobile / 2023",
    description: "It is a mobile & website work that can reveal the identity of a company that starts a social network service.",
    image: "https://ext.same-assets.com/1013325554/1793611695.jpeg",
    downloadLink: "#"
  }
];

export default function WorkPage() {
  return (
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                I design<br />
                attention-grabbing designs.
              </h1>

              <div className="mb-12">
                <p className="text-lg">
                  I help brands define their culture and thrive. From brand strategy to
                  design to communication, we create something that stands out today,
                  so that people can hold onto tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {projects.map((project) => (
                <div key={project.id} className="mb-12">
                  <div className="mb-6 aspect-video bg-gray-100 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Link href={project.downloadLink}>
                    <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-primary">
                      Download it
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
