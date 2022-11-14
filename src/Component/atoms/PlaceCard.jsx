import React, {useId, useState} from 'react';
import { Like, Star } from '../../asset/icons';


const PlaceCard = ({
    image,
    title,
    payment,
    distance,
    availability,
    stars,
    relativeUrl,
  }) => {
    const id = useId();
    const starsArr = Array(stars).fill(null);
    const nullStars = Array(5 - stars).fill(null);
    const [liked, setLiked] = useState(false);
    return (
      <section >
        <img src={image} alt="places card" />
        <Like
          className=""
          fill={liked ? 'red' : '#D7D7D7'}
          onClick={() => setLiked(!liked)}
        />
        <div className=''>
          <small>{title}</small>
          <small>
            <b>{payment}</b>
          </small>
        </div>
        <div
          className=""
        >
          <small>{distance}</small>
          <small>{availability}</small>
        </div>
        <div className=''>
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
