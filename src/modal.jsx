'use client'
import { useEffect } from "react";
const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade" onClick={onClose}>
        <div className="shadow-lg max-w-md w-full relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
export default Modal