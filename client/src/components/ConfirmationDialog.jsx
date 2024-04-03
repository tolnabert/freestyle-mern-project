import React from "react";

const ConfirmationDialog = ({
  isOpen,
  title,
  content,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <div className="dialog-header">
          <h2>{title}</h2>
        </div>
        <div className="dialog-content">
          <p>{content}</p>
        </div>
        <div className="dialog-actions">
          <button onClick={onCancel} className="btn btn-cancel">
            {cancelLabel}
          </button>
          <button onClick={onConfirm} className="btn btn-confirm">
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;