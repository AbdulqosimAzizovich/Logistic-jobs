import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Get in <span className="text-blue-900">Touch</span>
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
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Contact Information
          </h2>

          <div className="mb-8 space-y-6">
            <div className="flex items-start">
              <MapPin className="mr-4 h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-medium text-gray-900">Office Adress</h3>
                <p className="text-gray-700">
                  423 Wards Corner Road
                  <br />
                  Ste D, Loveland OH 45140
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-4 h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700"> 513-757-1045</p>
                <p className="text-sm text-gray-500">
                  Hours of operation, 9am to 5pm eastern time
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="mr-4 h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-700">bytherecruiting.com</p>
                <p className="text-sm text-gray-500">
                  We'll respond as soon as possible
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="mr-4 h-6 w-6 text-blue-900" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Hours of Operation
                </h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-lg font-medium text-blue-900">
              Driver Support Hotline
            </h3>
            <p className="mb-2 text-gray-700">
              For urgent driver assistance, call our dedicated support line:
            </p>
            <p className="text-xl font-bold text-blue-900">513 757 1045</p>
            <p className="mt-2 text-sm text-gray-600">
              Available 24/7 for emergency assistance
            </p>
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  className="border-gray-300"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="border-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="513 757 1045"
                className="border-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                required
                className="border-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Please provide details about your inquiry..."
                rows={6}
                required
                className="border-gray-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
