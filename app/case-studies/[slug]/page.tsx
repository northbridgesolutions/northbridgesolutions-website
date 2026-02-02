import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseSlugs } from "@/lib/case-studies";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const slugs = getAllCaseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Back Button */}
      <div className="px-6 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/#case-studies">
            <Button
              variant="outline"
              className="border-white/20 hover:scale-105 transition-all duration-300 ease-out"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>

      {/* 1️⃣ Case Study Header */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold text-blue-400 tracking-wide mb-4 uppercase">
            {caseStudy.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            {caseStudy.description}
          </p>

          {/* Short Outcome */}
          <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-lg text-blue-300 font-medium">
              {caseStudy.shortOutcome}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* 2️⃣ Context & Problem */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Context & Problem
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Who the client was
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {caseStudy.clientContext}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  What wasn&apos;t working
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Why it mattered
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {caseStudy.whyItMatters}
                </p>
              </div>
            </div>
          </div>

          {/* 3️⃣ Goals & Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Goals & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.goals.map((goal, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-white/80">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4️⃣ Solution */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solution
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {caseStudy.solutionOverview}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              Key Features:
            </h3>
            <ul className="space-y-3">
              {caseStudy.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="text-white/70 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5️⃣ Technology Stack */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Frontend</h3>
                </div>
                <p className="text-white/70">{caseStudy.techStack.frontend}</p>
              </div>

              <div className="p-6 rounded-xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Backend</h3>
                </div>
                <p className="text-white/70">{caseStudy.techStack.backend}</p>
              </div>

              <div className="p-6 rounded-xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Infrastructure
                  </h3>
                </div>
                <p className="text-white/70">
                  {caseStudy.techStack.infrastructure}
                </p>
              </div>

              {caseStudy.techStack.integrations && (
                <div className="p-6 rounded-xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Integrations
                    </h3>
                  </div>
                  <p className="text-white/70">
                    {caseStudy.techStack.integrations}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 6️⃣ Role & Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Role & Process
            </h2>
            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  Our Responsibility
                </span>
                <p className="text-white/80 mt-2">{caseStudy.role}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  How We Worked
                </span>
                <p className="text-white/70 text-lg leading-relaxed mt-2">
                  {caseStudy.process}
                </p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm text-white/50 mb-1">Duration</div>
                <div className="text-white font-semibold">
                  {caseStudy.duration}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm text-white/50 mb-1">Team Size</div>
                <div className="text-white font-semibold">
                  {caseStudy.teamSize}
                </div>
              </div>
            </div>
          </div>

          {/* 7️⃣ Results & Impact */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Results & Impact
            </h2>
            <div className="space-y-4">
              {caseStudy.results.map((result, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-linear-to-r from-blue-500/10 to-transparent border border-blue-500/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <p className="text-white/90 text-lg font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="p-12 rounded-2xl bg-linear-to-br from-blue-600 to-blue-700 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to achieve similar results?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with
              the right technology solution.
            </p>
            <Button
              size="lg"
              className="cursor-pointer bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 ease-out font-semibold"
              asChild
            >
              <a
                href="https://calendly.com/hello-northbridgesolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
