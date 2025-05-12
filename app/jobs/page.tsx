import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "@/components/job-card";
import { jobListings } from "@/lib/data";

export default function JobsPage() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1
            className="mb-4 text-4xl font-bold text-[#6CC000] md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Find Your <span className="text-[#fff]">Perfect Job</span>
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Browse through hundreds of trucking and logistics positions across
            the country
          </p>
        </div>

        <div
          className="mb-12 rounded-xl bg-gradient-to-r from-[#6dc0003e] to-[#8BD300]  p-6 shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Search Jobs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label
                htmlFor="keywords"
                className="mb-2 block text-sm font-medium text-white"
              >
                Keywords
              </label>
              <Input
                id="keywords"
                placeholder="Job title, company, etc."
                className="border-[#8BD300]/30 focus:border-[#8BD300] transition-colors bg-[#0E0E0E] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-white"
              >
                Location
              </label>
              <Input
                id="location"
                placeholder="City, state, or zip"
                className="border-[#8BD300]/30 focus:border-[#8BD300] transition-colors bg-[#0E0E0E] text-white"
              />
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Available Positions
            </h2>
            <p className="text-white">Showing {jobListings.length} jobs</p>
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-sm text-white">Sort by:</span>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-[#1F2A38] text-white">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary-high">
                  Salary (High to Low)
                </SelectItem>
                <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <div key={job.id} data-aos="fade-up" data-aos-delay={index * 50}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Button
            variant="outline"
            className="bg-[#0E0E0E] hover:bg-[#1F2A38] text-[#FFFFFF]"
          >
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}
