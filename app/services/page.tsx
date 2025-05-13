import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "../../components/animate-on-scroll";

interface ServiceItem {
  title: string;
  description: string;
  delay: number;
  animation:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out"
    | string;
}

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      title: "Fuel Cards with Maximum Discounts for Trucking Businesses",
      description:
        "Dispatch Services to Increase Your Earnings We work with expert dispatchers who can book higher-paying loads and plan better routes. This means more money for you, fewer empty miles, and on-time deliveries. Our dispatch partners have strong relationships with shippers and brokers, giving you access to better freight opportunities. They also use advanced route optimization tools to reduce fuel costs and minimize downtime. Additionally, having a dedicated dispatcher allows you to focus on driving while they handle negotiations, paperwork, and scheduling to keep your business running smoothly.",
      delay: 0,
      animation: "fade-left",
    },
    {
      title: "Experienced and Reliable Truck Drivers",
      description:
        "For example, our dispatchers have access to premium load boards and industry connections that help secure more profitable routes. They negotiate on your behalf to get better rates per mile, ensuring your business remains competitive. Some dispatch services also provide load planning strategies to minimize deadhead miles, saving fuel and maximizing profits. With 24/7 support, dispatchers can quickly resolve any issues that arise, keeping operations running efficiently.",
      delay: 100,
      animation: "fade-left",
    },
    {
      title: "Safety and Compliance Services",
      description:
        "Easy and Affordable ELD Solutions Following the Electronic Logging Device (ELD) rules is important for your business. We connect you with trusted ELD providers that offer low-cost solutions with great customer support. They help with setup and provide ongoing assistance to keep everything running smoothly. These ELD solutions ensure compliance with federal regulations, avoiding costly fines and penalties. Our partners offer user-friendly systems that are easy to install and operate, reducing downtime and training time for your drivers. Additionally, the ELDs provide real-time tracking and reporting features, helping you monitor fleet performance and improve efficiency.",
      delay: 100,
      animation: "fade-right",
    },
    {
      title: "Safety and Compliance Services",
      description:
        "For example, our ELD partners provide solutions that integrate with fleet management software, allowing businesses to track fuel usage, route efficiency, and driver behavior. Many of these ELDs offer mobile apps that drivers can use to log their hours effortlessly, reducing paperwork and ensuring accuracy. Some providers also offer automated alerts for HOS (Hours of Service) violations, helping drivers stay compliant. Additionally, our partners offer training sessions and 24/7 technical support, making the transition to ELD compliance seamless for businesses of all sizes.",
      delay: 200,
      animation: "fade-right",
    },
    {
      title: "Safety and Compliance Services",
      description:
        "Cost-Effective Insurance Solutions for Trucking Companies We help you find insurance at a lower cost while still getting the protection you need. We work with trusted insurance companies that offer plans designed for your specific needs, so you don't overpay. Our team understands the unique risks associated with the trucking industry and ensures you receive coverage that protects your business, vehicles, and drivers. We help you compare multiple insurance options, making sure you get the best value for your money. Additionally, we connect you with providers who offer flexible payment plans, making it easier to manage your expenses.",
      delay: 300,
      animation: "fade-up",
    },
    {
      title: "Safety and Compliance Services",
      description:
        "For instance, some of our insurance partners offer policies that sufficient cargo insurance, liability coverage, and physical damage protection, allowing you to save more compared to purchasing separate plans. We also help businesses find insurance plans with lower deductibles or accident forgiveness programs, reducing financial strain in case of an incident. If you operate in high-risk areas or transport hazardous materials, we ensure you get specialized coverage that meets federal and state regulations. Furthermore, we work with insurers who provide 24/7 claims support, ensuring fast resolution in case of accidents or damages.",
      delay: 400,
      animation: "fade-up",
    },
  ];
  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <div className="container mx-auto px-4 py-16 text-[#FFFFFF]">
        <div className="mb-16 text-center">
          <AnimateOnScroll animation="fade-up">
            <h1
              className="mb-4 text-4xl font-bold text-[#FFFFFF] md:text-5xl lg:text-6xl"
              data-aos="fade-up"
            >
              Our <span className="text-[#6CC000]">Services</span>
            </h1>
          </AnimateOnScroll>
          <p
            className="mx-auto max-w-3xl text-lg text-[#CCCCCC]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Clear solutions. Strong connections.
          </p>
        </div>

        <div className="mb-20">
          <AnimateOnScroll animation="fade-right">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div data-aos="fade-right">
                <h2 className="mb-4 text-3xl font-bold text-[#6CC000]">
                  For Truck Drivers
                </h2>
                <p className="mb-6 text-[#CCCCCC]">
                  We offer a range of services designed to help truck drivers
                  find the perfect job opportunities and advance their careers
                  in the logistics industry.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Access to thousands of verified job listings",
                    "Personalized job recommendations based on your experience and preferences",
                    "Direct communication with hiring companies",
                    "Work-Life Balance opportunities for Drivers",
                    "High-Paying Job Choices",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-[#6CC000]" />
                      <span className="text-[#CCCCCC]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#6CC000] hover:bg-[#8BD300]">
                  <Link href="/jobs">Browse Jobs</Link>
                </Button>
              </div>

              <div
                className="relative h-80 overflow-hidden rounded-xl shadow-xl md:h-96"
                data-aos="fade-left"
              >
                <Image
                  src="/trd.webp"
                  alt="Truck driver services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mb-20">
          <AnimateOnScroll animation="fade-left">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div
                className="relative order-2 h-80 overflow-hidden rounded-xl shadow-xl md:order-1 md:h-96"
                data-aos="fade-right"
              >
                <Image
                  src="/134.png"
                  alt="Company services"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2" data-aos="fade-left">
                <h2 className="mb-4 text-3xl font-bold text-[#6CC000]">
                  For Companies
                </h2>
                <p className="mb-6 text-[#CCCCCC]">
                  Our platform helps logistics companies find qualified drivers
                  quickly and efficiently, reducing hiring time and improving
                  retention rates.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Pre-qualified CDL holders (clean mvr, psp & criminal background, verified experience)",
                    "Only long-term drivers are part of our recruitment process",
                    "If the drivers not matching your requirements, We'll replace them — guaranteed",
                    "No upfront fees - pay only after successful hire",
                    "A large database of strong drivers from Haiti, Africa, Arabian world - Morocco, Tunisa, Egypt, Algeria & CIS countries",
                    "A wide range of strong drivers to choose from, interview by phone, approve, and hire.",
                    "All company details will be provided to the driver before hiring, saving you time by avoiding repeated explanations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-[#6CC000]" />
                      <span className="text-[#CCCCCC]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#6CC000] hover:bg-[#8BD300]">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mb-20">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#6CC000]">
              Additional Services
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-2 auto-rows-fr">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={index}
                animation={service.animation as any}
                delay={service.delay}
              >
                <div className="rounded-lg bg-[#1F2A38] p-8 shadow-lg transition-all hover:shadow-xl h-full flex flex-col">
                  {/* <h3 className="mb-4 text-xl font-bold text-[#6CC000]">
                {service.title}
              </h3> */}
                  <p className="text-[#CCCCCC] text-justify">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        
        <div
          className="rounded-xl bg-gradient-to-r from-[#6CC000] to-[#8BD300] p-10 text-[#0E0E0E] shadow-xl"
          data-aos="fade-up"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mb-6">
                Join thousands of drivers and companies who have found success
                with THE RECRUITING. Our team is ready to help you navigate the
                logistics industry with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]"
                >
                  <Link href="/jobs">Find Jobs</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0E0E0E] text-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-[#FFFFFF]"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
              <Image
                src="/getStart.png"
                alt="Get started"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
