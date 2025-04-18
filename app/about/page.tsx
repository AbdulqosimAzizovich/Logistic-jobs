import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          About <span className="text-blue-900">TruckConnect</span>
        </h1>
        <p
          className="mx-auto max-w-3xl text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Connecting truck drivers with quality jobs since 2010
        </p>
      </div>

      <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
        <div data-aos="fade-right">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Our Mission</h2>
          <p className="mb-6 text-gray-700">
            At TruckConnect, we're dedicated to revolutionizing the logistics
            industry by creating meaningful connections between qualified truck
            drivers and reputable companies. We understand the challenges faced
            by both drivers seeking reliable work and companies needing
            dependable transportation solutions.
          </p>
          <p className="text-gray-700">
            Our platform serves as a bridge, ensuring that skilled drivers find
            jobs that match their qualifications and preferences, while helping
            companies find the right talent to keep their supply chains moving
            efficiently.
          </p>
        </div>
        <div
          className="relative h-80 overflow-hidden rounded-xl shadow-xl md:h-96"
          data-aos="fade-left"
        >
          <Image
            src="https://kzmof4c28tjyljmexmxb.lite.vusercontent.net/placeholder.svg?height=600&width=800"
            alt="Logistics operations"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-20 grid gap-12 md:grid-cols-2 md:items-center">
        <div
          className="relative order-2 h-80 overflow-hidden rounded-xl shadow-xl md:order-1 md:h-96"
          data-aos="fade-right"
        >
          <Image
            src="https://kzmof4c28tjyljmexmxb.lite.vusercontent.net/placeholder.svg?height=600&width=800"
            alt="Our team"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2" data-aos="fade-left">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Our Story</h2>
          <p className="mb-6 text-gray-700">
            Founded in 2010 by a team of logistics experts and former truck
            drivers, TruckConnect emerged from a simple observation: the
            disconnect between qualified drivers and quality job opportunities
            was causing inefficiencies throughout the industry.
          </p>
          <p className="text-gray-700">
            What began as a small job board has evolved into a comprehensive
            platform that serves thousands of drivers and hundreds of companies
            nationwide. Our growth is driven by our commitment to transparency,
            fairness, and creating value for all stakeholders in the logistics
            ecosystem.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2
          className="mb-12 text-center text-3xl font-bold text-blue-900"
          data-aos="fade-up"
        >
          Our Values
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Integrity",
              description:
                "We believe in honest communication and transparent business practices that build trust with our users.",
              delay: "0",
            },
            {
              title: "Innovation",
              description:
                "We continuously improve our platform to better serve the evolving needs of the logistics industry.",
              delay: "100",
            },
            {
              title: "Community",
              description:
                "We foster a supportive community where drivers and companies can thrive together.",
              delay: "200",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={value.delay}
            >
              <h3 className="mb-4 text-xl font-bold text-blue-900">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center" data-aos="fade-up">
        <h2 className="mb-6 text-3xl font-bold text-blue-900">
          Join Our Network
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-700">
          Whether you're a driver looking for your next opportunity or a company
          seeking reliable transportation solutions, TruckConnect is here to
          help you succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link href="/jobs">Find Jobs</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-900 text-blue-900 hover:bg-blue-50"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
