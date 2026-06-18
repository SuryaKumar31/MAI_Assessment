// "use client";

// import { useState } from "react";

// const GlowGrid = () => {
//   const [mousePos, setMousePos] = useState({
//     x: 0,
//     y: 0,
//   });

//   return (
//     <div
//       className="overflow-hidden absolute inset-0"
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();

//         setMousePos({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }}
//     >
//       <svg
//         className="pointer-events-none absolute inset-0 h-full w-full"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <defs>
//           <pattern
//             id="ft-glow-sm"
//             width="60"
//             height="60"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M 60 0 L 0 0 0 60"
//               fill="none"
//               stroke="rgba(0,212,255,0.75)"
//               strokeWidth="0.5"
//             />
//           </pattern>

//           <pattern
//             id="ft-glow-lg"
//             width="240"
//             height="240"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M 240 0 L 0 0 0 240"
//               fill="none"
//               stroke="rgba(77,184,255,1)"
//               strokeWidth="1.1"
//             />
//           </pattern>

//           <radialGradient
//             id="ft-cursor-fade"
//             gradientUnits="userSpaceOnUse"
//             cx={mousePos.x}
//             cy={mousePos.y}
//             r="190"
//           >
//             <stop offset="0%" stopColor="white" stopOpacity="1" />
//             <stop offset="28%" stopColor="white" stopOpacity="0.72" />
//             <stop offset="52%" stopColor="white" stopOpacity="0.28" />
//             <stop offset="72%" stopColor="white" stopOpacity="0.07" />
//             <stop offset="82%" stopColor="white" stopOpacity="0.17" />
//             <stop offset="92%" stopColor="white" stopOpacity="0.04" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </radialGradient>

//           <mask id="ft-cursor-mask">
//             <rect width="100%" height="100%" fill="black" />
//             <rect width="100%" height="100%" fill="url(#ft-cursor-fade)" />
//           </mask>
//         </defs>

//         <g mask="url(#ft-cursor-mask)">
//           <rect width="100%" height="100%" fill="url(#ft-glow-sm)" />
//           <rect width="100%" height="100%" fill="url(#ft-glow-lg)" />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default GlowGrid;

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function GridGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  const gridControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // --- Canvas particle logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const footer = footerRef.current;
    if (!canvas || !footer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = footer.offsetWidth;
      canvas.height = footer.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticle = (x: number, y: number) => {
      for (let i = 0; i < 2; i++) {
        const maxLife = 60 + Math.random() * 60;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.5 - 0.3,
          size: Math.random() * 2 + 1,
          opacity: 1,
          life: 0,
          maxLife,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHoveredRef.current) {
        spawnParticle(mouseRef.current.x, mouseRef.current.y);
      }

      particlesRef.current = particlesRef.current.filter(
        (p) => p.life < p.maxLife,
      );

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.opacity = 1 - p.life / p.maxLife;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity * 0.7})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsHovered(true);
    gridControls.start("visible");
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setIsHovered(false);
    gridControls.start("hidden");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // SVG grid: vertical & horizontal lines with staggered reveal
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.6, delay: i * 0.05, ease: "easeOut" },
        opacity: { duration: 0.3, delay: i * 0.05 },
      },
    }),
  };

  // Grid configuration
  const COLS = 8;
  const ROWS = 4;

  return (
    <div
      ref={footerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      //   className="relative w-full overflow-hidden bg-[#020D18] text-white font-[var(--font-montserrat)] min-h-[200px]"
      className="absolute inset-0"
    >
      {/* Layer 1 — Static subtle base grid (always visible, very faint) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="base-grid"
            width="80"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(56,189,248,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#base-grid)" />
      </svg>

      {/* Layer 2 — Hover-animated glowing grid */}
      <motion.svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
        animate={gridControls}
        initial="hidden"
        variants={gridVariants}
        viewBox="0 0 800 200"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vertical lines */}
        {Array.from({ length: COLS + 1 }).map((_, i) => {
          const x = (i / COLS) * 800;
          return (
            <motion.line
              key={`v-${i}`}
              x1={x}
              y1={0}
              x2={x}
              y2={200}
              stroke="rgba(56,189,248,0.35)"
              strokeWidth="0.8"
              filter="url(#glow)"
              custom={i}
              variants={lineVariants}
            />
          );
        })}

        {/* Horizontal lines */}
        {Array.from({ length: ROWS + 1 }).map((_, i) => {
          const y = (i / ROWS) * 200;
          return (
            <motion.line
              key={`h-${i}`}
              x1={0}
              y1={y}
              x2={800}
              y2={y}
              stroke="rgba(56,189,248,0.25)"
              strokeWidth="0.8"
              filter="url(#glow)"
              custom={COLS + i}
              variants={lineVariants}
            />
          );
        })}

        {/* Intersection dot accents */}
        {Array.from({ length: COLS + 1 }).map((_, col) =>
          Array.from({ length: ROWS + 1 }).map((_, row) => {
            const x = (col / COLS) * 800;
            const y = (row / ROWS) * 200;
            return (
              <motion.circle
                key={`dot-${col}-${row}`}
                cx={x}
                cy={y}
                r={1.5}
                fill="rgba(56,189,248,0.6)"
                filter="url(#glow)"
                custom={(col + row) * 0.3}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: (i: number) => ({
                    opacity: 1,
                    scale: 1,
                    transition: { delay: i * 0.02 + 0.3, duration: 0.3 },
                  }),
                }}
              />
            );
          }),
        )}
      </motion.svg>

      {/* Layer 3 — Canvas for particle trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 3 }}
      />
    </div>
  );
}
