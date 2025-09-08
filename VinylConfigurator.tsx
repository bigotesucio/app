
import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Product } from '../types';
// FIX: Import VINYL_PACKAGING_PRICING to get correct prices for outer sleeves.
import { VINYL_OPTIONS, VINYL_BASE_PRICING, VINYL_PACKAGING_PRICING } from '../constants';
import VinylIllustrations from './VinylIllustrations';

interface VinylConfiguratorProps {
    product: Product;
    onClose: () => void;
}

const calculateVinylPrice = (config: { size: string, weight: string, color: string, innerSleeve: string, outerSleeve: string, units: number }): number => {
    const { size, weight, color, innerSleeve, outerSleeve, units } = config;
    
    // Base price
    const tiers = VINYL_BASE_PRICING[size]?.[weight] || [];
    let basePrice = 0;
    const sortedTiers = [...tiers].sort((a, b) => a.range[0] - b.range[0]);
    for (const tier of sortedTiers) {
        if (units >= tier.range[0]) {
            basePrice = tier.price;
        }
    }
    if (basePrice === 0) return 0; // Invalid quantity range

    // Add modifiers
    const colorMod = VINYL_OPTIONS.colors.find(c => c.id === color)?.priceModifier || 0;
    const innerSleeveMod = VINYL_OPTIONS.innerSleeves.find(s => s.id === innerSleeve)?.priceModifier || 0;
    // FIX: Correctly calculate the outer sleeve price modifier. The 'outerSleeves' object
    // in VINYL_OPTIONS does not contain a 'priceModifier'. The price must be retrieved from VINYL_PACKAGING_PRICING.
    const outerSleeveTiers = VINYL_PACKAGING_PRICING[size as keyof typeof VINYL_PACKAGING_PRICING]?.[outerSleeve] || [];
    let outerSleeveMod = 0;
    if(outerSleeveTiers.length > 0 && units >= outerSleeveTiers[0].range[0]) {
        outerSleeveMod = outerSleeveTiers[0].price;
    }
    
    return basePrice + colorMod + innerSleeveMod + outerSleeveMod;
};


const VinylConfigurator: React.FC<VinylConfiguratorProps> = ({ product, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState('12');
    const [weight, setWeight] = useState('140g');
    const [color, setColor] = useState('black');
    const [innerSleeve, setInnerSleeve] = useState('paper');
    const [outerSleeve, setOuterSleeve] = useState('standard-12');
    const [units, setUnits] = useState(100);

    // Update weight and outer sleeve options when size changes
    useEffect(() => {
        const availableWeights = VINYL_OPTIONS.weights[size as keyof typeof VINYL_OPTIONS.weights];
        const availableSleeves = VINYL_OPTIONS.outerSleeves[size as keyof typeof VINYL_OPTIONS.outerSleeves];
        if (!availableWeights.some(w => w.id === weight)) {
            setWeight(availableWeights[0].id);
        }
        if (!availableSleeves.some(s => s.id === outerSleeve)) {
            setOuterSleeve(availableSleeves[0].id);
        }
    }, [size]);

    const pricePerUnit = useMemo(() => calculateVinylPrice({ size, weight, color, innerSleeve, outerSleeve, units }), [size, weight, color, innerSleeve, outerSleeve, units]);
    const totalPrice = pricePerUnit * units;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div ref={modalRef} className="bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl leading-none z-10">&times;</button>
                
                <div className="bg-white p-6 sm:p-8 md:p-10">
                    <h3 className="text-3xl sm:text-4xl font-bold text-black tracking-tighter">Configurador de Vinilos</h3>
                    <p className="text-gray-600 mt-1">{product.titular}</p>
                </div>

                <div className="p-6 sm:p-8 md:p-10 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Image and Description */}
                    <div>
                         <div className="aspect-square overflow-hidden bg-white mb-6 border border-gray-200">
                            <VinylIllustrations 
                                size={size}
                                outerSleeve={outerSleeve}
                            />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{product.frase}</h4>
                        <p className="text-sm text-gray-700">{product.description}</p>
                    </div>
                    
                    {/* Right Column: Configuration Options */}
                    <div>
                        <div className="space-y-4">
                            {/* Size and Weight */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vinyl-size" className="block text-sm font-semibold text-black mb-1">Formato</label>
                                    <select id="vinyl-size" value={size} onChange={e => setSize(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.sizes.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vinyl-weight" className="block text-sm font-semibold text-black mb-1">Gramaje</label>
                                    <select id="vinyl-weight" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.weights[size as keyof typeof VINYL_OPTIONS.weights].map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </select>
                                </div>
                            </div>
                            {/* Color */}
                            <div>
                                <label htmlFor="vinyl-color" className="block text-sm font-semibold text-black mb-1">Color del Vinilo</label>
                                <select id="vinyl-color" value={color} onChange={e => setColor(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                    {VINYL_OPTIONS.colors.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                </select>
                            </div>
                             {/* Packaging */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vinyl-inner" className="block text-sm font-semibold text-black mb-1">Funda Interior</label>
                                    <select id="vinyl-inner" value={innerSleeve} onChange={e => setInnerSleeve(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.innerSleeves.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vinyl-outer" className="block text-sm font-semibold text-black mb-1">Carpeta Exterior</label>
                                    <select id="vinyl-outer" value={outerSleeve} onChange={e => setOuterSleeve(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {/* FIX: Correctly display the outer sleeve price. The 'outerSleeves' object
                                            does not have a 'priceModifier' property. The price is fetched from VINYL_PACKAGING_PRICING. */}
                                        {VINYL_OPTIONS.outerSleeves[size as keyof typeof VINYL_OPTIONS.outerSleeves].map(opt => {
                                            const price = VINYL_PACKAGING_PRICING[size as keyof typeof VINYL_PACKAGING_PRICING]?.[opt.id]?.[0]?.price || 0;
                                            return <option key={opt.id} value={opt.id}>{opt.label} (+{price.toFixed(2)}€)</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* Units */}
                             <div>
                                <label htmlFor="vinyl-units" className="block text-sm font-semibold text-black mb-1">Unidades (Mínimo 100)</label>
                                <input id="vinyl-units" type="number" value={units} min="100" step="1" onChange={e => setUnits(Math.max(100, parseInt(e.target.value) || 100))} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>
                        </div>

                        {/* Price Summary */}
                        <div className="mt-8 pt-6 border-t border-dashed border-black">
                            {pricePerUnit > 0 ? (
                                <div className="space-y-4">
                                     <div className="flex justify-between items-center text-lg">
                                        <span className="font-semibold text-gray-700">Precio por Unidad</span>
                                        <span className="font-bold text-black">{pricePerUnit.toFixed(2)}€</span>
                                    </div>
                                    <div className="bg-gray-100 p-4">
                                        <div className="flex justify-between items-center text-xl">
                                            <span className="font-semibold text-black">Total Estimado</span>
                                            <span className="text-3xl font-bold text-black">{totalPrice.toFixed(2)}€</span>
                                        </div>
                                        <p className="text-right text-sm text-gray-500 mt-1">Impuestos no incluidos.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center p-4 bg-yellow-100 text-yellow-800">
                                    <p>Por favor, introduce una cantidad válida (mínimo 100) para calcular el precio.</p>
                                </div>
                            )}
                             <button className="w-full bg-black text-white py-3 px-4 font-semibold hover:bg-gray-800 transition mt-6">
                                Contactar para Formalizar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VinylConfigurator;
