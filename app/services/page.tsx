import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl" data-aos="fade-up">
          Our <span className="text-blue-900">Services</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Comprehensive logistics solutions for drivers and companies
        </p>
      </div>

      <div className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div data-aos="fade-right">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">For Truck Drivers</h2>
            <p className="mb-6 text-gray-700">
              We offer a range of services designed to help truck drivers find the perfect job opportunities and advance
              their careers in the logistics industry.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Access to thousands of verified job listings",
                "Personalized job recommendations based on your experience and preferences",
                "Direct communication with hiring companies",
                "Resume building and career advice",
                "Industry news and updates",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
          </div>
          <div className="relative h-80 overflow-hidden rounded-xl shadow-xl md:h-96" data-aos="fade-left">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Truck driver services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div
            className="relative order-2 h-80 overflow-hidden rounded-xl shadow-xl md:order-1 md:h-96"
            data-aos="fade-right"
          >
            <Image src="/placeholder.svg?height=600&width=800" alt="Company services" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">For Companies</h2>
            <p className="mb-6 text-gray-700">
              Our platform helps logistics companies find qualified drivers quickly and efficiently, reducing hiring
              time and improving retention rates.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Access to a large pool of verified and experienced drivers",
                "Advanced search filters to find the perfect match for your needs",
                "Branded company profile to showcase your benefits and culture",
                "Applicant tracking and management tools",
                "Analytics and reporting on your job postings",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-900" data-aos="fade-up">
          Additional Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Training & Certification",
              description:
                "Access to industry-recognized training programs and certification opportunities to enhance your skills and marketability.",
              delay: "0",
            },
            {
              title: "Market Insights",
              description:
                "Regular reports and analysis on industry trends, salary benchmarks, and demand forecasts to help you make informed decisions.",
              delay: "100",
            },
            {
              title: "Compliance Support",
              description:
                "Resources and guidance to help both drivers and companies navigate regulatory requirements and maintain compliance.",
              delay: "200",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <h3 className="mb-4 text-xl font-bold text-blue-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 p-10 text-white shadow-xl"
        data-aos="fade-up"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6">
              Join thousands of drivers and companies who have found success with TruckConnect. Our team is ready to
              help you navigate the logistics industry with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/jobs">Find Jobs</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image src="/placeholder.svg?height=500&width=700" alt="Get started" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
