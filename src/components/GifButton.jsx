import React from 'react';
import { NavLink } from 'react-router-dom';

export const BadgeList = ({ badges = [], color }) => {
  if (!badges.length) return null;
  return (
    <div className="promo-button__badges" style={color ? { color } : undefined}>
      {badges.map((badge, i) => (
        <span
          key={i}
          className="promo-button__badge"
          title={badge.label}
          {...(badge.tooltip ? { 'data-tooltip': badge.tooltip } : {})}
        >
          {badge.icon}
        </span>
      ))}
    </div>
  );
};

const GifButton = ({ to, href, imgSrc, imgAlt, badges = [] }) => {
  const btn = (
    <div className="gif-button__btn">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="promo-button__img"
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <span className="promo-button__label">{imgAlt}</span>
    </div>
  );

  const linkedBtn = href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="gif-button__link">{btn}</a>
    : <NavLink to={to} className="gif-button__link">{btn}</NavLink>;

  return (
    <div className="gif-button">
      <BadgeList badges={badges} />
      {linkedBtn}
    </div>
  );
};

export default GifButton;
