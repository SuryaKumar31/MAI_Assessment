"use client";

import { useEffect, useRef } from "react";

const FooterEffects = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let frame = 0;

    const draw = () => {
      frame++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.25;

      const lines = 12;

      for (let i = 0; i < lines; i++) {
        const alpha = Math.random() * 0.6;

        ctx.strokeStyle = `rgba(77,184,255,${alpha})`;
        ctx.shadowColor = "#4DB8FF";
        ctx.shadowBlur = 15;

        ctx.lineWidth = Math.random() > 0.7 ? 2 : 1;

        if (Math.random() > 0.5) {
          const length = 80 + Math.random() * 250;

          ctx.beginPath();
          ctx.moveTo(centerX - length / 2, centerY);
          ctx.lineTo(centerX + length / 2, centerY);
          ctx.stroke();
        } else {
          const length = 80 + Math.random() * 250;

          ctx.beginPath();
          ctx.moveTo(centerX, centerY - length / 2);
          ctx.lineTo(centerX, centerY + length / 2);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);

    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Grid Layer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 1 }}
      >
        <defs>
          <pattern
            id="grid-small"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L0 0 0 60"
              fill="none"
              stroke="rgba(0,212,255,0.08)"
              strokeWidth="1"
            />
          </pattern>

          <pattern
            id="grid-large"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M300 0 L0 0 0 300"
              fill="none"
              stroke="rgba(77,184,255,0.12)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-small)" />

        <rect width="100%" height="100%" fill="url(#grid-large)" />
      </svg>

      {/* Glow Layer */}
      <svg
        ref={glowRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{
          zIndex: 2,
          opacity: 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <defs>
          <pattern
            id="ft-glow-sm"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L0 0 0 60"
              fill="none"
              stroke="rgba(0,212,255,0.8)"
              strokeWidth="0.8"
            />
          </pattern>

          <pattern
            id="ft-glow-lg"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M240 0 L0 0 0 240"
              fill="none"
              stroke="rgba(77,184,255,1)"
              strokeWidth="1.2"
            />
          </pattern>

          <mask id="cursor-mask">
            <rect width="100%" height="100%" fill="black" />

            <rect
              width="100%"
              height="100%"
              fill="white"
              style={{
                maskImage:
                  "radial-gradient(circle 220px at var(--x) var(--y), white, transparent)",
                WebkitMaskImage:
                  "radial-gradient(circle 220px at var(--x) var(--y), white, transparent)",
              }}
            />
          </mask>
        </defs>

        <g mask="url(#cursor-mask)">
          <rect width="100%" height="100%" fill="url(#ft-glow-sm)" />

          <rect width="100%" height="100%" fill="url(#ft-glow-lg)" />
        </g>
      </svg>

      {/* Lightning Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default FooterEffects;
