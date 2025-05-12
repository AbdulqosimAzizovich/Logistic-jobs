import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    logo: string;
    location: string;
    salary: string;
    type: string;
    posted: string;
    urgent?: boolean;
  };
  featured?: boolean;
}

export default function JobCard({ job, featured = false }: JobCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl bg-[#1F2A38] p-6 shadow-2xl transition-all hover:shadow-2xl hover:scale-[1.02] border border-[#8BD300]/20",
        featured && "border-l-4 border-[#8BD300]"
      )}
    >
      {job.urgent && (
        <Badge className="absolute right-4 top-4 bg-red-500 hover:bg-red-600">
          Urgent
        </Badge>
      )}

      <div className="mb-4 flex items-center">
        <div className="mr-4 h-14 w-14 overflow-hidden rounded-md border-2 border-[#8BD300]/30">
          <Image
            src={
              job.logo ||
              "https://kzmof4c28tjyljmexmxb.lite.vusercontent.net/placeholder.svg"
            }
            alt={job.company}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-white">{job.title}</h3>
          <p className="text-sm text-gray-400">{job.company}</p>
        </div>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex items-center text-sm text-gray-400">
          <MapPin className="mr-2 h-4 w-4 text-[#8BD300]" />
          {job.location}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <DollarSign className="mr-2 h-4 w-4 text-[#8BD300]" />
          {job.salary}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Briefcase className="mr-2 h-4 w-4 text-[#8BD300]" />
          {job.type}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Calendar className="mr-2 h-4 w-4 text-[#8BD300]" />
          Posted {job.posted}
        </div>
      </div>

      <Button
        asChild
        className="w-full bg-gradient-to-r from-[#6CC000] to-[#8BD300] text-black hover:opacity-90"
      >
        <Link href={`/jobs/${job.id}`}>View Details</Link>
      </Button>
    </div>
  );
}
