import { GoogleGenAI, Type } from "@google/genai";
import type { AICollectionResponse, AIBriefingSuggestion } from '../types';
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY;

// Lazily initialize AI client to prevent app crash on module load if API key is missing.
let ai: GoogleGenAI | null = null;
const getAiClient = () => {
    if (!ai) {
        if (!apiKey) {
            console.error("API_KEY environment variable not set.");
            return null;
        }
        ai = new GoogleGenAI({ apiKey });
    }
    return ai;
};

interface CollectionIdeaParams {
    theme: string;
    audience?: string;
    styleAndColors?: string;
}

export const generateCollectionIdeas = async (params: CollectionIdeaParams): Promise<AICollectionResponse | string> => {
  const aiClient = getAiClient();
  if (!aiClient) {
    return "Error de configuración: La clave de API para el servicio de IA no está configurada. Por favor, contacte al administrador.";
  }
  
  const { theme, audience, styleAndColors } = params;
  const productList = PRODUCTS.map(p => `ID: ${p.id}, Título: ${p.title}, Categoría: ${p.category}`).join('\n');
  
  const prompt = `Eres un director creativo para Apparell, una marca de merchandising especializada en crear productos únicos para artistas y marcas. Un cliente quiere crear una mini-colección.

  **Sobre Apparell y su estilo:**
  Apparell se enfoca en productos de alta calidad con un fuerte componente de diseño y narrativa. Trabajamos con artistas para traducir su identidad en merchandising tangible y deseable. Nuestro estilo es moderno, a menudo urbano, pero siempre adaptado a la visión del artista. Valoramos la coherencia conceptual en las colecciones.

  **Ejemplos de Colecciones Anteriores para Inspiración:**
  - **Colección "A New Star" para Rels B:** Enfocada en su tour. Incluía camisetas de manga larga y pósters con un estilo fotográfico limpio, tipografía audaz y motivos de estrellas. La paleta era principalmente blanco y negro, muy directa y moderna.
  - **Colección "Música Folklórica Atemporal" para Dellafuente:** Una colección más conceptual. Incluía sudaderas, tote bags y llaveros. El diseño se basaba en tipografías manuscritas y un logotipo icónico, transmitiendo una sensación artesanal y cultural. Se usaron productos como la Tote-Bag para reforzar la idea de un producto de uso diario con un mensaje artístico.
  - **Colección para Maka:** Incluía gorras y camisetas con logos limpios y a veces conjuntos de pantalón corto y camiseta a juego. Estilo más directo, enfocado en el branding del artista.

  **Tu Tarea:**
  Basándote en los siguientes detalles del cliente, propón una colección coherente de 3-4 productos de nuestro catálogo. La respuesta DEBE ser un objeto JSON válido que coincida con el schema proporcionado.

  **Detalles de la solicitud del cliente:**
  - **Concepto principal:** "${theme}"
  ${audience ? `- **Público objetivo:** ${audience}` : ''}
  ${styleAndColors ? `- **Estilo y colores deseados:** ${styleAndColors}` : ''}

  **Instrucciones para la respuesta JSON:**
  - **collectionName**: Un nombre creativo y atractivo para la colección.
  - **collectionDescription**: Un párrafo breve (2-3 frases) explicando el concepto, la coherencia de la colección y por qué elegiste esos productos y diseños para transmitir la idea del cliente, siguiendo el estilo de Apparell.
  - **products**: Una lista de 3 a 4 productos sugeridos. Para cada uno:
    - **productId**: El ID numérico del producto del catálogo.
    - **designIdea**: Una idea de diseño específica y creativa, alineada con el concepto y el estilo de Apparell.
    - **recommendedTechnique**: La técnica de personalización más adecuada (ej: 'Serigrafía Puff', 'Bordado 3D', 'DTF con tramado').

  **Catálogo de Productos Disponibles (Usa solo sus IDs):**
  ${productList}`;
  
  const schema = {
    type: Type.OBJECT,
    properties: {
      collectionName: { type: Type.STRING, description: "Un nombre creativo y atractivo para la colección." },
      collectionDescription: { type: Type.STRING, description: "Un párrafo breve que explica el concepto general y la justificación de la colección." },
      products: {
        type: Type.ARRAY,
        description: "Una lista de 3 a 4 productos sugeridos para la colección.",
        items: {
          type: Type.OBJECT,
          properties: {
            productId: { type: Type.NUMBER, description: "El ID numérico del producto del catálogo." },
            designIdea: { type: Type.STRING, description: "Una idea de diseño específica y creativa para este producto, considerando el concepto." },
            recommendedTechnique: { type: Type.STRING, description: "La técnica de personalización más adecuada (ej: 'Serigrafía', 'Bordado 3D', 'DTF')." }
          },
          required: ["productId", "designIdea", "recommendedTechnique"]
        }
      }
    },
    required: ["collectionName", "collectionDescription", "products"]
  };


  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as AICollectionResponse;

  } catch (error) {
    console.error("Error generating collection ideas:", error);
    return "Error al generar la colección. El formato de la respuesta de la IA no fue el esperado o la solicitud no pudo ser procesada.";
  }
};


interface BriefingTextParams {
  field: 'concept' | 'product-breakdown';
  text: string;
}

export const generateBriefingText = async (params: BriefingTextParams): Promise<AIBriefingSuggestion | string> => {
    const aiClient = getAiClient();
    if (!aiClient) {
        return "Error de configuración: La clave de API para el servicio de IA no está configurada.";
    }

    const { field, text } = params;
    const isImproving = text.trim().length > 0;

    const fieldDescription = field === 'concept'
        ? "el concepto principal o la historia detrás de una colección de merchandising para un artista musical."
        : "el desglose de los productos deseados para una colección de merchandising, incluyendo ideas de diseño para cada uno.";

    const action = isImproving
        ? `Toma el siguiente texto y mejóralo. Hazlo más evocador, profesional y claro para un equipo de diseño. Mantén la intención original pero eleva el lenguaje.`
        : `Usa la siguiente idea simple como inspiración para generar un texto bien desarrollado.`;
    
    const inputText = isImproving ? `Texto del usuario a mejorar: "${text}"` : `Idea del usuario: "${text}"`;

    const prompt = `Eres un director creativo experto ayudando a un artista a rellenar un briefing de diseño para su nueva colección de merchandising. Tu tarea es ayudarle a articular sus ideas para el campo "${fieldDescription}".

    ${action}

    ${inputText}

    Genera 3 sugerencias distintas y creativas. Cada sugerencia debe ser un párrafo conciso y bien escrito. No incluyas preámbulos como "Sugerencia 1:". Devuelve únicamente un objeto JSON válido.`;
    
    const schema = {
        type: Type.OBJECT,
        properties: {
            suggestions: {
                type: Type.ARRAY,
                description: "Una lista de 3 párrafos de texto como sugerencias.",
                items: {
                    type: Type.STRING
                }
            }
        },
        required: ["suggestions"]
    };

    try {
        const response = await aiClient.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: schema
            }
        });

        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as AIBriefingSuggestion;

    } catch (error) {
        console.error("Error generating briefing text:", error);
        return "No se pudieron generar las sugerencias. Por favor, revisa tu idea o inténtalo de nuevo.";
    }
};
