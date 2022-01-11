import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay]);

// Components
import { BrandItem } from "../Brand-Item/BrandItem";

// Stiled-Components
import { BrandsStyled } from "./style";

// Data-Test
const brands = [
  {
    name: "Cemix",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/cemix_g4pfkf.jpg",
  },
  {
    name: "Eureka",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/eureka_ongcm6.jpg",
  },
  {
    name: "Fortaleza",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/fortaleza_hcplzp.jpg",
  },
  {
    name: "Holcim Apasco",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/Holcim-apasco_do0cdk.jpg",
  },
  {
    name: "Lamosa",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/lamosa_valmj8.jpg",
  },
  {
    name: "Trupper",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/trupper_nbhljz.jpg",
  },
  {
    name: "Tyasa",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083451/brand/brands/tyasa_r7hcgi.jpg",
  },
  {
    name: "Vitromex",
    logo: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083452/brand/brands/vitromex_ofyy38.jpg",
  },
];

const Brands = () => {
  const [windowWidth, setWindowWidth] = useState(320);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const resizeListener = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <BrandsStyled>
      <Swiper
        spaceBetween={0}
        slidesPerView={windowWidth > 750 ? 7 : 4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          borderRadius: "1.5rem",
          overflow: "hidden",
        }}
      >
        {brands &&
          brands.map((brand) => (
            <SwiperSlide key={brand.logo}>
              {<BrandItem {...brand} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </BrandsStyled>
  );
};

export default Brands;
