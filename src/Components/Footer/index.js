import React from 'react'
import fish from '../../img/fish-62.gif'
import raya from '../../img/raya.gif'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer mt-[185px] relative w-full bg-[#3586ff] h-[110px] md:h-[130px]">
      <div className="waves">
        <div className="wave " id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="content flex  justify-center items-center justify-between px-4 mx-auto md:px-8 lg:max-w-7xl">
        <div className="w-1/3 justify-center items-center w-1/3">
          <img className="md:h-[92px]" src={fish} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <span className="italic text-[#112D4E]">Coded by</span>
          <span
            className="text-[15px] md:text-[30px] text-[#112D4E] text-center"
            style={{ fontFamily: "'Bungee Inline', cursive" }}
          >
            Nacho Hardoy
          </span>
        </div>
        <div className="flex  justify-end items-center w-1/3">
          <img className="h-[38px] md:h-[72px]" src={raya} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
