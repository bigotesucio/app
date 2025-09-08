

import type { Tab, Product, PricingData, Technique, CarouselSlide, AppColor, VinylStep, VinylFAQ, VinylColorExample, VinylPackagingPriceTier, PriceTier } from './types';

export const TABS: Tab[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo', color: '#EFDE7D' },
    { id: 'colores', label: 'Colores', color: '#EFB86F' },
    { id: 'tecnicas', label: 'Técnicas', color: '#EB7D8B' },
    { id: 'vinilos', label: 'Vinilos', color: '#E0F46C' },
    { id: 'precios', label: 'Comparador', color: '#7FEF97' },
    { id: 'servicios', label: 'Servicios', color: '#85D1F2' },
    { id: 'diseno', label: 'Diseño y Editorial', color: '#85D1F2' },
    { id: 'briefing', label: 'Briefing de Diseño', color: '#85D1F2' },
];

const STANDARD_WASH_INSTRUCTIONS = ['Lavar con colores similares', 'No planchar sobre el estampado', 'Lavar y planchar del revés'];
const STANDARD_CERTIFICATIONS = ['Certificado OEKO TEX®', 'Certificado ORGANIC TEX®', 'Este producto es vegano'];

export const PRODUCTS: Product[] = [
    { id: 1, mainCategory: 'Prendas Personalizables', category: 'Camisetas', title: 'CAMISETA MANGA CORTA', titular: 'Camiseta premium unisex.', frase: 'Cada canción deja huella. Esta camiseta también.', description: 'Nuestra prenda más vendida, ahora personalizable, convierte tu música en algo que se lleva con orgullo. Deja que tus fans escriban su historia contigo, en una pieza que habla de lo que sienten por ti.', sizes: 'XXS - 5XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Relaxed] WEIGHT [180GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://apparell.com/cdn/shop/files/1.jpg?crop=center&height=1860&v=1753961676&width=1860', 'https://apparell.com/cdn/shop/files/arde-bogota-camiseta-logo-rojo-331891.jpg?crop=center&height=1860&v=1753957700&width=1860', 'https://apparell.com/cdn/shop/files/arde-bogota-camiseta-los-perros-4062258.jpg?crop=center&height=1860&v=1754524837&width=1860', 'https://apparell.com/cdn/shop/products/dellafuente-camiseta-1318-643780.jpg?crop=center&height=1280&v=1753958192&width=1280'], pricingKey: 'CAMISETA REGULAR', productUrl: 'https://apparell.com/products/camiseta-manga-corta-premium', availableColors: ['White', 'Off White', 'Vintage White', 'Natural Raw', 'Pool Blue', 'Stone', 'Viva Yellow', 'Lilac Dream', 'Black', 'Fraiche Peche', 'Blue Soul', 'Aqua Blue', 'Desert Dust', 'Green Bay', 'Anthracite', 'Fiesta', 'Nispero', 'Glazed Green', 'Purple Love', 'Ochre', 'India Ink Grey', 'Bubble Pink', 'Spectra Yellow', 'Red Brown', 'Aloe', 'Misty Jade', 'Latte', 'Khaki', 'Heritage Brown', 'Mindful Blue', 'Stargazer', 'Blue Ice', 'Bright Blue', 'Worker Blue', 'French Navy', 'Lavender', 'Red', 'Burgundy', 'Cotton Pink', 'Dark Heather Grey', 'Cool Heather Grey', 'Mid Heather Grey', 'Heather Haze', 'Heather Grey', 'Dark Heather Blue', 'Eco Heather'] },
    { id: 2, mainCategory: 'Prendas Personalizables', category: 'Camisetas', title: 'CAMISETA MANGA CORTA', titular: 'Camiseta de alta calidad.', frase: 'Estilo que se ve, calidad que se siente.', description: 'Define la tendencia con cada detalle. Esta camiseta oversized de 200GSM es la declaración de intenciones del streetwear. Su silueta moderna y su tacto premium la convierten en la pieza clave para colecciones que buscan destacar por su estilo y calidad.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Oversized] WEIGHT [200GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-57.jpg?raw=true'], pricingKey: 'CAMISETA OVERSIZED', productUrl: 'https://apparell.com/products/camiseta-oversized-alta-calidad', availableColors: ['White', 'Natural Raw', 'Cream', 'Pink Joy', 'Dusk', 'Stone', 'Black', 'Khaki', 'French Navy', 'Heather Grey'] },
    { id: 3, mainCategory: 'Prendas Personalizables', category: 'Camisetas', title: 'CAMISETA MANGA LARGA', titular: 'Camiseta de manga unisex.', frase: 'Un clásico para cualquier temporada.', description: 'Con un ajuste cómodo y un gramaje de 240GSM, esta camiseta de manga larga es la prenda de transición perfecta. Funciona sola o como base para superposiciones, llevando tu diseño a un nuevo nivel de estilo.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Relaxed] WEIGHT [240GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Apparell%E2%84%A2_Shooting_Diciembre_RELSB_34.jpg?raw=true'], pricingKey: 'CAMISETA MANGA LARGA', productUrl: 'https://apparell.com/products/camiseta-manga-larga-unisex', availableColors: ['White', 'Natural Raw', 'Cool Heather Grey', 'Heather Grey', 'Heather Haze', 'Black', 'Heritage Brown', 'French Navy', 'Mindful Blue', 'Stargazer'] },
    { id: 4, mainCategory: 'Prendas Personalizables', category: 'Sudaderas', title: 'SUDADERA CON CAPUCHA', titular: 'La sudadera con capucha.', frase: 'El confort se une a tu mensaje.', description: 'Nuestra sudadera con capucha de 350GSM ofrece la calidez y suavidad que tus fans buscan. Su corte relajado la convierte en un básico imprescindible, listo para llevar tu logo o diseño en cualquier situación.', sizes: 'XXS - 5XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Relaxed] WEIGHT [350GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Apparell%E2%84%A2_Shooting_Diciembre_RELSB_7.jpg?raw=true'], pricingKey: 'HOODIE REGULAR', productUrl: 'https://apparell.com/products/sudadera-con-capucha-iconica', availableColors: ['White', 'Off White', 'Vintage White', 'Natural Raw', 'Pool Blue', 'Stone', 'Viva Yellow', 'Lilac Dream', 'Black', 'Fraiche Peche', 'Blue Soul', 'Aqua Blue', 'Desert Dust', 'Green Bay', 'Anthracite', 'Fiesta', 'Nispero', 'Glazed Green', 'Purple Love', 'Ochre', 'India Ink Grey', 'Bubble Pink', 'Spectra Yellow', 'Red Brown', 'Aloe', 'Misty Jade', 'Latte', 'Khaki', 'Heritage Brown', 'Mindful Blue', 'Stargazer', 'Blue Ice', 'Bright Blue', 'Worker Blue', 'French Navy', 'Lavender', 'Red', 'Burgundy', 'Cotton Pink', 'Dark Heather Grey', 'Cool Heather Grey', 'Mid Heather Grey', 'Heather Haze', 'Heather Grey', 'Dark Heather Blue', 'Eco Heather'] },
    { id: 5, mainCategory: 'Prendas Personalizables', category: 'Sudaderas', title: 'SUDADERA CON CAPUCHA', titular: 'Sudadera de corte urbano.', frase: 'Define las reglas del streetwear.', description: 'Actitud y estilo en una sola prenda. Diseñada para quienes marcan la diferencia, esta sudadera oversized de 350GSM es pura tendencia. Su caída perfecta y su tejido de alta calidad son el soporte ideal para los diseños más atrevidos.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Oversized] WEIGHT [350GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-56.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-67.jpg?raw=true'], pricingKey: 'HOODIE OVERSIZED', productUrl: 'https://apparell.com/products/sudadera-oversized-urbana', availableColors: ['White', 'Natural Raw', 'Cream', 'Pink Joy', 'Dusk', 'Stone', 'Black', 'Khaki', 'French Navy', 'Heather Grey'] },
    { id: 6, mainCategory: 'Prendas Personalizables', category: 'Sudaderas', title: 'SUDADERA CON CAPUCHA', titular: 'Sudadera de corte boxy.', frase: 'Calidad superior, impacto máximo.', description: 'Calidad que se siente y se ve. Con un gramaje superior de 400GSM y un corte boxy, esta sudadera redefine el concepto de premium. Su estructura y su tacto seco la convierten en la pieza central de cualquier colección de alta gama.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Extragrande] WEIGHT [400GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-29.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-80.jpg?raw=true'], pricingKey: 'SUDADERA CORTE BOXY', productUrl: 'https://apparell.com/products/sudadera-boxy-premium', availableColors: ['Black', 'Off White', 'Heather Grey', 'Green Bay', 'Stargazer'] },
    { id: 7, mainCategory: 'Prendas Personalizables', category: 'Pantalones', title: 'PANTALÓN CORTO', titular: 'La pantalón corto de deporte.', frase: 'Comodidad y estilo en cada movimiento.', description: 'Este pantalón corto de 300GSM es la combinación perfecta de funcionalidad y estilo. Ideal para colecciones de verano o merchandising deportivo, listo para personalizar con bordados o estampados sutiles.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Medium] WEIGHT [300GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-15.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-62.jpg?raw=true'], pricingKey: 'BERMUDA CORTE REGULAR', productUrl: 'https://apparell.com/products/pantalon-corto-deporte', availableColors: ['Black', 'Heather Grey', 'French Navy'] },
    { id: 8, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'TOTE-BAG', titular: 'El bolso tote de loneta.', frase: 'Lleva tu marca a todas partes.', description: 'Más que un accesorio, es una declaración. Nuestra tote-bag de 300GSM es resistente, práctica y ofrece una superficie de impresión inmejorable para que tu logo acompañe a tus seguidores a todas partes.', sizes: 'One size', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'WEIGHT [300GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://apparell.com/cdn/shop/files/dellafuente-tote-musica-folklorica-atemporal-2176805.jpg?crop=center&height=1860&v=1754027618&width=1860'], pricingKey: 'TOTEBAG', productUrl: 'https://apparell.com/products/tote-bag-loneta', availableColors: ['Natural Raw', 'Black', 'White'] },
    { id: 9, mainCategory: 'Complementos Personalizables', category: 'Gorras', title: 'GORRA 5 PANELES', titular: 'La gorra premium de 5 paneles.', frase: 'Diseño técnico, estilo urbano.', description: 'El toque final para un look perfecto. Esta gorra de 5 paneles, confeccionada en nylon Ripstop, es ligera, transpirable e impermeable. Un accesorio técnico y moderno, ideal para bordar tu logo con la máxima definición.', sizes: 'One size', detailedPoints: ['Banda para el sudor: tejido poliéster Coolmax®', 'Tejido impermeable y transpirable', '5 paneles', 'Cierre ajustable a presión'], washInstructions: [], certifications: [], composition: '100% Nylon (Ripstop)', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://apparell.com/cdn/shop/files/dellafuente-gorra-dllfnt-atemporales-5948681.jpg?crop=center&height=1860&v=1754027737&width=1860'], pricingKey: 'GORRA CONFECCIONADA', productUrl: 'https://apparell.com/products/gorra-5-paneles-ripstop', availableColors: ['Black', 'French Navy', 'Khaki', 'Stone'] },
    { id: 10, mainCategory: 'Complementos Personalizables', category: 'Gorras', title: 'GORRA SNAPBACK', titular: 'Gorra de beisbol de calidad premium.', frase: 'Un icono que habla por ti.', description: 'Un clásico que nunca falla. La gorra snapback es un icono del estilo urbano. La nuestra está fabricada con materiales de primera calidad para garantizar durabilidad y un ajuste perfecto. El frontal es ideal para logos bordados en 3D que destaquen.', sizes: 'One size', detailedPoints: ['Banda para el sudor: tejido poliéster Coolmax®', 'Tejido impermeable y transpirable', '5 paneles', 'Cierre ajustable a presión'], washInstructions: [], certifications: [], composition: '100% Nylon (Ripstop)', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-19.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-69.jpg?raw=true'], pricingKey: 'GORRA CONFECCIONADA', productUrl: 'https://apparell.com/products/gorra-snapback-premium', availableColors: ['Black', 'Dark Heather Grey', 'Khaki', 'Red Brown'] },
    { id: 11, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'BUFANDA TEJIDA HD', titular: 'La bufanda tejida con mejor definición.', frase: 'Tus colores, tu pasión, tu bufanda.', description: 'Tejida en alta definición, esta bufanda permite una nitidez excepcional en logos y diseños complejos. Es el complemento perfecto para eventos deportivos o para que tus fans muestren su orgullo con la máxima calidad.', sizes: '140x20cm+flecos (Adaptamos cualquier medida)', detailedPoints: ['Fleco original blanco. Posibilidad de coser fleco especial de cualquier color.', 'Hasta 7 colores.', 'Impresa por una o dos caras.'], washInstructions: [], certifications: [], composition: 'Acrílico/poliéster tejida en jacquard de alta', specs: '', techniques: 'Tejido Jacquard', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-53.jpg?raw=true', 'https://apparell.com/cdn/shop/files/maka-bufanda-maka-284655.jpg?crop=center&height=1860&v=1753957763&width=1860'], pricingKey: 'BUFANDA TEJIDA', productUrl: 'https://apparell.com/products/bufanda-tejida-hd' },
    { id: 12, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'BANDERA', titular: 'La bandera de poliéster personalizable.', frase: 'Alza tu identidad.', description: 'Ondea tu identidad con orgullo. Fabricada en poliéster de alta resistencia, esta bandera es el soporte ideal para llevar tu escudo, logo o diseño a lo más alto. Perfecta para eventos, decoración o como pieza de colección.', sizes: 'Adaptamos cualquier medida.', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Acrílico/poliéster tejida en jacquard de alta', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-13.jpg?raw=true', 'https://apparell.com/cdn/shop/files/pepevizio-panuelo-el-patio-798930.jpg?crop=center&height=1860&v=1753957897&width=1860'], pricingKey: 'BANDERA ESTAMPADA', productUrl: 'https://apparell.com/products/bandera-personalizable' },
    { id: 13, mainCategory: 'Complementos Personalizables', category: 'Gorros', title: 'GORRO BEANIE', titular: 'Gorro de punto suave y elástico.', frase: 'Calidez y estilo para tus ideas.', description: 'Estilo que abriga. Nuestro gorro beanie de punto suave y elástico es un esencial del invierno. Su diseño versátil lo convierte en el accesorio perfecto para añadir un bordado o una etiqueta.', sizes: 'Adaptamos cualquier medida.', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Punto acrílico/algodón.', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-28.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-64.jpg?raw=true'], pricingKey: 'GORRO ESTILO BEANIE', productUrl: 'https://apparell.com/products/gorro-beanie', availableColors: ['Black', 'Heather Grey', 'French Navy', 'Burgundy', 'Khaki'] },
    { id: 14, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'CALCETINES', titular: 'El calcetín personalizable.', frase: 'Deja huella con cada paso.', description: 'Cómodos, transpirables y listos para ser personalizados. Estos calcetines son el detalle inesperado que completa una colección de merchandising, permitiendo diseños criativos y llenos de color.', sizes: 'Tamaño: S-XL (Adaptable).', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Algodón, Poliéster, Elastano.', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-27.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-57.jpg?raw=true'], pricingKey: 'CALCETINES CONFECCIONADOS', productUrl: 'https://apparell.com/products/calcetines-personalizables', availableColors: ['White', 'Black'] },
    { id: 15, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'LLAVERO', titular: 'El llavero resistente y versátil.', frase: 'El detalle que te acompaña siempre.', description: 'Un objeto pequeño con un gran impacto. Personaliza nuestros llaveros en metal, PVC o acrílico para crear un recuerdo duradero que tus seguidores llevarán siempre consigo.', sizes: 'Tamaño: Adaptable.', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Metal, Goma PVC, Acrílico.', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://apparell.com/cdn/shop/files/dellafuente-llavero-atemporales-4331344.jpg?crop=center&height=1860&v=1754027632&width=1860'], pricingKey: 'LLAVERO', productUrl: 'https://apparell.com/products/llavero-personalizable' },
    { id: 16, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'TAZA', titular: 'La taza de cerámica resistente.', frase: 'El día empieza con tu marca.', description: 'Nuestra taza de cerámica de alta calidad es resistente y ofrece una superficie perfecta para diseños a todo color. Convierte el café de la mañana en un momento único para tus fans.', sizes: 'Tamaño: 11oz (Estándar).', detailedPoints: ['Totalmente personalizable en colores a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Cerámica.', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Taller_20250116--01.jpg?raw=true'], pricingKey: 'TAZA', productUrl: 'https://apparell.com/products/taza-ceramica' },
    { id: 17, mainCategory: 'Complementos Personalizables', category: 'Impresión', title: 'PÓSTER', titular: 'Póster impreso en papel de gramaje superior.', frase: 'Convierte tus paredes en un lienzo.', description: 'Arte que decora paredes. Impreso en papel de alto gramaje, este póster captura cada detalle de tus diseños o fotografías con una calidad excepcional. Una pieza de merchandising clásica que nunca pasa de moda.', sizes: 'Tamaño: Adaptable.', detailedPoints: ['Totalmente personalizable en colores a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Papel couché 200g/m².', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-16.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-72.jpg?raw=true'], pricingKey: 'POSTER', productUrl: 'https://apparell.com/products/poster-impreso' },
    { id: 18, mainCategory: 'Complementos Personalizables', category: 'Música', title: 'VINILO', titular: 'El objeto icónico para coleccionistas.', frase: 'Tu música, inmortalizada.', description: 'El sonido hecho objeto de culto. Ofrecemos prensado de vinilos con la máxima calidad de audio y presentación. Desde el disco hasta la carpeta, cuidamos cada detalle para que tu música se convierta en una pieza de coleccionista.', sizes: '7", 10", 12", Gatefold y Doble Gatefold.', detailedPoints: ['Totalmente personalizable en colores a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Vinilo de alta calidad (140g o 180g).', specs: '', techniques: 'Prensado', imageUrls: ['https://apparell.com/cdn/shop/files/quevedo-buenas-noches-edicion-en-vinilo-580038.png?crop=center&height=1860&v=1753957603&width=1860'], pricingKey: 'VINILO PRENSADO', configurator: 'vinyl' },
    { id: 19, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'BAÑADOR', titular: 'El bañador corto de piscina', frase: 'Sumérgete en tu propio estilo.', description: 'Conquista el verano con tu estilo. Fabricado con tejido de secado rápido y resistente, este bañador es perfecto para diseños vibrantes mediante sublimación. La prenda ideal para que tu marca sea la protagonista de la temporada.', sizes: 'S-XXL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: 'Poliéster y Spandex.', specs: 'FIT [Regular] WEIGHT [180GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-55.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-32.jpg?raw=true', 'https://apparell.com/cdn/shop/files/maka-conjunto-aura-465009.jpg?crop=center&height=1860&v=1753957667&width=1860'], pricingKey: 'BAÑADOR', productUrl: '#' },
    { id: 20, mainCategory: 'Complementos Personalizables', category: 'Accesorios', title: 'JOYERÍA', titular: 'Joyería personalizable de alta calidad.', frase: 'El símbolo que te une a ellos.', description: 'Crea piezas de joyería personalizadas en acero, plata u oro. Graba logos, iniciales o símbolos para ofrecer un artículo exclusivo y de gran valor sentimental que conecte con tu público.', sizes: 'Adaptable', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Acero inoxidable, Plata de ley y Oro.', specs: '', techniques: 'Grabado Láser', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-35.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/050825_CATALOGO_MOVIL_1920X1080PX_FINAL-77.jpg?raw=true'], pricingKey: 'JOYERIA', productUrl: '#' },
    { id: 21, mainCategory: 'Complementos Personalizables', category: 'Hogar', title: 'HOGAR', titular: 'Artículos para el hogar personalizables.', frase: 'Tu marca se convierte en hogar.', description: 'Extiende tu marca más allá del armario con nuestra línea de hogar. Cojines, mantas o toallas personalizadas para que tus seguidores sientan tu identidad en su espacio más personal.', sizes: 'Adaptable', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'Diferentes materiales.', specs: '', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://apparell.com/cdn/shop/files/dellafuente-cojin-te-amo-sin-limites-8166616.jpg?crop=center&height=1860&v=1754027627&width=1860'], pricingKey: 'HOGAR', productUrl: '#' },
    { id: 22, mainCategory: 'Prendas Personalizables', category: 'Confección a medida', title: 'CONFECCIÓN A MEDIDA', titular: 'Servicio de confección a medida.', frase: 'Diseñado por ti, creado por nosotros.', description: 'Si puedes imaginarlo, podemos crearlo. Nuestro servicio de confección a medida te da libertad total. Elige tejidos, patrones y acabados para desarrollar prendas únicas desde cero. Tu visión, hecha realidad sin límites.', sizes: 'Adaptable', detailedPoints: ['Totalmente personalizable en colores y técnicas a partir de una propuesta de diseño.'], washInstructions: [], certifications: [], composition: 'A elección del cliente.', specs: '', techniques: 'Bordado, Aplicaciones', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/DELL-Shooting-Atemporales-33.jpg?raw=true'], pricingKey: 'CONFECCION A MEDIDA', productUrl: '#' }
];

const productImages = PRODUCTS.flatMap(p => p.imageUrls);
const getRandomImages = (count: number) => {
    const shuffled = [...productImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const SERVICES_DATA = {
  intro: "IMPULSAMOS LA EXPERIENCIA CULTURAL GLOBAL A TRAVÉS DE LA INNOVACIÓN, LA TECNOLOGÍA Y EL DESARROLLO DE PRODUCTOS Y MARCAS.",
  categories: [
    {
      name: "TECNOLOGÍA",
      color: "rgb(216 180 254)", // Lilac
      imageUrl: "https://github.com/bigotesucio/catalogo/blob/main/PSD_07%20copia.jpg?raw=true",
      mainDescription: "",
      secondaryDescription: "",
      services: [
        { title: "PORTAL (WEB)", description: "Nuestro entorno digital diseñado para Artistas y Comunidad: entradas, productos, links y todo el universo online del artista unificado en un único lugar. Siempre disponible, con una estabilidad del 99,99%." },
        { title: "DASHBOARD", description: "Desde aquí podrás añadir eventos a tu Portal, consultar analíticas en tiempo real, consultar tu stock y recibir liquidaciones y facturas de forma automática." },
        { title: "SUPERFANS", description: "1 de cada 2 compras de producto son realizadas por los clientes más fieles. Con nuestro potente módulo de Comunidad, tendrás control total sobre los datos de tus fans y dispondrás de herramientas tácticas para potenciar tu comunidad de superfans." },
        { title: "FOR LABELS & TEAMS", description: "Simplificamos la gestión de varios artistas. Ofrecemos a los equipos las herramientas necesarias para gestionar múltiples Portales desde un mismo panel de control." },
        { title: "FACTURACIÓN SIMPLIFICADA", description: "Automatizamos y simplificamos el proceso de facturación. Podrás consultar tus liquidaciones y gastos en nuestro dashboard y cada mes tendrás disponible de forma puntual la liquidación y facturación." },
        { title: "SMARTLINK", description: "Obtén un link personalizado y simplifica tus comunicaciones redirigiendo a tu Comunidad siempre a una misma URL. Analiza las métricas y toma decisiones." },
      ]
    },
    {
      name: "ECOMMERCE",
      color: "rgb(253 164 175)", // Rose
      imageUrl: "https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_21.jpg?raw=true",
      mainDescription: "",
      secondaryDescription: "",
      services: [
        { title: "AUTO RE-STOCK", description: "Evita roturas de stock en tus productos más vendidos. Nos encargaremos de reponerlos de forma automática cuando queden pocas unidades." },
        { title: "PRESALE", description: "Ofrecemos un sistema sólido y eficaz para que puedas ofrecer Preventas a tu Comunidad de forma segura. De esta forma adelantamos ventas y minizamos riesgos." },
        { title: "SPOTIFY STORE", description: "Nos conectamos a tu perfil de artista y mostramos los productos en tu canal oficial. Además, Spotify usa esta información y se la muestra a tus oyentes." },
        { title: "FEATS", description: "Disponemos de la opción de realizar splits de un producto para artículos que pertenecen a diferentes artistas, facilitando la gestión colaborativa y promoviendo la generación de drops exclusivos y colaborativos." },
        { title: "OPTIMIZACIÓN", description: "Incluyendo adaptación de imágenes y copies, para que los productos estén bien presentados, fomentando su adquisición y posicionamiento SEO." },
        { title: "PAGO SEGURO", description: "Incluimos los sistemas más estables y de mayor conversión del mercado, lo que nos permite detectar automáticamente compras fraudulentas y otras estafas." },
      ]
    },
    {
      name: "DISTRIBUCIÓN",
      color: "rgb(134 239 172)", // Green
      imageUrl: "https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_14.jpg?raw=true",
      mainDescription: "",
      secondaryDescription: "",
      services: [
        { title: "FULFILLMENT", description: "Realizamos envíos de forma diaria, durante todo el año, para que los pedidos lleguen a tiempo y en perfecto estado." },
        { title: "ENVÍOS A TODO EL MUNDO", description: "Trabajamos con compañías de reparto internacionales, con envíos rápidos. Asumimos la responsabilidad antifraude para garantizar compras seguras." },
        { title: "CUSTOMER EXPERIENCE", description: "Tenemos un equipo de atención al cliente eficaz dedicado diariamente al cliente final para resolver cualquier duda, incidencia o reclamación." },
        { title: "CAMBIOS Y DEVOLUCIONES", description: "Obligatorias por ley. Realizamos la gestión completa, cumpliendo con la normativa vigente. Nuestro equipo de soporte realiza el proceso de forma eficiente." },
        { title: "ALMACENAMIENTO", description: "Disponemos de instalaciones donde resguardar de forma segura cada producto. Los primeros 3 meses de cada producción son gratis." },
      ]
    },
    {
      name: "MARKETING",
      color: "rgb(147 197 253)", // Blue
      imageUrl: "https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_1.jpg?raw=true",
      mainDescription: "",
      secondaryDescription: "",
      services: [
        { title: "CONTENIDO ECOMMERCE", description: "Ofrecemos el servicio de producción fotográfica y realización de mockups para fomentar que todos los artículos tengan una estética cuidada y profesional." },
        { title: "REPORTES", description: "Análisis de ventas, tráfico y conversión para medir impacto, detectar mejoras y optimizar estrategias, con datos claros y accesibles." },
        { title: "VENTAS CERTIFICADAS", description: "Somos proveedor certificado y las ventas de vinilos o cds que se realizan con nosotros cuentan en las listas oficiales de España." },
        { title: "SEEDING", description: "Ponemos a tu disposición una herramienta para realizar y gestionar seedings que te ayuden a amplificar y potenciar tu marca. Cuida y potencia tu red de contactos." },
        { title: "UX AUTOMATIONS", description: "La experiencia de usuario está optimizada con los sistemas más avanzados para potenciar la recuperación de ventas y aumentar el interés de forma eficiente." },
      ]
    },
    {
      name: "BRAND MANAGER",
      color: "rgb(252 211 77)", // Amber
      imageUrl: "https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_10.jpg?raw=true",
      mainDescription: "Será vuestro punto de contacto directo y de confianza con todo el equipo de Apparell™. Se encargará de la gestión completa, atendiendo cualquier solicitud o incidencia y asegurando que todo el proceso fluya sin problema, garantizando una atención personalizada y resolutiva.",
      secondaryDescription: `
        Nuestros Brand Managers son además, expertos en estrategia artística en la industria musical y te acompañarán para proponer y explorar líneas de trabajo y oportunidades de crecimiento:
        • Diseño y planificación de lanzamientos.
        • Seguimiento personalizado.
        • Coordinación con management & labels.
        • Asesoramiento & insights.
      `,
      services: [
        { title: "ATENCIÓN PERSONALIZADA", description: "Entendemos a cada artista como un universo único que necesita de profundidad para poder desarrollarse bien. Apostamos por una relación de largo recorrido." },
        { title: "GESTIÓN INTEGRAL", description: "Necesitas diseñar un nuevo drop? Fabricar un vinilo? Otros productos? Cuales? Qué cantidad? Y variantes? No te preocupes, nosotros te acompañamos :)" },
        { title: "RESOLUCIÓN DE INCIDENCIAS", description: "Y por mucho que queramos, en algún momento nos equivocaremos :( Estamos dispuestos a asumirlo, aceptarlo y trabajar para que no vuelva a ocurrir." }
      ]
    }
  ]
};

export const PRICING_DATA: PricingData = {
    'CAMISETA REGULAR': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 15.50 }, { range: [50, 99], price: 11.00 }, { range: [100, 499], price: 9.50 }, { range: [500, Infinity], price: 7.50 }],
        'DTF (1 logo espalda)': [{ range: [25, 49], price: 17.00 }, { range: [50, 99], price: 12.50 }, { range: [100, 499], price: 11.00 }, { range: [500, Infinity], price: 9.00 }],
        'DTF (Pecho y espalda)': [{ range: [25, 49], price: 19.50 }, { range: [50, 99], price: 15.00 }, { range: [100, 499], price: 13.50 }, { range: [500, Infinity], price: 11.50 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 14.50 }, { range: [50, 99], price: 10.00 }, { range: [100, 499], price: 8.50 }, { range: [500, Infinity], price: 6.50 }],
        'Serigrafía (2 colores)': [{ range: [25, 49], price: 16.00 }, { range: [50, 99], price: 11.50 }, { range: [100, 499], price: 10.00 }, { range: [500, Infinity], price: 8.00 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 18.00 }, { range: [50, 99], price: 13.50 }, { range: [100, 499], price: 12.00 }, { range: [500, Infinity], price: 10.00 }],
    },
    'CAMISETA OVERSIZED': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 18.50 }, { range: [50, 99], price: 14.00 }, { range: [100, 499], price: 12.50 }, { range: [500, Infinity], price: 10.50 }],
        'DTF (1 logo espalda)': [{ range: [25, 49], price: 20.00 }, { range: [50, 99], price: 15.50 }, { range: [100, 499], price: 14.00 }, { range: [500, Infinity], price: 12.00 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 17.50 }, { range: [50, 99], price: 13.00 }, { range: [100, 499], price: 11.50 }, { range: [500, Infinity], price: 9.50 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 21.00 }, { range: [50, 99], price: 16.50 }, { range: [100, 499], price: 15.00 }, { range: [500, Infinity], price: 13.00 }],
    },
    'CAMISETA MANGA LARGA': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 22.50 }, { range: [50, 99], price: 18.00 }, { range: [100, 499], price: 16.50 }, { range: [500, Infinity], price: 14.50 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 21.50 }, { range: [50, 99], price: 17.00 }, { range: [100, 499], price: 15.50 }, { range: [500, Infinity], price: 13.50 }],
    },
    'HOODIE REGULAR': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 32.50 }, { range: [50, 99], price: 28.00 }, { range: [100, 499], price: 26.50 }, { range: [500, Infinity], price: 24.50 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 31.50 }, { range: [50, 99], price: 27.00 }, { range: [100, 499], price: 25.50 }, { range: [500, Infinity], price: 23.50 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 35.00 }, { range: [50, 99], price: 30.50 }, { range: [100, 499], price: 29.00 }, { range: [500, Infinity], price: 27.00 }],
    },
    'HOODIE OVERSIZED': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 35.50 }, { range: [50, 99], price: 31.00 }, { range: [100, 499], price: 29.50 }, { range: [500, Infinity], price: 27.50 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 34.50 }, { range: [50, 99], price: 30.00 }, { range: [100, 499], price: 28.50 }, { range: [500, Infinity], price: 26.50 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 38.00 }, { range: [50, 99], price: 33.50 }, { range: [100, 499], price: 32.00 }, { range: [500, Infinity], price: 30.00 }],
    },
    'SUDADERA CORTE BOXY': {
        'DTF (1 logo pecho)': [{ range: [25, 49], price: 42.50 }, { range: [50, 99], price: 38.00 }, { range: [100, 499], price: 36.50 }, { range: [500, Infinity], price: 34.50 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 45.00 }, { range: [50, 99], price: 40.50 }, { range: [100, 499], price: 39.00 }, { range: [500, Infinity], price: 37.00 }],
    },
    'BERMUDA CORTE REGULAR': {
        'DTF (Pequeño)': [{ range: [25, 49], price: 25.50 }, { range: [50, 99], price: 21.00 }, { range: [100, 499], price: 19.50 }, { range: [500, Infinity], price: 17.50 }],
        'Bordado (Pequeño)': [{ range: [25, 49], price: 28.00 }, { range: [50, 99], price: 23.50 }, { range: [100, 499], price: 22.00 }, { range: [500, Infinity], price: 20.00 }],
    },
    'TOTEBAG': {
        'DTF': [{ range: [25, 49], price: 12.00 }, { range: [50, 99], price: 8.50 }, { range: [100, 499], price: 7.00 }, { range: [500, Infinity], price: 5.00 }],
        'Serigrafía (1 color)': [{ range: [25, 49], price: 11.00 }, { range: [50, 99], price: 7.50 }, { range: [100, 499], price: 6.00 }, { range: [500, Infinity], price: 4.00 }],
    },
    'GORRA CONFECCIONADA': {
        'Bordado (Plano)': [{ range: [25, 49], price: 18.00 }, { range: [50, 99], price: 14.50 }, { range: [100, 499], price: 13.00 }, { range: [500, Infinity], price: 11.00 }],
        'Bordado (3D)': [{ range: [25, 49], price: 20.00 }, { range: [50, 99], price: 16.50 }, { range: [100, 499], price: 15.00 }, { range: [500, Infinity], price: 13.00 }],
    },
    'BUFANDA TEJIDA': {
        'Jacquard HD': [{ range: [25, 49], price: 16.00 }, { range: [50, 99], price: 12.50 }, { range: [100, 499], price: 11.00 }, { range: [500, Infinity], price: 9.00 }],
    },
    'BANDERA ESTAMPADA': {
        'Sublimación': [{ range: [25, 49], price: 14.00 }, { range: [50, 99], price: 10.50 }, { range: [100, 499], price: 9.00 }, { range: [500, Infinity], price: 7.00 }],
    },
    'GORRO ESTILO BEANIE': {
        'Bordado': [{ range: [25, 49], price: 15.00 }, { range: [50, 99], price: 11.50 }, { range: [100, 499], price: 10.00 }, { range: [500, Infinity], price: 8.00 }],
    },
    'CALCETINES CONFECCIONADOS': {
        'Jacquard': [{ range: [25, 49], price: 10.00 }, { range: [50, 99], price: 7.50 }, { range: [100, 499], price: 6.00 }, { range: [500, Infinity], price: 4.50 }],
    },
    'LLAVERO': {
        'PVC Goma': [{ range: [25, 49], price: 8.00 }, { range: [50, 99], price: 5.50 }, { range: [100, 499], price: 4.00 }, { range: [500, Infinity], price: 2.50 }],
        'Metal': [{ range: [25, 49], price: 12.00 }, { range: [50, 99], price: 9.50 }, { range: [100, 499], price: 8.00 }, { range: [500, Infinity], price: 6.50 }],
    },
    'TAZA': {
        'Sublimación': [{ range: [25, 49], price: 9.00 }, { range: [50, 99], price: 6.50 }, { range: [100, 499], price: 5.00 }, { range: [500, Infinity], price: 3.50 }],
    },
    'POSTER': {
        'Impresión Digital': [{ range: [25, 49], price: 7.00 }, { range: [50, 99], price: 5.00 }, { range: [100, 499], price: 4.00 }, { range: [500, Infinity], price: 3.00 }],
    },
     'VINILO PRENSADO': {
        '12" 140g Negro': [{ range: [100, 199], price: 9.50 }, { range: [200, 299], price: 8.00 }, { range: [300, 499], price: 7.00 }, { range: [500, Infinity], price: 6.00 }],
        '12" 180g Negro': [{ range: [100, 199], price: 10.50 }, { range: [200, 299], price: 9.00 }, { range: [300, 499], price: 8.00 }, { range: [500, Infinity], price: 7.00 }],
        '10" 110g Negro': [{ range: [100, 199], price: 8.50 }, { range: [200, 299], price: 7.00 }, { range: [300, 499], price: 6.00 }, { range: [500, Infinity], price: 5.00 }],
        '7" 42g Negro': [{ range: [100, 199], price: 6.50 }, { range: [200, 299], price: 5.00 }, { range: [300, 499], price: 4.00 }, { range: [500, Infinity], price: 3.00 }],
    },
};

