
import React from 'react';

// Centralized icons for all techniques
const iconSvgs = {
    'DTF/DTG': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5"/><path d="M21 13H3"/><path d="M16 13v5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5"/><path d="M12 6V3"/></svg>,
    'Serigrafía': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15H3"/><path d="M19 15V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M15 7V4H9v3"/></svg>,
    'Bordado': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 11v10"/><path d="M16 21H8"/><path d="M18 5H6"/></svg>,
    'Tejido Jacquard': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h18M3 12h18M3 19h18M5 3v18M12 3v18M19 3v18"/></svg>,
    'Sublimación': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    'Prensado': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>,
    'Grabado Láser': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18h12M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    'Vinilo Textil': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M15 2v5h5"/></svg>,
    'Aplicaciones': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.432 0l6.568-6.568a2.426 2.426 0 0 0 0-3.432L12.586 2.586Z"/><circle cx="8.5" cy="8.5" r=".5" fill="currentColor"/></svg>,
    'Todas las disponibles': (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>,
};


export const ICONS: { [key: string]: { node: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode, title: string } } = Object.entries(iconSvgs).reduce((acc, [key, value]) => {
    acc[key] = { node: value, title: key };
    return acc;
}, {} as { [key: string]: { node: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode, title: string } });


export const getIconForTechniqueTitle = (title: string): ((props: React.SVGProps<SVGSVGElement>) => React.ReactNode) | null => {
    if (title.includes('DTG') || title.includes('DTF')) {
        return ICONS['DTF/DTG'].node;
    }
    const iconKey = Object.keys(ICONS).find(key => title.includes(key));
    return iconKey ? ICONS[iconKey].node : null;
};

interface TechniqueIconsProps {
    techniques: string;
}

export const TechniqueIcons: React.FC<TechniqueIconsProps> = ({ techniques }) => {
    const techList = techniques.split(',').map(t => t.trim());

    return (
        <div className="flex flex-wrap items-center gap-4">
            {techList.map(techName => {
                const iconData = ICONS[techName];
                if (iconData) {
                    const IconComponent = iconData.node;
                    return (
                        <div key={iconData.title} className="flex flex-col items-center text-center w-20" title={iconData.title}>
                            <IconComponent className="w-10 h-10" />
                            <span className="text-xs mt-1 text-black">{iconData.title}</span>
                        </div>
                    );
                }
                return null; // Don't render anything if no match is found
            })}
        </div>
    );
};