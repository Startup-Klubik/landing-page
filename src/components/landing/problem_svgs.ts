// Brand Colors
export const colors = {
    shadowGrey: '#1a1a23',
    alabasterGrey: '#e6e6e6',
    autumnLeaf: '#e67000',
    purple: '#b500e6',
};

// 1. Documentation Lag
export const anim1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <filter id="p1-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <linearGradient id="p1-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${colors.purple}" />
      <stop offset="100%" stop-color="${colors.autumnLeaf}" />
    </linearGradient>
  </defs>
  <style>
    @keyframes p1-shipCode {
      0% { transform: translateX(0); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(200px); opacity: 0; }
    }
    @keyframes p1-docLag {
      0% { transform: translateX(0); }
      100% { transform: translateX(50px); }
    }
    @keyframes p1-syncLine {
      0%, 40% { stroke-dasharray: 4 4; stroke: ${colors.alabasterGrey}; opacity: 0.5; }
      45%, 90% { stroke-dasharray: 10 15; stroke: #ff4444; opacity: 0.8; }
      100% { stroke-dasharray: 4 4; stroke: ${colors.alabasterGrey}; opacity: 0.5; }
    }
    @keyframes p1-warning {
      0%, 40% { opacity: 0; transform: scale(0.5); }
      45%, 90% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(0.5); }
    }

    .p1-code { animation: p1-shipCode 2.5s linear infinite; }
    .p1-doc { animation: p1-docLag 2.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }
    .p1-link { animation: p1-syncLine 2.5s linear infinite; }
    .p1-alert { animation: p1-warning 2.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
  </style>

  <!-- Track Lines -->
  <line x1="50" y1="100" x2="350" y2="100" stroke="${colors.shadowGrey}" stroke-width="4" stroke-linecap="round" />
  <line x1="50" y1="200" x2="350" y2="200" stroke="${colors.shadowGrey}" stroke-width="4" stroke-linecap="round" />
  
  <text x="50" y="80" font-family="sans-serif" font-size="12" fill="${colors.alabasterGrey}" opacity="0.5" font-weight="bold">EVOLVING CODEBASE</text>
  <text x="50" y="240" font-family="sans-serif" font-size="12" fill="${colors.alabasterGrey}" opacity="0.5" font-weight="bold">STATIC DOCUMENTATION</text>

  <!-- Sync Line (Breaking) -->
  <line x1="150" y1="120" x2="100" y2="180" stroke-width="3" class="p1-link" stroke-linecap="round" />

  <!-- Code Blocks Moving Fast -->
  <g transform="translate(50, 85)">
    <g class="p1-code">
      <rect x="0" y="0" width="40" height="30" rx="6" fill="url(#p1-grad)" filter="url(#p1-glow)" />
      <path d="M 15 10 L 25 15 L 15 20" fill="${colors.alabasterGrey}" />
    </g>
  </g>
  <g transform="translate(150, 85)">
    <g class="p1-code" style="animation-delay: -1.25s">
      <rect x="0" y="0" width="40" height="30" rx="6" fill="url(#p1-grad)" filter="url(#p1-glow)" />
      <path d="M 15 10 L 25 15 L 15 20" fill="${colors.alabasterGrey}" />
    </g>
  </g>

  <!-- Document Struggling to Keep Up -->
  <g transform="translate(50, 180)">
    <g class="p1-doc">
      <!-- Doc Icon -->
      <path d="M 0 0 L 30 0 L 40 10 L 40 40 L 0 40 Z" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
      <rect x="8" y="15" width="24" height="3" rx="1.5" fill="${colors.alabasterGrey}" opacity="0.4" />
      <rect x="8" y="23" width="16" height="3" rx="1.5" fill="${colors.alabasterGrey}" opacity="0.4" />
      
      <!-- Out of Sync Warning -->
      <g class="p1-alert" transform="translate(30, -10)">
        <circle cx="10" cy="10" r="10" fill="#ff4444" filter="url(#p1-glow)" />
        <line x1="10" y1="5" x2="10" y2="12" stroke="${colors.alabasterGrey}" stroke-width="2" stroke-linecap="round" />
        <circle cx="10" cy="15" r="1" fill="${colors.alabasterGrey}" />
      </g>
    </g>
  </g>
</svg>`;

// 2. The Knowledge Silo
export const anim2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <filter id="p2-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes p2-ping {
      0% { stroke-dashoffset: 100; opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { stroke-dashoffset: 0; opacity: 0; }
    }
    @keyframes p2-stress {
      0%, 10% { transform: scale(1); fill: ${colors.purple}; }
      15%, 25% { transform: scale(1.1); fill: ${colors.autumnLeaf}; }
      30%, 80% { transform: scale(0.95); fill: ${colors.purple}; }
      90%, 100% { transform: scale(1); fill: ${colors.shadowGrey}; opacity: 0.3; } /* Departs/Leaves */
    }
    @keyframes p2-disconnect {
      0%, 80% { opacity: 1; }
      90%, 100% { opacity: 0.2; stroke: #ff4444; }
    }

    .p2-packet1 { stroke-dasharray: 10 100; stroke-dashoffset: 100; animation: p2-ping 1.5s linear infinite; }
    .p2-packet2 { stroke-dasharray: 10 100; stroke-dashoffset: 100; animation: p2-ping 1.2s linear infinite 0.4s; }
    .p2-packet3 { stroke-dasharray: 10 100; stroke-dashoffset: 100; animation: p2-ping 1.8s linear infinite 0.8s; }
    
    .p2-core { animation: p2-stress 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .p2-line { animation: p2-disconnect 6s ease-in-out infinite; }
  </style>

  <!-- Silo Wall / Funnel -->
  <circle cx="200" cy="150" r="70" fill="none" stroke="${colors.shadowGrey}" stroke-width="4" stroke-dasharray="20 10" opacity="0.5" />
  
  <!-- Connection Lines (Interrupted when core leaves) -->
  <line x1="80" y1="80" x2="170" y2="120" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" opacity="0.3" />
  <line x1="80" y1="220" x2="170" y2="180" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" opacity="0.3" />
  <line x1="320" y1="150" x2="230" y2="150" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" opacity="0.3" />

  <!-- Data Pings (Interruptions) -->
  <line x1="80" y1="80" x2="180" y2="130" stroke="${colors.autumnLeaf}" stroke-width="4" stroke-linecap="round" class="p2-packet1" filter="url(#p2-glow)" />
  <line x1="80" y1="220" x2="180" y2="170" stroke="${colors.purple}" stroke-width="4" stroke-linecap="round" class="p2-packet2" filter="url(#p2-glow)" />
  <line x1="320" y1="150" x2="220" y2="150" stroke="${colors.autumnLeaf}" stroke-width="4" stroke-linecap="round" class="p2-packet3" filter="url(#p2-glow)" />

  <!-- Junior / Team Nodes -->
  <circle cx="80" cy="80" r="15" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" />
  <circle cx="80" cy="220" r="15" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" />
  <circle cx="320" cy="150" r="15" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" class="p2-line" />

  <!-- The Senior Engineer (Knowledge Silo) -->
  <g transform="translate(200, 150)">
    <g class="p2-core">
      <circle cx="0" cy="0" r="30" filter="url(#p2-glow)" />
      <!-- Lock Icon inside the brain/silo -->
      <rect x="-8" y="-2" width="16" height="12" rx="2" fill="${colors.shadowGrey}" />
      <path d="M -4 -2 L -4 -8 C -4 -12, 4 -12, 4 -8 L 4 -2" fill="none" stroke="${colors.shadowGrey}" stroke-width="2" />
    </g>
  </g>
</svg>`;

// 3. The Reverse-Engineering Reality
export const anim3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <filter id="p3-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes p3-trace {
      0% { stroke-dashoffset: 800; }
      80%, 100% { stroke-dashoffset: 0; }
    }
    @keyframes p3-pulseScanner {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.5); opacity: 0.3; }
    }
    @keyframes p3-headache {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      75% { transform: rotate(-5deg); }
    }

    .p3-path { stroke-dasharray: 800; stroke-dashoffset: 800; animation: p3-trace 8s ease-in-out infinite; }
    .p3-scanner { animation: p3-pulseScanner 1.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .p3-dev { animation: p3-headache 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
  </style>

  <!-- Complex, Tangled Web of Code/Dependencies -->
  <g stroke="${colors.shadowGrey}" stroke-width="2" fill="none" opacity="0.6">
    <path d="M 120 100 C 180 50, 150 200, 220 180 S 280 80, 320 150" />
    <path d="M 120 200 C 180 250, 200 80, 250 120 S 280 250, 350 200" />
    <path d="M 150 150 C 180 150, 200 200, 250 200 S 280 100, 350 100" />
    <path d="M 200 50 L 200 250" stroke-dasharray="4 4" />
    <path d="M 280 50 L 280 250" stroke-dasharray="4 4" />
  </g>

  <!-- Inactive Nodes -->
  <circle cx="150" cy="150" r="6" fill="${colors.shadowGrey}" />
  <circle cx="200" cy="120" r="6" fill="${colors.shadowGrey}" />
  <circle cx="220" cy="180" r="6" fill="${colors.shadowGrey}" />
  <circle cx="280" cy="120" r="6" fill="${colors.shadowGrey}" />
  <circle cx="250" cy="200" r="6" fill="${colors.shadowGrey}" />

  <!-- The "Reverse Engineering" Tracing Path -->
  <path d="M 120 100 C 180 50, 150 200, 220 180 S 280 80, 320 150" fill="none" stroke="${colors.autumnLeaf}" stroke-width="4" stroke-linecap="round" class="p3-path" filter="url(#p3-glow)" />

  <!-- Target Found Node -->
  <circle cx="320" cy="150" r="8" fill="${colors.purple}" filter="url(#p3-glow)" />

  <!-- The Developer trying to navigate -->
  <g transform="translate(60, 100)">
    <g class="p3-dev">
      <rect x="-20" y="-15" width="40" height="30" rx="4" fill="${colors.shadowGrey}" stroke="${colors.purple}" stroke-width="2" />
      <circle cx="-5" cy="0" r="3" fill="${colors.alabasterGrey}" />
      <circle cx="5" cy="0" r="3" fill="${colors.alabasterGrey}" />
      <path d="M -5 8 Q 0 5 5 8" fill="none" stroke="${colors.alabasterGrey}" stroke-linecap="round" />
      <!-- Scanning Radar pulse -->
      <circle cx="20" cy="0" r="10" fill="none" stroke="${colors.autumnLeaf}" stroke-width="2" class="p3-scanner" />
    </g>
  </g>
</svg>`;
