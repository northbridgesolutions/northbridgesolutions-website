import {
  Code2,
  Sparkles,
  Zap,
  Users,
  Target,
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
    title: "Custom Software Development",
    description:
      "Tailored solutions built from the ground up to match your unique business requirements.",
  },
  {
    icon: Zap,
    title: "Web & Mobile Applications",
    description:
      "Responsive, scalable applications that deliver seamless experiences across all devices.",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions that automate processes and unlock insights from your data.",
  },
  {
    icon: Users,
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge technology and strategic implementation.",
  },
  {
    icon: Target,
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud infrastructure designed for performance and reliability.",
  },
  {
    icon: Lightbulb,
    title: "Dedicated Engineering Teams",
    description:
      "Expert teams that integrate seamlessly with your organization to accelerate development and scale technical capacity.",
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
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
