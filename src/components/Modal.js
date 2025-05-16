import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1f1f1f] w-full max-w-[94rem] rounded-2xl p-6 shadow-xl relative "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
