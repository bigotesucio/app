
import React from 'react';
import { SERVICES_DATA } from '../../constants';

// Icon Components
const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
    </svg>
);

const GearsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const MusicNoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);


const SectionTitle: React.FC<{ children: React.ReactNode; className?: string; icon?: React.ReactNode }> = ({ children, className = '', icon }) => (
    <div className={`flex flex-col items-center justify-center gap-4 text-center ${className}`}>
        {icon}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">{children}</h2>
    </div>
);

const ServiceCard: React.FC<{ service: typeof SERVICES_DATA.services[0]; reverse?: boolean }> = ({ service, reverse = false }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className={` ${reverse ? 'md:order-2' : ''}`}>
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-black">{service.name}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2 text-gray-700">
                {service.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className={` ${reverse ? 'md:order-1' : ''}`}>
             <div className="grid grid-cols-1 gap-4">
                 {service.imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`${service.name} ${index + 1}`} className="w-full shadow-lg object-cover aspect-square" />
                 ))}
             </div>
        </div>
    </div>
);


const ServicesTab: React.FC = () => {
    return (
        <section className="bg-white text-gray-800 -mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative min-h-[75vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_17.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <h1 className="relative z-10 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight max-w-4xl fade-in-up">
                    {SERVICES_DATA.intro}
                </h1>
            </div>

            <div className="py-16 sm:py-24 px-6 sm:px-8">
                <SectionTitle icon={<BriefcaseIcon className="w-10 h-10 text-black" />}>
                    <span className="text-black">{SERVICES_DATA.servicesTitle}</span>
                </SectionTitle>
                
                <div className="space-y-20 max-w-6xl mx-auto mt-16">
                    {SERVICES_DATA.services.map((service, index) => <ServiceCard key={service.name} service={service} reverse={index % 2 !== 0} />)}
                </div>
            </div>
            
            <div className="bg-gray-50 py-16 sm:py-24 px-6 sm:px-8 border-t border-gray-300">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle icon={<GearsIcon className="w-10 h-10 text-black" />}>
                        <span className="text-black">{SERVICES_DATA.howWeWorkTitle}</span>
                    </SectionTitle>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-black">
                                <UserGroupIcon className="w-7 h-7" />
                                <span>{SERVICES_DATA.aAndR.title}</span>
                            </h3>
                            <p className="mb-4 text-gray-600">{SERVICES_DATA.aAndR.description}</p>
                            <ul className="text-sm space-y-2 text-gray-700">
                              {SERVICES_DATA.aAndR.points.map((point, i) => (
                                <li key={i} className="flex"><span className="mr-2 font-bold text-black">•</span> {point}</li>
                              ))}
                            </ul>
                        </div>
                        <div>
                            <img src={SERVICES_DATA.aAndR.imageUrl} alt="A&R Illustration" className="w-full shadow-lg aspect-square object-contain bg-gray-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-16 sm:py-24 px-6 sm:px-8 text-white border-t border-gray-300">
                 <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${SERVICES_DATA.timing.backgroundImageUrl})` }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <SectionTitle icon={<CalendarIcon className="w-10 h-10 text-white" />}>
                        <span className="text-white">{SERVICES_DATA.timing.title}</span>
                    </SectionTitle>
                    <div className="mt-16 max-w-lg mx-auto">
                        <ol className="relative border-l border-gray-400">
                            {SERVICES_DATA.timing.steps.map((step, index) => (
                                <li key={step.day} className={`mb-10 ml-8 ${index === SERVICES_DATA.timing.steps.length - 1 ? 'mb-0' : ''}`}>
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-8 ring-white/20">
                                       <CalendarIcon className="w-4 h-4 text-black" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                        Día {step.day}
                                    </h3>
                                    <p className="block text-sm font-normal leading-none text-gray-200">{step.event}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-50 py-16 sm:py-24 px-6 sm:px-8 border-t border-gray-300">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col">
                        <img src={SERVICES_DATA.spotify.imageUrl} alt="Spotify Integration" className="w-full shadow-lg aspect-square object-cover mb-6" />
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-black">
                            <MusicNoteIcon className="w-7 h-7" />
                            <span>{SERVICES_DATA.spotify.title}</span>
                        </h3>
                        <p className="text-gray-600">{SERVICES_DATA.spotify.description}</p>
                    </div>
                     <div className="flex flex-col">
                        <img src={SERVICES_DATA.feats.imageUrl} alt="Apparell Feats" className="w-full shadow-lg aspect-square object-cover mb-6" />
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-black">
                            <LinkIcon className="w-7 h-7" />
                            <span>{SERVICES_DATA.feats.title}</span>
                        </h3>
                        <p className="text-gray-600">{SERVICES_DATA.feats.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesTab;
