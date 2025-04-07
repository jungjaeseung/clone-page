"use client";

import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (displayChildren === children) return;

    setIsAnimating(true);

    const animationTimeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(animationTimeout);
  }, [children, displayChildren]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {displayChildren}
    </div>
  );
}
