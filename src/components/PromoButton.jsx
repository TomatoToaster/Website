import React from 'react';
import { NavLink } from 'react-router-dom';

const PromoButton = ({ to, href, imgSrc, imgAlt, badges = [], position = 'right', badgeColor }) => {
  const btn = (
    <div className="promo-button__btn">
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
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="promo-button__link">{btn}</a>
    : <NavLink to={to} className="promo-button__link">{btn}</NavLink>;

  return (
    <div className={`promo-button promo-button--${position}`}>
      {badges.length > 0 && (
        <div className="promo-button__badges" style={badgeColor ? { color: badgeColor } : undefined}>
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
      )}
      {linkedBtn}
    </div>
  );
};

export default PromoButton;
