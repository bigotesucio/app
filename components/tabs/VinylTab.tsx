
import React from 'react';
import { VINYL_OPTIONS, PRODUCTS } from '../../constants';
import type { Product } from '../../types';
import VinylIllustrations from '../VinylIllustrations';

interface VinylTabProps {
    onProductSelect: (product: Product) => void;
}

const vinylProduct = PRODUCTS.find(p => p.configurator === 'vinyl');

const OptionCard: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-gray-50 border border-gray-200 flex flex-col items-center text-center p-4">
        <div className="w-full aspect-square bg-white border border-gray-200 mb-4 overflow-hidden">
            {children}
        </div>
        <h4 className="font-semibold text-black">{title}</h4>
        {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
);

const VinylTab: React.FC<VinylTabProps> = ({ onProductSelect }) => {
    if (!vinylProduct) {
        return <div className="p-6 text-center text-red-500">No se ha encontrado el producto de vinilo.</div>;
    }

    const handleConfigureClick = () => {
        onProductSelect(vinylProduct);
    };

    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative min-h-[75vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-29.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Fabricación de Vinilos a Medida</h2>
                    <p className="text-gray-200 mt-4 max-w-3xl mx-auto">{vinylProduct.description}</p>
                    <button
                        onClick={handleConfigureClick}
                        className="mt-8 bg-white text-black py-3 px-8 font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Configurar y Presupuestar mi Vinilo
                    </button>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 sm:py-24 px-6 sm:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-black mb-8">El Proceso: De la Pista al Prensado</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="flex flex-col items-center">
                                <svg className="w-12 h-12 text-black mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" /></svg>
                                <h4 className="font-semibold text-lg text-black">1. Master de Audio</h4>
                                <p className="text-sm text-gray-600 mt-1">Preparamos tu audio con un mástering específico para vinilo, optimizando la dinámica y calidez para asegurar la mejor calidad de sonido en el formato analógico.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg className="w-12 h-12 text-black mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                <h4 className="font-semibold text-lg text-black">2. Prensado del Vinilo</h4>
                                <p className="text-sm text-gray-600 mt-1">Transferimos la música a un disco maestro (laca) y, mediante un proceso galvánico, creamos los estampadores que prensarán el PVC para dar vida a tus discos.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg className="w-12 h-12 text-black mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                <h4 className="font-semibold text-lg text-black">3. Impresión y Packaging</h4>
                                <p className="text-sm text-gray-600 mt-1">Diseñamos e imprimimos todos los componentes gráficos: desde las galletas centrales hasta las carpetas, insertos y acabados especiales para una presentación impecable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-300">
                        {/* Formato y Gramaje Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-black mb-6 text-center">1. Elige el Formato</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {VINYL_OPTIONS.sizes.map(size => (
                                    <OptionCard 
                                        key={size.id}
                                        title={size.label}
                                        description={VINYL_OPTIONS.weights[size.id as keyof typeof VINYL_OPTIONS.weights].map(w => w.label).join(' / ')}
                                    >
                                        <VinylIllustrations size={size.id} outerSleeve={`standard-${size.id}`} />
                                    </OptionCard>
                                ))}
                            </div>
                        </div>

                        {/* Colores de Vinilo Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-black mb-6 text-center">2. Personaliza el Color</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                                {VINYL_OPTIONS.colors.map(color => (
                                    <OptionCard 
                                        key={color.id}
                                        title={color.label}
                                        description={`+${color.priceModifier.toFixed(2)}€ / ud.`}
                                    >
                                        {color.imageUrl ? (
                                            <img src={color.imageUrl} alt={color.label} className="w-full h-full object-cover" />
                                        ) : (
                                            <VinylIllustrations size="12" outerSleeve="standard-12" />
                                        )}
                                    </OptionCard>
                                ))}
                            </div>
                        </div>

                        {/* Packaging Section */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-black mb-6 text-center">3. Selecciona el Packaging</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                               <OptionCard 
                                    title="Carpeta Estándar"
                                    description="Impresión a todo color, lomo de 3mm."
                                >
                                    <VinylIllustrations size="12" outerSleeve="standard-12" />
                                </OptionCard>
                                <OptionCard 
                                    title="Carpeta Gatefold"
                                    description="Carpeta desplegable para 1 o 2 vinilos."
                                >
                                    <VinylIllustrations size="12" outerSleeve="gatefold-12" />
                                </OptionCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VinylTab;
