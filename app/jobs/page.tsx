"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "@/components/job-card";
import { jobListings } from "@/lib/data";
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
export default function JobsPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: Point[] = [];
    const particleCount = 60; // Kichikroq komponent uchun kamroq nuqtalar
    const connectionDistance = 120;
    const animationSpeed = 0.6;

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
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Draw particles and update positions
      ctx.fillStyle = "#FFFFFF";
      points.forEach((point) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (canvas && (point.x < 0 || point.x > canvas.width)) point.vx *= -1;
        if (canvas && (point.y < 0 || point.y > canvas.height)) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2); // Kichikroq nuqtalar
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
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
            className="mb-4 text-4xl font-bold text-[#6CC000] md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Find Your <span className="text-[#fff]">Perfect Job</span>
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Browse through hundreds of trucking and logistics positions across
            the country
          </p>
        </div>

        <div
          className="relative mb-12 rounded-xl bg-gradient-to-r from-[#6dc0003e] to-[#8BD300] p-6 shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          {/* Network animation background */}
          <div className="absolute inset-0">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Content overlay */}
          <div className="relative z-10">
            <h2 className="mb-6 text-2xl font-bold text-white">Search Jobs</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label
                  htmlFor="keywords"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Keywords
                </label>
                <Input
                  id="keywords"
                  placeholder="Job title, company, etc."
                  className="border-[#8BD300]/30 focus:border-[#8BD300] transition-colors bg-[#0E0E0E] text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Location
                </label>
                <Input
                  id="location"
                  placeholder="City, state, or zip"
                  className="border-[#8BD300]/30 focus:border-[#8BD300] transition-colors bg-[#0E0E0E] text-white"
                />
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Available Positions
            </h2>
            <p className="text-white">Showing {jobListings.length} jobs</p>
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-sm text-white">Sort by:</span>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-[#1F2A38] text-white">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary-high">
                  Salary (High to Low)
                </SelectItem>
                <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <div key={job.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Button
            variant="outline"
            className="bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]"
          >
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}
