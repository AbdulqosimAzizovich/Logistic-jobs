"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp } from "lucide-react";
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

      <div className="relative z-10 flex min-h-[90vh] px-4 items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white text-left">
            <AnimateOnScroll animation="fade-up">
              <h1 className="mb-6 max-w-xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Find Your Perfect Trucking Job with{" "}
                <span className="text-amber-400">THE RECRUITING </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="mb-8 max-w-xl text-lg text-gray-200 md:text-xl">
                Connecting qualified truck drivers with top logistics companies
                across the nation. Your next opportunity is just a search away.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4 mb-8">
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
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-gray-200">100+ Available Jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-gray-200">200+ Partner Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-gray-200">
                    1500+ Successful Placements
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Contact Form */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Leave your information here
                <br />
                Our managers will contact you soon
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" className="w-full" required />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(100) 000-0000"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your role in the transportation company{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Select required>
                    <SelectTrigger id="role" className="w-full bg-white">
                      <SelectValue placeholder="—Please choose an option—" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="driver">
                        CDL A truck driver looking for a job
                      </SelectItem>
                      <SelectItem value="owner">
                        Owner of the trucking company
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-900 text-white hover:bg-blue-800"
                >
                  Request a callback
                </Button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
