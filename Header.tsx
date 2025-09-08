import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4">
            <Logo />
        </header>
    );
};

export default Header;