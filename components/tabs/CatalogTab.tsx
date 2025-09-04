
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../../constants';
import type { Product } from '../../types';
import ProductCard from '../ProductCard';

interface CatalogTabProps {
    onProductSelect: (product: Product) => void;
}

const CatalogTab: React.FC<CatalogTabProps> = ({ onProductSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('Todos');

    const productCategories = useMemo(() => ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))], []);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesFilter = activeFilter === 'Todos' || product.category === activeFilter;
            const matchesSearch = searchTerm === '' || 
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.titular.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [searchTerm, activeFilter]);
    
    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative min-h-[60vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_15.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Catálogo de Productos</h2>
                    <p className="text-gray-200 mt-4">Explora nuestra selección de prendas y complementos personalizables, diseñados para dar vida a tu marca con la máxima calidad.</p>
                </div>
            </div>
            <div className="p-6 sm:p-8">
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <input 
                            type="text"
                            placeholder="Buscar por nombre, titular o descripción..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                            aria-label="Buscar productos"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {productCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`py-2 px-4 text-sm font-semibold transition-colors rounded-full ${
                                    activeFilter === category
                                        ? 'bg-black text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                {filteredProducts.length > 0 ? (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} onViewDetails={onProductSelect} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-gray-500">
                        <h3 className="text-xl font-semibold">No se encontraron productos</h3>
                        <p className="mt-2">Intenta ajustar tu búsqueda o filtros.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CatalogTab;
