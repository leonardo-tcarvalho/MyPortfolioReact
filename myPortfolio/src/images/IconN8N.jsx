export function IconN8N({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="32" cy="32" r="30" fill="#EA4B71" />
      {/* N8N stylized text */}
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="18"
        fill="white"
      >
        n8n
      </text>
      {/* Workflow nodes */}
      <circle cx="14" cy="20" r="4" fill="white" opacity="0.8" />
      <circle cx="50" cy="20" r="4" fill="white" opacity="0.8" />
      <line
        x1="18"
        y1="20"
        x2="46"
        y2="20"
        stroke="white"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="32" cy="20" r="3" fill="white" opacity="0.8" />
    </svg>
  );
}
