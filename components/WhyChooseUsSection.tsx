import React from "react";
import AnimateOnScroll from "./animate-on-scroll";
import { Check } from "lucide-react";

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      text: "We are using premium databases and best recruiting team to find the perfectly matched candidates to your fleet",
      delay: 100,
      animation: "fade-up",
    },
    {
      text: "Quality Over Quantity – We don't just fill seats; we find strong, long-term drivers who can handle long miles and stay quite long period of time on the road.",
      delay: 200,
      animation: "fade-up",
    },
    {
      text: "Experienced in all equipment types including Dry Van, Power Only, Flatbed, Step Deck, and Reefer...",
      delay: 300,
      animation: "fade-up",
    },
    {
      text: "We handle rate negotiations and provide complete company details upfront - saving you time and ensuring transparency",
      delay: 400,
      animation: "fade-up",
    },
    {
      text: "Our dedicated team provides end-to-end support throughout the entire hiring process and beyond",
      delay: 500,
      animation: "fade-up",
    },
    {
      text: "Whether you need 1 driver or 100, we treat your business like our own",
      delay: 600,
      animation: "fade-up",
    },
    {
      text: "We don't send you bad drivers, it wastes everyone's time. If driver is not gonna work out we have to replace him anyway",
      delay: 700,
      animation: "fade-up",
    },
    {
      text: "Tell us your exact needs – preferred hiring states, required OTR experience and time, age range, or any other must haves and we'll provide drivers who meet every requirement",
      delay: 800,
      animation: "fade-up",
    },
    {
      text: "Many great drivers aren't actively job-searching but gonna switch for the right offer",
      delay: 900,
      animation: "fade-up",
    },
  ];

  return (
    <section className="py-16 bg-[#0E0E0E]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Why Choose <span className="text-[#6CC000]">Us</span>?
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimateOnScroll
              key={index}
              animation={reason.animation as any}
              delay={reason.delay}
            >
              <div className="bg-[#1F2A38] rounded-lg p-6 shadow-lg h-full flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#6CC000] rounded-full p-2 text-white">
                    <Check size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-[#CCCCCC]">{reason.text}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
