import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Long-haul Truck Driver",
      image: "/pr2.jpg",
      content:
        "THE RECRUITING helped me find a job that perfectly matched my experience and route preferences. The application process was smooth, and I was on the road with a great company within a week!",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert Garcia",
      role: "Regional Driver",
      image: "/pr3.jpg",
      content:
        "After years of struggling to find local routes that would allow me to be home more often, I found the perfect position through THE RECRUITING . The job filtering options made it easy to find exactly what I was looking for.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Fleet Manager",
      image: "/pr1.jpg",
      content:
        "As a hiring manager, THE RECRUITING has been invaluable for finding qualified drivers. The platform connects us with pre-screened candidates who match our requirements, saving us time and resources in the hiring process.",
      rating: 4,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#0E0E0E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-[#FFFFFF]">
            Real Experiences. Real Results.
          </h2>
          <p className="text-[#CCCCCC] max-w-2xl mx-auto">
            Hear from drivers and companies who have found success with THE
            RECRUITING
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1F2A38] rounded-lg p-6 border border-[#1F2A38] hover:border-[#6CC000] transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>

              <p className="text-[#FFFFFF] mb-6">{testimonial.content}</p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={
                      testimonial.image ||
                      "https://kzmof4c28tjyljmexmxb.lite.vusercontent.net/placeholder.svg"
                    }
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#FFFFFF]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#CCCCCC] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1"
    >
      <path
        d="M10 1L12.938 6.95L19.5 7.9L14.75 12.55L15.875 19.1L10 16L4.125 19.1L5.25 12.55L0.5 7.9L7.062 6.95L10 1Z"
        fill={filled ? "#6CC000" : "#1F2A38"}
        stroke={filled ? "#6CC000" : "#1F2A38"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
