import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
    <section className=" my-12 mx-12 container ">
      
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          pagination={true}
          autoplay={{ delay: 2000 }}
          loop={true}
          className="relative w-full rounded-lg"
        >
          
          
          {images.map((image, index) => (
            
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={300}
                height={300}
                layout="responsive"
              />
            </SwiperSlide>
          ))}
        </Swiper>
     
    </section>
  );
};

export default ImageSlider;
