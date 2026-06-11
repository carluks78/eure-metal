const GREEN = '#3A8C3E';

// Projection: ViewBox 0 0 560 440
// x = (lng - (-5.5)) * 38   y = (51.4 - lat) * 46
// France metropolitan extent: lng -5.1→9.6, lat 41.3→51.1

const DEPTS = [
  {
    id: '76', name: 'Seine-Maritime',
    // Northern coastal dept: Le Havre → Dieppe → SE border → S border with 27
    d: 'M213,87 L235,74 L252,68 L261,61 L275,63 L282,87 L271,96 L248,100 L215,97 Z',
    cx: 250, cy: 82, green: true,
  },
  {
    id: '27', name: 'Eure', star: true,
    // East of 14, south of 76 — landlocked
    d: 'M215,97 L248,100 L271,96 L282,87 L284,112 L285,130 L273,136 L243,138 L215,130 L213,107 Z',
    cx: 252, cy: 116, green: true,
  },
  {
    id: '14', name: 'Calvados',
    // West of 27, coastal (D-Day beaches)
    d: 'M163,97 L213,87 L215,97 L213,107 L215,130 L193,124 L173,118 L152,109 Z',
    cx: 186, cy: 110, green: true,
  },
  {
    id: '61', name: 'Orne',
    // South of 14 and 27 — landlocked
    d: 'M152,109 L193,124 L215,130 L243,138 L259,149 L241,163 L208,161 L177,158 L152,132 Z',
    cx: 205, cy: 142, green: true,
  },
  {
    id: '28', name: 'Eure-et-Loir',
    // South of 27, east of 61
    d: 'M243,138 L273,136 L285,130 L297,148 L296,168 L269,172 L254,162 L241,163 L259,149 Z',
    cx: 269, cy: 155, green: true,
  },
  {
    id: 'IDF', name: 'Île-de-France',
    // Paris region — gray (PL/TP only)
    d: 'M282,87 L332,82 L348,126 L337,160 L296,168 L297,148 L285,130 Z',
    cx: 313, cy: 128, green: false,
  },
];

// France mainland outline (simplified polygon, clockwise from NW)
const FRANCE_PATH =
  'M38,138 L77,124 L133,127 L156,127 ' +
  'L139,106 L147,79 L161,84 L163,97 ' + // Cotentin peninsula
  'L213,87 L235,74 L252,68 L261,61 L275,63 L300,17 ' + // N coast
  'L343,42 L394,70 L441,88 L511,112 ' + // Belgium/Germany
  'L498,135 L494,178 L449,204 L437,239 ' + // Switzerland
  'L428,268 L459,298 L496,352 L480,360 ' + // Italian border/Riviera
  'L415,374 L360,368 L323,401 L265,397 ' + // Mediterranean/Pyrenees
  'L200,390 L141,370 ' + // Spanish border
  'L152,364 L155,320 L162,290 L167,268 L163,242 L148,215 ' + // Atlantic coast
  'L124,188 L90,179 L45,148 L38,138 Z'; // Brittany

// Pin marker SVG path
function Pin({ cx, cy, color, size = 8, star = false }: { cx: number; cy: number; color: string; size?: number; star?: boolean }) {
  const r = size;
  const tipY = cy + r * 0.7;
  return (
    <g>
      {star && <circle cx={cx} cy={cy - r * 0.35} r={r + 4} fill={color} fillOpacity="0.18" />}
      <circle cx={cx} cy={cy - r * 0.35} r={r * 0.85} fill={color} stroke="white" strokeWidth="0.7" />
      <line x1={cx} y1={cy + r * 0.35} x2={cx} y2={tipY} stroke={color} strokeWidth="1.2" />
      {star
        ? <text x={cx} y={cy - r * 0.32} textAnchor="middle" dominantBaseline="middle" fontSize={r * 0.85} fill="white" fontFamily="Oswald, sans-serif">★</text>
        : <circle cx={cx} cy={cy - r * 0.35} r={r * 0.32} fill="white" />
      }
    </g>
  );
}

