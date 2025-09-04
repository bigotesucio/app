import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-6">
            <Logo />
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tighter text-black text-right">Catálogo Apparell<br />de Productos y Sevicios<br />2025®.</h1>
        </header>
    );
};

export default Header;