import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import JobCard from "@/components/job-card"
import { jobListings } from "@/lib/data"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl" data-aos="fade-up">
          Find Your <span className="text-blue-900">Perfect Job</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
          Browse through hundreds of trucking and logistics positions across the country
        </p>
      </div>

      <div className="mb-12 rounded-xl bg-white p-6 shadow-lg" data-aos="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-blue-900">Search Jobs</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label htmlFor="keywords" className="mb-2 block text-sm font-medium text-gray-700">
              Keywords
            </label>
            <Input id="keywords" placeholder="Job title, company, etc." className="border-gray-300" />
          </div>
          <div>
            <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-700">
              Location
            </label>
            <Input id="location" placeholder="City, state, or zip" className="border-gray-300" />
          </div>
          <div>
            <label htmlFor="job-type" className="mb-2 block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <Select>
              <SelectTrigger id="job-type">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="temporary">Temporary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-blue-900 hover:bg-blue-800">Search Jobs</Button>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Positions</h2>
          <p className="text-gray-600">Showing {jobListings.length} jobs</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Sort by:</span>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
              <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job, index) => (
          <div key={job.id} data-aos="fade-up" data-aos-delay={index * 50}>
            <JobCard job={job} />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center" data-aos="fade-up">
        <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
          Load More Jobs
        </Button>
      </div>
    </div>
  )
}
