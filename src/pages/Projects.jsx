import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCube, Pagination} from "swiper";
import './Projects.scss';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className='container-projects'>
    <img className='img-projects' src="./images/Projects.jpg" alt="plano forntal zapatillas" />
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/projects/project1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/projects/project7.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects