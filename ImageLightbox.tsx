
import React, { useEffect, useRef } from 'react';

interface ImageLightboxProps {
    imageUrl: string;
    onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ imageUrl, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        modalRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            tabIndex={-1}
            ref={modalRef}
        >
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                <img
                    src={imageUrl}
                    alt="Enlarged view"
                    className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                />
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 sm:top-2 sm:right-2 bg-white/20 text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-white/40 transition-colors"
                    aria-label="Close image viewer"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
};

export default ImageLightbox;
