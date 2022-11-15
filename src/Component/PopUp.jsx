import React, {useState} from 'react'

const PopUp = () => {
    const [backdrop, setBackdrop] = useState(false);
  return (
    <div className=''>
 <div
          className={`${
            !backdrop ? "left-[-90rem]" : "left-0"
          } w-full h-full fixed top-[4.0rem] lg:top-[4.5rem] z-30 bg-black/90 transition-all duration-700 ease-in`}
        ></div>
        <div>
            hello
        </div>
    </div>
  )
}

export default PopUp
