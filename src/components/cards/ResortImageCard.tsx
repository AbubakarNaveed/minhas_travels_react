import React from "react";
import "../../Styles/Resorts/resorts.css";
import Aos from "aos";
import "aos/dist/aos.css";
const ResortImageCard = ({ title, image }: { title: string; image: any }) => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade">
      <div className="resort-image-card__container shadow-xl">
        <img src={image} />
        <div className="resort-image-card__text__section">
          <div className="resort-image-card__text">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default ResortImageCard;
