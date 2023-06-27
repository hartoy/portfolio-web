import React from 'react'
import waveImg from '../img/dark-wave.png'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer mt-[185px] relative w-full bg-[#3586ff] h-[130px] px-20 py-50 flex justify-center items-center flex-col">
      <div className="waves">
        <div className="wave " id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="italic text-[#112D4E]">Coded by</span>
        <span className="text-[15px] md:text-[30px] text-[#112D4E]" style={{ fontFamily: "'Bungee Inline', cursive" }}>
          Nacho Hardoy
        </span>
      </div>
    </footer>
  )
}

export default Footer
