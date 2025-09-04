
import React, { useState, useCallback } from 'react';
import { TABS } from './constants';
import type { Tab, Product } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomeTab from './components/tabs/HomeTab';
import ServicesTab from './components/tabs/ServicesTab';
import CatalogTab from './components/tabs/CatalogTab';
import PriceComparatorTab from './components/tabs/PriceComparatorTab';
import ColorsTab from './components/tabs/ColorsTab';
import TechniquesTab from './components/tabs/TechniquesTab';
import ProductModal from './components/ProductModal';
import VinylTab from './components/tabs/VinylTab';
import DesignEditorialTab from './components/tabs/DesignEditorialTab';
import BriefingTab from './components/tabs/BriefingTab';
import ImageLightbox from './components/ImageLightbox';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const handleProductSelect = useCallback((product: Product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    }, []);

    const handleImageClick = useCallback((url: string) => {
        setLightboxImage(url);
    }, []);

    const handleCloseLightbox = useCallback(() => {
        setLightboxImage(null);
    }, []);


    const renderActiveTab = () => {
        switch (activeTab.id) {
            case 'inicio':
                return <HomeTab onProductSelect={handleProductSelect} />;
            case 'servicios':
                return <ServicesTab />;
            case 'catalogo':
                return <CatalogTab onProductSelect={handleProductSelect} />;
            case 'precios':
                return <PriceComparatorTab />;
            case 'diseno':
                return <DesignEditorialTab />;
            case 'briefing':
                return <BriefingTab />;
            case 'vinilos':
                return <VinylTab onProductSelect={handleProductSelect} />;
            case 'colores':
                return <ColorsTab />;
            case 'tecnicas':
                return <TechniquesTab onImageClick={handleImageClick} />;
            default:
                return <HomeTab onProductSelect={handleProductSelect} />;
        }
    };

    return (
        <div>
            <Header />
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="p-4 sm:p-6">
                {renderActiveTab()}
            </main>
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={handleCloseModal} 
                    onImageClick={handleImageClick}
                />
            )}
            {lightboxImage && (
                <ImageLightbox imageUrl={lightboxImage} onClose={handleCloseLightbox} />
            )}
        </div>
    );
};

export default App;