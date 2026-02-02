import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Let&apos;s discuss your project and create a solution that exceeds
          your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 ease-out"
            asChild
          >
            <a
              href="https://calendly.com/hello-northbridgesolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
