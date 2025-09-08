import React, { useState } from 'react';
import { generateBriefingText } from '../services/geminiService';
import Loader from './Loader';

interface AIHelperModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialText: string;
    fieldName: 'concept' | 'product-breakdown' | null;
    onApplyText: (text: string) => void;
}

const AIHelperModal: React.FC<AIHelperModalProps> = ({ isOpen, onClose, initialText, fieldName, onApplyText }) => {
    const isImproving = initialText.trim().length > 0;
    const [promptText, setPromptText] = useState(isImproving ? initialText : '');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [error, setError] = useState('');

    if (!isOpen || !fieldName) return null;

    const handleGenerate = async () => {
        if (!promptText.trim()) {
            setError('Por favor, introduce una idea para comenzar.');
            return;
        }
        setError('');
        setIsLoading(true);
        setSuggestions([]);

        const response = await generateBriefingText({
            field: fieldName,
            text: promptText
        });

        if (typeof response === 'string') {
            setError(response);
        } else {
            setSuggestions(response.suggestions);
        }
        setIsLoading(false);
    };
    
    const handleApply = (text: string) => {
        onApplyText(text);
        onClose();
    };

    const title = isImproving ? 'Mejorar Texto con IA' : 'Generar Ideas con IA';
    const description = isImproving
        ? 'La IA refinará tu texto para hacerlo más claro y evocador.'
        : 'Escribe una idea simple y la IA generará descripciones más detalladas para ti.';

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-semibold text-black mb-2">{title} ✨</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                
                <div className="space-y-4">
                    <textarea
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder={isImproving ? "Tu texto aquí..." : "Ej: Un álbum sobre la nostalgia del verano..."}
                        className="w-full p-3 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-y"
                        rows={4}
                    />
                    <button onClick={handleGenerate} disabled={isLoading} className="w-full bg-black text-white py-2.5 px-4 font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 flex items-center justify-center">
                        {isLoading ? <Loader /> : (isImproving ? 'Mejorar Texto' : 'Generar Ideas')}
                    </button>
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>
                
                {suggestions.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
                        <h4 className="font-semibold text-black">Sugerencias:</h4>
                        {suggestions.map((suggestion, index) => (
                            <div key={index} className="bg-gray-50 p-4 border border-gray-200">
                                <p className="text-gray-700 text-sm">{suggestion}</p>
                                <button onClick={() => handleApply(suggestion)} className="text-xs font-semibold bg-gray-200 text-black py-1 px-3 mt-3 hover:bg-gray-300">
                                    Usar este texto
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl leading-none z-10">&times;</button>
            </div>
        </div>
    );
};

export default AIHelperModal;
