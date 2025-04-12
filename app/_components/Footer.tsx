import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] py-12 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s work together!</h3>
            <div className="space-y-1 text-sm">
              <p>Feb 2023—Present</p>
              <p>Available for contract/freelance work</p>
              <p>Based in Seoul, Korea</p>
              <p>(+82) 0123 4567</p>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Link href="https://www.behance.net/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Behance
            </Link>
            <Link href="https://www.instagram.com/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            <Link href="https://br.pinterest.com/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Pinterest
            </Link>
            <Link href="mailto:design.attention@gmail.com" className="hover:text-primary transition-colors">
              design.attention@gmail.com
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">I design attention-grabbing designs.</p>
            <p className="text-sm">Copyright © 2024 Attention</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
