import React from 'react'
import insta from '../img/ig-logo.jpg'
import gitHub from '../img/github-logo.svg'
import linkedin from '../img/linkedin-logo.svg'
import igFace from '../img/fotoperfil.jpg'
import carHtml from '../img/carrusel-html.png'
import carCss from '../img/carrusel-css.png'
import carJs from '../img/carrusel-js.png'
import carReact from '../img/carrusel-react.png'
import '../Home/style.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { personalText, socialsLinks } from '../../data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  return (
    <div
      id="home"
      className="container flex flex-col md:flex-row px-4 mx-auto md:px-8 lg:max-w-7xl mt-[110px] md:mt-[140px] lg:mt-[280px] md:mb-[140px] md:items-center"
    >
      <div className="carrusel flex flex-col justify-center items-center mb-8 md:order-last md:w-[50%]">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showIndicators={false}
          showArrows={false}
        >
          <div className="w-1/2 mx-auto md:w-full rounded-full border-[7px] border-[#DBE2EF] flex items-center justify-center">
            <img className="rounded-full  p-[7px] md:p-[10px] " src={igFace} alt="Imagen 1" />
          </div>

          <div className="w-1/2 mx-auto md:w-full rounded-full border-[7px] border-[#DBE2EF] flex items-center justify-center">
            <img className="rounded-full" src={carHtml} alt="Imagen 2" />
          </div>

          <div className="w-1/2 mx-auto md:w-full rounded-full border-[7px] border-[#DBE2EF] flex items-center justify-center">
            <img className="rounded-full " src={carCss} alt="Imagen 3" />
          </div>

          <div className="w-1/2 mx-auto md:w-full rounded-full border-[7px] border-[#DBE2EF] flex items-center justify-center">
            <img className="rounded-full " src={carJs} alt="Imagen 4" />
          </div>

          <div className="w-1/2 mx-auto md:w-full rounded-full border-[7px] border-[#DBE2EF] flex items-center justify-center">
            <img className="rounded-full p-[7px] md:p-[10px]" src={carReact} alt="Imagen 5" />
          </div>
        </Carousel>
      </div>

      <div className="info ">
        <div className="text md:w-[70%]  ">
          <p className="text-white lg:text-[72px] md:text-[42px] text-[40px] flex justify-center md:justify-start ms-0 md:ms-[-5px] mb-[-3] md:mb-0  h-[55px] lg:h-[85px]">
            NACHO HARDOY
          </p>
        </div>
        <div className="text  text-black md:w-[70%]">
          <TypeAnimation
            sequence={['Programador Frontend', 2000, 'Periodista Deportivo', 2000, 'Deportista', 2000, 'Gamer', 2000]}
            speed={50}
            wrapper="span"
            className="text-[#DBE2EF] text-[25px]  lg:text-[37px] flex justify-center md:justify-start mt-[-3]"
            repeat={Infinity}
          />
        </div>

        <div className="text md:text-[22px] md:w-[70%] text-justify mt-6 md:mt-4">
          <p className="text-[#DBE2EF]">{personalText[0].obj}</p>
        </div>
        <div className="socials flex items-center justify-around md:w-[70%] md:justify-around mt-[30px] mb-0 md:mb-[50px]">
          <ul className="flex">
            <li>
              <a href={socialsLinks[0].github}>
                <img src={gitHub} alt="GitHub" className="w-7 h-7 md:w-[45px] md:h-[45px] me-3 md:me-5" />
              </a>
            </li>

            <li>
              <a href={socialsLinks[0].linkedin}>
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 md:w-[45px] md:h-[45px] me-3 md:me-5" />
              </a>
            </li>
            <li>
              <a href={socialsLinks[0].ig}>
                <img src={insta} alt="Instagram" className="w-7 h-7 md:w-[45px] md:h-[45px]" />
              </a>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:w-[150px] md:h-[40px] bg-[#DBE2EF] hover:bg-[#F9F7F7] focus:ring-4 focus:outline-none focus:[#3F72AF] dark:focus:[#3F72AF] shadow-lg shadow-[#3F72AF] dark:shadow-lg dark:shadow-[#3F72AF] font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase text-[#3F72AF]"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Home
