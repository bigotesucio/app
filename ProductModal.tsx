import React, { useState, useEffect, useRef } from 'react';
import type { Product } from '../types';
import { PRICING_DATA, ALL_COLORS } from '../constants';
import { TechniqueIcons } from './TechniqueIcons';
import AccordionItem from './Accordion';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onImageClick: (url: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onImageClick }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Reset image index when product changes
    useEffect(() => {
        setActiveImageIndex(0);
    }, [product.id]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Focus trap
    useEffect(() => {
        const modalNode = modalRef.current;
        if (!modalNode) return;

        const focusableElements = modalNode.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKeyPress = (event: KeyboardEvent) => {
            if (event.key !== 'Tab') return;

            if (event.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        };

        modalNode.addEventListener('keydown', handleTabKeyPress);
        firstElement.focus();

        return () => {
            modalNode.removeEventListener('keydown', handleTabKeyPress);
        };
    }, []);

    const productPrices = PRICING_DATA[product.pricingKey];
    let pricesHtml;
    if (productPrices) {
        pricesHtml = (
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 font-semibold text-black">Técnica / Detalle</th>
                            <th className="py-2 px-4 font-semibold text-black text-center">25-49</th>
                            <th className="py-2 px-4 font-semibold text-black text-center">50-99</th>
                            <th className="py-2 px-4 font-semibold text-black text-center">100-499</th>
                            <th className="py-2 px-4 font-semibold text-black text-center">500+</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(productPrices).map(([techniqueDetail, tiers]) => (
                            <tr key={techniqueDetail} className="border-t border-gray-400">
                                <td className="py-2 px-4 font-semibold">{techniqueDetail}</td>
                                <td className="py-2 px-4 text-center">{tiers.find(t => t.range[0] === 25)?.price.toFixed(2) || 'N/A'}€</td>
                                <td className="py-2 px-4 text-center">{tiers.find(t => t.range[0] === 50)?.price.toFixed(2) || 'N/A'}€</td>
                                <td className="py-2 px-4 text-center">{tiers.find(t => t.range[0] === 100)?.price.toFixed(2) || 'N/A'}€</td>
                                <td className="py-2 px-4 text-center">{tiers.find(t => t.range[0] === 500)?.price.toFixed(2) || 'N/A'}€</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        pricesHtml = <p className="text-gray-500">No hay precios definidos para este producto.</p>;
    }

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div ref={modalRef} className="bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl leading-none z-10">&times;</button>
                
                <div className="bg-white p-6 sm:p-8 md:p-10">
                    <div className="bg-[#d9f350] py-1 px-2">
                        <div className="flex justify-between text-xs font-semibold tracking-wider text-black">
                            <span>{product.mainCategory.toUpperCase()}</span>
                            <span>2025©</span>
                            <span>CATALOGO APPARELL™</span>
                        </div>
                    </div>

                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tighter mt-3">{product.id}. {product.title}</h3>
                    
                    <div className="bg-black mt-2">
                        <p className="text-white text-lg sm:text-xl py-2 px-4 font-medium">{product.titular}</p>
                    </div>
                </div>

                <div className="p-6 sm:p-8 md:p-10 pt-0 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <button 
                                className="aspect-square overflow-hidden bg-gray-100 relative group w-full"
                                onClick={() => onImageClick(product.imageUrls[activeImageIndex])}
                                aria-label="Ampliar imagen del producto"
                            >
                                <img src={product.imageUrls[activeImageIndex]} alt={`${product.title} image ${activeImageIndex + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </button>
                            {product.imageUrls.length > 1 && (
                                <div className="mt-2 flex gap-2">
                                    {product.imageUrls.map((url, index) => (
                                        <button 
                                            key={index} 
                                            onClick={() => setActiveImageIndex(index)}
                                            className={`w-16 h-16 bg-gray-100 p-0.5 border-2 ${activeImageIndex === index ? 'border-black' : 'border-transparent'}`}
                                            aria-label={`Ver imagen ${index + 1}`}
                                        >
                                            <img src={url} alt={`thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold mb-2">{product.frase}</h4>
                            <p className="text-gray-700 mb-6">{product.description}</p>
                             {product.availableColors && product.availableColors.length > 0 && (
                                <div className="mb-6">
                                    <h5 className="text-sm font-semibold text-black mb-2">Colores Disponibles:</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {product.availableColors.map(colorName => {
                                            const color = ALL_COLORS.find(c => c.name === colorName);
                                            if (!color) return null;
                                            return (
                                                <div key={color.name} className="flex items-center" title={`${color.name} (${color.code})`}>
                                                    <div
                                                        className="w-6 h-6 border border-gray-400"
                                                        style={{ backgroundColor: color.hex }}
                                                    ></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-auto border-t border-black">
                                <AccordionItem title="DETALLES Y CUIDADOS">
                                    <div className="space-y-4">
                                        <div>
                                            <strong className="text-xs font-semibold text-black uppercase tracking-wider">Tallas</strong>
                                            <p className="mt-1">{product.sizes}</p>
                                        </div>
                                        
                                        {product.detailedPoints.length > 0 && (
                                            <div>
                                                <strong className="text-xs font-semibold text-black uppercase tracking-wider">Características</strong>
                                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                                    {product.detailedPoints.map((point, index) => (
                                                        <li key={index}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {product.washInstructions.length > 0 && (
                                            <div>
                                                <strong className="text-xs font-semibold text-black uppercase tracking-wider">Instrucciones de Lavado</strong>
                                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                                    {product.washInstructions.map((instruction, index) => (
                                                        <li key={index}>{instruction}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        {product.certifications.length > 0 && (
                                            <div>
                                                <strong className="text-xs font-semibold text-black uppercase tracking-wider">Certificaciones</strong>
                                                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                                    {product.certifications.map((cert, index) => (
                                                        <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{cert}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </AccordionItem>
                                <AccordionItem title="COMPOSICIÓN">
                                    <p className="list-disc pl-4">
                                        <span className="relative -left-4">•</span>{product.composition}
                                    </p>
                                </AccordionItem>
                                <AccordionItem title="TÉCNICAS DE IMPRESIÓN">
                                   <TechniqueIcons techniques={product.techniques} />
                                </AccordionItem>
                                <AccordionItem title="PRECIOS">{pricesHtml}</AccordionItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;