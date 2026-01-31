import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-6">Contact Us</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {/* Left Column - Email and Address */}
            <a
              href="mailto:hello@northbridgesolutions.com"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>hello@northbridgesolutions.io</span>
            </a>

            {/* Right Column - Phone and LinkedIn */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>+1 (234) 567-890</span>
            </a>

            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>
                123 Tech Street, San Francisco, CA 94102, United States
              </span>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright at bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © 2026 Northbridge Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
