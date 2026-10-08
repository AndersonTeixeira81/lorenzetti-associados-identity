interface MonogramaProps {
  className?: string;
}

/**
 * Monograma tipográfico "LA" — proposta de identidade provisória.
 * Minimalista, em dourado, desenhado em SVG para nitidez total.
 */
export default function Monograma({ className = "h-12 w-12" }: MonogramaProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Monograma Lorenzetti & Associados"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.9"
      />
      <circle
        cx="32"
        cy="32"
        r="26.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.45"
      />
      <text
        x="32"
        y="41.5"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="600"
        fontSize="24"
        letterSpacing="1"
      >
        LA
      </text>
    </svg>
  );
}
