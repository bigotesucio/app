
import React from 'react';
import { PRODUCTS } from '../../constants';
import type { Product } from '../../types';
import ProductCard from '../ProductCard';

interface HomeTabProps {
    onProductSelect: (product: Product) => void;
}

// Banner Component
const PromoBanner: React.FC<{
    imageUrl: string;
    title: string;
    description: string;
    product: Product;
    onProductSelect: (product: Product) => void;
}> = ({ imageUrl, title, description, product, onProductSelect }) => (
    <div 
        className="h-[60vh] min-h-[450px] max-h-[1080px] relative w-full flex items-center justify-center text-white text-center p-8"
    >
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{title}</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{description}</p>
            <button
                onClick={() => onProductSelect(product)}
                className="mt-8 bg-white text-black py-3 px-8 font-semibold hover:bg-gray-200 transition-colors"
            >
                Ver más
            </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/50 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-white/50 rounded-full"></div>
        </div>
    </div>
);

// Product Grid Component
const ProductGrid: React.FC<{
    products: Product[];
    onProductSelect: (product: Product) => void;
}> = ({ products, onProductSelect }) => (
    <div className="bg-white">
        <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onViewDetails={onProductSelect} />
                ))}
            </div>
        </div>
    </div>
);

const HomeTab: React.FC<HomeTabProps> = ({ onProductSelect }) => {
    // Define the sections for the home page
    const sections = [
        {
            type: 'banner',
            data: {
                productId: 1, 
                imageUrl: 'https://apparell.com/cdn/shop/files/3.jpg',
                title: 'El Lienzo Perfecto',
                description: 'Camisetas premium que convierten tu música en algo que se lleva con orgullo. Cada canción deja huella, esta camiseta también.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [1, 2, 3] 
            }
        },
        {
            type: 'banner',
            data: {
                productId: 9, 
                imageUrl: 'https://apparell.com/cdn/shop/files/dellafuente-gorra-dllfnt-atemporales-5948681.jpg',
                title: 'Diseño Técnico. Estilo Urbano.',
                description: 'El toque final para un look perfecto. Gorras ligeras y transpirables, ideales para bordar tu logo con la máxima definición.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [9, 10, 13]
            }
        },
        {
            type: 'banner',
            data: {
                productId: 4, 
                imageUrl: PRODUCTS.find(p => p.id === 5)!.imageUrls[0],
                title: 'Confort y Estilo Urbano',
                description: 'Nuestras sudaderas son la pieza clave para cualquier colección. Calidez, calidad y el lienzo perfecto para tus diseños más atrevidos.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [4, 5, 6]
            }
        },
        {
            type: 'banner',
            data: {
                productId: 8,
                imageUrl: 'https://apparell.com/cdn/shop/files/dellafuente-tote-musica-folklorica-atemporal-2176805.jpg',
                title: 'Pequeños Detalles, Gran Impacto',
                description: 'Lleva tu marca a todas partes con accesorios únicos que tus seguidores amarán. Desde tote bags hasta llaveros personalizados.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [8, 15, 14]
            }
        },
         {
            type: 'banner',
            data: {
                productId: 18,
                imageUrl: PRODUCTS.find(p => p.id === 18)!.imageUrls[0],
                title: 'Tu Música, Inmortalizada',
                description: 'El sonido hecho objeto de culto. Ofrecemos prensado de vinilos y productos de impresión con la máxima calidad para que tu música se convierta en una pieza de coleccionista.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [18, 17, 12]
            }
        },
        {
            type: 'banner',
            data: {
                productId: 21,
                imageUrl: 'https://apparell.com/cdn/shop/files/dellafuente-cojin-te-amo-sin-limites-8166616.jpg',
                title: 'Tu Marca se Convierte en Hogar',
                description: 'Extiende tu identidad más allá del armario. Artículos para el hogar personalizables para que tus seguidores sientan tu marca en su espacio más personal.',
            }
        },
        {
            type: 'grid',
            data: {
                productIds: [21, 16, 19]
            }
        }
    ];
    
    const groupedSections = [];
    for (let i = 0; i < sections.length; i += 2) {
        if (sections[i].type === 'banner' && sections[i + 1]?.type === 'grid') {
            groupedSections.push({ banner: sections[i], grid: sections[i + 1] });
        }
    }

    return (
        <div className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="space-y-16">
                {groupedSections.map((group, index) => {
                    const bannerProduct = PRODUCTS.find(p => p.id === group.banner.data.productId);
                    const gridProducts = group.grid.data.productIds
                        .map(id => PRODUCTS.find(p => p.id === id))
                        .filter((p): p is Product => p !== undefined);

                    if (!bannerProduct || gridProducts.length === 0) return null;

                    return (
                        <section key={index}>
                            <PromoBanner
                                imageUrl={group.banner.data.imageUrl}
                                title={group.banner.data.title}
                                description={group.banner.data.description}
                                product={bannerProduct}
                                onProductSelect={onProductSelect}
                            />
                            <ProductGrid
                                products={gridProducts}
                                onProductSelect={onProductSelect}
                            />
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeTab;
