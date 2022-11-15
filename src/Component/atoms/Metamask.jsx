import React from 'react';
import { LeftArrow } from '../../asset/icons';
import metamask from "./image/metamask.png"

const MetaMask = () => {
  return (
    <div className='border border-black/[0.1] flex justify-between px-6 items-center rounded-lg w-full'>
    <div className='flex items-center gap-3 py-2 '>
      <img src={metamask} alt="" />
      <span>Metamask</span>
    </div>
    <LeftArrow/>
    </div>
  )
}

export default MetaMask
