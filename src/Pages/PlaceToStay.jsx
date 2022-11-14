import React from 'react';
import { PlaceCard } from '../Component/atoms';


const filters = [
    'Restuarant',
    'Cottage',
    'Castle',
    'fantast city',
    'beach',
    'Carbins',
    'Off-grid',
    'Farm',
  ];

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

const PlaceToStay = () => {
  return (
    <section>
      <div>
        {filters.map((filter) => (
          <button key={filter} type="button">{filter}</button>
        ))}
        <div >
          <span>Location</span>
          {/* <Filter /> */}
        </div>
      </div>
      <div>
      {placeDetails.map((place) => (
        <PlaceCard key={place.image} relativeUrl="place-to-stay" {...place} />
      ))}
      </div>
    </section>
  )
}

export default PlaceToStay
