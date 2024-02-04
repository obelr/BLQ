import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  FreeMode,
  Scrollbar,
  A11y,
} from "swiper/modules";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://api.testvalley.kr/main-banner/all");
      const data = await response.json();
      setImages(data.map((banner) => banner.pcImageUrl));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  
  return (
    <div className="">
      <Swiper
       navigation={true}
       pagination={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        freeMode={true}
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        className=""
        effect={'coverflow'} // Apply coverflow effect
        coverflowEffect={{
          rotate: 50, // Rotate value
          stretch: 0, // Stretch value
          depth: 100, // Depth value
          modifier: 1, // Modifier value
          slideShadows: true, // Enable slide shadows
        }}
       
        autoplay={{ delay: 2000 }}
      >
        {images.map((image, index) => (
          <swiper-container key={index} init="false">
            <SwiperSlide>
            <div className="swiper-slide-overlay">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={1000}
                height={1000}
              />
              </div>
            </SwiperSlide>
          </swiper-container>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
