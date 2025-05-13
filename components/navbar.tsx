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
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo-fonsiz-standart.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="text-xl font-bold text-white">THE RECRUITING </span>
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
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/Logo.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-24 w-24 rounded-full"
                  priority
                />

                <span className="text-lg font-bold  text-white">
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
