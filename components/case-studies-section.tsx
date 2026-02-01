import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real results for real businesses. See how we&apos;ve helped our
            clients achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-2xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 block"
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
                <div className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
