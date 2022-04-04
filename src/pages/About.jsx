import React from 'react';
import './About.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const About = () => {
  return (
    <div className='container-about'>
    <img className='img-about' src="./images/About.jpg" alt="plano forntal zapatilla" />
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img-slide' src='./images/gallery/japon.jpg' alt='perro mochila'/>
        </SwiperSlide>
        <SwiperSlide><img className='img-slide1' src='./images/gallery/templo.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide1' src='./images/gallery/bosque.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide1' src='./images/gallery/casa.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide2' src='./images/gallery/formentera.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide1' src='./images/gallery/molino.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide2' src='./images/gallery/bodegon.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide3' src='./images/gallery/torres.jpg' alt='perro mochila'/></SwiperSlide>
        <SwiperSlide><img className='img-slide3' src='./images/gallery/opera.jpg' alt='perro mochila'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default About