
import type { Tab, Product, PricingData, Technique, CarouselSlide, AppColor } from './types';

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
    { id: 6, mainCategory: 'Prendas Personalizables', category: 'Sudaderas', title: 'SUDADERA CON CAPUCHA', titular: 'Sudadera de corte boxy.', frase: 'Calidad superior, impacto máximo.', description: 'Calidad que se siente y se ve. Con un gramaje superior de 400GSM y un corte boxy, esta sudadera redefine el concepto de premium. Su estructura y tacto seco la convierten en la pieza central de cualquier colección de alta gama.', sizes: 'XXS - 3XL', detailedPoints: [], washInstructions: STANDARD_WASH_INSTRUCTIONS, certifications: STANDARD_CERTIFICATIONS, composition: '100% Algodón orgánico', specs: 'FIT [Extragrande] WEIGHT [400GSM]', techniques: 'DTF/DTG, Serigrafía, Bordado', imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-29.jpg?raw=true', 'https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-80.jpg?raw=true'], pricingKey: 'SUDADERA CORTE BOXY', productUrl: 'https://apparell.com/products/sudadera-boxy-premium', availableColors: ['Black', 'Off White', 'Heather Grey', 'Green Bay', 'Stargazer'] },
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

export const SERVICES_DATA = {
  intro: "IMPULSAMOS LA EXPERIENCIA CULTURAL GLOBAL A TRAVÉS DE LA INNOVACIÓN, LA TECNOLOGÍA Y EL DESARROLLO DE PRODUCTOS Y MARCAS.",
  servicesTitle: "NUESTROS SERVICIOS",
  services: [
    {
      name: "Portal.",
      color: "bg-[#fecaca]", // Rosado
      textColor: "text-black",
      description: "Nuestro ecosistema online para, labels, artistas y fans diseñado con el objetivo de simplificar, potenciar y focalizar las conexiones en un solo lugar.",
      points: [
        "Gestiona tu portal, promociona lanzamientos y da de alta eventos.",
        "Analíticas.",
        "Facturación en tiempo real y descarga de facturas."
      ],
      imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/PSD_07%20copia.jpg?raw=true']
    },
    {
      name: "Factory.",
      color: "bg-[#fef08a]", // Amarillo
      textColor: "text-black",
      description: "La fábrica de la industria musical. Fabricamos cualquier tipología de producto y trabajamos exclusivamente con productos que pasen nuestro filtro de calidad con el objetivo de garantizar una experiencia de compra que potencie la compra recurrente.",
      points: [
        "Desarrollo de propuestas personalizadas.",
        "Serigrafía, DTF, DTG, bordados, confección a medida... no hay límite.",
        "Fabricación de vinilos, CDs, cassettes..."
      ],
      imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller--10%20copia.jpg?raw=true']
    },
    {
      name: "Warehub.",
      color: "bg-[#bbf7d0]", // Verde
      textColor: "text-black",
      description: "Nuestro servicio de operaciones. Nos ocupamos de la distribución y logística de todos tus productos a través de una serie de procesos optimizados para ofrecer a nuestros clientes una experiencia de compra impecable.",
      points: [
        "Almacenamiento de stock.",
        "Envíos y recogidas.",
        "Soporte técnico.",
        "Atención al cliente.",
        "Seeding personalizado."
      ],
      imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller-43.jpg?raw=true']
    },
    {
      name: "Studio.",
      color: "bg-[#bae6fd]", // Azul
      textColor: "text-black",
      description: "Nuestro atelier creativo. Contamos con un potente equipo de diseñadores in-house para trabajar en el desarrollo de tu marca y productos.",
      points: [
        "Diseño gráfico y desarrollo de ID visual.",
        "Diseño de productos.",
        "Diseño web."
      ],
      imageUrls: ['https://github.com/bigotesucio/catalogo/blob/main/APPARELL_Foto-taller-34%20copia.jpg?raw=true']
    }
  ],
  howWeWorkTitle: "¿CÓMO TRABAJAMOS?",
  aAndR: {
    title: "A&R DEDICADO",
    description: "En Apparell nos engranamos con el equipo de trabajo del artista de una forma orgánica para desarrollar un roadmap estratégico anual que potencie la evolución de su marca y el incremento de ventas, posicionando los ingresos por ventade merch, como un ingreso alternativo y estable. Nos basamos en la comunicación y la proactividad para proponer líneas de trabajo a explorar y oportunidades de crecimiento.",
    points: [
      "Diseño y planificación de lanzamientos.",
      "Seguimiento personalizado.",
      "Coordinación con management & labels.",
      "Asesoramiento & insights."
    ],
    imageUrl: 'https://apparell.com/cdn/shop/files/mision-empoderamiento.svg?v=1733944235'
  },
  timing: {
    title: "TIMING DROP RELEASE",
    steps: [
      { day: "01", event: "Kick off y comienzo. Planificación." },
      { day: "07", event: "Primera propuesta y desarrollo gráfico." },
      { day: "15", event: "Fabricación." },
      { day: "45", event: "Lanzamiento." }
    ],
    backgroundImageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/DELL-Shooting-Atemporales-40.jpg?raw=true'
  },
  spotify: {
      title: "SPOTIFY",
      description: "Nos sincronizamos con tu perfil de artista en Spotify. De esta forma tus productos estarán presentes cada vez que tu fanbase esté escuchando tu música..",
      imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_14.jpg?raw=true'
  },
  feats: {
      title: "APPARELL FEATS",
      description: "Gracias a nuestra plataforma puedes lanzar un producto junto a otro artista y repartir los beneficios. Una forma distintiva de impactar a tu fanbase trasladando al mundo físico una colaboración entre dos artistas.",
      imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/Apparell_ShootingProducts-58.jpg?raw=true'
  }
};

export const ALL_COLORS: AppColor[] = [
    { name: 'White', code: '001', hex: '#FFFFFF' },
    { name: 'Off White', code: '002', hex: '#F9F9F9' },
    { name: 'Vintage White', code: '003', hex: '#F5EFE6' },
    { name: 'Natural Raw', code: '004', hex: '#EAE5D9' },
    { name: 'Pool Blue', code: '101', hex: '#A3D9E6' },
    { name: 'Stone', code: '701', hex: '#B8B8B8' },
    { name: 'Viva Yellow', code: '201', hex: '#F7D04E' },
    { name: 'Lilac Dream', code: '401', hex: '#D2C4E0' },
    { name: 'Black', code: '900', hex: '#000000' },
    { name: 'Fraiche Peche', code: '301', hex: '#F9C9B4' },
    { name: 'Blue Soul', code: '102', hex: '#7C9EB2' },
    { name: 'Aqua Blue', code: '103', hex: '#B8DFD8' },
    { name: 'Desert Dust', code: '801', hex: '#D7C7B6' },
    { name: 'Green Bay', code: '501', hex: '#A2B4A0' },
    { name: 'Anthracite', code: '702', hex: '#4A4A4A' },
    { name: 'Fiesta', code: '302', hex: '#E54B4B' },
    { name: 'Nispero', code: '202', hex: '#F4A261' },
    { name: 'Glazed Green', code: '502', hex: '#73A580' },
    { name: 'Purple Love', code: '402', hex: '#A081A4' },
    { name: 'Ochre', code: '802', hex: '#C08B5C' },
    { name: 'India Ink Grey', code: '703', hex: '#4B5358' },
    { name: 'Bubble Pink', code: '303', hex: '#F8B1CC' },
    { name: 'Spectra Yellow', code: '203', hex: '#FCE205' },
    { name: 'Red Brown', code: '803', hex: '#A3574A' },
    { name: 'Aloe', code: '503', hex: '#CED8A7' },
    { name: 'Misty Jade', code: '504', hex: '#A6C4B4' },
    { name: 'Latte', code: '804', hex: '#C8A68B' },
    { name: 'Khaki', code: '805', hex: '#9E9478' },
    { name: 'Heritage Brown', code: '806', hex: '#775A49' },
    { name: 'Mindful Blue', code: '104', hex: '#A0B2C0' },
    { name: 'Stargazer', code: '105', hex: '#4C607C' },
    { name: 'Blue Ice', code: '106', hex: '#C4D7E0' },
    { name: 'Bright Blue', code: '107', hex: '#00A3E0' },
    { name: 'Worker Blue', code: '108', hex: '#58739A' },
    { name: 'French Navy', code: '109', hex: '#2C3E50' },
    { name: 'Lavender', code: '403', hex: '#E6E6FA' },
    { name: 'Red', code: '304', hex: '#FF0000' },
    { name: 'Burgundy', code: '305', hex: '#800020' },
    { name: 'Cotton Pink', code: '306', hex: '#F5C4D5' },
    { name: 'Dark Heather Grey', code: '704', hex: '#595959' },
    { name: 'Cool Heather Grey', code: '705', hex: '#A9A9A9' },
    { name: 'Mid Heather Grey', code: '706', hex: '#8C8C8C' },
    { name: 'Heather Haze', code: '404', hex: '#C5C5D8' },
    { name: 'Heather Grey', code: '707', hex: '#B2B2B2' },
    { name: 'Dark Heather Blue', code: '110', hex: '#546A7B' },
    { name: 'Eco Heather', code: '708', hex: '#D0CFCF' },
    { name: 'Cream', code: '005', hex: '#FFFDD0' },
    { name: 'Pink Joy', code: '307', hex: '#F6A6B3' },
    { name: 'Dusk', code: '111', hex: '#4e5481' },
];

interface ColorFamily {
    name: string;
    colors: { color: AppColor; availableIn: string[] }[];
}

export const COLOR_FAMILIES: ColorFamily[] = [
    {
        name: 'Neutros y Básicos',
        colors: ['White', 'Off White', 'Vintage White', 'Natural Raw', 'Black', 'Heather Grey', 'Dark Heather Grey', 'Anthracite', 'Cream'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    },
    {
        name: 'Tonos Tierra',
        colors: ['Stone', 'Desert Dust', 'Ochre', 'Red Brown', 'Latte', 'Khaki', 'Heritage Brown'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    },
    {
        name: 'Azules',
        colors: ['Pool Blue', 'Blue Soul', 'Aqua Blue', 'Mindful Blue', 'Stargazer', 'Blue Ice', 'Bright Blue', 'Worker Blue', 'French Navy', 'Dark Heather Blue', 'Dusk'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    },
    {
        name: 'Verdes',
        colors: ['Green Bay', 'Glazed Green', 'Aloe', 'Misty Jade'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    },
    {
        name: 'Amarillos y Naranjas',
        colors: ['Viva Yellow', 'Nispero', 'Spectra Yellow'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    },
    {
        name: 'Rojos, Rosas y Morados',
        colors: ['Lilac Dream', 'Fraiche Peche', 'Fiesta', 'Purple Love', 'Bubble Pink', 'Lavender', 'Red', 'Burgundy', 'Cotton Pink', 'Pink Joy', 'Heather Haze'].map(colorName => {
            const color = ALL_COLORS.find(c => c.name === colorName)!;
            const availableIn = PRODUCTS.filter(p => p.availableColors?.includes(colorName)).map(p => p.title);
            return { color, availableIn };
        })
    }
];

export const PRICING_DATA: PricingData = {
    'CAMISETA REGULAR': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 12.50 }, { range: [50, 99], price: 10.00 }, { range: [100, 499], price: 8.50 }, { range: [500, 9999], price: 7.00 }],
        'Serigrafía - 1 Tinta': [{ range: [25, 49], price: 10.50 }, { range: [50, 99], price: 8.00 }, { range: [100, 499], price: 6.50 }, { range: [500, 9999], price: 5.00 }],
        'Bordado - Pecho': [{ range: [25, 49], price: 15.00 }, { range: [50, 99], price: 12.50 }, { range: [100, 499], price: 10.00 }, { range: [500, 9999], price: 8.50 }],
    },
    'CAMISETA OVERSIZED': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 14.50 }, { range: [50, 99], price: 12.00 }, { range: [100, 499], price: 10.50 }, { range: [500, 9999], price: 9.00 }],
        'Serigrafía - 1 Tinta': [{ range: [25, 49], price: 12.50 }, { range: [50, 99], price: 10.00 }, { range: [100, 499], price: 8.50 }, { range: [500, 9999], price: 7.00 }],
    },
    'CAMISETA MANGA LARGA': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 15.50 }, { range: [50, 99], price: 13.00 }, { range: [100, 499], price: 11.50 }, { range: [500, 9999], price: 10.00 }],
    },
    'HOODIE REGULAR': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 22.50 }, { range: [50, 99], price: 20.00 }, { range: [100, 499], price: 18.50 }, { range: [500, 9999], price: 17.00 }],
        'Bordado - Pecho': [{ range: [25, 49], price: 25.00 }, { range: [50, 99], price: 22.50 }, { range: [100, 499], price: 20.00 }, { range: [500, 9999], price: 18.50 }],
    },
    'HOODIE OVERSIZED': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 24.50 }, { range: [50, 99], price: 22.00 }, { range: [100, 499], price: 20.50 }, { range: [500, 9999], price: 19.00 }],
    },
    'SUDADERA CORTE BOXY': {
        'DTF/DTG - Pecho A4': [{ range: [25, 49], price: 28.50 }, { range: [50, 99], price: 26.00 }, { range: [100, 499], price: 24.50 }, { range: [500, 9999], price: 23.00 }],
    },
    'BERMUDA CORTE REGULAR': {
        'Bordado - Pierna': [{ range: [25, 49], price: 18.00 }, { range: [50, 99], price: 16.50 }, { range: [100, 499], price: 15.00 }, { range: [500, 9999], price: 13.50 }],
    },
    'TOTEBAG': {
        'Serigrafía - 1 Tinta': [{ range: [25, 49], price: 5.50 }, { range: [50, 99], price: 4.00 }, { range: [100, 499], price: 3.50 }, { range: [500, 9999], price: 2.80 }],
    },
    'GORRA CONFECCIONADA': {
        'Bordado - Frontal': [{ range: [25, 49], price: 12.00 }, { range: [50, 99], price: 10.50 }, { range: [100, 499], price: 9.00 }, { range: [500, 9999], price: 7.50 }],
    },
    'BUFANDA TEJIDA': {
        'Tejido Jacquard HD': [{ range: [25, 49], price: 15.00 }, { range: [50, 99], price: 12.00 }, { range: [100, 499], price: 9.50 }, { range: [500, 9999], price: 7.00 }],
    },
    'BANDERA ESTAMPADA': {
        'Impresión Digital': [{ range: [25, 49], price: 10.00 }, { range: [50, 99], price: 8.00 }, { range: [100, 499], price: 6.50 }, { range: [500, 9999], price: 5.00 }],
    },
    'GORRO ESTILO BEANIE': {
        'Bordado - Doblez': [{ range: [25, 49], price: 10.00 }, { range: [50, 99], price: 8.50 }, { range: [100, 499], price: 7.00 }, { range: [500, 9999], price: 6.00 }],
    },
    'CALCETINES CONFECCIONADOS': {
        'Tejido Jacquard': [{ range: [25, 49], price: 7.00 }, { range: [50, 99], price: 6.00 }, { range: [100, 499], price: 5.00 }, { range: [500, 9999], price: 4.00 }],
    },
    'LLAVERO': {
        'PVC Personalizado': [{ range: [25, 49], price: 4.50 }, { range: [50, 99], price: 3.50 }, { range: [100, 499], price: 2.50 }, { range: [500, 9999], price: 1.80 }],
    },
    'TAZA': {
        'Sublimación': [{ range: [25, 49], price: 6.00 }, { range: [50, 99], price: 5.00 }, { range: [100, 499], price: 4.00 }, { range: [500, 9999], price: 3.20 }],
    },
    'POSTER': {
        'Impresión Offset': [{ range: [25, 49], price: 5.00 }, { range: [50, 99], price: 4.00 }, { range: [100, 499], price: 3.00 }, { range: [500, 9999], price: 2.00 }],
    },
    'BAÑADOR': {
        'Sublimación': [{ range: [25, 49], price: 20.00 }, { range: [50, 99], price: 17.50 }, { range: [100, 499], price: 15.00 }, { range: [500, 9999], price: 12.50 }],
    },
    'JOYERIA': {
        'Grabado Láser': [{ range: [25, 49], price: 18.00 }, { range: [50, 99], price: 15.00 }, { range: [100, 499], price: 12.00 }, { range: [500, 9999], price: 9.00 }],
    },
    'HOGAR': {
        'Cojín (Sublimación)': [{ range: [25, 49], price: 18.00 }, { range: [50, 99], price: 15.50 }, { range: [100, 499], price: 12.00 }, { range: [500, 9999], price: 9.50 }],
    },
    'CONFECCION A MEDIDA': {
        'Consultar': [{ range: [25, 9999], price: 0 }],
    },
    'VINILO PRENSADO': {
        'Configurador': [{ range: [100, 9999], price: 0 }],
    }
};

