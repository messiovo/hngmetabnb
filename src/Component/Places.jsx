import React, { useId } from 'react';
import { PlaceCard } from './atoms';

const placeDetails = [
    {
      image:  require("../asset/images/places1.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places2.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places3.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places4.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places5.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places6.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places7.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
    {
      image:  require("../asset/images/places8.png"),
      title: 'Desert king',
      payment: '1MBT per night',
      distance: '2345km away',
      availability: 'available for 2weeks stay',
      stars: 5,
    },
  ];
  const Places = () => {
    const id = useId();
    return (
      <section className="lg:px-12 px-4">
        <h2 className='text-xl lg:text-3xl font-bold text-center py-6'>Inspiration for your next adventure</h2>
        <div className="">
        {placeDetails.map((items, i) => (
          <PlaceCard key={id + i} {...items} />
        ))}
        </div>
      </section>
    );
  };

export default Places
