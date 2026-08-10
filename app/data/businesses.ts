/**
 * Centralized business data structure
 * Reusable across all pages and components
 */

export interface Branch {
  id: string;
  name: string;
  location: string;
  address?: string;
  phone?: string;
  email?: string;
  openingHours?: string;
  mapUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category?: string;
  icon?: string;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  heroImage: string;
  logo?: string;
  products: Product[];
  branches?: Branch[];
  services?: string[];
  highlights?: string[];
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  vision?: string;
  mission?: string;
}

export const BUSINESSES: Business[] = [
  {
    id: "al-sadiq-bricks",
    name: "Al-Sadiq Bricks",
    slug: "al-sadiq-bricks",
    shortDescription: "Professional construction and brick solutions",
    description:
      "Al-Sadiq Bricks is a leading supplier of high-quality construction materials, specializing in premium bricks and building solutions. With multiple branches strategically located, we serve residential, commercial, and industrial construction projects with consistent quality and reliable supply.",
    category: "Construction Materials",
    heroImage: "/mercitrader/bricks-hero.jpg",
    vision:
      "To be the most trusted and reliable supplier of quality construction materials in the region.",
    mission:
      "Deliver superior quality bricks and construction materials with exceptional customer service and competitive pricing.",
    products: [
      {
        id: "red-bricks",
        name: "Red Bricks",
        description: "Standard red construction bricks for residential and commercial use",
        category: "Standard",
      },
      {
        id: "premium-bricks",
        name: "Premium Bricks",
        description: "High-strength premium quality bricks for demanding projects",
        category: "Premium",
      },
      {
        id: "hollow-bricks",
        name: "Hollow Bricks",
        description: "Lightweight hollow bricks for faster construction",
        category: "Specialized",
      },
      {
        id: "decorative-bricks",
        name: "Decorative Bricks",
        description: "Decorative and architectural bricks for aesthetic designs",
        category: "Specialty",
      },
    ],
    branches: [
      {
        id: "branch-01",
        name: "Al-Sadiq Bricks — Branch 1",
        location: "Central District",
        address: "123 Construction Avenue, Central Business District",
        phone: "+92 (300) 1234567",
        email: "branch1@alsadiqbricks.com",
        openingHours: "8:00 AM - 6:00 PM (Monday - Saturday)",
        mapUrl: "https://maps.google.com/?q=Al-Sadiq+Bricks+Branch+1",
      },
      {
        id: "branch-02",
        name: "Al-Sadiq Bricks — Branch 2",
        location: "Industrial Zone",
        address: "456 Industrial Park Road, Business Complex",
        phone: "+92 (300) 7654321",
        email: "branch2@alsadiqbricks.com",
        openingHours: "7:00 AM - 7:00 PM (Monday - Sunday)",
        mapUrl: "https://maps.google.com/?q=Al-Sadiq+Bricks+Branch+2",
      },
    ],
    services: [
      "Bulk material supply",
      "Wholesale pricing",
      "Delivery services",
      "Quality assurance",
      "Technical consultation",
      "Custom orders",
    ],
    highlights: [
      "20+ years in construction materials",
      "ISO certified quality standards",
      "Two strategic branch locations",
      "Fast and reliable delivery",
      "Competitive wholesale pricing",
      "Expert technical support",
    ],
    contact: {
      phone: "+92 (300) 1234567",
      email: "info@alsadiqbricks.com",
      address: "123 Construction Avenue, Central Business District",
    },
  },
  {
    id: "al-sadiq-rice",
    name: "Al-Sadiq Rice",
    slug: "al-sadiq-rice",
    shortDescription: "Premium quality rice trading and distribution",
    description:
      "Al-Sadiq Rice is a professional rice trading and distribution business, specializing in premium quality rice varieties. We source from the finest producers, ensuring superior taste, quality, and consistency for both wholesale and retail customers across diverse markets.",
    category: "Agriculture & Food",
    heroImage: "/mercitrader/rice-hero.jpg",
    vision:
      "To become the preferred rice supplier known for quality, reliability, and customer excellence.",
    mission:
      "Supply premium quality rice products with integrity and exceptional customer service to retailers and consumers alike.",
    products: [
      {
        id: "basmati-white",
        name: "Basmati Rice (White)",
        description: "Premium white basmati rice with long grains and aromatic flavor",
        category: "Premium",
      },
      {
        id: "basmati-brown",
        name: "Basmati Rice (Brown)",
        description: "Nutritious brown basmati rice with complete grain intact",
        category: "Premium",
      },
      {
        id: "long-grain",
        name: "Long Grain Rice",
        description: "Classic long grain rice for everyday cooking",
        category: "Standard",
      },
      {
        id: "jasmine-rice",
        name: "Jasmine Rice",
        description: "Fragrant jasmine rice with delicate flavor profile",
        category: "Premium",
      },
      {
        id: "parboiled-rice",
        name: "Parboiled Rice",
        description: "Pre-processed parboiled rice for quick preparation",
        category: "Specialty",
      },
    ],
    services: [
      "Wholesale distribution",
      "Retail supply",
      "Bulk orders",
      "Quality packaging",
      "Reliable delivery",
      "Competitive pricing",
    ],
    highlights: [
      "Premium quality rice varieties",
      "Direct sourcing from trusted producers",
      "Strict quality control processes",
      "Competitive wholesale and retail pricing",
      "Efficient distribution network",
      "Customer-focused service",
    ],
    contact: {
      phone: "+92 (300) 9876543",
      email: "info@alsadiqrice.com",
      address: "789 Agriculture Park, Trade District",
    },
  },
];

export const COMPANY_INFO = {
  name: "MerciTrader",
  tagline: "Building businesses. Delivering quality. Growing together.",
  description:
    "MerciTrader is a diversified business group operating multiple companies including Al-Sadiq Bricks and Al-Sadiq Rice. We are committed to quality, reliability, and long-term partnerships.",
  founded: "2010",
  vision:
    "To be a respected and innovative business group known for quality, integrity, and customer focus.",
  mission:
    "To build and operate successful, customer-focused businesses that deliver value through quality products and exceptional service.",
  values: [
    {
      title: "Quality",
      description: "Excellence in everything we do",
    },
    {
      title: "Integrity",
      description: "Honest and ethical business practices",
    },
    {
      title: "Reliability",
      description: "Consistent and dependable service",
    },
    {
      title: "Customer Focus",
      description: "Prioritizing customer satisfaction and success",
    },
    {
      title: "Innovation",
      description: "Continuous improvement and growth",
    },
    {
      title: "Partnership",
      description: "Long-term relationships built on trust",
    },
  ],
  contact: {
    email: "contact@mercitrader.com",
    phone: "+92 (300) 1234567",
    address: "Business Plaza, Corporate District",
  },
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/mercitrader",
    // Only add if actual URLs exist
  },
};

export function getBusinessBySlug(slug: string): Business | undefined {
  return BUSINESSES.find((b) => b.slug === slug);
}

export function getBranchBySlug(businessSlug: string, branchSlug: string): Branch | undefined {
  const business = getBusinessBySlug(businessSlug);
  if (!business || !business.branches) return undefined;

  return business.branches.find(
    (b) => b.id === branchSlug || b.name.toLowerCase().replace(/\s+/g, "-") === branchSlug
  );
}
