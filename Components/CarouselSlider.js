
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, FreeMode } from "swiper/modules";
import 'swiper/css';
const CarouselSlider = ({ images }) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, FreeMode]}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
   
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
    
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
