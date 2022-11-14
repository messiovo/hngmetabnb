import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLogo, Facebook, Instagram, Twitter } from '../asset/icons';

const links = [
  {
    heading: 'Community',
    links: [
      {
        text: 'NFT',
        to: '/nfts',
      },
      {
        text: 'Tokens',
        to: '/tokens',
      },
      {
        text: 'Landlords',
        to: '/landlords',
      },
      {
        text: 'Discord',
        to: '/discord',
      },
    ],
  },
  {
    heading: 'Places',
    links: [
      {
        text: 'Castle',
        to: '/castle',
      },
      {
        text: 'Farms',
        to: '/farms',
      },
      {
        text: 'Villa',
        to: '/beach',
      },
      {
        text: 'Learn more',
        to: '/learn-more',
      },
    ],
  },
  {
    heading: 'About us',
    links: [
      {
        text: 'Road map',
        to: '/road-map',
      },
      {
        text: 'Creators',
        to: '/creators',
      },
      {
        text: 'Career',
        to: '/career',
      },
      {
        text: 'Contact us',
        to: '/contact-us',
      },
    ],
  },
];
const Footer = () => {
  return (
    <section className={style.Footer}>
      <div className={style.Footer__left}>
        <FooterLogo />
        <div className={style.Footer__left__socials}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div>
        {links.map(({ heading, links: link }) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <div>
              {link.map(({ text, to }) => (
                <Link to={to} key={text}>
                  <small>{text}</small>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer
