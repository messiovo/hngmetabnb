import React from 'react';
import { Logo } from '../asset/icons';

const navLinks = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Place to stay',
      to: '/place-to-stay',
    },
    {
      text: 'NFTs',
      to: '/nfts',
    },
    {
      text: 'Community',
      to: '/community',
    },
  ];
const Navbar = () => {

  return (
    <div>
        <Logo/>
    </div>
  )
}

export default Navbar
