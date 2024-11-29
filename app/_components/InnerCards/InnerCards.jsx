import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./style.css"; // Include your custom styles

const InnerCards = () => {
  const slides = [
    {
      price: "$20",
      name: "Special Pizza",
      img: "/development/innerPages/ios/blog1.webp",
      title: "Delicious Pizza",
      description: "A special pizza with a unique blend of flavors. Freshly baked and topped with the finest ingredients for a delightful experience."
    },
    {
      price: "$20",
      name: "Meat Ball",
      img: "/development/innerPages/ios/blog2.webp",
      title: "Tasty Meat Balls",
      description: "Savory meatballs made from premium beef, seasoned to perfection, and served with a rich tomato sauce for a mouth-watering dish."
    },
    {
      price: "$40",
      name: "Burger",
      img: "/development/innerPages/ios/blog3.webp",
      title: "Gourmet Burger",
      description: "A juicy, gourmet burger with the perfect blend of flavors, served with crispy fries on the side. A true indulgence for burger lovers."
    },
    {
      price: "$15",
      name: "Frish Curry",
      img: "/development/innerPages/ios/blog4.webp",
      title: "Fragrant Curry",
      description: "A deliciously spiced curry that’s packed with flavor. Made with fresh ingredients for a rich, aromatic experience."
    },
    {
      price: "$15",
      name: "Pane Cake",
      img: "/development/innerPages/ios/blog5.webp",
      title: "Fluffy Pancakes",
      description: "Light, fluffy pancakes drizzled with syrup and served with fresh fruits on top. A perfect breakfast treat for everyone."
    },
    {
      price: "$20",
      name: "Vanilla Cake",
      img: "/development/innerPages/ios/blog6.webp",
      title: "Creamy Vanilla Cake",
      description: "A rich and creamy vanilla cake with a smooth frosting. The perfect balance of sweetness and texture for every occasion."
    },
    {
      price: "$8",
      name: "Straw Cake",
      img: "/development/innerPages/ios/blog1.webp",
      title: "Strawberry Cake",
      description: "A sweet and tangy strawberry cake topped with fresh berries. Perfect for those who love fruity desserts with a soft and moist texture."
    },
  ];

  return (
    <div className="innerContainer">

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2} 
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.img} alt={slide.name} />
              <div className="absolute bottom-0 left-0 bg-black opacity-90 w-full h-[40%]">
                <h1 className="text-4xl text-white mt-4 ml-4 font-bold font-sans">{slide.title}</h1>
                <p className="mt-4 ml-4 text-white text-xl w-[90%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente illo officia tempora repellat sunt nobis quos veniam numquam. Odio laboriosam cumque ipsam fuga ducimus placeat necessitatibus culpa excepturi quasi corporis.</p>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InnerCards;
