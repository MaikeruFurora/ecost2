import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="py-4">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;

