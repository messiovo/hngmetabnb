import React from 'react';
import { LeftArrow } from '../../asset/icons';
import wallet from "./image/walletconnect.png"

const WalletCollect = () => {
  return (
    <div className='border border-black/[0.1] flex justify-between px-6 items-center rounded-lg w-full'>
    <div className='flex items-center gap-3 py-2 '>
      <img src={wallet} alt="" />
      <span>WalletConnect</span>
    </div>
    <LeftArrow/>
    </div>
  )
}

export default WalletCollect
