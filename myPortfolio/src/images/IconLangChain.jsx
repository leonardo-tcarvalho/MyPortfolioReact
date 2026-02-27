export function IconLangChain({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#1C3C3C" />
      {/* Chain links */}
      <g transform="translate(12, 14)">
        {/* Parrot/bird silhouette stylized */}
        <path
          d="M20 4C14 4 10 8 10 14C10 18 12 21 15 23L14 32H18L19 25C19.5 25 20 25 20.5 25L21 32H25L24 23C27 21 29 18 29 14C29 8 25 4 20 4Z"
          fill="#65D9A5"
        />
        <circle cx="17" cy="13" r="2" fill="white" />
        <circle cx="17" cy="13" r="1" fill="#1C3C3C" />
        <path
          d="M22 16C22 16 24 15 24 13"
          stroke="#65D9A5"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
      {/* LC text */}
      <text
        x="32"
        y="56"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="8"
        fill="#65D9A5"
      >
        LangChain
      </text>
    </svg>
  );
}
