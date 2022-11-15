import React from 'react'
import meta from "./atoms/image/meta2.png";


const LearnMore = () => {
  return (
    <section className='gap-6 lg:px-12 px-4 bg-dark flex flex-col-reverse lg:flex-row  lg:py-16 py-10 justify-between'>
      <div className='text-white lg:w-[40%] w-full flex flex-col items-start gap-6 my-auto'>
        <h2 className='text-3xl font-semibold'>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button type="button " className='bg-white py-2 px-4 rounded-lg'>
          <span className='text-dark '>Learn more</span>
        </button>
      </div>
      <div className='lg:w-[50%] w-full  mx-auto lg:block '>
        <img src={meta} alt="" className='w-full'/>

      </div>
      </section>
  )
}

export default LearnMore
