import {
  Code2,
  Zap,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Systems",
    description:
      "We design and build tailored software solutions and internal systems that help businesses streamline operations and scale efficiently.",
  },
  {
    icon: Zap,
    title: "Digital Products & Platforms",
    description:
      "We develop scalable web and mobile platforms that support business processes, customer experiences, and long-term growth.",
  },
  //   {
  //     icon: Sparkles,
  //     title: "AI & Machine Learning",
  //     description:
  //       "Intelligent solutions that automate processes and unlock insights from your data.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Digital Transformation",
  //     description:
  //       "Modernize your business with cutting-edge technology and strategic implementation.",
  //   },
  //   {
  //     icon: Target,
  //     title: "Cloud Solutions",
  //     description:
  //       "Secure, scalable cloud infrastructure designed for performance and reliability.",
  //   },
  {
    icon: Lightbulb,
    title: "Dedicated Engineering Teams",
    description:
      "Extend your technical capacity with dedicated engineers who integrate seamlessly into your projects and workflows.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-linear-to-br from-[#1a1f3a] via-[#252b4a] to-[#1a2847] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
