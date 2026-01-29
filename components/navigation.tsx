import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a1f3a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/northbridge-logo.svg"
            alt="Northbridge Solutions"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-white/80 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-white/80 hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
