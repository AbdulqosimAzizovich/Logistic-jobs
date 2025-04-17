import Hero from "@/components/hero";
import FeaturedJobs from "@/components/featured-jobs";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
// import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      {/* <CallToAction /> */}
    </div>
  );
}
