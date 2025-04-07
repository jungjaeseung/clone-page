"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ContactButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link href="/contact">
        <button
          className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-medium shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Contact"
        >
          contact
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