export const TECHNIQUES: Technique[] = [
    {
        title: 'Serigrafía',
        description: 'La serigrafía textil es una técnica de impresión en la que la tinta se transfiere a la prenda a través de una malla o pantalla, utilizando un proceso de estarcido. Se aplica cada color por separado, lo que permite obtener resultados vibrantes y duraderos.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Apparell%E2%84%A2_Shooting_Diciembre_RELSB_12.jpg?raw=true'],
        advantages: [
            "La tinta se adhiere profundamente al tejido, soportando múltiples lavados sin perder color, gran durabilidad y resistencia.",
            "Permite imprimir colores planos con gran fidelidad (Pantone) y acabado profesional.",
            "Aplicable a diversos materiales: en algodón, poliéster, mezclas sintéticas y tejidos técnicos.",
            "Variedad de tintas y efectos especiales."
        ],
        limitations: [
            "No es ideal para imágenes con muchos colores o degradados (aunque técnicas avanzadas como la serigrafía cuatricromía lo permiten).",
            "Algunas tintas no se adhieren bien en tejidos 100% sintéticos sin tratamiento previo.",
            "No es rentable en tiradas pequeñas. La preparación de pantallas requiere tiempo y materiales, lo que encarece pedidos de pocas unidades."
        ],
        recommendations: [
            "Usa colores planos y evita los degradados, ya que cada color requiere una pantalla diferente.",
            "Si necesitas degradados, usa tramas de semitonos para simular el efecto.",
            "Evitar sombras muy suaves o efectos de transparencia, ya que no se imprimen bien."
        ],
        subTechniques: [
            { title: 'En Cuatricomía', description: 'Permite reproducir imágenes multicolores mediante la combinación de cuatro tintas: cian, magenta, amarillo y negro (CMYK). Cada color se aplica por separado utilizando una pantalla distinta, y la superposición de estas tintas genera una amplia gama de colores en la prenda.', imageUrls: getRandomImages(2) },
            { title: 'Tinta Descarga', description: 'Técnica que permite obtener diseños de alto contraste en prendas oscuras. Utiliza agentes químicos que eliminan el tinte original de la tela, revelando el color natural del tejido o permitiendo la aplicación de nuevos colores. Solo es efectiva en prendas de algodón.', imageUrls: getRandomImages(2) },
            { title: 'Puff', description: 'Aporta volumen y textura a los diseños. Utiliza tintas especiales que se expanden con el calor durante el curado, creando un relieve notable. Se recomienda para diseños con líneas gruesas.', imageUrls: getRandomImages(2) },
            { title: 'Alta Densidad', description: 'Crea diseños en relieve con bordes nítidos y detalles precisos. Las tintas se aplican en capas sucesivas, acumulando material para formar un volumen uniforme y definido, resultando en un acabado tridimensional.', imageUrls: getRandomImages(2) },
            { title: 'Crackelada', description: 'Crea un acabado envejecido y desgastado. Se logra mediante tintas especiales que, al curarse, se agrietan, formando una red de grietas que simulan el paso del tiempo. Puede alterar detalles finos.', imageUrls: getRandomImages(2) },
            { title: 'Con Lejia', description: 'Crea un acabado quemado y desgastado mediante agentes químicos que eliminan o queman el tinte original de la tela en áreas específicas, revelando nuevos colores.', imageUrls: getRandomImages(2) },
            { title: 'Foil', description: 'Permite aplicar una lámina metálica sobre el tejido para un acabado brillante y reflectante. Se aplica un adhesivo serigráfico sobre el que se fija la lámina con calor y presión. Disponible en tonos metálicos, holográficos, mates y texturizados.', imageUrls: getRandomImages(2) },
            { title: 'Tinta Flúor', description: 'Tinta especial que brilla bajo la luz UV, generando un gran impacto visual. Puede apagar un poco la tonalidad de color del diseño original.', imageUrls: getRandomImages(2) },
            { title: 'Tinta Reflectante', description: 'Contiene microesferas que devuelven la luz, generando alta visibilidad en condiciones de poca luz. Muy útil en ropa deportiva y laboral.', imageUrls: getRandomImages(2) },
            { title: 'Tinta Termocrómica', description: 'Tinta que cambia de color al entrar en contacto con el calor, proporcionando un efecto sorprendente. Requiere una aplicación compleja y tiene una durabilidad menor.', imageUrls: getRandomImages(2) },
        ]
    },
    {
        title: 'DTG',
        description: 'El DTG (Direct to Garment) es una técnica de impresión directa sobre textiles que utiliza impresoras especiales con tintas base agua para lograr diseños a todo color con gran detalle. Es una técnica ideal para personalizar prendas de algodón, ya que la tinta se absorbe en las fibras del tejido, ofreciendo un acabado suave y transpirable.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller-54.jpg?raw=true'],
        advantages: ["Tiene un acabado más suave y transpirable, ideal para diseños grandes con poco aire.", "Es la técnica que mejor funciona para trabajar con fotografías.", "Más cómodo que el DTF o el vinilo textil que dejan una capa sobre la prenda.", "Permite imprimir imágenes con degradados, detalles finos y colores vivos."],
        limitations: ["Es una de las técnicas más costosas económicamente.", "No se puede utilizar en tejidos que no sea algodón.", "Degradados y brillos muy problemáticos sobre prendas oscuras."],
        recommendations: ["Para diseños grandes o fotos en prendas oscuras también viene bien incluir zonas de tramado."],
        subTechniques: [
            { title: 'DTG Estándar', description: 'Impresión directa a todo color sobre la prenda, ideal para fotografías y diseños complejos en prendas de algodón.', imageUrls: getRandomImages(2) },
            { title: 'DTG 3D', description: 'Una variante que utiliza una base especial para crear un ligero relieve antes de la impresión, aportando una textura tridimensional al diseño final.', imageUrls: getRandomImages(2) }
        ]
    },
    {
        title: 'DTF',
        description: 'El DTF (Direct to Film) consiste en imprimir un diseño sobre un film especial, para posteriormente, aplicarle polvo adhesivo y transferirlo a la prenda mediante calor y presión.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller-52.jpg?raw=true'],
        advantages: ["Compatible con múltiples tejidos: algodón, poliéster, lycra, nylon, cuero sintético y más.", "Permite imprimir imágenes con degradados, detalles finos y colores vivos.", "Posibilidad de aplicar en zonas más complejas para otras técnicas, como mangas o bolsillos."],
        limitations: ["Acabado menos transpirable ya que la capa de tinta y adhesivo crea una película sobre la prenda.", "Diseños planos y grandes generan una sensación muy plástica al tacto.", "Degradados y brillos exteriores son muy problemáticos sobre prendas oscuras."],
        recommendations: ["Para diseños grandes o fotos: aplicar tramados y ajustar tamaño para disminuir la sensación de plástico.", "Diseños solo con tinta blanca: al no utilizar el color sobre blanco, cualquier detalle, por mínimo que sea, se ve muy bien.", "Letras y diseños finos quedan bien."],
        subTechniques: [
            { title: 'Buena Praxis', description: 'Ejemplos de aplicaciones correctas de DTF, utilizando tramados, aireado y detalles finos para lograr un acabado de alta calidad y minimizar el tacto plástico.', imageUrls: getRandomImages(2) },
            { title: 'Mala Praxis', description: 'Ejemplos de lo que se debe evitar: diseños planos a gran tamaño y con poco tramado que generan una sensación plástica y poco transpirable en la prenda.', imageUrls: getRandomImages(2) }
        ]
    },
    {
        title: 'Bordado',
        description: 'El bordado es una técnica de personalización textil que consiste en coser hilos sobre una tela para formar un diseño, ya sea a mano o mediante máquinas especializadas. Es la técnica más duradera y elegante.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller--14%20copia.jpg?raw=true'],
        advantages: ["Acabado premium y elegante, que aporta aspecto profesional y de alta calidad.", "Se percibe como una personalización más exclusiva en comparación con la impresión.", "Compatible con diversos tejidos: algodón, poliéster, denim, cuero sintético, toallas y más.", "Funciona bien en tejidos gruesos donde otras técnicas pueden fallar."],
        limitations: ["No funciona con diseños complejos o con muchos colores.", "Los degradados, sombras y detalles muy finos no se pueden lograr con precisión.", "Limitaciones en tamaños grandes en prendas con poco gramaje, ya que el peso del hilo puede hacer que la prenda pierda flexibilidad e incluso deformar la caída."],
        recommendations: ["Funciona mejor con logotipos, textos y diseños sencillos sin mucha cantidad de detalle."],
        subTechniques: [
            { title: 'Bordado Plano', description: 'La forma más tradicional. Se realiza cosiendo puntadas directamente sobre la tela sin generar volumen. Ideal para logotipos, iniciales y diseños detallados.', imageUrls: getRandomImages(2) },
            { title: 'Bordado en 3D', description: 'Utiliza una espuma especial colocada debajo del hilo para levantar el diseño y crear un efecto tridimensional. Común en gorras y sudaderas para un acabado con volumen.', imageUrls: getRandomImages(2) },
            { title: 'Bordado Chenille', description: 'Utiliza un hilo grueso y esponjoso que crea un efecto de felpa, toalla o lana. Muy común en chaquetas varsity y sudaderas para un acabado voluminoso y suave.', imageUrls: getRandomImages(2) },
            { title: 'Apliques', description: 'Se utilizan piezas de tela cortadas que se fijan a la prenda mediante puntadas decorativas. Permite crear diseños de gran tamaño con menos puntadas, reduciendo tiempo y peso.', imageUrls: getRandomImages(2) },
            { title: 'Sashiko', description: 'Técnica de bordado tradicional japonesa con puntadas decorativas en patrones geométricos repetitivos. Su nombre significa "pequeñas puntadas" y se originó para reforzar y reparar textiles.', imageUrls: getRandomImages(2) },
            { title: 'Lentejuelas', description: 'Incorpora lentejuelas cosidas con hilo para generar un efecto brillante y llamativo. Muy utilizada en moda femenina, ropa de fiesta y vestuarios de espectáculo.', imageUrls: getRandomImages(2) },
            { title: 'Cuentas o Perlas', description: 'Incorpora cuentas, perlas o abalorios cosidos a la tela para aportar textura y elegancia. Se usa en prendas de alta costura, vestidos de gala y trajes tradicionales.', imageUrls: getRandomImages(2) },
        ]
    },
    {
        title: 'Vinilo Textil',
        description: 'El vinilo textil es un material termoadhesivo utilizado para personalizar prendas mediante calor y presión. Se compone de una lámina fina de PVC o poliuretano (PU) que se corta en el diseño deseado y se transfiere a la tela con una plancha térmica.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-08.jpg?raw=true'],
        advantages: ["Ideal para producciones pequeñas o personalizadas.", "Es compatible con diferentes tipos de tejidos (algodón, poliéster, mezclas, etc.).", "Disponible en colores sólidos, metálicos, flocados, holográficos, reflectantes, glitter, y más."],
        limitations: ["No es apto para diseños con muchos colores si se usa vinilo de corte, ya que cada color depende de un corte.", "Menos transpirabilidad, ya que crea una capa plástica sobre la tela.", "No es adecuado para gráficos con muchos detalles finos, ya que el corte y pelado pueden ser complicados."],
        recommendations: ["Especialmente recomendado para logos y letras.", "Evitar detalles muy finos o intrincados, ya que el corte y el pelado (weeding) del vinilo pueden ser difíciles."],
        subTechniques: [
            { title: 'De Corte', description: 'El vinilo más común. Se presenta en colores planos y se corta con un plóter para luego transferirse a la prenda. No permite degradados ni detalles muy pequeños.', imageUrls: getRandomImages(2) },
            { title: 'De Impresión y Corte', description: 'Primero se imprime el diseño sobre un vinilo y posteriormente se recorta el contorno. Permite imágenes a todo color, degradados y detalles más complejos. Uso principal en prenda deportiva.', imageUrls: getRandomImages(2) },
            { title: 'Corte Flock', description: 'Acabado suave y afelpado, similar al terciopele. Se usa en diseños que buscan un efecto premium o vintage, como logotipos en sudaderas y uniformes.', imageUrls: getRandomImages(2) },
            { title: 'Corte Reflectante', description: 'Posee una superficie con partículas reflectantes que brillan con la luz directa, proporcionando alta visibilidad en condiciones de poca luz.', imageUrls: getRandomImages(2) },
            { title: 'Corte Metalizado', description: 'Tiene un acabado metálico, simulando el efecto del oro, plata, cobre u otros colores. Se utiliza en ropa de moda y prendas premium.', imageUrls: getRandomImages(2) },
            { title: 'Glow in the Dark', description: 'Absorbe la luz y brilla en la oscuridad, creando un efecto llamativo.', imageUrls: getRandomImages(2) },
            { title: 'Holográfico', description: 'Refleja la luz con un efecto iridiscente y de arcoíris, creando un diseño dinámico y llamativo.', imageUrls: getRandomImages(2) },
            { title: 'Efecto Relieve', description: 'Formado por un material grueso (600 a 1000 micras) de poliuretano (PU) que crea un relieve notable al aplicarse.', imageUrls: getRandomImages(2) },
            { title: '3D / Puff', description: 'Tiene un acabado en relieve, expandiéndose cuando se aplica calor. Acabado con volumen en 3D, similar a la serigrafía puff pero disponible en más colores, como neón y metalizados.', imageUrls: getRandomImages(2) },
        ]
    },
    {
        title: 'Aplicaciones',
        description: 'Las aplicaciones textiles son elementos decorativos o funcionales que se añaden a una prenda para mejorar su estética, reforzar su diseño o aportar características especiales. Se adhieren mediante cosido, termoaplicación, pegado o prensado.',
        mainImageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller-05%20copia.jpg?raw=true'],
        advantages: ["Permiten una gran variedad de diseños, texturas y acabados.", "Algunas técnicas (parches bordados, silicona) ofrecen gran resistencia al lavado y al desgaste.", "Se pueden aplicar en diferentes tipos de prendas y materiales.", "Mejoran la percepción de calidad de la prenda, especialmente con relieve o metálicas."],
        limitations: ["Costo elevado en algunos casos.", "Tiempo de producción: Algunos procesos requieren múltiples pasos y un tiempo de curado.", "Posibles limitaciones en diseños complejos o restricciones en detalles finos.", "Dependiendo del tipo, algunos pueden deteriorarse si no se siguen las instrucciones de cuidado."],
        recommendations: ["Evitar diseños con detalles extremadamente pequeños en aplicaciones con volumen. Es mejor optar por trazos gruesos y sólidos."],
        subTechniques: [
            { title: 'Heat Transfer Label (HTL)', description: 'Etiquetas de transferencia térmica que se aplican con calor y presión. Pueden tener diferentes texturas y acabados, desde etiquetas interiores hasta logotipos externos.', imageUrls: getRandomImages(2) },
            { title: 'TPU', description: 'Parches de poliuretano termoplástico, un material flexible, duradero y resistente. Tienen gran variedad de acabados y efecto 3D, muy usados para escudos deportivos y logos.', imageUrls: getRandomImages(2) },
            { title: 'Rubber Patches (Parches de Goma)', description: 'Aplicaciones fabricadas en PVC o silicona con diseño en relieve. Son robustos y ofrecen una textura tridimensional. Se adhieren mediante velcro o puntadas.', imageUrls: getRandomImages(2) },
            { title: 'Woven Labels (Etiquetas Tejidas)', description: 'Etiquetas de alta calidad producidas con hilos entrelazados que crean un diseño detallado y duradero. Se utilizan para identificación de marca o para subir de nivel ciertas prendas.', imageUrls: getRandomImages(2) },
            { title: 'Parche Bordado', description: 'El diseño se borda sobre una base de tela y luego se recorta. Se puede aplicar mediante costura, adhesivo térmico o velcro.', imageUrls: getRandomImages(2) },
            { title: 'Parche Flock', description: 'Parches con acabado aterciopelado, logrados mediante la adhesión de microfibras sintéticas. Proporcionan una sensación premium y un efecto visual elegante.', imageUrls: getRandomImages(2) },
            { title: 'Etiquetas Lenticulares', description: 'Etiquetas con efecto tridimensional o de movimiento, creadas con una lámina lenticular que cambia de apariencia según el ángulo de visión.', imageUrls: getRandomImages(2) },
            { title: 'Parche de Cuero', description: 'Parches con acabado en cuero o imitación. Se pueden realizar con diferentes especificaciones y acabados. Muy utilizados en prendas vaqueras y accesorios premium.', imageUrls: getRandomImages(2) },
        ]
    }
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
    { number: '01', title: 'Tu Visión, Nuestro Lienzo', text: 'Desde la idea inicial hasta el producto final, te acompañamos en cada paso para transformar tu visión en merchandising de alta calidad que conecte con tu audiencia.', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_1.jpg?raw=true' },
    { number: '02', title: 'Calidad que se Siente', text: 'Seleccionamos cuidadosamente cada prenda y material, priorizando el algodón orgánico y los tejidos premium para garantizar un producto final que tus fans amarán llevar.', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_2.jpg?raw=true' },
    { number: '03', title: 'Innovación en Cada Detalle', text: 'Exploramos constantemente nuevas técnicas y acabados para ofrecerte opciones únicas. Desde bordados 3D hasta serigrafía con relieve, llevamos tus diseños al siguiente nivel.', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_3.jpg?raw=true' },
    { number: '04', title: 'Más Allá de la Ropa', text: 'Creamos experiencias. Desarrollamos desde vinilos de coleccionista hasta accesorios únicos, construyendo un universo tangible alrededor de tu marca o proyecto artístico.', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_4.jpg?raw=true' },
];

const RAW_COLORS: { [key: string]: string } = {
    'White': '#FFFFFF', 'Off White': '#F7F4EC', 'Vintage White': '#EFEBE1', 'Natural Raw': '#E8E0D4',
    'Pool Blue': '#A7D7E0', 'Stone': '#D8D8D8', 'Viva Yellow': '#F9E457', 'Lilac Dream': '#D6C8E0',
    'Black': '#212121', 'Fraiche Peche': '#F8C8A5', 'Blue Soul': '#87A9C4', 'Aqua Blue': '#64B5D4',
    'Desert Dust': '#E1C4A9', 'Green Bay': '#8DB6A4', 'Anthracite': '#58595B', 'Fiesta': '#F26C4F',
    'Nispero': '#F7B55A', 'Glazed Green': '#63B49C', 'Purple Love': '#A879A5', 'Ochre': '#C68E4D',
    'India Ink Grey': '#3C3F4C', 'Bubble Pink': '#F3A7C4', 'Spectra Yellow': '#F5D64C', 'Red Brown': '#8E4B3A',
    'Aloe': '#A4B598', 'Misty Jade': '#B3D0C2', 'Latte': '#D2B48C', 'Khaki': '#8A7A66',
    'Heritage Brown': '#704F4F', 'Mindful Blue': '#6A8D9F', 'Stargazer': '#3C4D5A', 'Blue Ice': '#C0D5E0',

    'Bright Blue': '#00AEEF', 'Worker Blue': '#3A5C8E', 'French Navy': '#3A4858', 'Lavender': '#B2A9BE',
    'Red': '#D82E2F', 'Burgundy': '#7D2A3B', 'Cotton Pink': '#F5D5E2', 'Dark Heather Grey': '#616365',
    'Cool Heather Grey': '#BFC1C2', 'Mid Heather Grey': '#A7A9AC', 'Heather Haze': '#D2D3D5', 'Heather Grey': '#C8CACC',
    'Dark Heather Blue': '#536578', 'Eco Heather': '#D1D3D4',
    'Cream': '#F0EAD6', 'Pink Joy': '#F0A3C1', 'Dusk': '#A1A9B6',
};

export const ALL_COLORS: AppColor[] = Object.entries(RAW_COLORS).map(([name, hex]) => ({
    name,
    code: name.toUpperCase().replace(/\s+/g, '_'),
    hex
}));

export const COLOR_FAMILIES = [
    {
        name: 'Neutros y Básicos',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'White')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'TOTE-BAG', 'CALCETINES'] },
            { color: ALL_COLORS.find(c => c.name === 'Off White')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Vintage White')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Natural Raw')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'TOTE-BAG'] },
            { color: ALL_COLORS.find(c => c.name === 'Black')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'PANTALÓN CORTO', 'TOTE-BAG', 'GORRA 5 PANELES', 'GORRA SNAPBACK', 'GORRO BEANIE', 'CALCETINES'] },
            { color: ALL_COLORS.find(c => c.name === 'Anthracite')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'India Ink Grey')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Dark Heather Grey')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'GORRA SNAPBACK'] },
            { color: ALL_COLORS.find(c => c.name === 'Cool Heather Grey')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Mid Heather Grey')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Heather Haze')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Heather Grey')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'PANTALÓN CORTO', 'GORRO BEANIE'] },
            { color: ALL_COLORS.find(c => c.name === 'Eco Heather')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] }
        ]
    },
    {
        name: 'Tonos Tierra',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'Stone')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'GORRA 5 PANELES'] },
            { color: ALL_COLORS.find(c => c.name === 'Cream')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Latte')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Desert Dust')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Khaki')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'GORRA 5 PANELES', 'GORRA SNAPBACK', 'GORRO BEANIE'] },
            { color: ALL_COLORS.find(c => c.name === 'Ochre')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Red Brown')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'GORRA SNAPBACK'] },
            { color: ALL_COLORS.find(c => c.name === 'Heritage Brown')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA'] }
        ]
    },
    {
        name: 'Azules',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'Pool Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Blue Soul')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Aqua Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Blue Ice')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Mindful Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Bright Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Worker Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Dark Heather Blue')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Stargazer')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'French Navy')!, availableIn: ['CAMISETA MANGA CORTA', 'CAMISETA MANGA CORTA', 'CAMISETA MANGA LARGA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA', 'PANTALÓN CORTO', 'GORRA 5 PANELES', 'GORRO BEANIE'] }
        ]
    },
    {
        name: 'Verdes',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'Green Bay')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Glazed Green')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Aloe')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Misty Jade')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] }
        ]
    },
    {
        name: 'Amarillos y Naranjas',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'Viva Yellow')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Spectra Yellow')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Fraiche Peche')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Nispero')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Fiesta')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] }
        ]
    },
    {
        name: 'Rojos, Rosas y Morados',
        colors: [
            { color: ALL_COLORS.find(c => c.name === 'Red')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Burgundy')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA', 'GORRO BEANIE'] },
            { color: ALL_COLORS.find(c => c.name === 'Cotton Pink')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Bubble Pink')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Pink Joy')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Lilac Dream')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Lavender')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Purple Love')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] },
            { color: ALL_COLORS.find(c => c.name === 'Dusk')!, availableIn: ['CAMISETA MANGA CORTA', 'SUDADERA CON CAPUCHA'] }
        ]
    }
];

export const AAFF_SPECIFICATIONS = {
    headers: ["Formato", "Resolución", "Tamaño máximo aplicación", "Tamaño máximo etiqueta", "Color", "Limitaciones", "Recomendado", "No Recomendado", "Precio", "Recomendaciones"],
    rows: [
        ["DTF", "PNG sin fondo", "300ppp", "37x47cm", "7x5cm", "CYMK", "Degradados y brillos muy problemáticos en sobre prendas oscuras", "Cualquier textil con al menos 180GSM. Diseños con tramados", "Fotos y diseños grandes con mucha masa de tinta", "€€", "Enviar diseño a tamaño real. Hacer siempre una muestra y trabajar con tiempo"],
        ["DTG", "PNG sin fondo", "300ppp", "37x47cm", "-", "RGB", "Degradados y brillos muy problemáticos en sobre prendas oscuras", "Imprimir fotos o diseños con muchos colores y mucha masa de tinta", "Diseños en tintas planas", "€€€", "Enviar diseño a tamaño real. Hacer siempre una muestra y trabajar con tiempo"],
        ["Serigrafía", "PSD (cada color en una capa)", "300ppp", "37x47cm", "7x5cm", "Pantone", "Tintas planas", "Diseños a una o dos tintas", "Fotos o diseños muy realistas", "€€", "Enviar diseño a tamaño real. Hacer siempre una muestra y trabajar con tiempo"],
        ["Bordado", "PDF Editable (cada color en una capa)", "300ppp", "-", "-", "Pantone / Carta de hilo", "El diseño no puede ser demasiado complejo", "Sudaderas o tejidos de alto gramaje", "Prendas muy finas o diseños muy complejos", "€€€€", "Enviar diseño a tamaño real. Hacer siempre una muestra y trabajar con tiempo"],
        ["Sublimación Tazas", "PNG sin fondo", "300ppp", "20,7x8,5cm", "-", "CYMK", "Tazas con recubrimiento de poliamida", "Diseños a todo color", "Imágenes rectangulares con fondo", "€", "Enviar diseño a tamaño real. No hacer diseños demasiado pegados al borde"],
        ["Sublimación iPhone case", "PNG sin fondo", "300ppp", "-", "-", "CYMK", "Modelos disponibles", "Diseños a todo color", "-", "€", "Enviar diseño a tamaño real. No hacer diseños demasiado pegados al borde"],
        ["Vinilo textil", "EPS Versión 8", "300ppp", "50cm de ancho", "-", "Catálogo Siser", "Colores planos. Los diseños no pueden tener excesivo detalle", "Detalles pequeños tipo logo", "Diseños complejos o muy grandes", "€€", "Enviar diseño a tamaño real. Revisar las diferentes opciones de textura"],
        ["Póster", "PDF", "300ppp", "A2 (recomendado)", "-", "CYMK", "Ninguna", "Cualquier tipo de imagen", "-", "€", "Dejar un sangrado de 5mm sin textos"],
        ["Confección", "PDF Editable", "300ppp", "-", "-", "Pantone", "Depende del producto", "Productos especiales y de alta calidad", "Fabricaciones express", "€€€€€", "Hacer siempre una muestra y trabajar con tiempo"]
    ]
};

