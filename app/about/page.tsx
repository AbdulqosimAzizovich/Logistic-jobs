"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: Point[] = [];
    const particleCount = 60;
    const connectionDistance = 120;
    const animationSpeed = 0.7;

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * animationSpeed,
        vy: (Math.random() - 0.5) * animationSpeed,
      });
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles and update positions
      ctx.fillStyle = "#FFFFFF";
      points.forEach((point) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1
            className="mb-4 text-4xl font-bold text-[#FFFFFF] md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            About <span className="text-[#6CC000]">THE RECRUITING</span>
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg text-[#CCCCCC]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Connecting truck drivers with quality jobs since 2020
          </p>
        </div>

        <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
          <div data-aos="fade-right">
            <h2 className="mb-4 text-3xl font-bold text-[#6CC000]">
              Our Mission
            </h2>
            <p className="mb-6 text-[#CCCCCC]">
              At THE RECRUITING, we're dedicated to revolutionizing the
              logistics industry by creating meaningful connections between
              qualified truck drivers and reputable companies. We understand the
              challenges faced by both drivers seeking reliable work and
              companies needing dependable transportation solutions.
            </p>
            <p className="text-[#CCCCCC]">
              Our platform serves as a bridge, ensuring that skilled drivers
              find jobs that match their qualifications and preferences, while
              helping companies find the right talent to keep their supply
              chains moving efficiently.
            </p>
          </div>
          <div
            className="relative h-80 overflow-hidden rounded-xl shadow-xl bg-[#1F2A38] md:h-96"
            data-aos="fade-left"
          >
            <Image
              src="/diploma.jpg"
              alt="Logistics operations"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>

        <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
          <div
            className="relative order-2 h-80 overflow-hidden rounded-xl shadow-xl bg-[#1F2A38] md:order-1 md:h-96"
            data-aos="fade-right"
          >
            <Image
              src="/about2.jpg"
              alt="Our team"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="mb-4 text-3xl font-bold text-[#6CC000]">
              Our Story
            </h2>
            <p className="mb-6 text-[#CCCCCC]">
              Since 2020, we've been helping truck drivers find great jobs with
              American trucking companies. With a 97.3% success rate, we know
              how to match the right driver with the right company.
            </p>
            <p className="text-[#CCCCCC]">
              We work with 120+ trucking companies big and small so drivers have
              plenty of good options. At the same time, we help trucking
              companies find skilled, reliable drivers fast.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#6CC000]"
            data-aos="fade-up"
          >
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Honesty",
                description:
                  "We believe in honest communication and transparent business practices that build trust with our users.",
                delay: "0",
              },
              {
                title: "Innovation",
                description:
                  "We continuously improve our platform to better serve the evolving needs of the logistics industry.",
                delay: "100",
              },
              {
                title: "Community",
                description:
                  "We create a team where drivers and companies work and grow together.",
                delay: "200",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#1F2A38] p-8 shadow-lg shadow-[#8BD300] transition-all"
                data-aos="fade-up"
                data-aos-delay={value.delay}
              >
                <h3 className="mb-4 text-xl font-bold text-[#6CC000]">
                  {value.title}
                </h3>
                <p className="text-[#CCCCCC]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          {/* Network animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6dc0003e] to-[#8BD300]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Content overlay */}
          <div className="relative text-center p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#0E0E0E]">
              Join Our Network
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[#0E0E0E]">
              Whether you're a driver looking for your next opportunity or a
              company seeking reliable transportation solutions, THE RECRUITING
              is here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]"
              >
                <Link href="/jobs">Find Jobs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#0E0E0E] text-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-[#FFFFFF]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
