import React from "react";
import { PlaceCard } from "../Component/atoms";
import { Locale } from "../asset/icons";

const contents = [
  "Restuarant",
  "Cottage",
  "Castle",
  "fantast city",
  "beach",
  "Carbins",
  "Off-grid",
  "Farm",
];

const placeDetails = [
  {
    image: require("../asset/images/places5.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places6.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places7.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places8.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places1.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places2.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places3.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places4.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places9.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places10.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places11.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places12.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places13.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places14.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places15.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  },
  {
    image: require("../asset/images/places16.png"),
    title: "Desert king",
    payment: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
    stars: 5,
  }
];

const PlaceToStay = () => {
  return (
    <section className="py-10 lg:px-12 px-4 mt-20">
      <div className="grid lg:grid-cols-9 grid-cols-3 gap-4 py-10">
        {contents.map((items) => (
          <button key={items} type="button">
            {items}
          </button>
        ))}
        <div className="flex gap-2 border border-black/[0.1] py-2 px-4">
          <span>Location</span>
          <Locale />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {placeDetails.map((place) => (
          <PlaceCard key={place.image} relativeUrl="place-to-stay" {...place} />
        ))}
      </div>
    </section>
  );
};

export default PlaceToStay;
