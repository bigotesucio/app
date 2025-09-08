

import React from 'react';
import { SERVICES_DATA } from '../../constants';

// Define SVG Icons for each service category
const TechnologyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const EcommerceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.095-.821l1.918-6.406a.98.98 0 00-.564-1.243l-11.655-3.885a.98.98 0 00-1.243.564L4.5 14.25zM7.5 14.25L5.106 5.165M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

const DistributionIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M6 6.75h.75m-3.75 0h.75m-3.75 0h.75M9 6.75h10.5" />
    </svg>
);

const MarketingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
);

const BrandManagerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324l5.584.426a.563.563 0 01.31 1.003l-4.12 3.585a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.12-3.585a.563.563 0 01.31-1.003l5.584-.426a.563.563 0 00.475-.324L11.48 3.5z" />
    </svg>
);


const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    "TECNOLOGÍA": TechnologyIcon,
    "ECOMMERCE": EcommerceIcon,
    "DISTRIBUCIÓN": DistributionIcon,
    "MARKETING": MarketingIcon,
    "BRAND MANAGER": BrandManagerIcon,
};


const ServicesTab: React.FC = () => {
    return (
        <section className="bg-black text-white -mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative h-screen flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_14.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Nuestros Servicios</h1>
                    <p className="text-gray-200 mt-4 max-w-3xl">{SERVICES_DATA.intro}</p>
                </div>
            </div>
            
            {SERVICES_DATA.categories.map((category) => {
                const Icon = iconMap[category.name];
                return (
                    <div key={category.name} className="relative h-screen flex items-center justify-center p-8 overflow-hidden">
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-110"
                            style={{ backgroundImage: `url(${category.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        
                        <div className="relative z-10 w-full max-w-5xl mx-auto text-center fade-in-up">
                            {Icon && <Icon className="w-16 h-16 mx-auto mb-6" />}
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter" style={{ color: category.color }}>{category.name}</h2>
                            
                            {(category.mainDescription || category.secondaryDescription) && (
                                <div className="mt-8 max-w-2xl mx-auto text-lg text-gray-200 space-y-4">
                                    {category.mainDescription && <p>{category.mainDescription}</p>}
                                    {category.secondaryDescription && 
                                        <div className="text-sm text-gray-300 space-y-2 text-left bg-black/30 p-4 rounded-lg">
                                            {category.secondaryDescription.split('•').filter(s => s.trim()).map((item, i) => (
                                                <p key={i}>• {item.trim()}</p>
                                            ))}
                                        </div>
                                    }
                                </div>
                            )}

                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                {category.services.map(service => (
                                    <div key={service.title} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                                        <h3 className="font-semibold text-white text-lg">{service.title}</h3>
                                        <div className="w-1/4 h-px bg-white/50 my-3"></div>
                                        <p className="text-sm text-gray-300">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ServicesTab;