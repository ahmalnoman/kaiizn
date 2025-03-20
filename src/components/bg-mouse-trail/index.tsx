"use client";

import useMatchMedia from "@/hooks/useMatchMedia";
import React, { useRef, useEffect } from "react";
import { setupCanvasSmokeEffect } from "./canvas-smoke-effect";

const BgMouseTrail = () => {
  const prefersReducedMotion = useMatchMedia("prefers-reduced-motion");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!prefersReducedMotion) setupCanvasSmokeEffect(canvasRef.current);
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1] w-screen h-screen"
    />
  );
};

export default BgMouseTrail;
