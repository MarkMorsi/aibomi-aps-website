export function RoundTower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.7">
        <path 
          d="M 70 280 L 75 100 Q 75 85 100 85 Q 125 85 125 100 L 130 280 Z" 
          fill="currentColor" 
          opacity="0.35" 
        />
        
        <ellipse cx="100" cy="100" rx="28" ry="8" fill="currentColor" opacity="0.4" />
        
        <rect x="73" y="120" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="117" y="120" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        
        <rect x="73" y="150" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="117" y="150" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        
        <rect x="73" y="180" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="117" y="180" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        
        <rect x="73" y="210" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="117" y="210" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        
        <rect x="73" y="240" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="117" y="240" width="10" height="14" rx="2" fill="currentColor" opacity="0.5" />
        
        <path 
          d="M 85 115 Q 85 108 100 108 Q 115 108 115 115 L 115 270 L 85 270 Z" 
          fill="currentColor" 
          opacity="0.25" 
        />
        
        <path 
          d="M 75 130 Q 77 128 79 130" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.4" 
        />
        <path 
          d="M 121 130 Q 123 128 125 130" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.4" 
        />
        
        <rect x="92" y="250" width="16" height="30" rx="1" fill="currentColor" opacity="0.5" />
        <path 
          d="M 100 250 L 100 280" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          opacity="0.4" 
        />
        
        <ellipse cx="100" cy="88" rx="32" ry="10" fill="currentColor" opacity="0.45" />
        <ellipse cx="100" cy="85" rx="30" ry="8" fill="currentColor" opacity="0.5" />
        
        <path 
          d="M 85 75 L 88 85 L 112 85 L 115 75 Q 100 70 85 75 Z" 
          fill="currentColor" 
          opacity="0.5" 
        />
        
        <circle cx="100" cy="68" r="8" fill="currentColor" opacity="0.55" />
        <rect x="98" y="58" width="4" height="12" fill="currentColor" opacity="0.6" />
        <circle cx="100" cy="56" r="3" fill="currentColor" opacity="0.65" />
      </g>
    </svg>
  )
}
