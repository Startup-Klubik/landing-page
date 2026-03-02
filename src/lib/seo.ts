export const seoConfig = {
  // Site information
  siteName: "Dokero",
  siteUrl: "https://dokero.dev",

  defaultTitle: "Dokero – Instant Code Architecture Diagrams",

  titleTemplate: "%s | Dokero",
  
  defaultDescription:
    "Automatically generate architecture diagrams from codebases. Dokero helps developers visualize, understand, and document complex code instantly using AI.",

  keywords: [
    // original
    "code documentation",
    "architecture diagrams",
    "codebase understanding",
    "code visualization",
    "developer tools",
    "interactive documentation",
    "AI-powered documentation",
    "code comprehension",
    "software documentation",
    "engineering documentation",

    // high-intent additions
    "generate architecture diagram from code",
    "visualize codebase architecture",
    "understand large codebase",
    "automatic architecture diagram tool",
    "visualize backend architecture",
    "analyze code structure",
    "software architecture visualization",
    "AI code analysis tool",
    "developer productivity tools",
    "codebase explorer",
  ],
  
  // Social media
  social: {
    twitter: "@dokero",
  },

  // SEO indexing control
  robots: {
    index: true,
    follow: true,
  },

  // Canonical URL
  canonical: "https://dokero.dev",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dokero.dev/",
    siteName: "Dokero",
    title: "Dokero – Visualize Code Architecture Instantly",
    description:
      "Generate architecture diagrams automatically from your codebase. Understand complex systems faster with Dokero.",
    images: [
      {
        url: "https://dokero.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dokero Architecture Visualization Tool",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@dokero",
    creator: "@dokero",
    title: "Dokero – AI Code Architecture Visualization",
    description:
      "Instantly generate architecture diagrams from your codebase.",
    images: ["https://dokero.dev/twitter-image.png"],
  },

  // Structured data base info (for schema injection later)
  structuredData: {
    appName: "Dokero",
    category: "DeveloperApplication",
    operatingSystem: "Web",
  },
  
  // Additional meta
  themeColor: "#000000",
  author: "Dokero",
} as const;


// Helper function to generate page-specific metadata
export const generatePageMetadata = (overrides?: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noIndex?: boolean;
}) => {
  const url = overrides?.url || seoConfig.siteUrl;

  return {
    title: overrides?.title || seoConfig.defaultTitle,
    description: overrides?.description || seoConfig.defaultDescription,

    keywords:
      overrides?.keywords?.join(", ") ||
      seoConfig.keywords.join(", "),

    canonical: url,

    robots: overrides?.noIndex
      ? "noindex, nofollow"
      : "index, follow",

    openGraph: {
      ...seoConfig.openGraph,
      url,
      images: [
        {
          url: overrides?.image || seoConfig.openGraph.images[0].url,
        },
      ],
    },

    twitter: {
      ...seoConfig.twitter,
      images: [
        overrides?.image || seoConfig.twitter.images[0],
      ],
    },
  };
};

export default seoConfig;