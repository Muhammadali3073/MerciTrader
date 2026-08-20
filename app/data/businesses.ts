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
		id: "al-sadiq-bricks-kiln",
		name: "AL-SADIQ BRICKS KILN",
		slug: "al-sadiq-bricks-kiln",
		shortDescription: "Professional construction and brick solutions",
		description:
			"AL-SADIQ BRICKS KILN is a leading supplier of high-quality construction materials, specializing in premium bricks and building solutions. With multiple branches strategically located, we serve residential, commercial, and industrial construction projects with consistent quality and reliable supply.",
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
				description:
					"Standard red construction bricks for residential and commercial use",
				category: "Standard",
			},
			{
				id: "premium-bricks",
				name: "Premium Bricks",
				description:
					"High-strength premium quality bricks for demanding projects",
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
				description:
					"Decorative and architectural bricks for aesthetic designs",
				category: "Specialty",
			},
		],
		branches: [
			{
				id: "branch-01",
				name: "AL-SADIQ BRICKS KILN — Branch 1",
				location: "Central District",
				address: "Old Narang road, Muridke",
				phone: "+923008471335",
				email: "contact@mercitraders.com",
				openingHours: "Sat–Thu: 8:00 AM – 6:00 PM; Fri: Closed.",
				mapUrl: "https://maps.app.goo.gl/xnUWjwyTqjgJfYaG7",
			},
			{
				id: "branch-02",
				name: "AL-SADIQ BRICKS KILN — Branch 2",
				location: "Industrial Zone",
				address: "Old Narang road, Muridke",
				phone: "+923008471335",
				email: "contact@mercitraders.com",
				openingHours: "Sat–Thu: 8:00 AM – 6:00 PM; Fri: Closed.",
				mapUrl: "https://maps.app.goo.gl/wgodzm4Q9kYWfBSi6",
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
			phone: "+923008471335",
			email: "contact@mercitraders.com",
			address: "123 Construction Avenue, Central Business District",
		},
	},
	{
		id: "merci-mart",
		name: "Merci Mart",
		slug: "merci-mart",
		shortDescription: "Convenient retail mart offering everyday essentials",
		description:
			"Merci Mart is your neighborhood retail destination for everyday essentials. From fresh groceries and household supplies to personal care and packaged goods, we stock a wide selection of quality products at affordable prices. Whether you're shopping for your home or business, Merci Mart delivers convenience, value, and friendly service.",
		category: "Retail",
		heroImage: "/mercitrader/merci-mart-hero.jpg",
		vision:
			"To become the most trusted neighborhood retail brand known for convenience, quality, and fair pricing.",
		mission:
			"Provide everyday essentials with a focus on quality, affordability, and exceptional customer experience.",
		products: [
			{
				id: "fresh-groceries",
				name: "Fresh Groceries",
				description: "Fruits, vegetables, dairy, and daily fresh produce",
				category: "Food",
			},
			{
				id: "packaged-foods",
				name: "Packaged Foods",
				description: "Snacks, cereals, spices, and ready-to-cook items",
				category: "Grocery",
			},
			{
				id: "household-supplies",
				name: "Household Supplies",
				description: "Cleaning products, kitchenware, and home essentials",
				category: "Home",
			},
			{
				id: "personal-care",
				name: "Personal Care",
				description: "Hygiene products, skincare, and wellness items",
				category: "Care",
			},
			{
				id: "beverages",
				name: "Beverages",
				description: "Soft drinks, juices, bottled water, and energy drinks",
				category: "Drinks",
			},
		],
		branches: [
			{
				id: "mart",
				name: "Merci Mart",
				location: "Downtown Market",
				address: "45 Market Street, Downtown Commercial Area",
				phone: "+923008471335",
				email: "contact@mercitraders.com",
				openingHours: "Sat–Thu: 8:00 AM – 6:00 PM; Fri: Closed.",
				mapUrl: "https://maps.app.goo.gl/iok3UeEHBpEAzRWg9",
			},
		],
		services: [
			"In-store shopping",
			"Home delivery",
			"Wholesale supply",
			"Bulk orders",
			"Gift packaging",
			"Loyalty rewards",
		],
		highlights: [
			"Wide range of everyday essentials",
			"Competitive retail and wholesale pricing",
			"Two convenient locations",
			"Home delivery available",
			"Fresh stock updated daily",
			"Friendly customer service",
		],
		contact: {
			phone: "+923008471335",
			email: "contact@mercitraders.com",
			address: "45 Market Street, Downtown",
		},
	},
	{
		id: "merci-rice",
		name: "Merci Rice",
		slug: "merci-rice",
		shortDescription: "Premium rice products for homes and businesses",
		description:
			"Merci Rice offers high-quality rice varieties sourced from trusted producers, catering to both retail and wholesale customers.",
		category: "Agriculture & Food",
		heroImage: "/mercitrader/merci-rice-hero.jpg",
		vision:
			"To be the leading provider of premium rice products, recognized for quality, purity, and customer trust across the region.",
		mission:
			"Source, process, and deliver the finest rice varieties with uncompromising quality standards and exceptional service.",
		products: [
			{
				id: "basmati-white",
				name: "Basmati Rice (White)",
				description:
					"Premium white basmati rice with long grains and aromatic flavor",
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
		branches: [
			{
				id: "rice",
				name: "Merci Rice",
				location: "Trade District",
				address: "789 Agriculture Park, Trade District",
				phone: "+923008471335",
				email: "contact@mercitraders.com",
				openingHours: "Sat–Thu: 9:00 AM – 7:00 PM; Fri: Closed",
				mapUrl: "https://maps.app.goo.gl/iok3UeEHBpEAzRWg9",
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
			phone: "+923008471335",
			email: "contact@mercitraders.com",
			address: "789 Agriculture Park, Trade District",
		},
	},
];

export const COMPANY_INFO = {
	name: "MerciTrader",
	tagline: "Building businesses. Delivering quality. Growing together.",
	description:
		"MerciTrader is a diversified business group operating multiple companies including AL-SADIQ BRICKS KILN, Merci Mart, and Merci Rice. We are committed to quality, reliability, and long-term partnerships.",
	founded: "2015",
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
		email: "contact@mercitraders.com",
		phone: "+923008471335",
		address: "Narowal Road, Opposite Government Girls Degree College, Muridke",
		mapUrl: "https://maps.app.goo.gl/iok3UeEHBpEAzRWg9",
	},
	socialMedia: {
		linkedin: "https://www.linkedin.com/company/mercitrader",
		// Only add if actual URLs exist
	},
};

export function getBusinessBySlug(slug: string): Business | undefined {
	return BUSINESSES.find((b) => b.slug === slug);
}

export function getBranchBySlug(
	businessSlug: string,
	branchSlug: string,
): Branch | undefined {
	const business = getBusinessBySlug(businessSlug);
	if (!business || !business.branches) return undefined;

	return business.branches.find(
		(b) =>
			b.id === branchSlug ||
			b.name.toLowerCase().replace(/\s+/g, "-") === branchSlug,
	);
}
