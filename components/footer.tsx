import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/northbridge-logo.svg"
            alt="Northbridge Solutions"
            width={120}
            height={30}
            className="h-6 w-auto opacity-60"
          />
          <span className="text-white/60 text-sm">
            © 2026 Northbridge Solutions. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
