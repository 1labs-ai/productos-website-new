"use client"

// Isometric Agents Collaboration Visual - Based on Gemini reference
// Animated flow path with isometric cubes
export function IsometricAgentsVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-40"
      >
        {/* Background connection paths */}
        <path 
          d="M60 180 L140 140 L240 180 L320 140" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="2" 
        />
        <path 
          d="M140 140 L200 100 L280 140" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="2" 
        />

        {/* Animated flowing path */}
        <path 
          d="M60 180 L140 140 L200 100 L280 140 L320 140"
          stroke="url(#gradient-flow)" 
          strokeWidth="2" 
          strokeDasharray="10 150"
          className="animate-flow"
        />

        {/* Cube 1 - Left (small) */}
        <g transform="translate(40, 160)">
          <path d="M0 10 L20 0 L40 10 L20 20 Z" fill="#121212" stroke="rgba(255,255,255,0.3)" />
          <path d="M0 10 L0 25 L20 35 L20 20 Z" fill="#0F0F0F" stroke="rgba(255,255,255,0.3)" />
          <path d="M20 20 L20 35 L40 25 L40 10 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.3)" />
        </g>

        {/* Cube 2 - Center Top (larger) */}
        <g transform="translate(125, 115)">
          <path d="M0 12 L25 0 L50 12 L25 24 Z" fill="#121212" stroke="rgba(255,255,255,0.5)" />
          <path d="M0 12 L0 32 L25 44 L25 24 Z" fill="#0F0F0F" stroke="rgba(255,255,255,0.5)" />
          <path d="M25 24 L25 44 L50 32 L50 12 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.5)" />
        </g>

        {/* Cube 3 - Center (main, largest) */}
        <g transform="translate(175, 75)">
          <path d="M0 15 L30 0 L60 15 L30 30 Z" fill="#121212" stroke="rgba(255,255,255,0.6)" />
          <path d="M0 15 L0 40 L30 55 L30 30 Z" fill="#0F0F0F" stroke="rgba(255,255,255,0.6)" />
          <path d="M30 30 L30 55 L60 40 L60 15 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.6)" />
        </g>

        {/* Cube 4 - Right Top */}
        <g transform="translate(255, 115)">
          <path d="M0 12 L25 0 L50 12 L25 24 Z" fill="#121212" stroke="rgba(255,255,255,0.5)" />
          <path d="M0 12 L0 32 L25 44 L25 24 Z" fill="#0F0F0F" stroke="rgba(255,255,255,0.5)" />
          <path d="M25 24 L25 44 L50 32 L50 12 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.5)" />
        </g>

        {/* Cube 5 - Right (small) */}
        <g transform="translate(300, 160)">
          <path d="M0 10 L20 0 L40 10 L20 20 Z" fill="#121212" stroke="rgba(255,255,255,0.3)" />
          <path d="M0 10 L0 25 L20 35 L20 20 Z" fill="#0F0F0F" stroke="rgba(255,255,255,0.3)" />
          <path d="M20 20 L20 35 L40 25 L40 10 Z" fill="#0A0A0A" stroke="rgba(255,255,255,0.3)" />
        </g>

        {/* Icons above cubes */}
        
        {/* Brain icon - above cube 1 */}
        <g transform="translate(45, 125)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
          <path d="M15 5 C10 5 7 9 7 13 C7 15 8 17 8 17 C6 18 5 20 5 22 C5 25 7 27 10 27 L20 27 C23 27 25 25 25 22 C25 20 24 18 22 17 C22 17 23 15 23 13 C23 9 20 5 15 5" />
          <path d="M10 12 Q15 10 20 12 M10 18 Q15 16 20 18" strokeWidth="0.75" />
        </g>

        {/* Flowchart icon - above cube 2 */}
        <g transform="translate(140, 75)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
          <rect x="5" y="2" width="12" height="7" rx="1" />
          <line x1="11" y1="9" x2="11" y2="14" />
          <line x1="11" y1="14" x2="5" y2="20" />
          <line x1="11" y1="14" x2="17" y2="20" />
          <rect x="0" y="20" width="10" height="6" rx="1" />
          <rect x="12" y="20" width="10" height="6" rx="1" />
        </g>

        {/* Code icon - above center cube */}
        <g transform="translate(190, 35)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
          <rect x="0" y="0" width="35" height="28" rx="2" />
          <line x1="0" y1="8" x2="35" y2="8" strokeOpacity="0.4" />
          <circle cx="5" cy="4" r="1.5" fill="rgba(255,255,255,0.4)" stroke="none" />
          <circle cx="10" cy="4" r="1.5" fill="rgba(255,255,255,0.4)" stroke="none" />
          <circle cx="15" cy="4" r="1.5" fill="rgba(255,255,255,0.4)" stroke="none" />
          <text x="9" y="21" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="monospace">&lt;/&gt;</text>
        </g>

        {/* Database + Search icon - above cube 4 */}
        <g transform="translate(260, 75)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
          <ellipse cx="10" cy="6" rx="8" ry="3" />
          <path d="M2 6 L2 18 C2 20 5 22 10 22 C15 22 18 20 18 18 L18 6" />
          <ellipse cx="10" cy="12" rx="8" ry="2" strokeOpacity="0.4" />
          <circle cx="25" cy="12" r="5" />
          <line x1="29" y1="16" x2="34" y2="21" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Rocket icon - above cube 5 */}
        <g transform="translate(308, 120)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
          <path d="M12 2 L12 25 L8 30 L16 30 L12 25" />
          <path d="M6 25 L12 2 L18 25" />
          <path d="M6 25 L2 30 L6 28" />
          <path d="M18 25 L22 30 L18 28" />
          <circle cx="12" cy="14" r="2.5" />
        </g>

        <defs>
          <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <style>{`
          .animate-flow {
            animation: flowAnimation 3s linear infinite;
          }
          @keyframes flowAnimation {
            from {
              stroke-dashoffset: 160;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
    </div>
  )
}
