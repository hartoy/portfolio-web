import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import gitHub from '../../img/github-logo.svg'

import { socialsLinks, proyects } from '../../data'
import { useTranslation } from 'react-i18next'

const Works = () => {
  const { t } = useTranslation()

  return (
    <div className="container flex flex-col  px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white">
      <div id="proyectos" className="flex-1 flex flex-col gay-y-12 mb-10 lg:mb-0">
        <div className="workText md:text-[22px]  text-justify">
          <h2 className="md:text-[72px] text-[42px] mb-4 text-center uppercase">{t('navbar.projects')}</h2>
          <p className="mb-8 md:mb-12 italic text-[DBE2EF]">{t('subtitles.subProjects')}</p>
        </div>

        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="works flex flex-col md:flex-row md:grid md:grid-cols-2 md:gap-6"
        >
          {proyects.map((proyecto) => (
            <div
              key={proyecto.id}
              className="group relative overflow-hidden border-2 hover:border-[#3F72AF] rounded-xl mb-4 md:mb-3"
            >
              <a href={proyecto.link}>
                <div className="group-hover:bg-white/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={proyecto.image} alt="" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient text-[#3F72AF]">{proyecto.tech}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-[#3F72AF]" style={{ fontFamily: "'Bungee Inline', cursive" }}>
                    {proyecto.name}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="github md:mt-[45px]">
        <a className="flex flex-col justify-center items-center text-center" href={socialsLinks[0].github}>
          <span className="md:text-5xl text-4xl">Accede a GitHub para ver más.</span>
          <img className="w-24 mt-3 md:mt-[45px]" src={gitHub} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Works
