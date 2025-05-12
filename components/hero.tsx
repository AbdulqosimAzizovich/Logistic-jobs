"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, ChevronRight } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/5.jpg?height=1080&width=1920"
          alt="Truck on highway"
          fill
          priority
          style={{ transform: "scaleX(-1)" }}
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <AnimateOnScroll animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find Your Perfect Trucking Job with{" "}
                <span className="text-[#8BD300]">THE RECRUITING </span>
                <br />
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-xl text-gray-300 max-w-xl">
                Connecting qualified truck drivers with top logistics companies
                across the nation. Your next opportunity is just a search away.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="px-6 py-3 border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="px-6 py-3 bg-gradient-to-r from-[#6CC000] to-[#8BD300] text-black hover:opacity-90 transition-opacity"
                >
                  <Link href="/contact" className="flex items-center">
                    For Employers <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black/30 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-[#8BD300]" />
                  <div>
                    <p className="text-white font-semibold">100+</p>
                    <p className="text-gray-400 text-sm">Jobs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-[#8BD300]" />
                  <div>
                    <p className="text-white font-semibold">200+</p>
                    <p className="text-gray-400 text-sm">Partners</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-[#8BD300]" />
                  <div>
                    <p className="text-white font-semibold">1500+</p>
                    <p className="text-gray-400 text-sm">Placements</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Contact Form */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-[#1F2A38] border border-[#8BD300]/20 rounded-2xl shadow-2xl p-10 transform transition-all hover:scale-[1.02]">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Accelerate Your Career
                <br />
                <span className="text-[#8BD300]">Request Consultation</span>
              </h2>
              <form className="space-y-6">
                <div>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                    required
                  />
                </div>
                <div>
                  <Select required>
                    <SelectTrigger
                      id="role"
                      className="w-full bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                    >
                      <SelectValue placeholder="Select Your Role" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1F2A38] text-white">
                      <SelectItem
                        value="driver"
                        className="hover:bg-[#8BD300]/20"
                      >
                        CDL A Truck Driver
                      </SelectItem>
                      <SelectItem
                        value="owner"
                        className="hover:bg-[#8BD300]/20"
                      >
                        Trucking Company Owner
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6CC000] to-[#8BD300] text-black py-3 text-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Request Professional Consultation
                </Button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
