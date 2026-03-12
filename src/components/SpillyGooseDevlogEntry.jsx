import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SpillyGooseDevlogEntry() {
  const { date } = useParams();
  const [entry, setEntry] = useState(null);
  const [html, setHtml] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch('/public/SpillyGoose/devlogs/index.json')
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        const found = data.find(e => e.date === date);
        if (!found) { setNotFound(true); return; }
        setEntry(found);
        return fetch(`/public/SpillyGoose/devlogs/${date}.html`)
          .then(r => {
            if (!r.ok) { setNotFound(true); return; }
            return r.text();
          })
          .then(text => {
            if (!cancelled && text !== undefined) setHtml(text);
          });
      })
      .catch(() => { if (!cancelled) setNotFound(true); });

    return () => { cancelled = true; };
  }, [date]);

  if (notFound) {
    return (
      <div className='sg-devlog-entry'>
        <p className='sg-devlog-entry__not-found'>Entry not found.</p>
      </div>
    );
  }

  if (!entry || html === null) {
    return <div className='sg-devlog-loading'>Loading...</div>;
  }

  return (
    <div className='sg-devlog-entry'>
      <div className='sg-devlog-entry__body' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default SpillyGooseDevlogEntry;
