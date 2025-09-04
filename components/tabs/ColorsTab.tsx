
import React from 'react';
import { COLOR_FAMILIES } from '../../constants';

const CategoryIcons: { [key: string]: React.ReactNode } = {
    'Neutros y Básicos': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>,
    'Tonos Tierra': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-4.4-4.1-7.9-4.1-1.4 0-2.8.5-4 1.3"></path><path d="M2 13.3c.2 2.3 2.1 4.4 4.8 5.2 2.7.8 5.5.3 7.5-1.3"></path><path d="M14 6.8c-1.3 1.8-1.8 3.3-1.4 5.2.4 2 2.2 3.3 4.2 3.5"></path></svg>,
    'Azules': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>,
    'Verdes': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17c.9-1.3 2.3-2.3 4-2.8s3.4-.6 5-1.5 2.8-2.3 4.5-4.2c1.8-1.8 4-3.5 6.5-5"></path><path d="M16 13.5c-1.5-1.5-3.5-2-5.5-2s-4 1-5.5 2.5c-1.5 1.5-2 3.5-2 5.5s1 4 2.5 5.5c1.5 1.5 3.5 2 5.5 2s4-1 5.5-2.5"></path></svg>,
    'Amarillos y Naranjas': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>,
    'Rojos, Rosas y Morados': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>,
};

const ColorsTab: React.FC = () => {
    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
             <div className="relative min-h-[60vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_9.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Paleta de Colores</h2>
                    <p className="text-gray-200 mt-4">Explora nuestra gama de colores y descubre en qué productos está disponible cada tono.</p>
                </div>
            </div>
            <div className="bg-white p-6 sm:p-8">
                <div className="mt-8 space-y-12">
                    {COLOR_FAMILIES.map(family => (
                        <div key={family.name}>
                            <h3 className="flex items-center gap-3 text-xl font-semibold text-black mb-6 pb-2 border-b border-gray-300">
                                {CategoryIcons[family.name]}
                                <span>{family.name}</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {family.colors.map(({ color, availableIn }) => (
                                    <div key={color.code} className="flex items-start gap-4">
                                        <div 
                                            className="w-16 h-16 flex-shrink-0 border border-gray-300 shadow"
                                            style={{ backgroundColor: color.hex }}
                                        ></div>
                                        <div className="flex-grow">
                                            <p className="text-black font-semibold tracking-tight">{color.name}</p>
                                            <p className="text-gray-500 text-xs font-mono mb-2">{color.code}</p>
                                            
                                            {availableIn.length > 0 && (
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-800">Disponible en:</p>
                                                    <ul className="text-xs text-gray-600 list-disc pl-4">
                                                        {availableIn.map(productName => <li key={productName}>{productName.replace('CAMISETA MANGA CORTA', 'CAMISETA M. C.')}</li>)}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ColorsTab;
