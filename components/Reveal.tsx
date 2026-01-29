"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // for stagger in ms
  direction?: "up" | "down" | "left" | "right";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal();

  let translate = "";
  switch (direction) {
    case "up":
      translate = "translate-y-6";
      break;
    case "down":
      translate = "-translate-y-6";
      break;
    case "left":
      translate = "translate-x-6";
      break;
    case "right":
      translate = "-translate-x-6";
      break;
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
