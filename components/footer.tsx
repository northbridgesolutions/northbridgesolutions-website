import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mb-8">
          {/* Address on the left */}
          <div className="flex items-start gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              28 Geary St
              <br />
              Ste 650 #1763
              <br />
              San Francisco, CA 94108
              <br />
              United States
            </span>
          </div>

          {/* Contact Information on the right */}
          <div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@northbridgesolutions.com"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@northbridgesolutions.io</span>
              </a>

              <a
                href="tel:+14158020765"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+1 415 802 0765</span>
              </a>

              <a
                href="https://www.linkedin.com/company/northbridgesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
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
        </div>

        {/* Copyright centered at bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © 2026 Northbridge Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
