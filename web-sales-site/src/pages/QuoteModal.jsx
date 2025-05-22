import React, { useRef } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
    const modalRef = useRef();
    
    if (!isOpen) return null;
    
    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    
    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60"
        onClick={handleBackdropClick}
        >
        <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-lg p-6 pr-12 max-w-md w-full animate-fade-in-up"
        >
        
        {/* Botón de cierre */}
        <div className="flex items-center justify-between mb-4">
        <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 text-3xl font-bold mr-4"
        aria-label="Cerrar"
        >
        ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 flex-grow">
        Solicita una cotización
        </h2>
        </div>
        
        
        
        {/* Formulario */}
        <form
        onSubmit={(e) => {
            e.preventDefault();
            alert('Cotización enviada. Gracias.');
            onClose();
        }}
        className="space-y-4"
        >
        <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <textarea
        name="message"
        placeholder="Cuéntanos sobre tu proyecto..."
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        rows="4"
        ></textarea>
        
        <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
        Enviar cotización
        </button>
        </form>
        </div>
        </div>
    );
}
