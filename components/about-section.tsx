import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Engineering-driven approach",
  "Scalable and secure architectures",
  "Business-focused solutions",
  "Flexible collaboration models",
  "Long-term technical partnership",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden">
          {/* Image Side */}
          <div className="relative h-full min-h-125">
            <Image
              src="/happy-people.webp"
              alt="Northbridge Solutions Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side with colored background */}
          <div className="bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Northbridge solutions?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We&apos;re not just developers – we&apos;re your technology
              partners committed to your success.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <span className="text-white/95">{item}</span>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