export function FranceMap() {
  return (
    <div style={{ border: `2px solid ${GREEN}`, overflow: 'hidden', backgroundColor: '#141c26' }}>
      <svg
        viewBox="0 0 560 430"
        style={{ width: '100%', height: 'clamp(260px, 45vw, 480px)', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sea / background */}
        <rect width="560" height="430" fill="#141c26" />

        {/* Subtle grid */}
        {[112, 224, 336, 448].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="430" stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
        ))}
        {[107, 214, 321].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="560" y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
        ))}

        {/* France mainland */}
        <path d={FRANCE_PATH} fill="#252d3a" stroke="#3a4455" strokeWidth="0.8" />

        {/* Non-covered Norman departments (faint outline for geographic context) */}
        {/* Manche (50) — west of 14, includes Cherbourg */}
        <path d="M38,138 L77,124 L133,127 L156,127 L139,106 L147,79 L161,84 L163,97 L152,109 L152,132 L130,140 L105,148 L75,150 Z"
          fill="#2a3240" stroke="#3a4455" strokeWidth="0.4" />

        {/* Seine-et-Oise / Oise / Somme region (context) */}
        <path d="M282,87 L332,82 L360,55 L343,42 L300,17 L275,63 Z"
          fill="#2a3240" stroke="#3a4455" strokeWidth="0.4" />

        {/* Department overlays */}
        {DEPTS.map(dept => (
          <path
            key={dept.id}
            d={dept.d}
            fill={dept.green ? GREEN : '#5a6472'}
            fillOpacity={dept.green ? 0.88 : 0.72}
            stroke="white"
            strokeWidth="0.6"
            strokeOpacity="0.35"
          />
        ))}

        {/* Department number labels */}
        {DEPTS.map(dept => (
          <g key={`lbl-${dept.id}`}>
            <text
              x={dept.cx} y={dept.cy}
              textAnchor="middle" dominantBaseline="middle"
              fontSize={dept.id === 'IDF' ? 7.5 : dept.id === '27' ? 9 : 8}
              fontWeight={dept.id === '27' ? 'bold' : '600'}
              fill="white" fontFamily="Oswald, sans-serif"
              fillOpacity="0.95"
            >
              {dept.id}
            </text>
          </g>
        ))}

        {/* Location pins */}
        {/* Dept 76 */}
        <Pin cx={247} cy={77} color={GREEN} size={6} />
        {/* Dept 14 */}
        <Pin cx={182} cy={105} color={GREEN} size={6} />
        {/* Dept 61 */}
        <Pin cx={200} cy={140} color={GREEN} size={6} />
        {/* Dept 28 */}
        <Pin cx={265} cy={152} color={GREEN} size={6} />
        {/* IDF */}
        <Pin cx={315} cy={127} color="#5a6472" size={6} />

        {/* MAIN: Chavigny-Bailleul (EURE MÉTAL HQ) — star pin */}
        <Pin cx={255} cy={107} color={GREEN} size={9} star />

        {/* SNR Chaignes — smaller pin */}
        <Pin cx={264} cy={111} color="#2D7031" size={6} />

        {/* Callout: EURE MÉTAL */}
        <g transform="translate(255,89)">
          <rect x="-30" y="-9" width="60" height="15" rx="2" fill="#0d1117" fillOpacity="0.92" />
          <text x="0" y="0" textAnchor="middle" dominantBaseline="middle"
            fontSize="6.5" fill={GREEN} fontFamily="Oswald, sans-serif" fontWeight="bold">
            ★ EURE MÉTAL
          </text>
          <text x="0" y="6" textAnchor="middle" dominantBaseline="middle"
            fontSize="5" fill="#9CA3AF" fontFamily="Inter, sans-serif">
            Chavigny-Bailleul (27)
          </text>
        </g>

        {/* Callout: SNR */}
        <g transform="translate(284,105)">
          <rect x="-18" y="-7" width="36" height="12" rx="2" fill="#0d1117" fillOpacity="0.88" />
          <text x="0" y="-1" textAnchor="middle" dominantBaseline="middle"
            fontSize="5.5" fill="#4ade80" fontFamily="Oswald, sans-serif" fontWeight="600">
            SNR
          </text>
          <text x="0" y="4.5" textAnchor="middle" dominantBaseline="middle"
            fontSize="4.5" fill="#6B7280" fontFamily="Inter, sans-serif">
            Chaignes
          </text>
        </g>

        {/* IDF label callout */}
        <g transform="translate(355,110)">
          <rect x="-28" y="-10" width="56" height="18" rx="2" fill="#0d1117" fillOpacity="0.88" />
          <text x="0" y="-2" textAnchor="middle" dominantBaseline="middle"
            fontSize="5.5" fill="#9CA3AF" fontFamily="Oswald, sans-serif">
            Île-de-France
          </text>
          <text x="0" y="4" textAnchor="middle" dominantBaseline="middle"
            fontSize="4.5" fill="#6B7280" fontFamily="Inter, sans-serif">
            PL / TP uniquement
          </text>
        </g>

        {/* Compass rose */}
        <g transform="translate(520, 390)">
          <circle cx="0" cy="0" r="14" fill="#1e2530" stroke="#3a4455" strokeWidth="0.8" />
          <text x="0" y="-6" textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="#9CA3AF" fontFamily="Oswald, sans-serif" fontWeight="bold">N</text>
          <line x1="0" y1="-3" x2="0" y2="5" stroke="#9CA3AF" strokeWidth="0.8" />
          <polygon points="0,-3 -2,1 2,1" fill={GREEN} />
        </g>

        {/* Scale indicator */}
        <g transform="translate(30, 410)">
          <line x1="0" y1="0" x2="76" y2="0" stroke="#6B7280" strokeWidth="1" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#6B7280" strokeWidth="1" />
          <line x1="76" y1="-3" x2="76" y2="3" stroke="#6B7280" strokeWidth="1" />
          <text x="38" y="-5" textAnchor="middle" fontSize="6" fill="#6B7280" fontFamily="Inter, sans-serif">200 km</text>
        </g>
      </svg>

      {/* Legend */}
      <div style={{ backgroundColor: '#0d1117', padding: '0.625rem 1rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap', borderTop: '1px solid #1f2937' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: GREEN, flexShrink: 0 }} />
          <span style={{ color: '#9CA3AF', fontSize: '0.6875rem' }}>Tous services — 14 · 27 · 28 · 61 · 76</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#5a6472', flexShrink: 0 }} />
          <span style={{ color: '#9CA3AF', fontSize: '0.6875rem' }}>Île-de-France — Poids lourds & TP uniquement</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: GREEN, flexShrink: 0 }} />
          <span style={{ color: '#9CA3AF', fontSize: '0.6875rem' }}>★ Chavigny-Bailleul — Siège EURE MÉTAL</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2D7031', flexShrink: 0 }} />
          <span style={{ color: '#9CA3AF', fontSize: '0.6875rem' }}>Chaignes — SNR (membre du Groupe EURE MÉTAL)</span>
        </div>
      </div>
    </div>
  );
}
