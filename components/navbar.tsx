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
          <Truck className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">TruckConnect</span>
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

        {/* <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="outline"
            className="border-gray-100  hover:bg-gray-300"
          >
            Log In
          </Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-300">
            Sign Up
          </Button>
        </div> */}

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-8 pt-10">
              <Link href="/" className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-gray-600" />
                <span className="text-lg font-bold  text-gray-600">
                  TruckConnect
                </span>
              </Link>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <SheetClose asChild key={route.path}>
                    <Link
                      href={route.path}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-gray-700",
                        pathname === route.path
                          ? "text-gray-100"
                          : "text-gray-600"
                      )}
                    >
                      {route.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              {/* <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="border-gray-100  hover:bg-gray-300"
                >
                  Log In
                </Button>
                <Button className="bg-gray-100 text-black hover:bg-gray-300">
                  Sign Up
                </Button>
              </div> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
