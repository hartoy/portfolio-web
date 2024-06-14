import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import diploma from '../../img/diploma.webp'
import dh from '../../img/digital-house.png'
import ProgressBar from './progress-bar'
import nextsvg from '../../img/next.svg'
import { useTranslation } from 'react-i18next'

const News = () => {
  const { t } = useTranslation()
  return (
    <div className="container flex flex-col  md:flex px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white">
      <div id="proyectos" className="flex-1 flex flex-col md:flex gay-y-12 mb-10 lg:mb-0">
        <div className="workText md:text-[22px]  text-justify">
          <h2 className="md:text-[72px] text-[42px] mb-4 text-center uppercase">{t('navbar.news')}</h2>
          <p className="mb-8 md:mb-12 italic text-[DBE2EF]">{t('subtitles.subNews')}</p>
        </div>
        <div className="text-news md:flex">
          <div className="flex md:flex md:w-1/2  justify-center items-center md:pr-4">
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col"
            >
              <span className="md:text-[32px] text-[28px] lg:mb-2 md:mb-1 text-center uppercase">2024</span>
              <img
                src={nextsvg}
                alt="Next.js Logo"
                className="w-[70%] md:w-[50%] mx-auto my-4 md:my-0 lg:my-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
              />

              <img className="md:w-[50%]  w-[60%] mx-auto" src={dh} alt="" />
              <div className="w-full">
                <ProgressBar bgcolor="#0D7F0A" completed={100} />
              </div>
            </motion.div>
          </div>
          <div className="imagen-news w-full md:w-1/2 md:pl-4">
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col"
            >
              <img className="rounded border-[5px] border-[#3F72AF] w-full md:w-[90%]" src={diploma} alt="diploma" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
