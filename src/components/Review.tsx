import { useEffect, useState } from "react";
import "../Styles/Review/review.css";
import ReviewCard from "./cards/reviewCard";
import ReviewCardMobile from "./cards/reviewCardMobile";

const Review = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  console.log(window.innerWidth);

  return (
    <div className="review__container">
      <div className="review__wrapper">
        <div className="review__heading text-center text-black">
          We know what you crave
        </div>
        <div className="mt-[100px]">
          <div className="carousel w-full">
            {windowWidth >= 770 ? (
              <>
                {" "}
                <div
                  id="slide1"
                  className="carousel-item relative w-full  flex justify-center"
                >
                  <div className="flex px-[54px] gap-2">
                    <ReviewCard name={"Abubakar"} posted={1} rating={5.0} />
                    <ReviewCard name={"Jone"} posted={1} rating={4.9} />
                    <ReviewCard name={"Ali"} posted={2} rating={4.5} />
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item relative w-full  flex justify-center"
                >
                  <div className="flex px-[54px] gap-2">
                    <ReviewCard name={"Zim"} posted={3} rating={4.0} />
                    <ReviewCard name={"Janny"} posted={5} rating={4.2} />
                    <ReviewCard name={"Eren"} posted={6} rating={4.7} />
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="carousel carousel-center max-w-[100%] p-2 h-[100%] rounded-box gap-2">
                  <div className="carousel-item">
                    <ReviewCardMobile
                      name={"Abubakar"}
                      posted={1}
                      rating={5.0}
                    />
                  </div>
                  <div className="carousel-item">
                    <ReviewCardMobile name={"Jone"} posted={1} rating={4.9} />
                  </div>
                  <div className="carousel-item">
                    <ReviewCardMobile name={"Ali"} posted={2} rating={4.5} />
                  </div>
                  <div className="carousel-item">
                    <ReviewCardMobile name={"Zim"} posted={3} rating={4.0} />
                  </div>
                  <div className="carousel-item">
                    <ReviewCardMobile name={"Janny"} posted={5} rating={4.2} />
                  </div>
                  <div className="carousel-item">
                    <ReviewCardMobile name={"Eren"} posted={6} rating={4.7} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
