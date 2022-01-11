import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "../../node_modules/swiper/swiper-bundle.min.css";

// Components

// Stiled-Components
import { SliderStyled, SliderItem } from "./style";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// install Swiper modules
SwiperCore.use([Autoplay]);

const Slider = ({ sliderItems }) => {
  return (
    <SliderStyled>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {sliderItems &&
          sliderItems.map(({ articulo_id, image, link, text }) => (
            <SwiperSlide key={articulo_id}>
              <SliderItem href={link} area-aria-label={text}>
                <Image
                  loader={loader}
                  src={`data:image/jpg;base64,${image}`}
                  alt={text}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL
                />
              </SliderItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </SliderStyled>
  );
};

export default Slider;
