"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation:
    | "fade-in"
    | "fade-in-up"
    | "fade-in-down"
    | "slide-in-right"
    | "slide-in-left"
    | "pulse"
    | "rotate"
    | "float";
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayClass = delay > 0 ? `animation-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`}
      style={{ animationDelay: delay > 0 ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
