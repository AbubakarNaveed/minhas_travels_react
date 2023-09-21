import { useEffect } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Styles/Resorts/resorts.css";
import Dubai from "../Assets/dubai.jpg";
import Bangkok from "../Assets/Bangcok.jpg";
import Java from "../Assets/Java.jpg";
import HorseRiding from "../Assets/HEADER-Horse-Riding-Sligo.jpg";
import Boat from "../Assets/photo-1498994292978-4d6ff757c6dc.jpeg";
import Ship from "../Assets/vertical-photo-wooden-boat-crystal-lake-majestic-mountain-behind-reflection-water-vertical-photo-wooden-boat-165454091.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Mountain from "../Assets/Half-Day-Fun-Climb-Colorado.jpg";
import Bali from "../Assets/Bali.jpg";
import ResortImageCard from "./cards/ResortImageCard";
import Divider from "../Assets/divider.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Resorts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const resortImages: { id: number; title: string; image: any }[] = [
    { id: 0, title: "Visit oasis resorts in the desert", image: Dubai },
    { id: 1, title: "Calm blue water of Bali", image: Bali },
    { id: 2, title: "Enjoy the vastness of South-China sea", image: Boat },
    { id: 3, title: "Mesmerizing volcanic rocks of java", image: Java },
    { id: 4, title: "Ride horses in plateaus of Utah", image: HorseRiding },
    { id: 5, title: "Cherish the isolation of sea", image: Ship },
    { id: 6, title: "Conqueror mountains of grand-canyon ", image: Mountain },
    {
      id: 7,
      title: "Get lost in beauty of rain forests of Thailand",
      image: Bangkok,
    },
  ];

  return (
    <div className="resort__container">
      <div className="resort__content">
        <div
          data-aos="fade-up"
          className="resort__heading text-black text-center flex items-center justify-center flex-col"
        >
          Make your vacation memorable
          <img src={Divider} alt="divider" />
        </div>

        <div className="mt-1">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 300: 1, 450: 2, 900: 3 }}
          >
            <Masonry columnsCount={3}>
              {resortImages.map(({ title, image, id }, index) => {
                return (
                  <ResortImageCard key={index} title={title} image={image} />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default Resorts;
