import React, { useState, useMemo } from 'react';
import { generateCollectionIdeas } from '../../services/geminiService';
import Loader from '../Loader';
import type { AICollectionResponse, Product } from '../../types';
import { PRODUCTS, PRICING_DATA } from '../../constants';
import ProductCard from '../ProductCard';
import PrintableCollection from '../PrintableCollection';

interface InspirationTabProps {
    onProductSelect: (product: Product) => void;
}

const calculateCheapestPrice = (pricingKey: string, units: number): { pricePerUnit: number; technique: string; totalPrice: number } | null => {
    const productPrices = PRICING_DATA[pricingKey];
    if (!productPrices) return null;

    let minPrice = Infinity;
    let bestTechnique = '';

    for (const technique in productPrices) {
        const tiers = productPrices[technique];
        let foundPrice = 0;
        const sortedTiers = [...tiers].sort((a, b) => a.range[0] - b.range[0]);
        for (const tier of sortedTiers) {
            if (units >= tier.range[0]) {
                foundPrice = tier.price;
            }
        }
        
        if (foundPrice > 0 && foundPrice < minPrice) {
            minPrice = foundPrice;
            bestTechnique = technique;
        }
    }

    if (minPrice === Infinity) return null;

    return {
        pricePerUnit: minPrice,
        technique: bestTechnique,
        totalPrice: minPrice * units,
    };
};


const InspirationTab: React.FC<InspirationTabProps> = ({ onProductSelect }) => {
    const [theme, setTheme] = useState('');
    const [audience, setAudience] = useState('');
    const [styleAndColors, setStyleAndColors] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<AICollectionResponse | null>(null);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!theme) {
            setError('Por favor, introduce un concepto para la colección.');
            return;
        }
        setError('');
        setIsLoading(true);
        setResults(null);
        
        try {
            const response = await generateCollectionIdeas({
                theme,
                audience,
                styleAndColors,
            });

            if (typeof response === 'string') {
                setError(response);
                setResults(null);
            } else {
                setResults(response);
            }
        } catch (e) {
            setError("Ocurrió un error al generar las ideas. Por favor, inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const totalBudget = useMemo(() => {
        if (!results) return 0;
        return results.products.reduce((acc, suggestion) => {
            const product = PRODUCTS.find(p => p.id === suggestion.productId);
            if (!product) return acc;
            const priceInfo = calculateCheapestPrice(product.pricingKey, 50);
            return acc + (priceInfo?.totalPrice || 0);
        }, 0);
    }, [results]);

    return (
        <section>
            <div className="bg-white p-6 sm:p-8">
                <h2 className="text-3xl font-semibold text-black mb-1">Asistente de Colecciones ✨</h2>
                <p className="text-gray-600 mb-6">Introduce un concepto y la IA te sugerirá una mini-colección de productos, te dará un presupuesto estimado y podrás previsualizarla.</p>
                
                <div className="mt-8 pt-8 border-t border-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                        <div className="md:col-span-2">
                            <label htmlFor="collection-theme" className="block text-sm font-semibold text-black mb-1">1. Concepto de la Colección</label>
                            <textarea
                                id="collection-theme"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                placeholder="Ej: Lanzamiento del álbum 'Crónicas de Medianoche', una exploración del synth-pop de los 80."
                                className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-y"
                                disabled={isLoading}
                                rows={3}
                            />
                        </div>
                        <div>
                            <label htmlFor="collection-audience" className="block text-sm font-semibold text-black mb-1">2. Público Objetivo (Opcional)</label>
                            <input
                                type="text"
                                id="collection-audience"
                                value={audience}
                                onChange={(e) => setAudience(e.target.value)}
                                placeholder="Ej: Fans de la música indie y la cultura retro."
                                className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                           <label htmlFor="collection-style-colors" className="block text-sm font-semibold text-black mb-1">3. Estilo y Colores (Opcional)</label>
                            <input
                                type="text"
                                id="collection-style-colors"
                                value={styleAndColors}
                                onChange={(e) => setStyleAndColors(e.target.value)}
                                placeholder="Ej: Estética vintage, colores pastel y neón."
                                className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition w-full font-semibold disabled:bg-gray-400 flex items-center justify-center gap-2"
                    >
                        <span>Generar Ideas</span>
                        <span className="text-yellow-400 text-xl">✨</span>
                    </button>

                    {error && <p className="text-red-600 bg-red-100 p-3 mt-4 text-sm">{error}</p>}
                    
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center my-8 text-center">
                            <Loader />
                            <p className="mt-4 text-gray-600">El director creativo está pensando...</p>
                        </div>
                    )}
                    
                    {results && (
                        <>
                            <div className="mt-12 pt-8 border-t border-dashed border-gray-400">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-black">Propuesta: <span className="text-[#d9f350] bg-black px-2">{results.collectionName}</span></h3>
                                        <p className="mt-4 text-gray-700 max-w-2xl">{results.collectionDescription}</p>
                                    </div>
                                    <div className="text-center sm:text-right flex-shrink-0 w-full sm:w-auto">
                                        <button
                                            onClick={() => window.print()}
                                            className="flex-shrink-0 bg-black text-white py-2 px-4 font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                            Guardar Propuesta
                                        </button>
                                        <div className="mt-4 bg-gray-100 p-3">
                                            <p className="text-sm font-semibold text-gray-600">PRESUPUESTO ESTIMADO</p>
                                            <p className="text-2xl font-bold text-black">{totalBudget.toFixed(2)}€</p>
                                            <p className="text-xs text-gray-500">Para 50 uds. por producto</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {results.products.map(suggestion => {
                                        const product = PRODUCTS.find(p => p.id === suggestion.productId);
                                        if (!product) return (
                                            <div key={suggestion.productId} className="bg-red-100 text-red-700 p-4">
                                                Error: Producto con ID {suggestion.productId} no encontrado.
                                            </div>
                                        );

                                        const priceInfo = calculateCheapestPrice(product.pricingKey, 50);

                                        return (
                                            <div key={suggestion.productId} className="bg-white flex flex-col border border-gray-200">
                                                <ProductCard 
                                                    product={product} 
                                                    onViewDetails={onProductSelect}
                                                />
                                                <div className="p-4 bg-gray-50 border-t border-gray-200 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <p className="font-semibold text-sm text-black"><strong>Idea de Diseño:</strong> <span className="font-normal text-gray-700">{suggestion.designIdea}</span></p>
                                                        <p className="mt-2 text-sm font-semibold text-black"><strong>Técnica Recomendada:</strong> <span className="font-normal text-gray-700">{suggestion.recommendedTechnique}</span></p>
                                                    </div>
                                                    {priceInfo && (
                                                        <div className="my-3 text-center bg-gray-200 p-2">
                                                            <p className="text-xs font-semibold text-gray-600">Estimación para 50 unidades:</p>
                                                            <p className="text-lg font-bold text-black">{priceInfo.totalPrice.toFixed(2)}€</p>
                                                            <p className="text-xs text-gray-500">({priceInfo.pricePerUnit.toFixed(2)}€/ud con opción más barata)</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <PrintableCollection
                                collection={results}
                                totalBudget={totalBudget}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InspirationTab;