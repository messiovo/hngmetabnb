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
    <section className='bg-[#1D1D1E] text-white lg:px-12 px-4  py-10 flex lg:flex-row flex-col-reverse lg:gap-0 gap-8'>
      <div className='flex flex-col gap-6 lg:w-[30%] w-full justify-between lg:items-start items-center ' >
        <FooterLogo />
        <div className='flex items-center gap-3'>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className='flex lg:flex-row flex-col lg:w-[60%] w-full justify-between lg:gap-0 gap-6'>
        {links.map(({ heading, links: link }) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <div className='flex flex-col gap-4 pt-2'>
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
