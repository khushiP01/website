"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RegistrationForm } from "@/components/registration-form";

export default function DesignSystemPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-purple-900 relative overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 max-w-4xl"
        >
          {/* University logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 opacity-60"
          >
            <div className="text-white/80 text-xs tracking-wider">COLUMBIA</div>
            <div className="text-white/80 text-xs tracking-wider">PENN</div>
            <div className="text-white/80 text-xs tracking-wider">HARVARD</div>
            <div className="text-white/80 text-xs tracking-wider">YALE</div>
            <div className="text-white/80 text-xs tracking-wider">PRINCETON</div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight px-4"
          >
            Forget &quot;webinars&quot;
            <br />
            <span className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
              Build Admissions
            </span>
            <br />
            Ready Projects
            <br />
            <span className="text-purple-300">live</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-purple-200 text-base md:text-lg mb-8 max-w-2xl mx-auto px-4"
          >
            Watch us turn your passions into a real application worthy
            extracurricular capstone project using our secret weapon.
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-white text-2xl md:text-3xl mb-2">
              Join us live
            </div>
            <div className="text-purple-300 text-xl md:text-2xl">
              29th Nov 2025 – 6:30PM
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-full px-6 py-2 mb-10"
          >
            <span className="text-purple-200 text-sm">
              Free for first 50 students
            </span>
          </motion.div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-purple-400/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/20">
            <RegistrationForm />
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-purple-400/60 text-xs">
            Limited seats available • Secure your spot now
          </p>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -45 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          y: [0, -20, 0],
        }}
        transition={{
          opacity: { delay: 0.9, duration: 0.6 },
          x: { delay: 0.9, duration: 0.6 },
          rotate: { delay: 0.9, duration: 0.6 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="absolute top-32 left-4 md:left-12 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-40 blur-sm"
        style={{ transform: "rotate(-15deg)" }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 45 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          y: [0, 20, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          x: { delay: 1, duration: 0.6 },
          rotate: { delay: 1, duration: 0.6 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 },
        }}
        className="absolute top-48 right-4 md:right-16 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-40 blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 180, 360],
        }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          scale: { delay: 1.1, duration: 0.6 },
          rotate: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
        className="absolute bottom-40 left-8 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-300 to-pink-400 rounded-lg opacity-30 blur-sm"
        style={{ transform: "rotate(25deg)" }}
      />
    </div>
  );
}

