export interface CaseStudy {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  // Header
  projectType: string;
  shortOutcome: string;
  // Context
  clientContext: string;
  problem: string;
  whyItMatters: string;
  // Goals
  goals: string[];
  // Solution
  solutionOverview: string;
  keyFeatures: string[];
  // Tech Stack
  techStack: {
    frontend: string;
    backend: string;
    infrastructure: string;
    integrations?: string;
  };
  // Process
  role: string;
  process: string;
  // Results
  results: string[];
  // Meta
  duration: string;
  teamSize: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tourism-booking-platform",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    category: "TOURISM & BOOKING PLATFORM",
    title: "Mobile Booking Platform for Tourism & Experiences",
    description:
      "Designed and built a mobile application and management dashboard to support bookings, payments, and service provider operations in the tourism space.",
    // Header
    projectType: "Mobile Booking Platform for Tourism",
    shortOutcome:
      "Seamless booking experience for users and centralized management for service providers.",
    // Context
    clientContext:
      "The client wanted to create a digital platform that would allow users to easily discover and book tourism-related offerings, including accommodations, experiences, and events.",
    problem:
      "Service providers lacked a centralized digital solution to present their offerings to users, manage bookings and availability, and handle payments efficiently. At the same time, end users needed a simple, mobile-first experience to explore destinations, make reservations, and purchase event tickets.",
    whyItMatters:
      "Before the platform, service providers had no unified way to reach digital-first customers, and users struggled with fragmented booking experiences.",
    // Goals
    goals: [
      "Build a mobile application for users to browse and book tourism offerings",
      "Enable secure payments and ticket purchases",
      "Provide service providers with a dashboard to manage their listings",
      "Support multiple content types: accommodations, experiences, and events",
      "Ensure scalability for future growth",
    ],
    // Solution
    solutionOverview:
      "We designed and developed a mobile-first booking platform supported by a web-based management dashboard for service providers. The system was built with two main components to serve both end users and service providers.",
    keyFeatures: [
      "Discovery of touristic places, accommodations, and experiences",
      "Booking and reservation functionality",
      "Secure payment processing",
      "Event browsing and ticket purchasing",
      "User-friendly, mobile-optimized interface",
      "Management of accommodations, experiences, and events",
      "Control over availability, pricing, and content",
      "Visibility into bookings and transactions",
      "Centralized administration of offerings for providers",
    ],
    // Tech Stack
    techStack: {
      frontend: "React, Kotlin",
      backend: "Node.js",
      infrastructure: "PostgreSQL, Cloud-based deployment",
      integrations: "Third-party payment provider",
    },
    // Process
    role: "End-to-end development team",
    process:
      "We were responsible for the end-to-end development of the platform. Our involvement included translating business requirements into technical solutions, building the mobile application and backend services, developing the service provider dashboard, integrating payment and booking workflows, and ensuring system reliability, security, and maintainability. We worked closely with the client to iterate on features and deliver a production-ready platform.",
    // Results
    results: [
      "Seamless booking experience for users",
      "Centralized management for service providers",
      "Digital distribution of tourism offerings",
      "Secure handling of bookings and payments",
      "Strong foundation for expanding tourism services",
      "Successful onboarding of multiple service providers",
    ],
    duration: "6 months",
    teamSize: "5",
  },
  {
    slug: "hr-management-platform",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "HR MANAGEMENT PLATFORM",
    title: "Custom HR Management Platform for a Large Organization",
    description:
      "Designed and developed a scalable HR software system to support talent management, internal processes, and workforce operations.",
    // Header
    projectType: "Custom HR Management Platform",
    shortOutcome:
      "Streamlined HR workflows, centralized employee data, and reduced manual processes across the organization.",
    // Context
    clientContext:
      "The organization operated at a large scale, with complex HR workflows involving recruitment, employee data management, and internal processes.",
    problem:
      "Existing tools were fragmented and not tailored to internal needs, resulting in manual and repetitive HR tasks, limited visibility into employee and talent data, and difficulty adapting workflows as the organization evolved.",
    whyItMatters:
      "The team needed a custom HR system that could centralize processes, improve efficiency, and scale with organizational growth.",
    // Goals
    goals: [
      "Centralize HR data in a single internal platform",
      "Support talent and employee lifecycle management",
      "Reduce manual HR operations",
      "Ensure scalability and security for enterprise-level usage",
      "Build a flexible system adaptable to future HR needs",
    ],
    // Solution
    solutionOverview:
      "We worked on the development of a custom HR software platform designed to support internal HR operations and talent management workflows. The system was built as a modular internal application, allowing different HR functions to operate within a single, cohesive platform.",
    keyFeatures: [
      "Employee and talent profile management",
      "Role-based access control for HR teams and stakeholders",
      "Workflow support for HR processes",
      "Scalable architecture designed for large user bases",
      "Secure handling of sensitive employee data",
      "Integration with existing internal systems and processes",
    ],
    // Tech Stack
    techStack: {
      frontend: "Next.js, React, TypeScript",
      backend: "tRPC, Node.js",
      infrastructure: "AWS, PostgreSQL",
    },
    // Process
    role: "Core engineering team member",
    process:
      "We contributed as part of the engineering effort, working on the design and development of core system components. Our responsibilities included implementing application features, collaborating with internal teams on requirements, ensuring performance, scalability, and maintainability, and supporting the development of a production-ready internal system. The work followed structured development practices suitable for large-scale internal software.",
    // Results
    results: [
      "Streamlined HR workflows and reduced manual processes",
      "Centralized employee and talent data in a single platform",
      "Improved visibility and access to HR information",
      "Supported HR operations at enterprise scale",
      "Provided a strong foundation for ongoing HR process improvements",
      "Enabled future feature expansion and adaptability",
    ],
    duration: "4 months",
    teamSize: "6",
  },
  {
    slug: "asset-management-system",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "IT OPERATIONS & ASSET MANAGEMENT",
    title: "Internal Asset Management System for IT Operations",
    description:
      "Designed and developed a centralized internal system to help IT teams track, assign, and manage company assets efficiently.",
    // Header
    projectType: "Internal Asset Management System",
    shortOutcome:
      "Improved visibility into asset usage, reduced manual tracking time, and increased accountability over company equipment.",
    // Context
    clientContext:
      "The organization managed a large number of physical assets such as laptops, monitors, and other IT equipment.",
    problem:
      "Asset tracking was handled through manual processes and disconnected tools, making it difficult for the IT department to know which assets were assigned to which employees, track asset history and usage over time, manage availability and lifecycle of equipment, and respond efficiently to daily IT requests.",
    whyItMatters:
      "This created operational friction and increased the risk of asset loss or mismanagement.",
    // Goals
    goals: [
      "Centralize asset information in a single internal platform",
      "Track asset assignment and ownership history",
      "Support day-to-day IT operations",
      "Improve visibility and accountability",
      "Build a scalable system adaptable to organizational growth",
    ],
    // Solution
    solutionOverview:
      "We built a custom internal asset management system tailored to the needs of the IT department. The platform provided a clear overview of all company assets and their current status, enabling IT teams to manage equipment efficiently and reliably.",
    keyFeatures: [
      "Asset inventory management (laptops, screens, peripherals, etc.)",
      "Assignment tracking (who has what, and for how long)",
      "Asset lifecycle history and status tracking",
      "Role-based access for IT staff",
      "Centralized dashboard for daily operations",
      "Seamless integration into existing internal workflows",
    ],
    // Tech Stack
    techStack: {
      frontend: "React",
      backend: "Node.js",
      infrastructure: "PostgreSQL, Cloud-based deployment",
    },
    // Process
    role: "Core development team",
    process:
      "We contributed to the design and development of the system, working closely with internal stakeholders to ensure the platform met operational needs. Our responsibilities included translating IT workflows into system functionality, implementing core asset management features, ensuring data consistency and reliability, and supporting the delivery of a production-ready internal tool. The development followed structured practices suitable for enterprise internal systems.",
    // Results
    results: [
      "Improved visibility into asset usage and availability",
      "Reduced time spent on manual tracking",
      "Supported IT teams in daily operational tasks",
      "Increased accountability and control over company equipment",
      "Platform became a key internal tool for IT operations",
      "Scalable foundation for future asset management needs",
    ],
    duration: "5 months",
    teamSize: "4",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
