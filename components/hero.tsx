"use client";

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { TrendingUp } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";
// Search, MapPin,
export default function Hero() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [location, setLocation] = useState("");

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/5.jpg?height=1080&width=1920"
          alt="Truck on highway"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Find Your Perfect Trucking Job with{" "}
            <span className="text-gold">TruckConnect</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Connecting qualified truck drivers with top logistics companies
            across the nation. Your next opportunity is just a search away.
          </p>
        </AnimateOnScroll>

        {/* <AnimateOnScroll
          animation="fade-up"
          delay={200}
          className="w-full max-w-4xl"
        >
          <div className="mb-8 rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <div className="flex items-center rounded-md bg-white/20 px-3">
                  <Search className="mr-2 h-5 w-5 text-gray-200" />
                  <Input
                    type="text"
                    placeholder="Job title or keywords"
                    className="border-0 bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center rounded-md bg-white/20 px-3">
                  <MapPin className="mr-2 h-5 w-5 text-gray-200" />
                  <Input
                    type="text"
                    placeholder="City, state, or zip code"
                    className="border-0 bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <Button
                asChild
                className="h-12 bg-gold text-blue-900 hover:bg-amber-400"
              >
                <Link href="/jobs">Search Jobs</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll> */}

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              asChild
              className="bg-blue-700 text-white hover:bg-blue-600"
            >
              <Link href="/contact">For Employers</Link>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-gray-200">5,000+ Available Jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-gray-200">1,000+ Partner Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span className="text-gray-200">
                10,000+ Successful Placements
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
