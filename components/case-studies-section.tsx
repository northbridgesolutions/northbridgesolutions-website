import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudy {
  image: string;
  category: string;
  title: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "SALES AUTOMATION MOBILE CRM",
    title: "Improving Sales Automation with a Mobile CRM Solution",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    category: "HEALTHCARE PLATFORM MODERNIZATION",
    title: "Building a scalable healthcare platform",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    category: "RESTAURANT DIGITAL TRANSFORMATION",
    title: "Digitally Adapting Restaurant Operations for Curbside Pickup",
    link: "#",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real results for real businesses. See how we&apos;ve helped our clients
            achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-xs font-bold text-blue-400 tracking-wide">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {study.title}
                </h3>
                <a
                  href={study.link}
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 hover:gap-3 transition-all"
                >
                  Read more
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
