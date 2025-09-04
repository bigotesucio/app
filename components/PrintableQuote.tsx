import React from 'react';
import ReactDOM from 'react-dom';
import type { QuoteItem } from '../types';
import Logo from './Logo';

interface PrintableQuoteProps {
    quoteItems: QuoteItem[];
    totalBudget: number;
}

const PrintableQuote: React.FC<PrintableQuoteProps> = ({ quoteItems, totalBudget }) => {
    const printableElement = document.getElementById('printable-quote');

    if (!printableElement || quoteItems.length === 0) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="print-quote-page">
            <header className="print-quote-header">
                <div style={{ width: '150px' }}>
                    <Logo />
                </div>
                <div className="text-right">
                    <h1 style={{ fontSize: '24pt', fontWeight: 'bold' }}>Presupuesto</h1>
                    <p style={{ color: '#6b7280' }}>Fecha: {new Date().toLocaleDateString('es-ES')}</p>
                    <p style={{ color: '#6b7280' }}>Ref: {Date.now()}</p>
                </div>
            </header>
            
            <table className="print-quote-table">
                <thead>
                    <tr>
                        <th>Producto / Técnica</th>
                        <th className="text-center">Unidades</th>
                        <th className="text-right">Precio / Ud.</th>
                        <th className="text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {quoteItems.map(item => (
                        <tr key={item.id}>
                            <td>
                                <p style={{ fontWeight: 600 }}>{item.productKey}</p>
                                <p style={{ fontSize: '9pt', color: '#6b7280' }}>{item.techniqueKey}</p>
                            </td>
                            <td className="text-center">{item.units}</td>
                            <td className="text-right">{item.pricePerUnit > 0 ? `${item.pricePerUnit.toFixed(2)}€` : 'N/A'}</td>
                            <td className="text-right" style={{ fontWeight: 600 }}>{item.totalPrice.toFixed(2)}€</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="print-quote-summary">
                 <div className="print-quote-summary-box">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontSize: '12pt', fontWeight: 600 }}>Total Estimado</span>
                        <span style={{ fontSize: '22pt', fontWeight: 700 }}>{totalBudget.toFixed(2)}€</span>
                    </div>
                     <p style={{ textAlign: 'right', fontSize: '9pt', color: '#6b7280', marginTop: '1mm' }}>Impuestos no incluidos.</p>
                </div>
            </div>
            
            <footer className="print-quote-footer">
                <p>Gracias por su interés en Apparell™ 2025®. Este presupuesto es una estimación y está sujeto a cambios.</p>
            </footer>
        </div>,
        printableElement
    );
};

export default PrintableQuote;
