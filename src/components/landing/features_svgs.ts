// Brand Colors
export const colors = {
    shadowGrey: '#1a1a23',
    alabasterGrey: '#e6e6e6',
    autumnLeaf: '#e67000',
    purple: '#b500e6',
};

// 1. Visual-first (Instant Architecture Diagrams)
export const anim1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <linearGradient id="v1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.purple}" />
      <stop offset="100%" stop-color="${colors.autumnLeaf}" />
    </linearGradient>
    <filter id="v1-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes v1-float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    @keyframes v1-float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
    @keyframes v1-float3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    @keyframes v1-flow { to { stroke-dashoffset: -40; } }
    @keyframes v1-pulseCore { 0%, 100% { filter: drop-shadow(0 0 10px ${colors.purple}80); } 50% { filter: drop-shadow(0 0 25px ${colors.purple}); } }

    .v1-node1 { animation: v1-float1 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v1-node2 { animation: v1-float2 5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v1-node3 { animation: v1-float3 4.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v1-core { animation: v1-pulseCore 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v1-line { stroke-dasharray: 8 8; animation: v1-flow 1.5s linear infinite; }
  </style>

  <!-- Connections -->
  <path d="M 200 150 L 100 80" stroke="url(#v1-grad)" stroke-width="3" fill="none" class="v1-line" opacity="0.7" />
  <path d="M 200 150 L 300 80" stroke="url(#v1-grad)" stroke-width="3" fill="none" class="v1-line" opacity="0.7" />
  <path d="M 200 150 L 100 220" stroke="url(#v1-grad)" stroke-width="3" fill="none" class="v1-line" opacity="0.7" />
  <path d="M 200 150 L 300 220" stroke="url(#v1-grad)" stroke-width="3" fill="none" class="v1-line" opacity="0.7" />
  <path d="M 200 150 L 200 50" stroke="${colors.purple}" stroke-width="3" fill="none" class="v1-line" opacity="0.5" />

  <!-- Outer Nodes -->
  <g transform="translate(100, 80)">
    <g class="v1-node1">
      <rect x="-30" y="-20" width="60" height="40" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
      <rect x="-20" y="-10" width="40" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.5" />
      <rect x="-20" y="2" width="25" height="4" rx="2" fill="${colors.autumnLeaf}" />
    </g>
  </g>

  <g transform="translate(300, 80)">
    <g class="v1-node2">
      <rect x="-30" y="-20" width="60" height="40" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
      <rect x="-20" y="-10" width="40" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.5" />
      <rect x="-20" y="2" width="30" height="4" rx="2" fill="${colors.purple}" />
    </g>
  </g>

  <g transform="translate(100, 220)">
    <g class="v1-node3">
      <rect x="-30" y="-20" width="60" height="40" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
      <circle cx="0" cy="0" r="10" fill="${colors.purple}" opacity="0.8" />
    </g>
  </g>

  <g transform="translate(300, 220)">
    <g class="v1-node1">
      <rect x="-30" y="-20" width="60" height="40" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
      <circle cx="0" cy="0" r="10" fill="${colors.autumnLeaf}" opacity="0.8" />
    </g>
  </g>

  <g transform="translate(200, 50)">
    <g class="v1-node2">
      <circle cx="0" cy="0" r="18" fill="${colors.shadowGrey}" stroke="${colors.purple}" stroke-width="3" />
      <circle cx="0" cy="0" r="6" fill="${colors.alabasterGrey}" />
    </g>
  </g>

  <!-- Central Interactive Core -->
  <g transform="translate(200, 150)">
    <g class="v1-core">
      <circle cx="0" cy="0" r="45" fill="url(#v1-grad)" filter="url(#v1-glow)" opacity="0.3" />
      <rect x="-40" y="-30" width="80" height="60" rx="12" fill="url(#v1-grad)" />
      <!-- Mini architecture inside core -->
      <circle cx="-15" cy="-5" r="5" fill="${colors.alabasterGrey}" />
      <circle cx="15" cy="-5" r="5" fill="${colors.alabasterGrey}" />
      <circle cx="0" cy="15" r="5" fill="${colors.alabasterGrey}" />
      <path d="M -15 -5 L 0 15 L 15 -5" stroke="${colors.alabasterGrey}" stroke-width="2" fill="none" />
    </g>
  </g>
</svg>`;

// 2. Self-serve (Instant Knowledge Transfer)
export const anim2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <linearGradient id="v2-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.purple}" />
      <stop offset="100%" stop-color="${colors.autumnLeaf}" />
    </linearGradient>
    <filter id="v2-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes v2-highlightStep {
      0%, 100% { opacity: 0.3; transform: scale(0.95); stroke: ${colors.shadowGrey}; }
      33% { opacity: 1; transform: scale(1.05); stroke: ${colors.alabasterGrey}; filter: drop-shadow(0 0 15px ${colors.autumnLeaf}80); }
    }
    @keyframes v2-highlightStep2 {
      0%, 33%, 100% { opacity: 0.3; transform: scale(0.95); stroke: ${colors.shadowGrey}; }
      66% { opacity: 1; transform: scale(1.05); stroke: ${colors.alabasterGrey}; filter: drop-shadow(0 0 15px ${colors.purple}80); }
    }
    @keyframes v2-highlightStep3 {
      0%, 66% { opacity: 0.3; transform: scale(0.95); stroke: ${colors.shadowGrey}; }
      100% { opacity: 1; transform: scale(1.05); stroke: ${colors.alabasterGrey}; filter: drop-shadow(0 0 15px ${colors.autumnLeaf}80); }
    }
    @keyframes v2-tracePath {
      0% { stroke-dashoffset: 400; }
      100% { stroke-dashoffset: 0; }
    }

    .v2-step1 { animation: v2-highlightStep 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v2-step2 { animation: v2-highlightStep2 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v2-step3 { animation: v2-highlightStep3 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v2-path { stroke-dasharray: 400; stroke-dashoffset: 400; animation: v2-tracePath 6s linear infinite; }
  </style>

  <!-- Glowing background path linking steps -->
  <path d="M 80 150 C 140 50, 260 250, 320 150" fill="none" stroke="url(#v2-grad)" stroke-width="6" stroke-linecap="round" class="v2-path" filter="url(#v2-glow)" />
  <path d="M 80 150 C 140 50, 260 250, 320 150" fill="none" stroke="${colors.shadowGrey}" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4" opacity="0.5" />

  <!-- Step 1: The Undocumented Code -->
  <g transform="translate(80, 150)">
    <g class="v2-step1">
      <rect x="-40" y="-45" width="80" height="90" rx="6" fill="${colors.shadowGrey}" stroke-width="2" />
      <rect x="-30" y="-30" width="40" height="6" rx="3" fill="${colors.purple}" />
      <rect x="-30" y="-15" width="60" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.4" />
      <rect x="-30" y="0" width="50" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.4" />
      <rect x="-30" y="15" width="30" height="6" rx="3" fill="${colors.autumnLeaf}" />
      <circle cx="0" cy="-45" r="12" fill="${colors.alabasterGrey}" />
      <text x="-4" y="-40" font-family="sans-serif" font-size="14" font-weight="bold" fill="${colors.shadowGrey}">1</text>
    </g>
  </g>

  <!-- Step 2: Visual Processing -->
  <g transform="translate(200, 150)">
    <g class="v2-step2">
      <rect x="-40" y="-45" width="80" height="90" rx="6" fill="${colors.shadowGrey}" stroke-width="2" />
      <!-- Flowchart graphic inside -->
      <rect x="-20" y="-25" width="40" height="15" rx="3" fill="${colors.purple}" />
      <rect x="-30" y="5" width="25" height="15" rx="3" fill="${colors.alabasterGrey}" opacity="0.6" />
      <rect x="5" y="5" width="25" height="15" rx="3" fill="${colors.autumnLeaf}" />
      <path d="M 0 -10 L -15 5 M 0 -10 L 15 5" stroke="${colors.alabasterGrey}" stroke-width="2" fill="none" opacity="0.6"/>
      
      <circle cx="0" cy="-45" r="12" fill="${colors.alabasterGrey}" />
      <text x="-4" y="-40" font-family="sans-serif" font-size="14" font-weight="bold" fill="${colors.shadowGrey}">2</text>
    </g>
  </g>

  <!-- Step 3: Knowledge Transfer (Understanding) -->
  <g transform="translate(320, 150)">
    <g class="v2-step3">
      <rect x="-40" y="-45" width="80" height="90" rx="6" fill="${colors.shadowGrey}" stroke-width="2" />
      <!-- Checkmark & Document -->
      <path d="M -20 -10 L -5 5 L 20 -20" fill="none" stroke="${colors.autumnLeaf}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="-20" y="15" width="40" height="4" rx="2" fill="${colors.alabasterGrey}" opacity="0.8" />
      <rect x="-20" y="25" width="25" height="4" rx="2" fill="${colors.alabasterGrey}" opacity="0.8" />
      
      <circle cx="0" cy="-45" r="12" fill="${colors.alabasterGrey}" />
      <text x="-4" y="-40" font-family="sans-serif" font-size="14" font-weight="bold" fill="${colors.shadowGrey}">3</text>
    </g>
  </g>
</svg>`;

// 3. Auto-sync (On-Demand & Always in Sync)
export const anim3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <filter id="v3-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes v3-spin { 100% { transform: rotate(360deg); } }
    @keyframes v3-codeType { 0%, 100% { width: 10px; opacity: 0.2; } 50% { width: 50px; opacity: 1; } }
    @keyframes v3-mapPulse { 0%, 100% { transform: scale(1); opacity: 0.5; stroke-width: 2; } 50% { transform: scale(1.05); opacity: 1; stroke-width: 4; } }

    .v3-sync { animation: v3-spin 4s linear infinite; transform-origin: 200px 150px; }
    .v3-code-line { animation: v3-codeType 2s ease-in-out infinite; }
    .v3-code-line2 { animation: v3-codeType 2s ease-in-out infinite 0.5s; }
    .v3-map-node { animation: v3-mapPulse 2s ease-in-out infinite 1s; transform-origin: center; transform-box: fill-box; }
  </style>

  <!-- Left Side: Source Code -->
  <g transform="translate(40, 70)">
    <rect x="0" y="0" width="120" height="160" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" opacity="0.8"/>
    <!-- Fake Window Header -->
    <path d="M 0 8 Q 0 0 8 0 L 112 0 Q 120 0 120 8 L 120 20 L 0 20 Z" fill="${colors.alabasterGrey}" opacity="0.1" />
    <circle cx="15" cy="10" r="3" fill="${colors.autumnLeaf}" />
    <circle cx="25" cy="10" r="3" fill="${colors.purple}" />
    <!-- Code Lines -->
    <rect x="15" y="40" width="40" height="6" rx="3" fill="${colors.purple}" />
    <rect x="15" y="55" width="70" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.4" />
    <rect x="25" y="70" width="60" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.4" />
    <rect x="25" y="85" width="30" height="6" rx="3" fill="${colors.autumnLeaf}" class="v3-code-line" />
    <rect x="15" y="100" width="50" height="6" rx="3" fill="${colors.alabasterGrey}" opacity="0.4" />
    <rect x="15" y="115" width="20" height="6" rx="3" fill="${colors.purple}" class="v3-code-line2" />
  </g>

  <!-- Right Side: Visual Map -->
  <g transform="translate(240, 70)">
    <rect x="0" y="0" width="120" height="160" rx="8" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" opacity="0.8"/>
    <!-- Interactive Map UI -->
    <path d="M 60 40 L 30 90 M 60 40 L 90 90 M 30 90 L 60 130 M 90 90 L 60 130" stroke="${colors.alabasterGrey}" stroke-width="2" fill="none" opacity="0.3" class="v3-map-node" />
    
    <circle cx="60" cy="40" r="14" fill="${colors.purple}" class="v3-map-node" filter="url(#v3-glow)"/>
    <rect x="15" y="80" width="30" height="20" rx="4" fill="${colors.shadowGrey}" stroke="${colors.autumnLeaf}" stroke-width="2" class="v3-map-node"/>
    <rect x="75" y="80" width="30" height="20" rx="4" fill="${colors.shadowGrey}" stroke="${colors.autumnLeaf}" stroke-width="2" class="v3-map-node"/>
    <circle cx="60" cy="130" r="10" fill="${colors.alabasterGrey}" class="v3-map-node" />
  </g>

  <!-- Center: Syncing Engine -->
  <g class="v3-sync">
    <circle cx="200" cy="150" r="30" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="4" />
    <!-- Sync Arrows -->
    <path d="M 185 140 C 185 130, 195 125, 205 130 L 210 125 L 210 140 L 195 140 Z" fill="${colors.autumnLeaf}" filter="url(#v3-glow)"/>
    <path d="M 215 160 C 215 170, 205 175, 195 170 L 190 175 L 190 160 L 205 160 Z" fill="${colors.purple}" filter="url(#v3-glow)"/>
  </g>
</svg>`;

// 4. AI-powered (Chat with Dokero)
export const anim4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="w-full h-full">
  <defs>
    <linearGradient id="v4-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.purple}" />
      <stop offset="100%" stop-color="${colors.autumnLeaf}" />
    </linearGradient>
    <filter id="v4-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @keyframes v4-type { 0%, 100% { opacity: 0.2; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-3px); } }
    @keyframes v4-popMap { 0%, 20% { opacity: 0; transform: scale(0.8) translateY(20px); } 40%, 90% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.9) translateY(-10px); } }
    @keyframes v4-sparkle { 0%, 100% { transform: scale(0.8) rotate(0deg); opacity: 0.5; } 50% { transform: scale(1.2) rotate(180deg); opacity: 1; } }
    @keyframes v4-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

    .v4-dot1 { animation: v4-type 1.5s infinite 0s; }
    .v4-dot2 { animation: v4-type 1.5s infinite 0.2s; }
    .v4-dot3 { animation: v4-type 1.5s infinite 0.4s; }
    .v4-generated-map { animation: v4-popMap 5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v4-ai-sparkle { animation: v4-sparkle 2s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
    .v4-float-map { animation: v4-float 3s ease-in-out infinite; }
  </style>

  <!-- The Generated Interactive Map (Result) -->
  <g class="v4-generated-map v4-float-map">
    <!-- Diagram Panel -->
    <rect x="80" y="30" width="240" height="140" rx="12" fill="${colors.shadowGrey}" stroke="url(#v4-grad)" stroke-width="3" filter="url(#v4-glow)" />
    
    <!-- Inner Nodes -->
    <rect x="170" y="45" width="60" height="25" rx="6" fill="${colors.purple}" />
    <path d="M 200 70 L 130 110 M 200 70 L 270 110 M 200 70 L 200 130" stroke="${colors.alabasterGrey}" stroke-width="2" opacity="0.5" fill="none" />
    <rect x="100" y="110" width="60" height="25" rx="6" fill="${colors.autumnLeaf}" />
    <rect x="240" y="110" width="60" height="25" rx="6" fill="${colors.autumnLeaf}" />
    <rect x="170" y="130" width="60" height="25" rx="6" fill="${colors.alabasterGrey}" opacity="0.8" />
    <!-- AI Sparkle on Diagram -->
    <path class="v4-ai-sparkle" d="M 310 40 L 315 50 L 325 55 L 315 60 L 310 70 L 305 60 L 295 55 L 305 50 Z" fill="${colors.autumnLeaf}" filter="url(#v4-glow)"/>
  </g>

  <!-- Bottom Chat Interface (The Trigger) -->
  <g transform="translate(60, 210)">
    <!-- Chat Input Box -->
    <rect x="0" y="0" width="280" height="50" rx="25" fill="${colors.shadowGrey}" stroke="${colors.alabasterGrey}" stroke-width="2" />
    <!-- AI Icon / Send Button -->
    <circle cx="250" cy="25" r="16" fill="url(#v4-grad)" filter="url(#v4-glow)" />
    <path d="M 245 20 L 255 25 L 245 30 Z" fill="${colors.shadowGrey}" />
    <!-- User Input (Typing indicator) -->
    <text x="30" y="30" font-family="sans-serif" font-size="14" fill="${colors.alabasterGrey}" opacity="0.7">Ask Dokero...</text>
    <circle cx="130" cy="26" r="3" fill="${colors.purple}" class="v4-dot1" />
    <circle cx="140" cy="26" r="3" fill="${colors.purple}" class="v4-dot2" />
    <circle cx="150" cy="26" r="3" fill="${colors.purple}" class="v4-dot3" />
  </g>
</svg>`;
