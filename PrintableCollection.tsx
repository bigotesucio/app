import React from 'react';
import ReactDOM from 'react-dom';
import type { AICollectionResponse, Product } from '../types';
import { PRODUCTS } from '../constants';
import Logo from './Logo';

interface PrintableCollectionProps {
    collection: AICollectionResponse;
    totalBudget: number;
}

const PrintableCollection: React.FC<PrintableCollectionProps> = ({
    collection,
    totalBudget,
}) => {
    const printableElement = document.getElementById('printable-collection');

    if (!printableElement) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="font-sans text-black">
            {/* Cover Page */}
            <div className="print-collection-cover">
                <div className="w-64">
                    <Logo />
                </div>
                <h1 className="text-4xl font-semibold tracking-tighter mt-8">Propuesta de Colección</h1>
                <h2 className="text-6xl font-bold tracking-tighter text-black mt-4 p-4 bg-gray-200">{collection.collectionName}</h2>
                <p className="mt-6 text-gray-700 max-w-2xl">{collection.collectionDescription}</p>
                <div className="mt-8 border-t border-black pt-4">
                    <p className="text-lg text-gray-600">PRESUPUESTO ESTIMADO TOTAL:</p>
                    <p className="text-4xl font-bold text-black">{totalBudget.toFixed(2)}€</p>
                    <p className="text-sm text-gray-500">Basado en 50 unidades por producto con la técnica más económica.</p>
                </div>
                <p className="mt-12 text-gray-600">APPARELL™ 2025®</p>
            </div>
            
            {/* Products Grid */}
            <div className="print-collection-grid">
                {collection.products.map(suggestion => {
                    const product = PRODUCTS.find(p => p.id === suggestion.productId);
                    if (!product) return null;

                    return (
                        <div key={product.id} className="print-collection-card">
                            <div className="print-collection-card-image-wrapper">
                                <img src={product.imageUrls[0]} alt={product.title} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">{product.category.toUpperCase()}</p>
                                <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
                                <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                                    <p><strong>Idea de Diseño:</strong> {suggestion.designIdea}</p>
                                    <p className="mt-1"><strong>Técnica Rec.:</strong> {suggestion.recommendedTechnique}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>,
        printableElement
    );
};

export default PrintableCollection;