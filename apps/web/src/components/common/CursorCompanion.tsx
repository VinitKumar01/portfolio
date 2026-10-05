"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  opacity: number;
  size: number;
  char?: string;
}

export default function CursorCompanion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || isReduced) {
      setEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    ctx.scale(dpr, dpr);

    const onResize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let posX = targetX;
    let posY = targetY;
    let velX = 0;
    let velY = 0;
    let idleCounter = 0;
    let isSleeping = false;
    let frame = 0;
    let blinkTimer = 0;

    const trail: Particle[] = [];
    const zParticles: Particle[] = [];

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      idleCounter = 0;
      if (isSleeping) {
        isSleeping = false;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      idleCounter = 0;
      isSleeping = false;

      for (let i = 0; i < 7; i++) {
        const angle = (Math.PI * 2 * i) / 7 + Math.random() * 0.4;
        const speed = 1.5 + Math.random() * 2;
        trail.push({
          x: posX,
          y: posY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity: 0.9,
          size: 2 + Math.random() * 1.5,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);

    let animationId: number;

    const render = () => {
      const logicalWidth = window.innerWidth;
      const logicalHeight = window.innerHeight;
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      const dx = targetX - posX;
      const dy = targetY - posY;
      const dist = Math.hypot(dx, dy);

      const hoverTargetX = targetX + (dx >= 0 ? -30 : 30);
      const hoverTargetY = targetY + 28;

      velX += (hoverTargetX - posX) * 0.085;
      velY += (hoverTargetY - posY) * 0.085;
      velX *= 0.74;
      velY *= 0.74;

      posX += velX;
      posY += velY;

      frame++;
      idleCounter++;
      if (idleCounter > 200) {
        isSleeping = true;
      }

      if (dist > 4 && !isSleeping) {
        trail.push({
          x: posX + (Math.random() - 0.5) * 3,
          y: posY + (Math.random() - 0.5) * 3,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: 0.65,
          size: 2.2 + Math.random() * 1.8,
        });
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.opacity -= 0.03;
        p.size *= 0.96;
        if (p.vx) p.x += p.vx;
        if (p.vy) p.y += p.vy;

        if (p.opacity <= 0 || p.size <= 0.2) {
          trail.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity * 0.75})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
        ctx.fill();
      }

      if (isSleeping && frame % 45 === 0) {
        zParticles.push({
          x: posX + 6,
          y: posY - 8,
          vy: -0.6 - Math.random() * 0.3,
          opacity: 0.8,
          size: 9 + Math.random() * 2,
          char: Math.random() > 0.4 ? "z" : "Z",
        });
      }

      for (let i = zParticles.length - 1; i >= 0; i--) {
        const zp = zParticles[i];
        if (zp.vy) zp.y += zp.vy;
        zp.x += Math.sin(frame * 0.08 + i) * 0.3;
        zp.opacity -= 0.015;

        if (zp.opacity <= 0) {
          zParticles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(212, 212, 216, ${zp.opacity})`;
        ctx.font = `${zp.size}px monospace`;
        ctx.fillText(zp.char || "z", zp.x, zp.y);
      }

      ctx.save();
      ctx.translate(posX, posY);

      const tilt = Math.max(-0.25, Math.min(0.25, velX * 0.03));
      ctx.rotate(tilt);

      const facingLeft = velX < -0.2;
      if (facingLeft) {
        ctx.scale(-1, 1);
      }

      if (isSleeping) {
        const breathe = Math.sin(frame * 0.06) * 1.2;

        ctx.fillStyle = "rgba(249, 115, 22, 0.85)";
        ctx.beginPath();
        ctx.arc(0, 0, 7.5 + breathe, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fafafa";
        ctx.beginPath();
        ctx.arc(0, -1, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(1.5, -0.5, 2, 0.1 * Math.PI, 0.9 * Math.PI);
        ctx.stroke();
      } else {
        const floatY = Math.sin(frame * 0.1) * 2;
        const glowRad = 13 + Math.sin(frame * 0.08) * 2;

        const grad = ctx.createRadialGradient(0, floatY, 2, 0, floatY, glowRad);
        grad.addColorStop(0, "rgba(249, 115, 22, 0.9)");
        grad.addColorStop(0.5, "rgba(249, 115, 22, 0.3)");
        grad.addColorStop(1, "rgba(249, 115, 22, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, floatY, glowRad, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fafafa";
        ctx.beginPath();
        ctx.arc(0, floatY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        blinkTimer = (blinkTimer + 1) % 240;
        const isBlinking = blinkTimer > 230;

        if (isBlinking) {
          ctx.strokeStyle = "#09090b";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0.5, floatY - 0.5);
          ctx.lineTo(3, floatY - 0.5);
          ctx.stroke();
        } else {
          const eyeAngle = Math.atan2(
            targetY - (posY + floatY),
            targetX - posX,
          );
          const eyeOffsetX = Math.cos(eyeAngle) * 1.1;
          const eyeOffsetY = Math.sin(eyeAngle) * 1.1;

          ctx.fillStyle = "#09090b";
          ctx.beginPath();
          ctx.arc(
            1.5 + eyeOffsetX,
            floatY - 0.5 + eyeOffsetY,
            1.3,
            0,
            Math.PI * 2,
          );
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(
            1.2 + eyeOffsetX,
            floatY - 0.8 + eyeOffsetY,
            0.45,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        }
      }

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 select-none"
      aria-hidden="true"
    />
  );
}
