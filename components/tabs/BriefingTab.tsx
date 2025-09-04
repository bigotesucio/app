import React, { useState } from 'react';
import AIHelperModal from '../AIHelperModal';

// Simplified Icon Components for the form
const LightbulbIcon = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const EyeIcon = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const ShirtIcon = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const FolderIcon = () => <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;

const Section: React.FC<{ title: string; children: React.ReactNode; description?: string; icon?: React.ReactNode }> = ({ title, children, description, icon }) => (
    <fieldset className="mb-10 pt-6 border-t border-gray-300">
        <legend className="text-2xl font-semibold text-black mb-1 px-2 -ml-2 flex items-center gap-3">
            {icon}
            <span>{title}</span>
        </legend>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div className="space-y-6">{children}</div>
    </fieldset>
);

const FormRow: React.FC<{ label: string; htmlFor: string; required?: boolean; children: React.ReactNode; note?: string; aiAction?: () => void }> = ({ label, htmlFor, required, children, note, aiAction }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <label htmlFor={htmlFor} className="block text-sm font-semibold text-black">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {aiAction && (
                <button type="button" onClick={aiAction} className="text-xs font-semibold text-black bg-yellow-200 hover:bg-yellow-300 px-2 py-1 flex items-center gap-1">
                    <span>Asistente IA</span>
                    <span className="text-base">✨</span>
                </button>
            )}
        </div>
        {children}
        {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
    </div>
);

const CheckboxGroup: React.FC<{ name: string; options: string[]; otherOption?: boolean }> = ({ name, options, otherOption }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
        {options.map(option => (
            <div key={option} className="flex items-center">
                <input type="checkbox" id={`${name}-${option}`} name={name} value={option} className="h-4 w-4 text-black focus:ring-black border-gray-300" />
                <label htmlFor={`${name}-${option}`} className="ml-3 text-sm text-gray-700">{option}</label>
            </div>
        ))}
        {otherOption && (
             <div className="flex items-center col-span-full">
                <input type="checkbox" id={`${name}-otros`} name={name} value="otros" className="h-4 w-4 text-black focus:ring-black border-gray-300" />
                <label htmlFor={`${name}-otros`} className="ml-3 text-sm text-gray-700">Otros:</label>
                <input type="text" name={`${name}-otros-text`} placeholder="Especifique aquí" className="ml-2 flex-grow p-1 bg-transparent border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-black" />
            </div>
        )}
    </div>
);


const BriefingTab: React.FC = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        projectEvent: '',
        deadlineDate: '',
        concept: '',
        references: '',
        messageEmotion: '',
        avoidElements: '',
        productBreakdown: '',
        artistLinks: '',
    });
    
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        fieldName: 'concept' | 'product-breakdown' | null;
        initialText: string;
    }>({ isOpen: false, fieldName: null, initialText: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleOpenAIHelper = (fieldName: 'concept' | 'product-breakdown') => {
        setModalState({
            isOpen: true,
            fieldName,
            initialText: formData[fieldName],
        });
    };

    const handleApplyAIText = (text: string) => {
        if (modalState.fieldName) {
            setFormData(prev => ({ ...prev, [modalState.fieldName!]: text }));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Briefing enviado. ¡Gracias! Nos pondremos en contacto contigo pronto.');
    };

    return (
        <section className="-mx-4 sm:-mx-6 -my-4 sm:-my-6">
            <div className="relative min-h-[60vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://github.com/bigotesucio/catalogo/blob/main/Shooting_Editorial_ApparellgGallery_20.jpg?raw=true)` }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Briefing de Diseño para Artistas</h2>
                    <p className="text-gray-200 mt-4 max-w-3xl">
                        ¡Hola! Este es el primer paso para crear algo increíble juntos. Rellena este formulario para que nuestro equipo pueda entender tu visión y empezar a darle forma a tu próxima colección.
                    </p>
                </div>
            </div>
            <div className="bg-white p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="mt-8">
                    <Section title="El Proyecto" icon={<LightbulbIcon />} description="Cuéntanos los datos básicos de tu nuevo proyecto.">
                        <FormRow label="Nombre del Proyecto / Colección" htmlFor="projectName" required>
                            <input type="text" id="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Ej: Colección 'Noches de Neón'" required className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                        </FormRow>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormRow label="¿Para qué momento o evento es?" htmlFor="projectEvent" note="Gira, lanzamiento de álbum, aniversario, etc.">
                                <input type="text" id="projectEvent" value={formData.projectEvent} onChange={handleInputChange} placeholder="Ej: Gira de verano 2025" className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                            </FormRow>
                            <FormRow label="Fecha objetivo de lanzamiento" htmlFor="deadlineDate">
                                <input type="date" id="deadlineDate" value={formData.deadlineDate} onChange={handleInputChange} className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                            </FormRow>
                        </div>
                    </Section>

                    <Section title="La Visión" icon={<EyeIcon />} description="Aquí es donde nos explicas qué tienes en mente. No te cortes, ¡queremos saberlo todo!">
                        <FormRow label="¿Cuál es el concepto principal o la historia detrás de la colección?" htmlFor="concept" required aiAction={() => handleOpenAIHelper('concept')}>
                            <textarea id="concept" value={formData.concept} onChange={handleInputChange} placeholder="Ej: 'Quiero capturar la energía de la ciudad por la noche, con un toque retro de los 80...'" required className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-y" rows={4} />
                        </FormRow>
                         <FormRow label="Referentes e inspiración" htmlFor="references" note="Puedes pegar enlaces a imágenes, moodboards de Pinterest, canciones, artistas, etc.">
                            <textarea id="references" value={formData.references} onChange={handleInputChange} placeholder="https://pinterest.com/moodboard, fotos de la película Drive, la paleta de colores de..." className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-y" rows={4} />
                        </FormRow>
                        <FormRow label="¿Qué mensaje o emoción quieres transmitir?" htmlFor="messageEmotion">
                             <input type="text" id="messageEmotion" value={formData.messageEmotion} onChange={handleInputChange} placeholder="Ej: Nostalgia, euforia, rebeldía..." className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                        </FormRow>
                        <FormRow label="Elementos a evitar" htmlFor="avoidElements" note="Colores que no te gusten, símbolos, estilos, etc.">
                             <input type="text" id="avoidElements" value={formData.avoidElements} onChange={handleInputChange} placeholder="Ej: Por favor, nada de color amarillo. Evitar tipografías de estilo gótico." className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                        </FormRow>
                    </Section>

                    <Section title="Los Productos" icon={<ShirtIcon />} description="¿Qué tipo de prendas y artículos formarán parte de esta colección?">
                        <FormRow label="¿Qué tipo de prendas te interesan principalmente?" htmlFor="garment-types">
                            <CheckboxGroup
                                name="garment-types"
                                options={['Camisetas', 'Sudaderas', 'Gorras', 'Tote Bags', 'Pósters', 'Vinilos']}
                                otherOption
                            />
                        </FormRow>
                         <FormRow label="Desglose de productos y primeras ideas" htmlFor="productBreakdown" required note="Dinos cuántos diseños diferentes necesitas y si tienes alguna idea para ellos." aiAction={() => handleOpenAIHelper('product-breakdown')}>
                            <textarea id="productBreakdown" value={formData.productBreakdown} onChange={handleInputChange} placeholder="Ej: - 1 camiseta negra con un diseño grande en la espalda y logo pequeño en el pecho. - 1 sudadera blanca con una frase bordada. - 1 gorra con un parche." required className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-y" rows={4}/>
                        </FormRow>
                    </Section>

                     <Section title="Materiales que ya tienes" icon={<FolderIcon />} description="Facilítanos cualquier material gráfico que nos ayude a empezar.">
                        <FormRow label="¿Qué materiales gráficos podemos usar?" htmlFor="materials">
                             <CheckboxGroup
                                name="materials"
                                options={['Logotipo', 'Tipografías', 'Guía de estilo', 'Fotografías', 'Ilustraciones o símbolos']}
                                otherOption
                            />
                        </FormRow>
                         <FormRow label="Enlaces a tu música, redes sociales o portfolio" htmlFor="artistLinks" note="Para que podamos sumergirnos en tu universo.">
                            <input type="text" id="artistLinks" value={formData.artistLinks} onChange={handleInputChange} placeholder="Tu Instagram, Spotify, página web, etc." className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
                        </FormRow>
                    </Section>

                    <div className="mt-10 pt-6 border-t border-gray-300 text-center">
                         <p className="text-gray-600 mb-4">¡Todo listo! Revisa que la información sea correcta y dale a enviar.</p>
                        <button type="submit" className="bg-black text-white py-3 px-8 font-semibold hover:bg-gray-800 transition-colors">
                            Enviar Mi Visión
                        </button>
                    </div>
                </form>
            </div>
            
            <AIHelperModal 
                isOpen={modalState.isOpen}
                onClose={() => setModalState({ isOpen: false, fieldName: null, initialText: '' })}
                fieldName={modalState.fieldName}
                initialText={modalState.initialText}
                onApplyText={handleApplyAIText}
            />
        </section>
    );
};

export default BriefingTab;
