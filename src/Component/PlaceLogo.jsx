import React from 'react';
import {MBToken, Metamask, Opensea} from '../asset/icons'

const PlaceLogo = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-4 bg-dark px-12 py-4 ">
      <MBToken />
      <Metamask />
      <Opensea />
    </section>
  )
}

export default PlaceLogo
