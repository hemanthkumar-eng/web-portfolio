"use client";

import * as React from "react";

type Enemy = {
  id: number;
  x: number;
  y: number;
  speed: number;
};

export function MouseArcade() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const enemiesRef = React.useRef<Enemy[]>([]);
  const lastSpawnRef = React.useRef(0);
  const animationFrameRef = React.useRef<number | null>(null);
  const playerXRef = React.useRef(0.5); // 0–1 (relative)

  const resetGame = React.useCallback(() => {
    setScore(0);
    setGameOver(false);
    enemiesRef.current = [];
    lastSpawnRef.current = 0;
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      playerXRef.current = Math.min(0.98, Math.max(0.02, relativeX));
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const spawnEnemy = () => {
      const id = Math.random();
      const x = Math.random();
      const speed = 80 + Math.random() * 80; // pixels per second
      enemiesRef.current.push({ id, x, y: -20, speed });
    };

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      // Use CSS pixel size for drawing so content isn't visually cropped
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#020617");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Stars
      ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
      for (let i = 0; i < 40; i++) {
        const sx = ((i * 73) % width) + ((time / 40 + i * 13) % 3);
        const sy = ((i * 41 + time / 30) % height);
        ctx.fillRect(sx, sy, 2, 2);
      }

      const playerX = playerXRef.current * width;
      const playerY = height - 32;

      if (started && !gameOver) {
        // Spawn enemies periodically
        lastSpawnRef.current += dt;
        const spawnInterval = Math.max(0.4, 1.4 - score * 0.01);
        if (lastSpawnRef.current >= spawnInterval) {
          lastSpawnRef.current = 0;
          spawnEnemy();
        }

        // Update enemies and handle collecting orbs
        const updatedEnemies: Enemy[] = [];
        enemiesRef.current.forEach((enemy) => {
          const newY = enemy.y + enemy.speed * dt;
          const ex = enemy.x * width;
          const ey = newY;
          const dx = ex - playerX;
          const dy = ey - playerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 26) {
            // Collected orb
            setScore((prev) => prev + 5);
            return; // Do not keep this enemy
          }

          if (newY < height + 40) {
            updatedEnemies.push({ ...enemy, y: newY });
          }
        });

        enemiesRef.current = updatedEnemies;
      }

      // Draw enemies
      enemiesRef.current.forEach((enemy) => {
        const ex = enemy.x * width;
        const ey = enemy.y;

        const enemyGradient = ctx.createRadialGradient(
          ex,
          ey,
          0,
          ex,
          ey,
          20
        );
        enemyGradient.addColorStop(0, "rgba(248, 113, 113, 0.9)");
        enemyGradient.addColorStop(1, "rgba(248, 113, 113, 0)");
        ctx.fillStyle = enemyGradient;
        ctx.beginPath();
        ctx.arc(ex, ey, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fee2e2";
        ctx.beginPath();
        ctx.arc(ex, ey, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw player ship (follows mouse) – stylized rocket instead of simple triangle
      ctx.save();
      ctx.translate(playerX, playerY);
      ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
      ctx.shadowBlur = 24;

      // Ship body
      ctx.fillStyle = "#22d3ee";
      ctx.beginPath();
      ctx.moveTo(0, -20); // nose
      ctx.lineTo(12, 8); // right mid
      ctx.lineTo(8, 18); // right tail
      ctx.lineTo(-8, 18); // left tail
      ctx.lineTo(-12, 8); // left mid
      ctx.closePath();
      ctx.fill();

      // Cockpit
      ctx.fillStyle = "#e0f2fe";
      ctx.beginPath();
      ctx.ellipse(0, -4, 5, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Fins
      ctx.fillStyle = "#06b6d4";
      ctx.beginPath();
      ctx.moveTo(-8, 18);
      ctx.lineTo(-14, 24);
      ctx.lineTo(-4, 18);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(8, 18);
      ctx.lineTo(14, 24);
      ctx.lineTo(4, 18);
      ctx.closePath();
      ctx.fill();

      // Engine flame
      if (started && !gameOver) {
        ctx.fillStyle = "rgba(251, 191, 36, 0.9)";
        ctx.beginPath();
        ctx.moveTo(-4, 18);
        ctx.lineTo(0, 28 + Math.sin(time / 60) * 4);
        ctx.lineTo(4, 18);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();

      // HUD
      ctx.fillStyle = "rgba(15,23,42,0.7)";
      ctx.fillRect(0, 0, width, 32);
      ctx.fillStyle = "#e5e7eb";
      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace";
      ctx.fillText(`SCORE: ${score}`, 12, 20);

      // Overlays for not-started and game-over states
      if (!started || gameOver) {
        ctx.fillStyle = "rgba(15,23,42,0.8)";
        ctx.fillRect(width / 2 - 140, height / 2 - 40, 280, 80);
        ctx.strokeStyle = "rgba(148,163,184,0.8)";
        ctx.strokeRect(width / 2 - 140, height / 2 - 40, 280, 80);

        ctx.fillStyle = "#e5e7eb";
        ctx.textAlign = "center";
        ctx.font = "bold 16px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
        ctx.fillText(
          !started ? "Click to start collecting orbs" : "Round complete",
          width / 2,
          height / 2 - 8
        );
        ctx.font =
          "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace";
        ctx.fillText(
          "Move your mouse to steer the ship",
          width / 2,
          height / 2 + 14
        );
        ctx.textAlign = "start";
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameOver, score, started]);

  // Handle click to start / restart
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleClick = () => {
      if (!started) {
        resetGame();
        setStarted(true);
      } else if (gameOver) {
        resetGame();
        setStarted(true);
      }
    };

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [started, gameOver, resetGame]);

  // Keep canvas resolution in sync with CSS size
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-3 flex items-center justify-between text-xs md:text-sm font-mono text-white/70">
        <span>🕹️ Mouse Arcade · Move your ship with the mouse</span>
        <span>{started ? "Collect the glowing orbs" : "Click the game to start"}</span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/90 overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          className="w-full h-64 md:h-72"
        />
      </div>
    </div>
  );
}


