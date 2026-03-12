import React, { useEffect } from 'react';

function Lightbox({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className='lightbox' onClick={e => { e.stopPropagation(); onClose(); }}>
      <button className='lightbox__close' onClick={e => { e.stopPropagation(); onClose(); }}>✕</button>
      <div className='lightbox__content' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Lightbox;