const productImages = PRODUCTS.flatMap(p => p.imageUrls);
const getRandomImages = (count: number) => {
    const shuffled = [...productImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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

export const VINYL_OPTIONS = {
    sizes: [
        { id: '12', label: '12" LP' },
        { id: '10', label: '10" EP' },
        { id: '7', label: '7" Single' },
    ],
    weights: {
        '12': [{ id: '140g', label: '140g (Estándar)' }, { id: '180g', label: '180g (Premium)' }],
        '10': [{ id: '110g', label: '110g (Estándar)' }],
        '7': [{ id: '42g', label: '42g (Estándar)' }],
    },
    colors: [
      { id: 'black', label: 'Negro Clásico', priceModifier: 0.00, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-52.png?raw=true' },
      { id: 'solid-red', label: 'Rojo Sólido', priceModifier: 0.50, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-51.png?raw=true' },
      { id: 'transparent', label: 'Transparente', priceModifier: 0.60, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-50.png?raw=true' },
      { id: 'splatter-white', label: 'Salpicado Blanco', priceModifier: 1.20, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-49.png?raw=true' },
      { id: 'splatter-red', label: 'Salpicado Rojo', priceModifier: 1.20, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-48.png?raw=true' },
      { id: 'half-half-bw', label: 'Mitad B&N', priceModifier: 1.00, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-47.png?raw=true' },
      { id: 'galaxy', label: 'Galaxia', priceModifier: 1.50, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-46.png?raw=true' },
      { id: 'marble-blue', label: 'Mármol Azul', priceModifier: 1.30, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-45.png?raw=true' },
      { id: 'picture-disc', label: 'Picture Disc', priceModifier: 2.50, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-42.png?raw=true' },
      { id: 'transparent-blue', label: 'Azul Translúcido', priceModifier: 0.70, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-41.png?raw=true' },
      { id: 'transparent-yellow', label: 'Amarillo Translúcido', priceModifier: 0.70, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-40.png?raw=true' },
      { id: 'color-in-color', label: 'Color en Color', priceModifier: 1.40, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-39.png?raw=true' },
      { id: 'tri-color-stripe', label: 'Tricolor', priceModifier: 1.40, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-43.png?raw=true' },
      { id: 'transparent-splatter', label: 'Salpicado Translúcido', priceModifier: 1.30, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-44.png?raw=true' },
      { id: 'etched', label: 'Grabado (Etched)', priceModifier: 2.00, imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/CATALOGO%20IMAGENES-38.png?raw=true' }
    ],
    innerSleeves: [
        { id: 'paper', label: 'Funda de Papel Blanca', priceModifier: 0.00 },
        { id: 'polylined-black', label: 'Funda Antiestática Negra', priceModifier: 0.25 },
        { id: 'printed', label: 'Funda Impresa Personalizada', priceModifier: 0.80 },
    ],
    outerSleeves: {
        '12': [
            { id: 'standard-12', label: 'Carpeta Estándar (3mm)', priceModifier: 0.00 },
            { id: 'gatefold-12', label: 'Carpeta Desplegable (Gatefold)', priceModifier: 1.50 },
        ],
        '10': [
            { id: 'standard-10', label: 'Carpeta Estándar', priceModifier: 0.00 },
        ],
        '7': [
            { id: 'standard-7', label: 'Carpeta Estándar', priceModifier: 0.00 },
        ],
    }
};

export const VINYL_BASE_PRICING: PricingData = {
    '12': {
        '140g': [{ range: [100, 199], price: 9.50 }, { range: [200, 299], price: 7.20 }, { range: [300, 499], price: 6.10 }, { range: [500, 9999], price: 5.50 }],
        '180g': [{ range: [100, 199], price: 10.20 }, { range: [200, 299], price: 7.90 }, { range: [300, 499], price: 6.80 }, { range: [500, 9999], price: 6.20 }],
    },
    '10': {
        '110g': [{ range: [100, 199], price: 8.00 }, { range: [200, 299], price: 6.10 }, { range: [300, 499], price: 5.20 }, { range: [500, 9999], price: 4.60 }],
    },
    '7': {
        '42g': [{ range: [100, 199], price: 6.50 }, { range: [200, 299], price: 4.80 }, { range: [300, 499], price: 3.90 }, { range: [500, 9999], price: 3.30 }],
    },
};
