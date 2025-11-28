import React, { useEffect } from 'react';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`notification ${type}`} role="status" aria-live="polite">
      <div className="notification-content">{message}</div>
      <button className="notification-close" onClick={onClose} aria-label="Dismiss">×</button>
    </div>
  );
};

export default Notification;
