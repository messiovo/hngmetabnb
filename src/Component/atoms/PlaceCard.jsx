import React, {useId} from 'react';
import { Like, Star } from '../../asset/icons';


const PlaceCard = ({
    image,
    title,
    payment,
    distance,
    availability,
    stars,
  }) => {
    const id = useId();
    const starsArr = Array(stars).fill(null);
    const nullStars = Array(5 - stars).fill(null);

    return (
      <section className="flex flex-col relative border border-black/[0.1] rounded-lg p-4" >
        <img src={image} alt="places card" />
        <Like

        />
        <div className='flex text-sm justify-between pt-4'>
        <div className='flex flex-col'>
          <small>{title}</small>
          <small>
            {distance}
          </small>
        </div>
        <div
          className="flex flex-col"
        >
          <small><b>{payment}</b></small>
          <small>{availability}</small>
        </div>
        </div>
        <div className='flex pt-2 gap-1'>
          {starsArr.map((_, i) => (
            <Star key={id + i} />
          ))}
          {nullStars.map((_, i) => (
            <Star key={id + i} fill="#e96eb5" />
          ))}
        </div>
      </section>
    );
  };



export default PlaceCard
