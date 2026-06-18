"use client";

interface GlowGridProps {
  mousePos: {
    x: number;
    y: number;
  };
}

const GlowGrid = ({ mousePos }: GlowGridProps) => {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ft-glow-sm"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0,212,255,0.75)"
              strokeWidth="0.5"
            />
          </pattern>

          <pattern
            id="ft-glow-lg"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke="rgba(77,184,255,1)"
              strokeWidth="1.1"
            />
          </pattern>

          <radialGradient
            id="ft-cursor-fade"
            gradientUnits="userSpaceOnUse"
            cx={mousePos.x}
            cy={mousePos.y}
            r="190"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="28%" stopColor="white" stopOpacity="0.72" />
            <stop offset="52%" stopColor="white" stopOpacity="0.28" />
            <stop offset="72%" stopColor="white" stopOpacity="0.07" />
            <stop offset="82%" stopColor="white" stopOpacity="0.17" />
            <stop offset="92%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="ft-cursor-mask">
            <rect width="100%" height="100%" fill="black" />
            <rect width="100%" height="100%" fill="url(#ft-cursor-fade)" />
          </mask>
        </defs>

        <g mask="url(#ft-cursor-mask)">
          <rect width="100%" height="100%" fill="url(#ft-glow-sm)" />
          <rect width="100%" height="100%" fill="url(#ft-glow-lg)" />
        </g>
      </svg>
    </>
  );
};

export default GlowGrid;
