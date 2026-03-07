import React from 'react';
import { NavLink } from 'react-router-dom';

const SpillyGooseButton = () => (
  <NavLink to="/SpillyGoose" className="sg-corner-link">
    <img src="/public/SpillyGoose/SpillyGooseLogoWebsite.png" alt="Spilly Goose" className="sg-corner-logo" onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
    <span className="sg-corner-label" style={{display: 'none'}}>Spilly Goose</span>
  </NavLink>
);

export default SpillyGooseButton;
