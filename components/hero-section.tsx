import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">
              Building Digital Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Software Solutions for 
            <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We design and develop custom digital products and internal systems that help businesses grow faster and operate smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              Schedule a free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 cursor-pointer hover:bg-white/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
