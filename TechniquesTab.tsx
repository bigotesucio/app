

import React, { useState } from 'react';
import { TECHNIQUES, AAFF_SPECIFICATIONS } from '../../constants';
import { getIconForTechniqueTitle } from '../TechniqueIcons';

interface TechniquesTabProps {
    onImageClick: (url: string) => void;
}

const TechniqueDetailCard: React.FC<{ technique: (typeof TECHNIQUES)[0], onImageClick: (url: string) => void }> = ({ technique, onImageClick }) => {
    return (
        <div className="p-4 pt-0">
            <div className="border-t border-gray-300 pt-4 text-sm text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div>
                        <h4 className="font-semibold text-gray-800 border-b-2 border-green-300 pb-1 mb-2">Ventajas</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                            {technique.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 border-b-2 border-red-300 pb-1 mb-2">Limitaciones</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                            {technique.limitations.map((lim, i) => <li key={i}>{lim}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 border-b-2 border-blue-300 pb-1 mb-2">Recomendaciones</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                            {technique.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
                        </ul>
                    </div>
                </div>

                {technique.subTechniques && technique.subTechniques.length > 0 && (
                   <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
                       <h4 className="text-xl font-semibold mb-4 text-black">Tipos de {technique.title}</h4>
                       <div className="space-y-6">
                           {technique.subTechniques.map((subTech) => (
                               <div key={subTech.title} className="p-4 bg-gray-50 border border-gray-200">
                                   <h5 className="font-semibold text-black">{subTech.title}</h5>
                                   <p className="text-xs text-gray-600 mt-1 mb-3">{subTech.description}</p>
                                   <div className="grid grid-cols-2 gap-2">
                                       {subTech.imageUrls.map((url, imgIndex) => (
                                           <button 
                                                key={imgIndex} 
                                                className="aspect-square bg-gray-200 block w-full group overflow-hidden"
                                                onClick={() => onImageClick(url)}
                                                aria-label={`Ampliar imagen de ${subTech.title} ${imgIndex + 1}`}
                                           >
                                                <img 
                                                    src={url} 
                                                    alt={`${subTech.title} ejemplo ${imgIndex + 1}`} 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                           </button>
                                       ))}
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               )}
            </div>
        </div>
    );
};

const AaffTable: React.FC = () => (
    <div className="overflow-x-auto border border-gray-200">
        <table className="min-w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-gray-100">
                <tr>
                    {AAFF_SPECIFICATIONS.headers.map((header, index) => (
                        <th key={index} className="py-3 px-3 font-semibold text-black border-b border-gray-300">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white">
                {AAFF_SPECIFICATIONS.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-gray-200 hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={`py-3 px-3 align-top ${cellIndex === 0 ? 'font-semibold text-black' : ''}`}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


const TechniquesTab: React.FC<TechniquesTabProps> = ({ onImageClick }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative h-screen flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_3.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Guía Visual de Técnicas</h1>
                    <p className="text-gray-200 mt-4">Explora las ventajas, limitaciones y ejemplos de cada técnica para elegir la más adecuada para tu proyecto.</p>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
                        {TECHNIQUES.map((tech, index) => {
                            const isOpen = openIndex === index;
                            const IconComponent = getIconForTechniqueTitle(tech.title);

                            return (
                                <div key={tech.title} className="flex flex-col border-b border-r border-gray-200">
                                    {tech.mainImageUrls.length > 0 && (
                                        <div className="aspect-square overflow-hidden bg-gray-100 group">
                                            <button
                                                onClick={() => onImageClick(tech.mainImageUrls[0])}
                                                className="w-full h-full block"
                                                aria-label={`Ampliar imagen de ${tech.title}`}
                                            >
                                                <img
                                                    src={tech.mainImageUrls[0]}
                                                    alt={`${tech.title} ejemplo principal`}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </button>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full text-left focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="p-4 flex-grow flex flex-col">
                                            <h3 className="text-lg font-semibold text-black flex items-center gap-2">
                                                {IconComponent && <IconComponent className="w-6 h-6 flex-shrink-0 text-gray-700" />}
                                                <span>{tech.title}</span>
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1 flex-grow">{tech.description}</p>
                                            <div className="text-right mt-3">
                                                <span className="inline-block text-xs font-semibold text-black border-b-2 border-[#d9f350]">
                                                    {isOpen ? 'Ocultar detalles' : 'Ver detalles'}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                    
                                    {isOpen && <TechniqueDetailCard technique={tech} onImageClick={onImageClick} />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
             {/* New AAFF Section */}
            <div className="bg-gray-50 py-16 sm:py-24 border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-black">Especificaciones de Archivos (AAFF)</h2>
                         <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Consulta esta tabla para asegurar que tus diseños cumplen con los requisitos técnicos para cada método de personalización y evitar retrasos en la producción.</p>
                    </div>
                    <AaffTable />
                </div>
            </div>
        </section>
    );
};

export default TechniquesTab;