// VINYL PAGE CONSTANTS

export const VINYL_PRODUCT_INFO = {
    description: "El sonido hecho objeto de culto. Ofrecemos prensado de vinilos con la máxima calidad de audio y presentación. Desde el disco hasta la carpeta, cuidamos cada detalle para que tu música se convierta en una pieza de coleccionista."
};

export const VINYL_STEP_BY_STEP_GUIDE: VinylStep[] = [
    { step: 1, title: 'Recepción y Revisión de Archivos', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3', description: 'El primer paso es asegurar que todos los materiales que nos envías son correctos para la fabricación.', points: [{ title: 'Audio (Master)', content: 'Aceptamos archivos WAV o AIFF a 24bit y con la frecuencia de muestreo original. Es crucial que el audio esté masterizado específicamente para vinilo.' }, { title: 'Artes Gráficas (Artwork)', content: 'Necesitamos los diseños en formato PDF, a 300ppp, en modo de color CMYK y con 3mm de sangrado.' }, { title: 'Documentación', content: 'Te pediremos que completes la hoja de cues y el formulario de derechos de autor (SGAE o similar).' }] },
    { step: 2, title: 'Corte del Máster y Galvánicos', icon: 'M14.5 17.5L3 6V3h3l11.5 14.5M18 13l-1.5 1.5M15 16l-1.5 1.5M12 19l-1.5 1.5', description: 'Aquí es donde tu audio digital se transfiere a un formato físico para crear los moldes.', points: [{ title: 'Corte del Laca (Lacquer)', content: 'Un ingeniero de corte transfiere tu audio a un disco maestro de laca, optimizando el sonido para el formato.' }, { title: 'Test Pressing (Opcional)', content: 'Creamos de 5 a 10 copias de prueba para que apruebes la calidad del sonido antes de la producción en masa.' }, { title: 'Proceso Galvánico', content: 'A partir del máster de laca, se crea un negativo metálico (padre) y luego los moldes positivos (estampadores) que se usarán en la prensa.' }] },
    { step: 3, title: 'Prensado de los Discos', icon: 'M12 12c-2.4 0-4.7.7-6.8 2.1M12 12c2.4 0 4.7.7 6.8 2.1M12 12v6.8M5.2 14.1A6.8 6.8 0 0 0 12 20.8a6.8 6.8 0 0 0 6.8-6.8M5.2 14.1C3.1 11.9 3.1 8.2 5.2 6.1s5.6-2.1 7.6 0', description: 'La magia ocurre en la prensa, donde cada uno de tus discos cobra vida.', points: [{ title: 'Mezcla de PVC', content: 'Se calienta una "galleta" de PVC del color que hayas elegido a la temperatura adecuada.' }, { title: 'Prensado', content: 'Los estampadores se montan en la prensa. La galleta de PVC se coloca entre ellos junto con las galletas (labels) y se aplica presión hidráulica, grabando los surcos en el vinilo.' }, { title: 'Enfriamiento y Acabado', content: 'El disco se enfría rápidamente para mantener su forma y se recorta el borde sobrante.' }] },
    { step: 4, title: 'Impresión y Embalaje', icon: 'M15.5 2.5l5 5M15.5 2.5h-9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.5', description: 'El último paso es vestir tu disco con su arte y prepararlo para el mundo.', points: [{ title: 'Impresión de Componentes', content: 'Imprimimos las carpetas, fundas interiores, encartes y cualquier otro elemento gráfico que hayas solicitado.' }, { title: 'Montaje (Packaging)', content: 'Ensamblamos todos los componentes: el disco se introduce en su funda interior y luego en la carpeta exterior.' }, { title: 'Retractilado y Envío', content: 'Finalmente, los discos se retractilan para protegerlos y se empaquetan cuidadosamente para enviártelos.' }] }
];

export const VINYL_OPTIONS = {
    sizes: [
        { id: '12', label: '12"' },
        { id: '10', label: '10"' },
        { id: '7', label: '7"' }
    ],
    weights: {
        '12': [{ id: '140g', label: '140g (Estándar)' }, { id: '180g', label: '180g (Premium)' }],
        '10': [{ id: '110g', label: '110g (Estándar)' }],
        '7': [{ id: '42g', label: '42g (Estándar)' }]
    },
    numberOfDiscs: [
        { id: 1, label: '1xLP (Un disco)' },
        { id: 2, label: '2xLP (Doble disco)' }
    ],
    colors: [
        { id: 'black', label: 'Negro (Estándar)', priceModifier: 0.00 },
        { id: 'blue-solid', label: 'Blue - Solid', priceModifier: 0.25 },
        { id: 'acquamarine-solid', label: 'Acquamarine - solid', priceModifier: 0.25 },
        { id: 'gold-solid', label: 'Gold - Solid', priceModifier: 0.40 },
        { id: 'green-transparent', label: 'Green - Transparent', priceModifier: 0.35 },
        { id: 'green-moss-solid', label: 'Green (moss) - Solid', priceModifier: 0.25 },
        { id: 'magenta-transparent', label: 'Magenta - Transparent', priceModifier: 0.35 },
        { id: 'orange-solid', label: 'Orange - Solid', priceModifier: 0.25 },
        { id: 'pink-solid', label: 'Pink - Solid', priceModifier: 0.25 },
        { id: 'purple-solid', label: 'Purple - Solid', priceModifier: 0.25 },
        { id: 'recycled-coloured-vinyl-100', label: 'Recycled coloured vinyl 100 %', priceModifier: 0.50 },
        { id: 'red-solid', label: 'Red - Solid', priceModifier: 0.25 },
        { id: 'red-transparent', label: 'Red - Transparent', priceModifier: 0.35 },
        { id: 'silver-solid', label: 'Silver - Solid', priceModifier: 0.40 },
        { id: 'turquoise-solid', label: 'Turquoise - Solid', priceModifier: 0.25 },
        { id: 'ultra-clear', label: 'Ultra clear', priceModifier: 0.35 },
        { id: 'violet-transparent', label: 'Violet - Transparent', priceModifier: 0.35 },
        { id: 'white-solid', label: 'White - Solid', priceModifier: 0.25 },
        { id: 'yellow-solid', label: 'Yellow - Solid', priceModifier: 0.25 },
        { id: 'yellow-transparent', label: 'Yellow - Transparent', priceModifier: 0.35 },
        { id: 'almost-pink', label: 'Almost Pink', priceModifier: 0.75 },
        { id: 'ash-grey', label: 'Ash grey', priceModifier: 0.75 },
        { id: 'black-clouds', label: 'Black Clouds', priceModifier: 0.75 },
        { id: 'blade-bullet', label: 'Blade Bullet', priceModifier: 0.75 },
        { id: 'bloody-mary', label: 'Bloody Mary', priceModifier: 0.75 },
        { id: 'blueberry', label: 'Blueberry', priceModifier: 0.75 },
        { id: 'breaking-bad', label: 'Breaking Bad', priceModifier: 0.75 },
        { id: 'call-me-peach', label: 'Call Me Peach', priceModifier: 0.75 },
        { id: 'camouflage', label: 'Camouflage', priceModifier: 0.75 },
        { id: 'coke-bottle', label: 'Coke Bottle', priceModifier: 0.75 },
        { id: 'cool-blue', label: 'Cool Blue', priceModifier: 0.75 },
        { id: 'crystal-water', label: 'Crystal Water', priceModifier: 0.75 },
        { id: 'dirty-pink', label: 'Dirty Pink', priceModifier: 0.75 },
        { id: 'dolphin', label: 'Dolphin', priceModifier: 0.75 },
        { id: 'dracula', label: 'Dracula', priceModifier: 0.75 },
        { id: 'fluffy', label: 'Fluffy', priceModifier: 0.75 },
        { id: 'frankenstein', label: 'Frankenstein', priceModifier: 0.75 },
        { id: 'fresh-green', label: 'Fresh Green', priceModifier: 0.75 },
        { id: 'full-metal-jacket', label: 'Full Metal Jacket', priceModifier: 0.75 },
        { id: 'ginger-gold', label: 'Ginger Gold', priceModifier: 0.75 },
        { id: 'goldy-locks', label: 'Goldy Locks', priceModifier: 0.75 },
        { id: 'green-leaves', label: 'Green Leaves', priceModifier: 0.75 },
        { id: 'hint-of-purple', label: 'Hint Of Purple', priceModifier: 0.75 },
        { id: 'hyacinth', label: 'Hyacinth', priceModifier: 0.75 },
        { id: 'ice-ice-baby', label: 'Ice Ice Baby', priceModifier: 0.75 },
        { id: 'kinky-pinky', label: 'Kinky Pinky', priceModifier: 0.75 },
        { id: 'lemon-ice-cream', label: 'Lemon Ice Cream', priceModifier: 0.75 },
        { id: 'lothlorien', label: 'Lothlorien', priceModifier: 0.75 },
        { id: 'mango-chutney', label: 'Mango Chutney', priceModifier: 0.75 },
        { id: 'mimosa-marble', label: 'Mimosa Marble', priceModifier: 0.75 },
        { id: 'minty-ice', label: 'Minty Ice', priceModifier: 0.75 },
        { id: 'orange-ice-cream', label: 'Orange Ice Cream', priceModifier: 0.75 },
        { id: 'pink-blossom', label: 'Pink Blossom', priceModifier: 0.75 },
        { id: 'pink-panther', label: 'Pink Panther', priceModifier: 0.75 },
        { id: 'psychedelic-green', label: 'Psychedelic Green', priceModifier: 0.75 },
        { id: 'purple-haze', label: 'Purple Haze', priceModifier: 0.75 },
        { id: 'raspberry-beret', label: 'Raspberry Beret', priceModifier: 0.75 },
        { id: 'red-bullet', label: 'Red Bullet', priceModifier: 0.75 },
        { id: 'safari', label: 'Safari', priceModifier: 0.75 },
        { id: 'savannah', label: 'Savannah', priceModifier: 0.75 },
        { id: 'skull-gold', label: 'Skull Gold', priceModifier: 0.75 },
        { id: 'slightly-gold', label: 'Slightly Gold', priceModifier: 0.75 },
        { id: 'slightly-silver', label: 'Slightly Silver', priceModifier: 0.75 },
        { id: 'smokey', label: 'Smokey', priceModifier: 0.75 },
        { id: 'snake-eye', label: 'Snake Eye', priceModifier: 0.75 },
        { id: 'snowy-white', label: 'Snowy White', priceModifier: 0.75 },
        { id: 'strawberry-milkshake', label: 'Strawberry Milkshake', priceModifier: 0.75 },
        { id: 'sugar-candy', label: 'Sugar Candy', priceModifier: 0.75 },
        { id: 'sunset-boulevard', label: 'Sunset Boulevard', priceModifier: 0.75 },
        { id: 'surprise', label: 'Surprise!', priceModifier: 0.75 },
        { id: 'swamp-green', label: 'Swamp Green', priceModifier: 0.75 },
        { id: 'tangerine', label: 'Tangerine', priceModifier: 0.75 },
        { id: 'velvet-purple', label: 'Velvet Purple', priceModifier: 0.75 },
        { id: 'voodoo', label: 'Voodoo', priceModifier: 0.75 },
        { id: 'yellow-flame', label: 'Yellow Flame', priceModifier: 0.75 }
    ],
    innerSleeves: [
        { id: 'paper-white', label: 'Papel Blanco', priceModifier: 0.00 },
        { id: 'paper-black', label: 'Papel Negro', priceModifier: 0.10 },
        { id: 'polylined-white', label: 'Papel Antiestático Blanco', priceModifier: 0.15 },
        { id: 'polylined-black', label: 'Papel Antiestático Negro', priceModifier: 0.20 },
        { id: 'printed', label: 'Funda Interior Impresa', priceModifier: 0.50 }
    ],
    outerSleeves: {
        '12': [
            { id: 'standard-12', label: 'Carpeta Estándar (3mm lomo)' },
            { id: 'gatefold-12', label: 'Carpeta Gatefold' }
        ],
        '10': [
            { id: 'standard-10', label: 'Carpeta Estándar' }
        ],
        '7': [
            { id: 'standard-7', label: 'Carpeta Estándar' },
            { id: 'hole-sleeve-7', label: 'Funda con Agujero (Disco Sleeve)' }
        ]
    },
    printingFinishes: [
        { id: 'standard', label: 'Estándar (Brillo)', priceModifier: 0.00 },
        { id: 'matte', label: 'Mate', priceModifier: 0.15 },
        { id: 'reverse-board', label: 'Cartón Invertido (Rugoso)', priceModifier: 0.20 },
        { id: 'spot-uv', label: 'Barniz UVI Selectivo', priceModifier: 0.50 }
    ],
    inserts: [
        { id: 'none', label: 'Ninguno', priceModifier: 0.00 },
        { id: 'insert-12', label: 'Encarte 12" (1 hoja)', priceModifier: 0.35 },
        { id: 'poster-a2', label: 'Póster A2', priceModifier: 0.60 },
        { id: 'booklet-4p', label: 'Libreto 4 páginas', priceModifier: 0.80 }
    ]
};

export const VINYL_BASE_PRICING: { [size: string]: { [weight: string]: PriceTier[] } } = {
    '12': {
        '140g': [ { range: [300, 499], price: 6.50 }, { range: [500, 999], price: 5.80 }, { range: [1000, Infinity], price: 5.20 } ],
        '180g': [ { range: [300, 499], price: 7.20 }, { range: [500, 999], price: 6.50 }, { range: [1000, Infinity], price: 5.90 } ]
    },
    '10': {
        '110g': [ { range: [300, 499], price: 5.50 }, { range: [500, 999], price: 4.80 }, { range: [1000, Infinity], price: 4.20 } ]
    },
    '7': {
        '42g': [ { range: [300, 499], price: 3.80 }, { range: [500, 999], price: 3.20 }, { range: [1000, Infinity], price: 2.70 } ]
    }
};

export const VINYL_PACKAGING_PRICING: { [size: string]: { [sleeveType: string]: VinylPackagingPriceTier[] } } = {
    '12': {
        'standard-12': [{ range: [300, Infinity], price: 1.20 }],
        'gatefold-12': [{ range: [300, Infinity], price: 2.50 }]
    },
    '10': {
        'standard-10': [{ range: [300, Infinity], price: 1.00 }]
    },
    '7': {
        'standard-7': [{ range: [300, Infinity], price: 0.80 }],
        'hole-sleeve-7': [{ range: [300, Infinity], price: 0.50 }]
    }
};

export const VINYL_COLOR_EXAMPLES: { [category: string]: VinylColorExample[] } = {
  standard: [
    { name: 'Blue - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/9_foto1_product_groot.jpg?raw=true' },
    { name: 'Blue - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/10_foto2_product_groot.jpg?raw=true' },
    { name: 'Acquamarine - solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/853_foto1_product_groot.jpg?raw=true' },
    { name: 'Gold - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/90_foto2_product_groot.jpg?raw=true' },
    { name: 'Green - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/96_foto1_product_groot.jpg?raw=true' },
    { name: 'Green (moss) - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/92_foto1_product_groot.jpg?raw=true' },
    { name: 'Magenta - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/91_foto2_product_groot.jpg?raw=true' },
    { name: 'Orange - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/82_foto1_product_groot.jpg?raw=true' },
    { name: 'Pink - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/93_foto1_product_groot.jpg?raw=true' },
    { name: 'Purple - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/88_foto1_product_groot.jpg?raw=true' },
    { name: 'Recycled coloured vinyl 100 %', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/881_foto1_product_groot.jpg?raw=true', description: 'Mix of all colours, outcome varies per batch' },
    { name: 'Red - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/85_foto2_product_groot.jpg?raw=true' },
    { name: 'Red - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/84_foto1_product_groot.jpg?raw=true' },
    { name: 'Silver - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/95_foto2_product_groot.jpg?raw=true' },
    { name: 'Turquoise - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/87_foto2_product_groot.jpg?raw=true' },
    { name: 'Ultra clear', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/81_foto2_product_groot.jpg?raw=true' },
    { name: 'Violet - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/876_foto1_product_groot.jpg?raw=true' },
    { name: 'White - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/83_foto2_product_groot.jpg?raw=true' },
    { name: 'Yellow - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/94_foto1_product_groot.jpg?raw=true' },
    { name: 'Yellow - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/89_foto2_product_groot.jpg?raw=true' },
  ],
  mixed: [
    { name: 'Almost Pink', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/4_foto2_product_groot.jpg?raw=true', description: 'solid red & solid white' },
    { name: 'Ash grey', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/5_foto2_product_groot.jpg?raw=true', description: 'solid white & black' },
    { name: 'Black Clouds', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/6_foto2_product_groot.jpg?raw=true', description: 'crystal clear & black' },
    { name: 'Blade Bullet', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/7_foto2_product_groot.jpg?raw=true', description: 'solid silver & black' },
    { name: 'Bloody Mary', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/8_foto2_product_groot.jpg?raw=true', description: 'transparent red & solid white & black' },
    { name: 'Blueberry', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/11_foto1_product_groot.jpg?raw=true', description: 'solid white & solid purple & solid blue' },
    { name: 'Breaking Bad', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/97_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid turquoise' },
    { name: 'Call Me Peach', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/98_foto2_product_groot.jpg?raw=true', description: 'solid white & solid yellow & solid red' },
    { name: 'Camouflage', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/99_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent green & black' },
    { name: 'Coke Bottle', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/100_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent green' },
    { name: 'Cool Blue', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/101_foto1_product_groot.jpg?raw=true', description: 'transparent blue & solid white & black' },
    { name: 'Crystal Water', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/102_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid silver & solid blue' },
    { name: 'Dirty Pink', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/103_foto2_product_groot.jpg?raw=true', description: 'solid pink & black' },
    { name: 'Dolphin', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/104_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid blue' },
    { name: 'Dracula', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/105_foto2_product_groot.jpg?raw=true', description: 'transparent red & black' },
    { name: 'Fluffy', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/855_foto1_product_groot.jpg?raw=true', description: 'cyrstal clear, pink & solid blue' },
    { name: 'Frankenstein', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/106_foto2_product_groot.jpg?raw=true', description: 'solid red & black' },
    { name: 'Fresh Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/107_foto2_product_groot.jpg?raw=true', description: 'transparent green & solid white' },
    { name: 'Full Metal Jacket', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/108_foto2_product_groot.jpg?raw=true', description: 'solid silver & solid dark green' },
    { name: 'Ginger Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/109_foto2_product_groot.jpg?raw=true', description: 'solid gold & solid red' },
    { name: 'Goldy Locks', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/110_foto1_product_groot.jpg?raw=true', description: 'solid gold & solid orange' },
    { name: 'Green Leaves', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/111_foto2_product_groot.jpg?raw=true', description: 'transparent green & solid white & black' },
    { name: 'Hint Of Purple', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/113_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid purple' },
    { name: 'Hyacinth', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/114_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid red & solid blue' },
    { name: 'Ice Ice Baby', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/115_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent blue & solid white' },
    { name: 'Kinky Pinky', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/116_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid red' },
    { name: 'Lemon Ice Cream', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/117_foto2_product_groot.jpg?raw=true', description: 'solid white & solid yellow' },
    { name: 'Lothlorien', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/873_foto1_product_groot.jpg?raw=true', description: 'white, black & dark moss green' },
    { name: 'Mango Chutney', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/118_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid gold & solid red' },
    { name: 'Mimosa Marble', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/119_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid yellow & black' },
    { name: 'Minty Ice', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/120_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent groen & solid white' },
    { name: 'Orange Ice Cream', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/121_foto2_product_groot.jpg?raw=true', description: 'solid orange & solid white' },
    { name: 'Pink Blossom', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/122_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid pink' },
    { name: 'Pink Panther', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/123_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid purple' },
    { name: 'Psychedelic Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/124_foto2_product_groot.jpg?raw=true', description: 'solid yellow & transparent green' },
    { name: 'Purple Haze', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/125_foto2_product_groot.jpg?raw=true', description: 'solid gold & solid purple' },
    { name: 'Raspberry Beret', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/126_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid purple & solid white' },
    { name: 'Recycled coloured vinyl 100 %', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/880_foto1_product_groot.jpg?raw=true', description: 'Mix of all colours, outcome varies per batch' },
    { name: 'Red Bullet', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/127_foto1_product_groot.jpg?raw=true', description: 'solid silver & solid red' },
    { name: 'Safari', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/128_foto2_product_groot.jpg?raw=true', description: 'solid orange & black' },
    { name: 'Savannah', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/129_foto1_product_groot.jpg?raw=true', description: 'solid yellow & solid red & black' },
    { name: 'Skull Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/130_foto1_product_groot.jpg?raw=true', description: 'solid gold & black' },
    { name: 'Slightly Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/131_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid gold' },
    { name: 'Slightly Silver', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/132_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid silver' },
    { name: 'Smokey', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/133_foto2_product_groot.jpg?raw=true', description: 'crystal clear & black' },
    { name: 'Snake Eye', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/877_foto1_product_groot.jpg?raw=true', description: 'bright green & black' },
    { name: 'Snowy White', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/134_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid white' },
    { name: 'Strawberry Milkshake', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/135_foto2_product_groot.jpg?raw=true', description: 'solid white & solid red' },
    { name: 'Sugar Candy', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/136_foto2_product_groot.jpg?raw=true', description: 'solid white & solid pink' },
    { name: 'Sunset Boulevard', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/138_foto2_product_groot.jpg?raw=true', description: 'solid yellow & solid orange' },
    { name: 'Surprise!', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/139_foto1_product_groot.jpg?raw=true', description: 'solid yellow & solid blue' },
    { name: 'Swamp Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/140_foto2_product_groot.jpg?raw=true', description: 'solid yellow & solid blue & solid red' },
    { name: 'Tangerine', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/141_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid orange & sol red' },
    { name: 'Velvet Purple', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/142_foto2_product_groot.jpg?raw=true', description: 'solid purple & solid red' },
    { name: 'Voodoo', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/143_foto2_product_groot.jpg?raw=true', description: 'solid yellow, black & solid red' },
    { name: 'Yellow Flame', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/144_foto2_product_groot.jpg?raw=true', description: 'solid yellow, solid red & solid orange' },
  ]
};

export const VINYL_FAQ_DATA: VinylFAQ[] = [
    { title: '¿Cuál es el pedido mínimo para la fabricación de vinilos?', content: 'Nuestro pedido mínimo estándar es de 300 unidades. Para tiradas más pequeñas, contáctanos para discutir posibles opciones, aunque el coste por unidad será significativamente mayor.' },
    { title: '¿Cuánto tiempo tarda el proceso completo?', content: 'El tiempo de fabricación estándar es de aproximadamente 12 a 16 semanas desde la aprobación de todos los materiales (audio, gráficos y test pressing si aplica). Este plazo puede variar según la carga de trabajo de la fábrica y la complejidad de tu pedido.' },
    { title: '¿Qué es un "Test Pressing" y por qué lo necesito?', content: 'Un Test Pressing (TP) es una copia de prueba de tu vinilo. Te enviamos unas 5-10 unidades para que puedas escuchar y aprobar la calidad del sonido antes de que produzcamos las 300+ copias. Es un paso crucial para asegurar que estás 100% satisfecho con el resultado final. La producción en masa no comenzará sin tu aprobación.' },
    { title: '¿Cómo debo preparar mi audio para vinilo?', content: 'El audio debe ser masterizado específicamente para vinilo por un ingeniero profesional. Esto implica ajustar el rango dinámico, controlar las sibilancias y asegurar la compatibilidad mono en las bajas frecuencias. Aceptamos archivos WAV o AIFF a 24 bits.' },
    { title: '¿Puedo combinar diferentes colores de vinilo en un mismo pedido?', content: 'Sí, es posible, pero se considera como dos pedidos separados con un mínimo de unidades para cada color (generalmente 100-150 unidades por variante de color, dentro del pedido mínimo total). Esto incurre en costes adicionales por el cambio de color en la prensa.' },
    { title: '¿Qué son los derechos de autor y por qué necesito gestionarlos?', content: 'Para fabricar un vinilo, necesitamos una prueba de que posees los derechos de las canciones o que tienes permiso para usarlas. En España, esto se gestiona a través de la SGAE. Es un requisito legal para proteger tanto al artista como a nosotros como fabricantes.' },
];