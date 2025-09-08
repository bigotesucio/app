
import React, { useState, useEffect, useRef } from 'react';
import type { Product } from '../types';
import { ALL_COLORS } from '../constants';

interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for environment-agnostic type safety.
    // This correctly infers the return type of setInterval (number in browsers) without hardcoding it.
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isHovered && product.imageUrls.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.imageUrls.length);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            setCurrentImageIndex(0);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovered, product.imageUrls.length]);

    const displayedColors = product.availableColors?.slice(0, 5) || [];
    const remainingColors = product.availableColors ? product.availableColors.length - displayedColors.length : 0;
    
    return (
        <div className="bg-white flex flex-col overflow-hidden group">
            <div 
                className="aspect-square overflow-hidden bg-gray-100 relative cursor-pointer"
                onClick={() => onViewDetails(product)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {product.imageUrls.map((url, index) => (
                    <img 
                        key={index}
                        src={url} 
                        alt={`${product.title} image ${index + 1}`} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 
                    className="text-base font-semibold tracking-tight text-black cursor-pointer"
                    onClick={() => onViewDetails(product)}
                >
                    {product.id}. {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 mb-4 flex-grow">{product.titular}</p>
                
                {displayedColors.length > 0 && (
                    <div className="mb-4">
                        <div className="flex items-center gap-1.5">
                            {displayedColors.map(colorName => {
                                const color = ALL_COLORS.find(c => c.name === colorName);
                                if (!color) return null;
                                return (
                                    <div key={color.name} className="relative group">
                                        <div 
                                            className="w-4 h-4 rounded-full border border-gray-300"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                            {color.name} ({color.code})
                                        </div>
                                    </div>
                                );
                            })}
                            {remainingColors > 0 && (
                                <span className="text-xs text-gray-500">+{remainingColors}</span>
                            )}
                        </div>
                    </div>
                )}
                
                <div className="flex justify-between items-center mt-auto pt-3">
                    <span className="text-xs font-mono text-gray-500 tracking-wider">{product.specs}</span>
                    <button 
                        onClick={() => onViewDetails(product)}
                        className="bg-black text-white py-2 px-4 text-xs font-semibold hover:bg-gray-800 transition-colors tracking-wider"
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;