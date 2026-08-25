import type { SVGProps } from "react";

const lineMuted = { stroke: "var(--muted-2)" };
const lineFg = { stroke: "var(--foreground)" };
const lineAccent = { stroke: "var(--accent)" };

export function DiscoverKashmirArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Layered mountain range with a circling sun, representing Kashmir's landscape"
      {...props}
    >
      {/* sun */}
      <circle cx="128" cy="86" r="26" style={lineAccent} strokeWidth={1.5} opacity={0.9} />
      <g style={lineAccent} opacity={0.5}>
        <path d="M128 40v14M128 118v14M82 86H96M160 86h14M95 53l10 10M151 109l10 10M95 119l10-10M151 63l10-10" />
      </g>

      {/* back mountain range */}
      <g style={lineMuted} opacity={0.45}>
        <path d="M-10 210 L60 130 L110 180 L150 110 L210 210 Z" />
        <path d="M190 210 L250 120 L300 180 L340 140 L410 210 Z" />
      </g>

      {/* front mountain range */}
      <g style={lineFg} opacity={0.85}>
        <path d="M-10 230 L70 150 L120 200 L170 140 L230 230 Z" />
        <path d="M40 230 L100 160 L140 200" />
        <path d="M210 230 L290 130 L340 190 L410 230 Z" />
        <path d="M260 195 L290 165 L315 195" />
      </g>

      {/* snow caps */}
      <g style={lineAccent} opacity={0.7}>
        <path d="M60 150 L70 150 L65 162 Z" fill="var(--accent)" stroke="none" />
        <path d="M282 145 L290 130 L298 145 Z" fill="var(--accent)" stroke="none" />
      </g>

      {/* base line / valley path */}
      <path
        d="M-10 248 C 80 232, 140 262, 200 244 S 340 228, 410 248"
        style={lineMuted}
        opacity={0.6}
        strokeDasharray="1 7"
      />

      {/* location pin */}
      <g style={lineAccent} transform="translate(196 226)">
        <path d="M0 0 C -9 0 -16 7 -16 16 C -16 27 0 44 0 44 C 0 44 16 27 16 16 C 16 7 9 0 0 0 Z" />
        <circle cx="0" cy="16" r="5" />
      </g>
    </svg>
  );
}

export function KashMeetArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Two connected conversation windows representing a live tutor and learner session"
      {...props}
    >
      {/* connecting pulse line */}
      <path
        d="M148 130 C 175 110, 225 190, 252 170"
        style={lineAccent}
        opacity={0.7}
        strokeDasharray="1 8"
      />
      <circle cx="200" cy="150" r="3" fill="var(--accent)" stroke="none" opacity={0.9} />

      {/* left window (tutor) */}
      <g style={lineFg} opacity={0.85}>
        <rect x="46" y="70" width="140" height="104" rx="10" />
        <circle cx="116" cy="108" r="16" />
        <path d="M90 158 C90 138, 142 138, 142 158" />
      </g>
      <g style={lineMuted} opacity={0.5}>
        <path d="M62 190h108" />
        <path d="M62 202h70" />
      </g>

      {/* right window (learner) */}
      <g style={lineMuted} opacity={0.55}>
        <rect x="214" y="118" width="140" height="104" rx="10" />
        <circle cx="284" cy="156" r="16" />
        <path d="M258 206 C258 186, 310 186, 310 206" />
      </g>
      <g style={lineMuted} opacity={0.35}>
        <path d="M230 238h108" />
        <path d="M230 250h70" />
      </g>

      {/* call affordance */}
      <g style={lineAccent} opacity={0.8}>
        <circle cx="116" cy="200" r="14" />
        <path d="M111 194 L124 200 L111 206 Z" fill="var(--accent)" stroke="none" />
      </g>
    </svg>
  );
}
