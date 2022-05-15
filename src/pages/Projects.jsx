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
          <a href='https://rick-and-morty-plum.vercel.app/'>
          <img src="./images/projects/project1.png" alt="Rick and Morthy"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https:angular-animes.vercel.app'>
          <img src="./images/projects/project2.png" alt="Anime Tokyo Goul"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://bertus8.github.io/Pokemon-Api/' >
          <img src="./images/projects/project3.png" alt="Pokemons"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://bertus8.github.io/Topo_Game/' >
          <img src="./images/projects/project4.png" alt="Stargate"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://proyecto-final-react-vert.vercel.app/' >
          <img src="./images/projects/project5.png" alt="Protectora de Animales"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://cv-react-ten.vercel.app' >
          <img src="./images/projects/project6.png" alt="Cudrículum"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://my-clock-pi.vercel.app'>
          <img src="./images/projects/project7.png" alt="Reloj digital"/>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects