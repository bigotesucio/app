

import React from 'react';

const designPriceData = {
  headers: ['PRODUCTOS', 'COSTE', 'PROPUESTAS', 'MODIFICACIONES', 'NOTAS'],
  rows: [
    ['PACK BÁSICO (1 PRODUCTO)', '200€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['PACK BÁSICO (2 PRODUCTOS)', '400€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['PACK INTERMEDIO (3 PRODUCTOS)', '600€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['PACK INTERMEDIO (5 PRODUCTOS)', '1.000€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['PACK PREMIUM (8 PRODUCTOS)', '1.600€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['PACK SUPER PREMIUM (HASTA 12 PRODUCTOS)', '1.800€', '2 POR PRODUCTO', 'HASTA 2', 'CREATIVIDAD NUEVA'],
    ['MODIFICACIONES ADICIONALES', '60€/h', '-', '-', 'AJUSTES SOBRE PROPUESTA DE DISEÑO'],
    ['ADAPTACIONES DE PRODUCTO (ROPA)', '60€/h', '-', '-', 'ADAPTAR GRAFISMOS'],
    ['ADAPTACIONES DE PRODUCTO (CULTURA)', '60€/h', '-', '-', 'ADAPTAR GRAFISMOS'],
    ['VINILO (BÁSICO)', '600 €', '-', 'HASTA 2', 'PORTADA + VINILO + GALLETA + CONTRAPORTADA'],
    ['VINILO (COMPLETO)', '1.200 €', '-', 'HASTA 2', 'PORTADA + VINILO + GALLETA + CONTRAPORTADA + OTROS'],
    ['DISEÑO LIBRO', '-', '-', 'HASTA 2', ''],
    ['VINILO BASIC', '600 €', '-', '1', 'PORTADA + VINILO + GALLETA + CONTRAPORTADA'],
    ['VINILO PLUS', '2.000 €', '-', '1', 'PORTADA + VINILO + GALLETA + CONTRAPORTADA + OTROS'],
  ]
};

const DesignPriceTable: React.FC<{ data: { headers: string[]; rows: (string | undefined)[][] } }> = ({ data }) => (
    <div className="overflow-x-auto border border-gray-200">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="bg-gray-100">
            {data.headers.map((header, index) => (
              <th key={index} className={`py-3 px-4 font-semibold text-black ${index > 0 ? 'text-center' : ''}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`py-3 px-4 ${cellIndex > 1 ? 'text-center font-mono' : 'font-medium'}`}>
                  {cell || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);


const DesignEditorialTab: React.FC = () => {
    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative h-screen flex items-center justify-center text-center p-8 text-white overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_19.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Diseño y Servicios Editoriales</h1>
                    <p className="text-gray-200 mt-4">Desde la portada de tu próximo disco hasta el diseño completo de un libro, te ofrecemos soluciones creativas para dar vida a tus proyectos.</p>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Tarifas de Servicios de Diseño</h3>
                        <p className="text-gray-600 text-sm mb-4">A continuación se muestran nuestras tarifas de diseño. Los precios no incluyen IVA y están sujetos a cambios según la complejidad del proyecto.</p>
                        <DesignPriceTable data={designPriceData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignEditorialTab;