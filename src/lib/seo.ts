// SEO Configuration for Dokero Landing Page
// Centralized SEO metadata management

export const seoConfig = {
  // Site information
  siteName: "Dokero",
  siteUrl: "https://dokero.dev",
  defaultTitle: "Dokero - Instant Architecture Diagrams & Code Documentation Tool",
  titleTemplate: "%s | Dokero",
  
  // Meta description
  defaultDescription:
    "Transform complex codebases into interactive architecture diagrams instantly. Dokero helps engineering teams understand and document code faster with AI-powered visualization.",
  
  // Keywords
  keywords: [
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
  ],
  
  // Social media
  social: {
    twitter: "@dokero", // Update when Twitter account is created
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dokero.dev/",
    siteName: "Dokero",
    images: {
      url: "https://dokero.dev/og-image.png",
      width: 1200,
      height: 630,
      alt: "Dokero - Instant Architecture Diagrams & Code Documentation",
    },
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@dokero", // Update when Twitter account is created
    creator: "@dokero",
    images: {
      url: "https://dokero.dev/twitter-image.png",
      alt: "Dokero - AI-Powered Code Documentation Engine",
    },
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
}) => {
  return {
    title: overrides?.title || seoConfig.defaultTitle,
    description: overrides?.description || seoConfig.defaultDescription,
    keywords: overrides?.keywords?.join(", ") || seoConfig.keywords.join(", "),
    url: overrides?.url || seoConfig.siteUrl,
    image: overrides?.image || seoConfig.openGraph.images.url,
  };
};

export default seoConfig;
