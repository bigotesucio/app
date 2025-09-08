

import React, { useState, useMemo, useEffect } from 'react';
import { PRICING_DATA } from '../../constants';
import type { QuoteItem } from '../../types';
import AccordionItem from '../Accordion';
import PrintableQuote from '../PrintableQuote';

const calculatePrice = (productKey: string, techniqueKey: string, units: number): number => {
    const tiers = PRICING_DATA[productKey]?.[techniqueKey] || [];
    if (!tiers.length) return 0;

    let foundPrice = 0;
    const sortedTiers = [...tiers].sort((a, b) => a.range[0] - b.range[0]);

    for (const tier of sortedTiers) {
        if (units >= tier.range[0]) {
            foundPrice = tier.price;
        }
    }
    return foundPrice;
};

const isVinylProduct = (key: string) => key.toUpperCase().includes('VINILO');


const PriceComparatorTab: React.FC = () => {
    const productKeys = Object.keys(PRICING_DATA);
    const [selectedProduct, setSelectedProduct] = useState(productKeys[0]);
    const techniqueKeys = Object.keys(PRICING_DATA[selectedProduct] || {});
    const [selectedTechnique, setSelectedTechnique] = useState(techniqueKeys[0] || '');
    const [units, setUnits] = useState(50);
    const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

    useEffect(() => {
      const newTechniqueKeys = Object.keys(PRICING_DATA[selectedProduct] || {});
      setSelectedTechnique(newTechniqueKeys[0] || '');
      // If a vinyl product is selected and current units are less than 100, update to 100.
      if (isVinylProduct(selectedProduct) && units < 100) {
          setUnits(100);
      }
    }, [selectedProduct]);

    const handleAddItem = () => {
        const minUnits = isVinylProduct(selectedProduct) ? 100 : 1;
        const currentUnits = Math.max(units, minUnits);
        const pricePerUnit = calculatePrice(selectedProduct, selectedTechnique, currentUnits);

        if (pricePerUnit > 0 && currentUnits > 0) {
            const newItem: QuoteItem = {
                id: Date.now(),
                productKey: selectedProduct,
                techniqueKey: selectedTechnique,
                units: currentUnits,
                pricePerUnit,
                totalPrice: pricePerUnit * currentUnits,
            };
            setQuoteItems([...quoteItems, newItem]);
        }
    };

    const handleRemoveItem = (id: number) => {
        setQuoteItems(quoteItems.filter(item => item.id !== id));
    };

    const handleUpdateUnits = (id: number, newUnits: number) => {
        setQuoteItems(quoteItems.map(item => {
            if (item.id === id) {
                const pricePerUnit = calculatePrice(item.productKey, item.techniqueKey, newUnits);
                return {
                    ...item,
                    units: newUnits,
                    pricePerUnit,
                    totalPrice: pricePerUnit * newUnits,
                };
            }
            return item;
        }));
    };
    
    const totalBudget = useMemo(() => {
        return quoteItems.reduce((total, item) => total + item.totalPrice, 0);
    }, [quoteItems]);
    
    const priceTiersForSelectedProduct = PRICING_DATA[selectedProduct];
    const priceTable = priceTiersForSelectedProduct ? (
        <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-3 font-semibold text-black">Técnica / Detalle</th>
                        <th className="py-2 px-3 font-semibold text-black text-center">25-49</th>
                        <th className="py-2 px-3 font-semibold text-black text-center">50-99</th>
                        <th className="py-2 px-3 font-semibold text-black text-center">100-499</th>
                        <th className="py-2 px-3 font-semibold text-black text-center">500+</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(priceTiersForSelectedProduct).map(([techniqueDetail, tiers]) => (
                        <tr key={techniqueDetail} className="border-t border-gray-200">
                            <td className="py-2 px-3 font-semibold">{techniqueDetail}</td>
                            <td className="py-2 px-3 text-center">{tiers.find(t => t.range[0] === 25)?.price.toFixed(2) || 'N/A'}€</td>
                            <td className="py-2 px-3 text-center">{tiers.find(t => t.range[0] === 50)?.price.toFixed(2) || 'N/A'}€</td>
                            <td className="py-2 px-3 text-center">{tiers.find(t => t.range[0] === 100)?.price.toFixed(2) || 'N/A'}€</td>
                            <td className="py-2 px-3 text-center">{tiers.find(t => t.range[0] === 500)?.price.toFixed(2) || 'N/A'}€</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : null;

    const minUnitsForSelected = isVinylProduct(selectedProduct) ? 100 : 1;

    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <PrintableQuote quoteItems={quoteItems} totalBudget={totalBudget} />
            <div className="relative h-screen flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_2.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Creador de Presupuestos</h1>
                    <p className="text-gray-200 mt-4">Añade productos a tu lista para obtener una estimación de costes al instante.</p>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Columna Izquierda: Formulario para añadir productos */}
                        <div className="lg:pr-8">
                            <h3 className="text-xl font-semibold text-black mb-4">Añadir Producto al Presupuesto</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="price-product" className="block text-sm font-semibold text-black mb-1">Producto</label>
                                    <select
                                        id="price-product"
                                        value={selectedProduct}
                                        onChange={(e) => setSelectedProduct(e.target.value)}
                                        className="mt-1 block w-full py-3 px-3 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                    >
                                        {productKeys.map(key => <option key={key} value={key}>{key}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="price-technique" className="block text-sm font-semibold text-black mb-1">Técnica y Detalle</label>
                                    <select
                                        id="price-technique"
                                        value={selectedTechnique}
                                        onChange={(e) => setSelectedTechnique(e.target.value)}
                                        className="mt-1 block w-full py-3 px-3 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        disabled={!techniqueKeys.length}
                                    >
                                         {techniqueKeys.map(key => <option key={key} value={key}>{key}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="price-units" className="block text-sm font-semibold text-black mb-1">
                                        Unidades {minUnitsForSelected > 1 && `(Mínimo ${minUnitsForSelected})`}
                                    </label>
                                    <input
                                        type="number"
                                        id="price-units"
                                        value={units}
                                        min={minUnitsForSelected}
                                        onChange={(e) => setUnits(Math.max(minUnitsForSelected, parseInt(e.target.value, 10) || minUnitsForSelected))}
                                        className="mt-1 block w-full py-2.5 px-3 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                               <AccordionItem title="Ver tabla de precios completa">
                                    {priceTable ? priceTable : <p className="p-4 text-gray-500">No hay datos de precios para este producto.</p>}
                               </AccordionItem>
                            </div>

                            <button 
                                onClick={handleAddItem}
                                className="w-full bg-black text-white py-3 px-4 font-semibold hover:bg-gray-800 transition mt-6 flex items-center justify-center gap-2"
                            >
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                Añadir
                            </button>
                        </div>

                        {/* Columna Derecha: Resumen del presupuesto */}
                        <div className="bg-gray-50 p-6">
                            <h3 className="text-xl font-semibold text-black mb-4">Tu Presupuesto</h3>
                            <div className="space-y-4">
                                {quoteItems.length === 0 ? (
                                    <p className="text-gray-500 text-center py-8">Añade productos para ver tu presupuesto.</p>
                                ) : (
                                    quoteItems.map(item => {
                                        const minItemUnits = isVinylProduct(item.productKey) ? 100 : 1;
                                        return (
                                            <div key={item.id} className="bg-white p-4 border border-gray-200">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-semibold text-black">{item.productKey}</p>
                                                        <p className="text-xs text-gray-500">{item.techniqueKey}</p>
                                                    </div>
                                                    <button onClick={() => handleRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Eliminar artículo">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </button>
                                                </div>
                                                <div className="mt-3 flex items-center justify-between text-sm gap-4">
                                                    <input
                                                        type="number"
                                                        value={item.units}
                                                        min={minItemUnits}
                                                        onChange={(e) => handleUpdateUnits(item.id, Math.max(minItemUnits, parseInt(e.target.value, 10) || minItemUnits))}
                                                        className="w-20 p-1 bg-gray-100 text-center focus:outline-none focus:ring-1 focus:ring-black"
                                                        aria-label={`Cantidad (Mínimo ${minItemUnits})`}
                                                    />
                                                    <div className="text-right">
                                                        <p className="font-semibold text-black">{item.totalPrice.toFixed(2)}€</p>
                                                        <p className="text-xs text-gray-500">{item.pricePerUnit > 0 ? `${item.pricePerUnit.toFixed(2)}€/ud` : 'Mín. 100 uds.'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                            </div>

                            {quoteItems.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-gray-300 space-y-4">
                                    <div className="flex justify-between items-center text-lg">
                                        <span className="font-semibold text-black">Total Estimado (sin IVA)</span>
                                        <span className="text-3xl font-bold text-black">{totalBudget.toFixed(2)}€</span>
                                    </div>
                                    <button
                                        onClick={() => window.print()}
                                        className="w-full bg-gray-800 text-white py-3 px-4 font-semibold hover:bg-black transition flex items-center justify-center gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                        Guardar Presupuesto
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceComparatorTab;