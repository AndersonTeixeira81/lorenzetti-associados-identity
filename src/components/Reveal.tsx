import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms para efeito cascata */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

/** Anima a entrada do conteúdo ao rolar a página (progressive enhancement). */
export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
