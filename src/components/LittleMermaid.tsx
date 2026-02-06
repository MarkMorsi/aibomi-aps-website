export function LittleMermaid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.7">
        <path 
          d="M 60 180 L 80 175 L 95 178 L 105 175 L 120 180 L 110 185 L 95 183 L 80 185 Z" 
          fill="currentColor" 
          opacity="0.3" 
        />
        
        <rect x="85" y="160" width="30" height="20" rx="2" fill="currentColor" opacity="0.4" />
        
        <ellipse cx="100" cy="145" rx="18" ry="20" fill="currentColor" opacity="0.5" />
        
        <circle cx="100" cy="120" r="15" fill="currentColor" opacity="0.5" />
        
        <path 
          d="M 92 115 Q 88 105 92 100 Q 95 105 92 115 Z" 
          fill="currentColor" 
          opacity="0.6" 
        />
        <path 
          d="M 108 115 Q 112 105 108 100 Q 105 105 108 115 Z" 
          fill="currentColor" 
          opacity="0.6" 
        />
        
        <circle cx="95" cy="118" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="105" cy="118" r="2" fill="currentColor" opacity="0.8" />
        
        <path 
          d="M 96 124 Q 100 126 104 124" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.7" 
        />
        
        <path 
          d="M 82 135 L 75 145 L 78 148 L 85 140" 
          fill="currentColor" 
          opacity="0.5" 
        />
        <path 
          d="M 118 135 L 125 145 L 122 148 L 115 140" 
          fill="currentColor" 
          opacity="0.5" 
        />
        
        <path 
          d="M 90 165 Q 88 180 82 190 L 78 192 L 80 195 L 88 185 Q 92 175 92 165" 
          fill="currentColor" 
          opacity="0.45" 
        />
        <path 
          d="M 110 165 Q 112 180 118 190 L 122 192 L 120 195 L 112 185 Q 108 175 108 165" 
          fill="currentColor" 
          opacity="0.45" 
        />
        
        <ellipse cx="78" cy="196" rx="4" ry="2" fill="currentColor" opacity="0.4" />
        <ellipse cx="120" cy="196" rx="4" ry="2" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  )
}
