import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimateOnScroll from "./animate-on-scroll"

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Find Your Next Trucking Job?</h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            Join thousands of drivers who have found their perfect position through TruckConnect. Create your profile
            today and start applying to top trucking jobs across the country.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-blue-900 hover:bg-amber-400">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
