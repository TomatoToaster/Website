import React from 'react';
import { NavLink } from 'react-router-dom';
import { BadgeList } from './GifButton';

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
      <BadgeList badges={badges} color={badgeColor} />
      {linkedBtn}
    </div>
  );
};

export default PromoButton;
