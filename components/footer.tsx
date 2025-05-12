import Link from "next/link";
import { Truck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2A38] text-[#FFFFFF] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Truck className="h-6 w-6 text-[#6CC000]" />
              <span className="text-xl font-bold">THE RECRUITING</span>
            </Link>
            <p className="text-[#CCCCCC] mb-6">
              Connecting truck drivers with quality jobs since 2020. Our
              platform makes it easy to find the perfect logistics position.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0E0E0E] hover:bg-[#6CC000] transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#CCCCCC] hover:text-[#6CC000] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-[#CCCCCC] hover:text-[#6CC000] transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-[#CCCCCC] mb-4">
              Subscribe to our newsletter for the latest industry news and job
              opportunities.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-[#0E0E0E] border border-[#1F2A38] text-[#FFFFFF] placeholder:text-[#CCCCCC] focus:border-[#6CC000] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-[#6CC000] hover:bg-opacity-90 text-[#FFFFFF] font-medium transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2 mt-6">
              <Mail className="h-5 w-5 text-[#6CC000]" />
              <span className="text-[#CCCCCC]">bytherecruiting.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-[#0E0E0E] text-center text-[#CCCCCC]">
          <p>
            © {new Date().getFullYear()} THE RECRUITING . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19.9441 7.92638C19.9568 8.10403 19.9568 8.28173 19.9568 8.45938C19.9568 13.8781 15.8325 20.1218 8.29441 20.1218C5.97207 20.1218 3.81473 19.4492 2 18.2817C2.32996 18.3198 2.64719 18.3325 2.98984 18.3325C4.90605 18.3325 6.67004 17.6853 8.07867 16.5812C6.27664 16.543 4.76648 15.3629 4.24617 13.7386C4.5 13.7766 4.75379 13.802 5.02031 13.802C5.38832 13.802 5.75637 13.7512 6.099 13.6624C4.22082 13.2817 2.81215 11.632 2.81215 9.63959V9.58884C3.35781 9.89341 3.99238 10.0838 4.66492 10.1091C3.56086 9.37306 2.83754 8.11673 2.83754 6.69544C2.83754 5.93452 3.04055 5.23603 3.3959 4.62688C5.41367 7.11419 8.44668 8.73853 11.8477 8.91622C11.7842 8.6117 11.7461 8.29442 11.7461 7.97714C11.7461 5.71887 13.5736 3.87805 15.8451 3.87805C17.0254 3.87805 18.0914 4.37302 18.84 5.17313C19.7664 4.99544 20.6547 4.65277 21.4416 4.18315C21.137 5.13603 20.4898 5.93452 19.6395 6.44224C20.4644 6.35231 21.2639 6.13665 21.9999 5.83208C21.4416 6.64321 20.7436 7.36661 19.9441 7.92638Z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.0001 2.99988C14.7615 2.99988 15.1242 3.01403 16.2344 3.06003C17.3115 3.10603 17.9857 3.27703 18.4411 3.42503C19.0365 3.6238 19.4665 3.86676 19.8976 4.2978C20.3286 4.72884 20.5716 5.15887 20.7704 5.75431C20.9184 6.20969 21.0894 6.88381 21.1354 7.96089C21.1814 9.07117 21.1955 9.43381 21.1955 12.1953C21.1955 14.9568 21.1814 15.3194 21.1354 16.4296C21.0894 17.5067 20.9184 18.1808 20.7704 18.6362C20.5716 19.2316 20.3286 19.6617 19.8976 20.0927C19.4665 20.5238 19.0365 20.7667 18.4411 20.9655C17.9857 21.1135 17.3115 21.2845 16.2344 21.3305C15.1242 21.3765 14.7615 21.3906 12.0001 21.3906C9.23857 21.3906 8.87593 21.3765 7.76565 21.3305C6.68857 21.2845 6.01444 21.1135 5.55905 20.9655C4.96361 20.7667 4.53358 20.5238 4.10254 20.0927C3.6715 19.6617 3.42854 19.2316 3.22977 18.6362C3.08177 18.1808 2.91077 17.5067 2.86477 16.4296C2.81877 15.3194 2.80463 14.9568 2.80463 12.1953C2.80463 9.43381 2.81877 9.07117 2.86477 7.96089C2.91077 6.88381 3.08177 6.20969 3.22977 5.75431C3.42854 5.15887 3.6715 4.72884 4.10254 4.2978C4.53358 3.86676 4.96361 3.6238 5.55905 3.42503C6.01444 3.27703 6.68857 3.10603 7.76565 3.06003C8.87593 3.01403 9.23857 2.99988 12.0001 2.99988ZM12.0001 5.8917C9.73097 5.8917 7.89685 7.72582 7.89685 9.9949C7.89685 12.264 9.73097 14.0981 12.0001 14.0981C14.2692 14.0981 16.1033 12.264 16.1033 9.9949C16.1033 7.72582 14.2692 5.8917 12.0001 5.8917ZM12.0001 12.2619C10.7454 12.2619 9.73307 11.2496 9.73307 9.9949C9.73307 8.74024 10.7454 7.72792 12.0001 7.72792C13.2547 7.72792 14.267 8.74024 14.267 9.9949C14.267 11.2496 13.2547 12.2619 12.0001 12.2619ZM18.4162 5.67183C18.4162 6.32908 17.884 6.86121 17.2268 6.86121C16.5695 6.86121 16.0374 6.32908 16.0374 5.67183C16.0374 5.01459 16.5695 4.48242 17.2268 4.48242C17.884 4.48242 18.4162 5.01459 18.4162 5.67183Z"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19.7742 3H4.22583C3.55583 3 3 3.52333 3 4.17167V19.8283C3 20.4767 3.55583 21 4.22583 21H19.7742C20.4442 21 21 20.4767 21 19.8283V4.17167C21 3.52333 20.4442 3 19.7742 3ZM8.82834 18.2475H6.10251V9.74833H8.82834V18.2475ZM7.46584 8.52583C6.57834 8.52583 5.85834 7.80583 5.85834 6.92C5.85834 6.03417 6.57834 5.31417 7.46584 5.31417C8.35167 5.31417 9.07167 6.03417 9.07167 6.92C9.07167 7.80583 8.35334 8.52583 7.46584 8.52583ZM18.2475 18.2475H15.5225V14.0225C15.5225 12.9725 15.5042 11.6367 14.0775 11.6367C12.6317 11.6367 12.4125 12.7683 12.4125 13.9367V18.2475H9.6875V9.74833H12.2983V10.9725H12.335C12.7408 10.27 13.6542 9.53 15.0267 9.53C17.795 9.53 18.2475 11.3992 18.2475 13.8542V18.2475Z"></path>
      </svg>
    ),
  },
];

// Quick links
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
];

// Resources
const resources = [
  { name: "Driver Resources", href: "#" },
  { name: "Company Resources", href: "#" },
  { name: "Blog", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];
