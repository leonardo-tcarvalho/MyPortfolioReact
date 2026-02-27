export function IconWebScraping({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#3B82F6" />
      {/* Spider/web icon */}
      <g transform="translate(12, 12)">
        {/* Globe */}
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="14"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line x1="6" y1="20" x2="34" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="white" strokeWidth="1.5" />
        {/* Scraping arrows */}
        <path
          d="M30 10L34 6L38 10"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <line x1="34" y1="6" x2="34" y2="16" stroke="white" strokeWidth="2" />
      </g>
    </svg>
  );
}
