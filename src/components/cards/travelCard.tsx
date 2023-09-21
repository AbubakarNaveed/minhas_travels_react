import React from "react";
import "../../Styles/price/price.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TravelCard = ({
  label,
  text,
  image,
  price,
}: {
  label: string;
  text: string;
  image: any;
  price: string;
}) => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="cards__item bg-[#fff]" data-aos="fade-up">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img className="cards__item__img" alt="Travel Image" src={image} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text text-center">{text}</h5>
            <h5 className="cards__item__text text-center mt-4 border-t-2 pt-2">
              Expenditure ${price}
              <h6 className="text-[10px] text-gray-500">
                1 week stay in 5-star hotel + return tickets
              </h6>
              <button className="bg-[#1f98f4] p-2 mt-2 border-r-2 text-sm rounded-md text-white shadow-md hover:bg-blue-300 ease-in duration-75">
                BOOK NOW
              </button>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
