export interface Tab {
    id: string;
    label: string;
    color?: string;
}

export interface Product {
    id: number;
    mainCategory: string;
    category: string;
    title: string;
    titular: string;
    frase: string;
    description: string;
    sizes: string;
    detailedPoints: string[];
    washInstructions: string[];
    certifications: string[];
    composition: string;
    specs: string;
    techniques: string;
    imageUrls: string[];
    pricingKey: string;
    productUrl?: string;
    availableColors?: string[];
    configurator?: 'vinyl';
}

export interface PriceTier {
    range: [number, number];
    price: number;
}

export interface PricingData {
    [productKey: string]: {
        [techniqueDetail: string]: PriceTier[];
    };
}

export interface SubTechnique {
    title: string;
    description: string;
    imageUrls: string[];
}

export interface Technique {
    title: string;
    description: string;
    mainImageUrls: string[];
    advantages: string[];
    limitations: string[];
    recommendations: string[];
    subTechniques: SubTechnique[];
}

export interface CarouselSlide {
    number: string;
    title: string;
    text: string;
    imageUrl: string;
}

export interface AppColor {
    name: string;
    code: string;
    hex: string;
}

export interface ColorCategory {
    category: string;
    colors: AppColor[];
}

export interface AICollectionProductSuggestion {
    productId: number;
    designIdea: string;
    recommendedTechnique: string;
}

export interface AICollectionResponse {
    collectionName: string;
    collectionDescription: string;
    products: AICollectionProductSuggestion[];
}

export interface AIBriefingSuggestion {
    suggestions: string[];
}


export interface QuoteItem {
    id: number;
    productKey: string;
    techniqueKey: string;
    units: number;
    pricePerUnit: number;
    totalPrice: number;
}

// Types for the new Vinyl Page
export interface VinylStep {
    step: number;
    title: string;
    description: string;
    icon: string; // SVG path data
    points: { title: string; content: string }[];
}

export interface VinylFAQ {
    title: string;
    content: string;
}

export interface VinylColorExample {
    name: string;
    description?: string;
    imageUrl: string;
}

export interface VinylPackagingPriceTier {
    range: [number, number];
    price: number;
}
