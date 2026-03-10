import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SpillyGooseDevlog() {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    fetch('/public/devlogs/SpillyGoose/index.json')
      .then(r => r.json())
      .then(data => setEntries(data))
      .catch(() => setEntries([]));
  }, []);

  if (entries === null) {
    return <div className='sg-devlog-loading'>Loading...</div>;
  }

  if (entries.length === 0) {
    return (
      <div className='sg-devlog-coming-soon'>
        <p>Coming Soon</p>
      </div>
    );
  }

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ul className='sg-devlog-list'>
      {sorted.map(entry => (
        <li key={entry.date} className='sg-devlog-list__item'>
          <Link to={`/SpillyGoose/Devlog/${entry.date}`}>
            <span className='sg-devlog-list__date'>{entry.date}</span>
            <span className='sg-devlog-list__title'>{entry.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SpillyGooseDevlog;
