export function IconAutomation({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#8B5CF6" />
      {/* Gear with lightning */}
      <g transform="translate(14, 14)">
        {/* Gear outline */}
        <path
          d="M18 2l2 4h4l2-4 4 2-2 4 3 3 4-2 2 4-4 2v4l4 2-2 4-4-2-3 3 2 4-4 2-2-4h-4l-2 4-4-2 2-4-3-3-4 2-2-4 4-2v-4l-4-2 2-4 4 2 3-3-2-4z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle
          cx="18"
          cy="18"
          r="6"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        {/* Lightning bolt */}
        <path d="M16 12L14 19H18L16 26L22 17H18L20 12Z" fill="#FCD34D" />
      </g>
    </svg>
  );
}
