import React from 'react'
import './navbar.css'
import { useState } from 'react'
import navMenu from '../img/navbar-menu.svg'
import EsFlag from '../img/esp-flag.png'
import GbFlag from '../img/gb-flag.png'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  const handleNavbarToggle = () => {
    setNavbar(!navbar)
    setMenuVisible(true)

    if (navbar) {
      console.log('menu baja')
      setTimeout(() => {
        setMenuVisible(false)
      }, 500)
    } else {
      console.log('menu sube')
    }
  }

  return (
    <nav className="w-full text-white bg-[#3F72AF]  fixed z-50">
      <div className="px-4 mx-auto md:items-center md:flex md:justify-between md:px-8 lg:max-w-7xl md:h-[85px] ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="" style={{ fontFamily: "'Bungee Inline', cursive" }}>
              <h2 className="leading-none md:text-[25px] hover:text-[#112D4E]">Nacho</h2>
              <h2 className="ms-5 leading-none md:text-[25px] hover:text-[#112D4E]">Hardoy</h2>
            </a>
            <div className="md:hidden">
              <button className="p-2 text-white rounded-md outline-none" onClick={handleNavbarToggle}>
                {navbar ? (
                  //navbar true te muestra la x y abre el menu

                  //PASAR EL SVG A IMAGENES
                  <img src={navMenu} alt="SVG" className="w-6 h-6" />
                ) : (
                  //navbar true te muestra la la bruga y lo cierra

                  //PASAR EL SVG A IMAGENES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12 ">
          {/* MENU DESPLEGABLE ATADO A ESTADO NAVBAR */}
          <div
            className={`flex flex-col md:flex md:flex-row md:h-[65px] md:items-center h-screen space-between overflow-hidden justify-start md:justify-between  justify-self-center pb-3 mt-3 md:mt-0 md:block md:pb-0 md:mt-0 menu-dropdown ${
              navbar ? 'menu-dropdown-open' : 'menu-dropdown-close'
            } ${menuVisible ? 'block' : 'hidden'}`}
          >
            <div className="divdeul flex flex-col md:flex-row justify-start h-[70%]">
              <ul className="flex h-full  justify-between text-[30px] md:text-[20px] flex-col md:flex-row items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-[#112D4E]">
                  <a href="#home">Home</a>
                </li>
                <li className="text-white hover:text-[#112D4E]">
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li className="text-white hover:text-[#112D4E]">
                  <a href="#exp">Experiencia </a>
                </li>
                <li className="text-white hover:text-[#112D4E]">
                  <a href="#hobbies">Hobbies</a>
                </li>

                <li className="text-white hover:text-[#112D4E]">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="gadgets flex justify-around md:justify-end md:items-end">
              <div className="idioms flex justify-center content-end md:me-[5px] mt-[80px] md:mt-0 relative">
                <button>
                  <img className="w-[45px] md:w-[30px] hover:w-[40px]  me-2" src={EsFlag} alt="" />
                </button>
                <button>
                  <img className="w-[35px] md:w-[25px] hover:w-[35px] ms-2" src={GbFlag} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
