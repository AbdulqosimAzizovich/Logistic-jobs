import Link from "next/link";
import {
  Truck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-2">
              <Truck className="h-8 w-8" />
              <span className="text-xl font-bold">THE RECRUITING </span>
            </Link>
            <p className="mb-6 text-blue-100">
              Connecting truck drivers with quality jobs since 2010. Our
              platform makes it easy to find the perfect logistics position.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-blue-700"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-blue-700"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-blue-700"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 transition-colors hover:bg-blue-700"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Driver Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Company Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-blue-100">
              Subscribe to our newsletter for the latest industry news and job
              opportunities.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="border-blue-700 bg-blue-800 text-white placeholder:text-blue-300"
                />
                <Button className="bg-gold text-blue-900 hover:bg-amber-400">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="mt-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-gold" />
              <span className="text-blue-100">bytherecruiting.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} THE RECRUITING . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
