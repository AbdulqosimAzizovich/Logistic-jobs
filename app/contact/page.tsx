import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1
            className="mb-4 text-4xl font-bold text-[#6CC000] md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Get in <span className="text-white">Touch</span>
          </h1>
          <p
            className="mx-auto max-w-3xl text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have questions or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <h2 className="mb-6 text-2xl font-bold text-[#6CC000]">
              Contact Information
            </h2>

            <div className="mb-8 space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-[#6CC000]" />
                <div>
                  <h3 className="font-medium text-gray-500">Office Adress</h3>
                  <p className="text-white">
                    423 Wards Corner Road
                    <br />
                    Ste D, Loveland OH 45140
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-[#6CC000]" />
                <div>
                  <h3 className="font-medium text-gray-500">Phone</h3>
                  <p className="text-white"> 513-757-1045</p>
                  <p className="text-sm text-gray-500">
                    Hours of operation, 9am to 5pm eastern time
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-[#6CC000]" />
                <div>
                  <h3 className="font-medium text-gray-500">Email</h3>
                  <p className="text-white">bytherecruiting.com</p>
                  <p className="text-sm text-gray-500">
                    We'll respond as soon as possible
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-4 h-6 w-6 text-[#6CC000]" />
                <div>
                  <h3 className="font-medium text-gray-500">
                    Hours of Operation
                  </h3>
                  <p className="text-white">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-[#1F2A38] p-6">
              <h3 className="mb-4 text-lg font-medium text-[#6CC000]">
                Driver Support Hotline
              </h3>
              <p className="mb-2 text-white">
                For urgent driver assistance, call our dedicated support line:
              </p>
              <p className="text-xl font-bold text-[#6CC000]">513 757 1045</p>
              <p className="mt-2 text-sm text-gray-600">
                Available 24/7 for emergency assistance
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-[#1F2A38] border border-[#8BD300]/20 rounded-2xl shadow-2xl p-10 transform transition-all hover:scale-[1.02]"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#6CC000]">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    required
                    className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    required
                    className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="513 757 1045"
                  className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  required
                  className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={6}
                  required
                  className="bg-[#0E0E0E] text-white border-[#8BD300]/30 focus:border-[#8BD300] transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6CC000] to-[#8BD300] text-black py-3 text-lg font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
