import React from 'react'
import Hobbies from '../Hobbies'
import { useTranslation } from 'react-i18next'

const HobbiesPage = () => {
  const { t } = useTranslation()
  const hobbiesData = t('hobbiesData', { returnObjects: true })

  return (
    <div
      id="hobbies"
      className="container flex flex-col px-4 mx-auto md:px-8 lg:max-w-7xl mt-[80px] md:items-center text-white"
    >
      <h2 className="md:text-[72px] text-[42px] mb-4 text-center uppercase">HOBBIES</h2>
      <span className="text-justify md:text-[22px] italic text-[#DBE2EF]">{t('subtitles.subHobbies')}</span>
      <div className="flex flex-col md:flex-row mt-[40px] text-center">
        <div className="flex flex-col">
          <div className="hobbies grid md:grid-cols-2 gap-2 hover:p-0">
            {hobbiesData.map((hobbie, index) => (
              <Hobbies key={index} {...hobbie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HobbiesPage
