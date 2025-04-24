import Image from "next/image";
import { Star } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Long-haul Truck Driver",
    image: "/pr2.jpg",
    content:
      "THE RECRUITING  helped me find a job that perfectly matched my experience and route preferences. The application process was smooth, and I was on the road with a great company within a week!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Regional Driver",
    image: "/pr1.jpg",
    content:
      "After years of struggling to find local routes that would allow me to be home more often, I found the perfect position through THE RECRUITING . The job filtering options made it easy to find exactly what I was looking for.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Garcia",
    role: "Fleet Manager",
    image: "/pr3.jpg",
    content:
      "As a hiring manager, THE RECRUITING  has been invaluable for finding qualified drivers. The platform connects us with pre-screened candidates who match our requirements, saving us time and resources in the hiring process.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
            What People Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Hear from drivers and companies who have found success with THE
            RECRUITING
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateOnScroll
            key={testimonial.id}
            animation="fade-up"
            delay={index * 100}
          >
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-gold text-gold"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 text-gray-700">{testimonial.content}</p>
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
                  <h4 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
