import React from 'react'
import image7 from "../asset/images/image7.png";
import image8 from "../asset/images/image8.png";
import image9 from "../asset/images/image9.png";

const LearnMore = () => {
  return (
    <section className='gap-6 lg:px-12 px-4 bg-dark flex flex-col-reverse lg:flex-row lg:h-[90vh] h-[60rem] py-14 justify-between'>
      <div className='text-white lg:w-[40%] w-full flex flex-col items-start gap-6 my-auto'>
        <h2 className='text-3xl font-semibold'>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button type="button " className='bg-white py-2 px-4 rounded-lg hover:bg-dark'>
          <span className='text-dark hover:text-white'>Learn more</span>
        </button>
      </div>
      <div className='lg:w-[50%] w-full lg:relative flex flex-col items-center'>
        <img src={image7} alt="" className='w-[60%] lg:absolute lg:z-[1] lg:top-[10rem] lg:left-0' />
        <img src={image8} alt=""  className='w-[60%] lg:absolute z-[2] lg:left-[15rem] lg:top-[13rem]'/>
        <img src={image9} alt=""  className='w-[60%] lg:absolute lg:left-[12rem]'/>

      </div>
      </section>
  )
}

export default LearnMore
