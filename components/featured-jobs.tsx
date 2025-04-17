import Link from "next/link"
import { Button } from "@/components/ui/button"
import JobCard from "@/components/job-card"
import { featuredJobs } from "@/lib/data"
import AnimateOnScroll from "./animate-on-scroll"

export default function FeaturedJobs() {
  return (
    <section className="container mx-auto px-4 py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">Featured Job Opportunities</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Discover top trucking positions from leading logistics companies across the nation
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredJobs.map((job, index) => (
          <AnimateOnScroll key={job.id} animation="fade-up" delay={index * 100}>
            <JobCard job={job} featured />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="fade-up" delay={300} className="mt-12 text-center">
        <Button asChild className="bg-blue-900 hover:bg-blue-800">
          <Link href="/jobs">View All Jobs</Link>
        </Button>
      </AnimateOnScroll>
    </section>
  )
}
