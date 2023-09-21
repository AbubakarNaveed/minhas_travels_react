import React, { useState } from "react";
import "../Styles/price/price.css";
import MountAtlas from "../Assets/atlas.jpeg";
import TravelCard from "./cards/travelCard";
import Berlin from "../Assets/berlin.jpg";
import Rome from "../Assets/Rome.jpg";
import Dresden from "../Assets/Dresden.jpg";
import Dubai from "../Assets/dubai.jpg";
import Paris from "../Assets/Paris.jpg";
import Sarvjo from "../Assets/sarvejo.jpg";
import Venice from "../Assets/venice.jpg";
import Jakarta from "../Assets/Jakarta_Rizky-Maharani_Wikimedia-Commons.jpg";
import Wengen from "../Assets/wengen.jpg";
import Tokyo from "../Assets/tokyo-main.jpg";
import China from "../Assets/the-great-wall-of-china.jpg";

const Destinations = [
  {
    id: 1,
    image: Venice,
    text: "boat in awesome waterways of venice",
    price: "3500",
    label: "Venice(Italy)",
  },
  {
    id: 2,
    image: MountAtlas,
    text: "Lose yourself in isolation of Atlas mountains",
    price: "2500",
    label: "Mount Atlas(Greece)",
  },
  {
    id: 3,
    image: Berlin,
    text: "Experience the history of the Berlin",
    price: "3000",
    label: "Berlin(Germany)",
  },
  {
    id: 4,
    image: Rome,
    text: "Get mesmerized by ancient structure ",
    price: "3100",
    label: "Rome(Italy)",
  },
  {
    id: 5,
    image: Dresden,
    text: "Visit cultural hub of holy roman empire",
    price: "3300",
    label: "Dresden(Germany)",
  },
  {
    id: 6,
    image: Paris,
    text: "Visit the cultural and fashion center of Europe",
    price: "4300",
    label: "Paris(France)",
  },
  {
    id: 7,
    image: Sarvjo,
    text: "Mountainous city with deep history",
    price: "2000",
    label: "Sarvijo(Bosnia)",
  },
  {
    id: 8,
    image: Dubai,
    text: "Oasis in desert with beautiful sky scrappers",
    price: "2600",
    label: "Dubai City",
  },
  {
    id: 9,
    image: Jakarta,
    text: "Trade hub with modern skyscrapers ",
    price: "2000",
    label: "Jakarta(Indonesia)",
  },
  {
    id: 10,
    image: Tokyo,
    text: "Experience unique culture and architecture",
    price: "3930",
    label: "Tokyo(Japan)",
  },
  {
    id: 11,
    image: Wengen,
    text: "Breath the fresh air of Swiss alps ",
    price: "4100",
    label: "Wengen(Switzerland)",
  },
  {
    id: 12,
    image: China,
    text: "visit monument that defines modern China",
    price: "2500",
    label: "Great Wall (China)",
  },
];

// const filterDestinations = (): any => {
//   Destinations.filter(item=>)
// };

const Prices = () => {
  const [priceInput, setPriceInput] = useState({
    place: "",
    date: "",
    range: "5000",
  });
  console.log(priceInput);

  const destinationFilter = (Places: any): any => {
    if (priceInput.place === "") {
      return Places.filter((place: any): any => {
        return parseInt(place.price) <= parseInt(priceInput.range);
      });
    } else {
      return Places.filter((place: any): any => {
        return (
          parseInt(place.price) <= parseInt(priceInput.range) &&
          place.label.toLowerCase().includes(priceInput.place)
        );
      });
    }
  };
  console.log(destinationFilter(Destinations));
  return (
    <div className=" bg-[#ADD8E6] py-[100px]">
      <div className="max-w-[1250px] mx-auto  flex  flex-col items-center gap-10 ">
        <div className="price-box__container shadow-2xl">
          <div className="price-box__input__wrapper">
            <label className="text-black">Place</label>
            <input
              type="text"
              value={priceInput.place}
              className="price-box__text__input bg-white"
              onChange={(e) =>
                setPriceInput({ ...priceInput, place: e.target.value })
              }
            />
          </div>

          <div className="price-box__input__wrapper">
            <label className="text-black">Price Range</label>
            <input
              type="range"
              min={2000}
              max={5000}
              step={100}
              onChange={(e) =>
                setPriceInput({ ...priceInput, range: e.target.value })
              }
              defaultValue={priceInput.range}
              style={{ width: "230px", backgroundColor: "#000" }}
            />
            <p className="text-black">${priceInput.range}</p>
          </div>
        </div>
        <div></div>
        {/* <div className="travel-card__wrapper grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
         */}
        <div className="travel-card__wrapper flex justify-center flex-wrap">
          {
            /* {destinationFilter(Destinations).map((place: any): any => {
            return (
              <TravelCard
                key={place.id}
                label={place.label}
                text={place.text}
                price={place.price}
                image={place.image}
              ></TravelCard>
            );
          })} */

            destinationFilter(Destinations).length !== 0 ? (
              destinationFilter(Destinations).map((place: any): any => {
                return (
                  <TravelCard
                    key={place.id}
                    label={place.label}
                    text={place.text}
                    price={place.price}
                    image={place.image}
                  ></TravelCard>
                );
              })
            ) : (
              <h1 className="text-2xl font-extrabold">
                No destination available
              </h1>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Prices;
