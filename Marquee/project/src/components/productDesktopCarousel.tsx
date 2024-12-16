import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import Marquee from "react-fast-marquee";
import JoyLatamMarquee from "../interfaces/joy_latam_marquee";

interface CarouselProps {
  data: JoyLatamMarquee | undefined;
}

const ProductDesktopCarousel: React.FC<CarouselProps> = ({ data }) => {
  const [row1, setRow1] = useState([
    `${data?.imageRoutes}first_row_1.png`,
    `${data?.imageRoutes}first_row_2.png`,
    `${data?.imageRoutes}first_row_3.png`,
    `${data?.imageRoutes}first_row_4.png`,
    `${data?.imageRoutes}first_row_5.png`,
    `${data?.imageRoutes}first_row_6.png`,
    `${data?.imageRoutes}first_row_7.png`,
  ]);

  const [animateClasses, setAnimateClasses] = useState<string[]>(
    Array(row1.length).fill("")
  );

  const row2 = [
    `${data?.imageRoutes}second_row_1.png`,
    `${data?.imageRoutes}second_row_2.png`,
    //'/images/gallery_products/elmachips/second_row_text.png',
    `${data?.imageRoutes}second_row_3.png`,
    `${data?.imageRoutes}second_row_4.png`,
    `${data?.imageRoutes}random10.png`,
    `${data?.imageRoutes}random6.png`,
    `${data?.imageRoutes}random5.png`,
  ];

  const [row3, setRow3] = useState([
    `${data?.imageRoutes}third_row_1.png`,
    `${data?.imageRoutes}third_row_2.png`,
    `${data?.imageRoutes}third_row_3.png`,
    `${data?.imageRoutes}third_row_4.png`,
    `${data?.imageRoutes}third_row_5.png`,
    `${data?.imageRoutes}third_row_6.png`,
    `${data?.imageRoutes}third_row_7.png`,
  ]);

  const [animateClasses3, setAnimateClasses3] = useState<string[]>(
    Array(row3.length).fill("")
  );

  const updateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * row1.length);
    const randomImageNumber = Math.floor(Math.random() * 17) + 1;
    const randomIndex3 = Math.floor(Math.random() * row1.length);
    const randomImageNumber3 = Math.floor(Math.random() * 17) + 1;

    const newImagePath = `${data?.imageRoutes}random${randomImageNumber}.png`;
    const newImagePath3 = `${data?.imageRoutes}random${randomImageNumber3}.png`;

    const updatedRow = row1.map((image, index) =>
      index === randomIndex ? newImagePath : image
    );

    const updatedRow3 = row3.map((image, index) =>
      index === randomIndex3 ? newImagePath3 : image
    );

    setRow1(updatedRow);
    setRow3(updatedRow3);

    const newAnimateClasses = Array(row1.length).fill("");
    newAnimateClasses[randomIndex] = "animate__animated animate__fadeIn";
    setAnimateClasses(newAnimateClasses);

    const newAnimateClasses3 = Array(row3.length).fill("");
    newAnimateClasses3[randomIndex3] = "animate__animated animate__fadeIn";
    setAnimateClasses3(newAnimateClasses3);

    setTimeout(() => {
      const resetAnimateClasses = Array(row1.length).fill("");
      setAnimateClasses(resetAnimateClasses);

      const resetAnimateClasses3 = Array(row3.length).fill("");
      setAnimateClasses3(resetAnimateClasses3);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(
      updateRandomImage,
      Math.random() * 2000 + 1000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className="">
      <img
        src={`${data?.backgroundImage}`}
        alt="Overlay"
        className="overlay-image"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          pointerEvents: "none",
          width: "1000px",
          height: "auto",
        }}
      />

      <Marquee gradient={true} direction={"right"} speed={50}>
        {[row1].map((row, rowIndex) => (
          <div key={rowIndex} className="product-image-row marquee-item">
            {row.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Image ${imgIndex + 1}`}
                className={`product-gallery-image ${
                  image.includes("second_row_text.png") ? "special-span" : ""
                } 
                ${animateClasses[imgIndex]}             
              `}
              />
            ))}
          </div>
        ))}
      </Marquee>
      <Marquee gradient={true} speed={60} direction="left">
        {[row2].map((row, rowIndex) => (
          <div key={rowIndex} className="product-image-row marquee-item">
            {row.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Image ${imgIndex + 1}`}
                className={`product-gallery-image ${
                  image.includes("second_row_text.png") ? "special-span" : ""
                }              
              `}
              />
            ))}
          </div>
        ))}
      </Marquee>
      <Marquee gradient={true} speed={70} direction={"right"}>
        {[row3].map((row, rowIndex) => (
          <div key={rowIndex} className="product-image-row marquee-item">
            {row.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Image ${imgIndex + 1}`}
                className={`product-gallery-image ${
                  image.includes("second_row_text.png") ? "special-span" : ""
                }          
                ${animateClasses[imgIndex]}         
              `}
              />
            ))}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ProductDesktopCarousel;
