
import Link from "next/link";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import Footer from "./_components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-8">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8">Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
