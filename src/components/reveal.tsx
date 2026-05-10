"use client";

import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  as?: ElementType;
} & HTMLAttributes<HTMLElement> & {
  [key: string]: unknown;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  style: inlineStyle,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style = {
    ...inlineStyle,
    "--reveal-delay": `${delay}ms`
  } as CSSProperties;

  return (
    <Tag
      className={`reveal reveal-${direction} ${isVisible ? "is-visible" : ""} ${className ?? ""}`.trim()}
      ref={ref}
      {...rest}
      style={style}
    >
      {children}
    </Tag>
  );
}
