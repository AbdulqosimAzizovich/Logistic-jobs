import { Search, FileCheck, Truck } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-900" />,
      title: "Search Jobs",
      description:
        "Browse through hundreds of trucking positions that match your skills and preferences.",
      path: "/jobs",
      delay: 0,
    },
    {
      icon: <FileCheck className="h-12 w-12 text-blue-900" />,
      title: "Apply Online",
      description:
        "Submit your application with just a few clicks and track your application status.",
      path: "#",
      delay: 100,
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-900" />,
      title: "Start Driving",
      description:
        "Get on the road with a job that offers competitive pay and benefits.",
      path: "tel: 513 757 1045",
      delay: 200,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Finding your next trucking job is simple with our streamlined
              process
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={step.delay}>
              <Link href={step.path} className="group">
                <div className="flex flex-col items-center rounded-lg  bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                  <div className="mb-6 rounded-full bg-blue-50 p-4">
                    {step.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-blue-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
