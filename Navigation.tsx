import React from 'react';
import { TABS } from '../constants';
import type { Tab } from '../types';

interface NavigationProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="pb-4">
            <div className="flex justify-center items-center text-sm font-medium flex-wrap gap-x-2 sm:gap-x-4">
                {TABS.map((tab, index) => {
                    const isActive = activeTab.id === tab.id;
                    const activeClasses = `font-semibold text-white ${tab.color ? '' : 'border-white'}`;
                    const inactiveClasses = 'text-gray-300 hover:text-white border-transparent';

                    return (
                        <React.Fragment key={tab.id}>
                            {index > 0 && (
                                <span className="text-white/50" aria-hidden="true">|</span>
                            )}
                            <button
                                onClick={() => setActiveTab(tab)}
                                style={isActive && tab.color ? { borderColor: tab.color } : {}}
                                className={`flex-shrink-0 py-2 px-3 sm:px-4 transition-colors duration-200 border-b-2 ${isActive ? activeClasses : inactiveClasses}`}
                            >
                                {tab.label}
                            </button>
                        </React.Fragment>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navigation;