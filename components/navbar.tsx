"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Jobs", path: "/jobs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 h-20",
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-auto object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-white">THE RECRUITING</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-400",
                pathname === route.path ? "text-gray-100" : "text-gray-200"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="menu" size="icon" className="md:hidden bg-accent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/90 text-white">
            <div className="flex flex-col gap-8 pt-10">
              <Link href="/" className="flex items-center">
                <div className="flex items-center mr-1">
                  <Image
                    src="/Logo.jpg"
                    alt="Logo"
                    width={280}
                    height={280}
                    className="w-44 h-44 object-contain rounded-full"
                    priority
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  THE RECRUITING
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <SheetClose asChild key={route.path}>
                    <Link
                      href={route.path}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-gray-400",
                        pathname === route.path
                          ? "text-[#6CC000]"
                          : "text-white"
                      )}
                    >
                      {route.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
