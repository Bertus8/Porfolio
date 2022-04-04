import './Home.scss';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <div className='container-home'>
    <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(./images/Home.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
        <div className='container-text'>
    <p className='text-home'>Diseñador Gráfico y desarrollador junior Frontend con formación Full Stack</p>
    <p className='text-home1'>He decidido formarme en el mundo del desarrollo de App por lo que he realizado un Bootcamp en 3 meses enfrentandome a un conocimiento nuevo que me ha fascinado y abierto una puerta ha realizar de nuevo una de las cosas que mas me gusta diseñar y maquetar.
Me he formado en la rama artística por vocación, para ello he estudiado y me he interesado por el arte en el mundo digital.
</p>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container-text'>
    <p className='text-home'>UPGRADE HUB</p>
    <p className='text-home1'>Full Stack es el desarrollo web en todas sus facetas, desde el diseño e interacción de páginas web (Front End), hasta la programación y la gestión de datos de la web (Back End).
    </p>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container-text'>
          <div className="text-home" data-swiper-parallax="-300">
            BARREIRA
          </div>
          <div className="text-home1" data-swiper-parallax="-200">
          <p>Con los Estudios Superiores en Diseño Gráfico podrás trabajar como:</p>

<p>Diseño editorial y productor gráfico creando identidad corporativa y visual</p>
<p>Director de arte en publicidad</p>
<p>Diseño audiovisual</p>
<p>Grafismo en televisión</p>
<p>Diseño web y multimedia</p>
<p>Branding</p>
<p>Diseño de packaging</p>
<p>Ilustración</p>
<p>Diseño ambiental: gráfica y comunicaciones aplicadas al espacio</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}

export default Home